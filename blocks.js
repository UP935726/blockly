//Try to get mutator to work on if statements 
//https://groups.google.com/g/blockly/c/sS_UUW8-D-w
//https://playcode.io/

//Start code block
Blockly.Blocks['start_code'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Start");
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//Get the string length
Blockly.Blocks['string_length'] = {
  init: function() {
    this.appendValueInput('VALUE')
        .setCheck('String');
    this.appendDummyInput()
        .appendField('.length');
    this.setOutput(true, 'Number');
    this.setColour(60);
    this.setTooltip('Returns number of letters in the provided text.');
  }
};

//Print statement
Blockly.Blocks['print_statement'] = {
  init: function() {
    this.appendValueInput("user_input")
        .setCheck(null)
        .appendField("window.alert(");
    this.appendDummyInput()
        .appendField(");");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//String input from user
Blockly.Blocks['text'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("'")
        .appendField(new Blockly.FieldTextInput("default"), "user_input")
        .appendField("'");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//Convert number to string
Blockly.Blocks['num_to_string'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck("Number")
    this.appendDummyInput()
        .appendField(".toString()");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//Number input from user
Blockly.Blocks['number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), "VALUE");
    this.setOutput(true, "Number");
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//Simple maths function
Blockly.Blocks['simple_maths'] = {
  init: function() {
    this.appendValueInput("first_input")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["+","addition"], ["-","subtraction"], ["*","multiplication"], ["/","division"], ["**","power"]]), "user_choice");
    this.appendValueInput("second_input")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//If statement
Blockly.Blocks['if_statement'] = {
  init: function() {
    this.appendValueInput("if0")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("If (");
    this.appendDummyInput()
        .appendField(")");
    this.appendStatementInput("do0")
        .setCheck("statement")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setMutator(new Blockly.Mutator(['if_statement_elseif', 'if_statement_else']));
    this.setNextStatement(true);
 this.setTooltip("");
 this.setHelpUrl("");
  },
  //Returns the state of this block as a JSON serializable object
  saveExtraState: function() {
    if (!this.elseifCount_ && !this.elseCount_) {
      return null;
    }
    const state = Object.create(null);
    if (this.elseifCount_) {
      state['elseIfCount'] = this.elseifCount_;
    }
    if (this.elseCount_) {
      state['hasElse'] = true;
    }
    return state;
  },
  //Applies the given state to this block
  loadExtraState: function(state) {
    this.elseifCount_ = state['elseIfCount'] || 0;
    console.log(state['elseIfCount']);
    this.elseCount_ = state['hasElse'] ? 1 : 0;
    this.updateShape_();
  },
  //Populate mutator space with components
  decompose: function(workspace) {
    const topBlock = workspace.newBlock('if_statement_if');
    topBlock.initSvg();
    let connection = topBlock.nextConnection;
    for (let i = 1; i <= this.elseifCount_; i++) {
      const elseifBlock = workspace.newBlock('if_statement_elseif');
      elseifBlock.initSvg();
      connection.connect(elseifBlock.previousConnection);
      connection = elseifBlock.nextConnection;
    }
    if (this.elseCount_) {
      const elseBlock = workspace.newBlock('if_statement_else');
      elseBlock.initSvg();
      connection.connect(elseBlock.previousConnection);
    }
    return topBlock;
  },
  //Reconfigure block based on the mutator dialog's components
  compose:function(topBlock){
    let clauseBlock = topBlock.nextConnection.targetBlock();
    //Count number of inputs
    this.elseifCount_ = 0;
    this.elseCount_ = 0;
    const valueConnections = [null];
    const statementConnections = [null];
    let elseStatementConnection = null;
    while (clauseBlock && !clauseBlock.isInsertionMarker()){
      switch(clauseBlock.type){
        case 'if_statement_elseif':
          this.elseifCount_++;
          valueConnections.push(clauseBlock.valueConnection_);
          statementConnections.push(clauseBlock.statementConnection_);
          break;
        case 'if_statement_else':
          this.elseCount_++;
          elseStatementConnection = clauseBlock.statmentConnection_;
          break;
        default:
          throw TypeError('Unknown block type: ' + clauseBlock.type);
      }
      clauseBlock = clauseBlock.nextConnection &&
        clauseBlock.nextConnection.targetBlock();
    }
    this.updateShape_();
  },
  //Modify block to have the correct number of inputs
  updateShape_:function(){
    //Delete everything
    if(this.getInput('else')){
      this.removeInput('else');
    }
    for(let i = 1; this.getInput('if' + i); i++){
      this.removeInput('if' + i);
      this.removeInput('do' + i)
    }
    //Rebuild block
    for(let i = 1; i <= this.elseifCount_; i++){
      this.appendValueInput("if" + i)
          .setCheck('Boolean')
          .appendField('else if ')
      this.setInputsInline(true);
      this.appendStatementInput('do' + i)
          .appendField('');
    }
    if(this.elseCount_){
      this.appendStatementInput('else')
          .appendField('else ');
    }
  }  
};

Blockly.Blocks['if_statement_if'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("if");
    this.setInputsInline(true);
    this.setNextStatement(true, ["elseif", "else"]);
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['if_statement_elseif'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("else if");
    this.setPreviousStatement(true, ["if", "elseif"]);
    this.setNextStatement(true, ["elseif", "else"]);
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['if_statement_else'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("else");
    this.setPreviousStatement(true, ["elseif", "if"]);
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//Block to call a variable
Blockly.Blocks['variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("item"), "NAME");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//Block to intialise a variable
// Blockly.Blocks['var'] = {
//   init: function() {
//     this.appendDummyInput()
//         .appendField("var")
//         .appendField(new Blockly.FieldVariable(null), "variable_name");
//     this.setInputsInline(true);
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour(350);
//  this.setTooltip("");
//  this.setHelpUrl("");
//   }
// };

//Compare two inputs
Blockly.Blocks['compare'] = {
  init: function() {
    this.appendValueInput("first_input")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["==","equal"], ["===","strict_equal"], ["!=","not_equal"], ["!==","strict_not_equal"], [">=","greater_equal"], ["<=","lesser_equal"], [">","greater"], ["<","lesser"]]), "comparison");
    this.appendValueInput("second_input")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//Compound statement block
Blockly.Blocks['compound_statement'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("{");
    this.appendStatementInput("compound")
        .setCheck(null);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("}");
    this.setPreviousStatement(true, null);
    this.setColour(43);
 this.setTooltip("This block allows multiple statements to process as 1 statement.");
 this.setHelpUrl("");
  }
};

// Block for variable getter.
Blockly.Blocks['variable_getter'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("Default"), "variable_input");
    this.setOutput(true, null);
    this.setColour(350);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

// Block for variable setter.
Blockly.Blocks['variable_setter'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck(null)
        .appendField(new Blockly.FieldVariable("default"), "variable_input")
        .appendField("=");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(350);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//Let variable equal something
Blockly.Blocks['let_equal'] = {
  init: function() {
    this.appendValueInput("first_input")
        .setCheck(null)
        .appendField("let")
        .appendField(new Blockly.FieldVariable(null), "variable_input")
        .appendField("=");
    this.setInputsInline(true);
    this.setOutput(true, "Statement");
    this.setColour(350);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//True or false
Blockly.Blocks['boolean_output'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["true","true"], ["false","false"]]), "boolean");
    this.setOutput(true, "Boolean");
    this.setColour(300);
 this.setTooltip("Returns the value true or false");
 this.setHelpUrl("");
  }
};

//For loop
Blockly.Blocks['for_loop'] = {
  init: function() {
    this.appendValueInput("first_input")
        .setCheck("Statement")
        .appendField("for (")
    this.appendValueInput("second_input")
        .setCheck("Boolean")
        .appendField("; ");
    this.appendValueInput("third_input")
        .setCheck("Boolean")
        .appendField("; ");
    this.appendDummyInput()
        .appendField(") {");
    this.appendStatementInput("statement_input")
        .setCheck(null);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("{");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//While loop
Blockly.Blocks['while_loop'] = {
  init: function() {
    this.appendValueInput("first_input")
        .setCheck("Boolean")
        .appendField("while (");
    this.appendDummyInput()
        .appendField(") {");
    this.appendStatementInput("statement_input")
        .setCheck(null);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("}");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("while loop");
 this.setHelpUrl("");
  }
};

//Break or continue
Blockly.Blocks['break'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["breakout","breakout"], ["continue","continue"]]), "first_input");
    this.setPreviousStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//Array
Blockly.Blocks['declare_array'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Create the array")
        .appendField(new Blockly.FieldVariable("Array"), "VARIABLE");
    this.appendDummyInput()
        .appendField("with type")
        .appendField(new Blockly.FieldDropdown([["Number","number"], ["Boolean","boolean"], ["String","string"]]), "type_choice");
    this.appendDummyInput()
        .appendField("Dimensions")
        .appendField(new Blockly.FieldNumber(0,0), "dimensions");
    this.appendDummyInput()
        .appendField("with items")
        .appendField(new Blockly.FieldNumber(0,0), "num_of_items");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//Convert expression to statement
Blockly.Blocks['expression_to_statement'] = {
  init: function() {
    this.appendValueInput("expression")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(";");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(43);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//Increment variable
Blockly.Blocks['increment'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable(null), "variable_input")
        .appendField("++");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//Decrement variable
Blockly.Blocks['decrement'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable(null), "variable_input")
        .appendField("--");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};