Blockly.Blocks['dummy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('dummy block');
    this.setColour(160);
  }
};

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
    this.setColour(230);
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
    this.setColour(330);
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
    this.setColour(230);
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
    this.setColour(230);
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
    this.setColour(230);
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
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

// Block for variable getter.
Blockly.Blocks['variables_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("VAR"), "FIELD_NAME");
    this.setOutput(true, null);
    this.setColour(350);
  }
};

// Block for variable setter.
Blockly.Blocks['variables_set'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("set")
        .appendField(new Blockly.FieldVariable("VAR"), "FIELD_NAME")
        .appendField("to");
    this.setOutput(true, null);
    this.setColour(350);
  }
};