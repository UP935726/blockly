//Try to get mutator to work on if statements 

//Get the string length
Blockly.Blocks['string_length'] = {
  init: function() {
    this.appendValueInput('VALUE')
        .setCheck('String')
        .appendField('length of');
    this.setOutput(true, 'Number');
    this.setColour(60);
    this.setTooltip('Returns number of letters in the provided text.');
  }
};

//Print statement
Blockly.Blocks['print_statement'] = {
  init: function() {
    this.appendValueInput("userInput")
        .setCheck("String")
        .appendField("print");
    this.setInputsInline(false);
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
        .appendField("\"")
        .appendField(new Blockly.FieldTextInput("default"), "user_input")
        .appendField("\"");
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
        .appendField(new Blockly.FieldDropdown([["+","addition"], ["-","subtraction"], ["*","multiplication"], ["/","division"], ["^","power"]]), "NAME");
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
    this.appendValueInput("statement_input")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("If (");
    this.appendDummyInput()
        .appendField(")");
    this.appendStatementInput("statement_output")
        .setCheck("statement")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("do");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
  // saveExtraState: function(){
  //   return{
  //     'itemCount' : this.itemCount_,
  //   }
  // },
  // loadExtraState: function(state){
  //   this.itemCount_ = state['itemCount'];
  //   this.updateShape_();
  // }
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

//Compare two inputs
Blockly.Blocks['compare'] = {
  init: function() {
    this.appendValueInput("first_input")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["=","equal"], ["!=","not_equal"], [">=","greater_equal"], ["<=","lesser_equal"], [">","greater"], ["<","lesser"]]), "comparison");
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
    this.setColour(260);
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
  }
};

// Block for variable setter.
Blockly.Blocks['variable_setter'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck(null)
        .appendField("set")
        .appendField(new Blockly.FieldVariable("Default"), "variable_input")
        .appendField("to");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(350);
  }
};

//True or false
Blockly.Blocks['boolean_output'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["True","true"], ["False","false"]]), "boolean");
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
        .setCheck("Number")
        .appendField("for (")
        .appendField(new Blockly.FieldVariable("i"), "VARIABLE")
        .appendField("=");
    this.appendValueInput("second_input")
        .setCheck("Number")
        .appendField("to");
    this.appendValueInput("third_input")
        .setCheck("Number")
        .appendField("by");
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

