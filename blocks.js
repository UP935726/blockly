Blockly.Blocks['dummy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('dummy block');
    this.setColour(160);
  }
};

Blockly.Blocks['string_length'] = {
  init: function() {
    this.appendValueInput('VALUE')
        .setCheck('String')
        .appendField('length of');
    this.setOutput(true, 'Number');
    this.setColour(160);
    this.setTooltip('Returns number of letters in the provided text.');
  }
};

//If statement
Blockly.Blocks['if_statement'] = {
  init: function() {
    this.appendValueInput("if")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("If");
    this.appendStatementInput("do")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//Print statement
Blockly.Blocks['print_statement'] = {
  init: function() {
    this.appendValueInput("userInput")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("print");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//Simple maths function
Blockly.Blocks['simple_maths'] = {
  init: function() {
    this.appendValueInput("first_value")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["+","addition"], ["-","subtraction"], ["*","multiplication"], ["/","division"], ["^","power"]]), "maths");
    this.appendValueInput("second_value")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//Number input from user
Blockly.Blocks['number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), "NAME");
    this.setOutput(true, "Number");
    this.setColour(330);
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