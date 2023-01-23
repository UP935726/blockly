//Dummy block
Blockly.JavaScript['dummy'] = function(block) {
  return '';
};

//Get the string length
Blockly.JavaScript['string_length'] = function(block) {
  var value_string_length = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_string_length + '.length';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//Print statement
Blockly.JavaScript['print_statement'] = function(block) {
  var value_userinput = Blockly.JavaScript.valueToCode(block, 'userInput', Blockly.JavaScript.ORDER_ATOMIC);
  // return code;
  return 'window.alert(' + value_userinput + ');\n';
};

//String input from user
Blockly.JavaScript['text'] = function(block) {
  var text_user_input = block.getFieldValue('user_input');
  var code = '"'+text_user_input+'"';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//Convert number to string
Blockly.JavaScript['num_to_string'] = function(block) {
  var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_value + '.toString()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//Number input from user
Blockly.JavaScript['number'] = function(block) {
  var number_value = block.getFieldValue('VALUE');
  var code = number_value;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//[["+","addition"], ["-","subtraction"], ["*","multiplication"], ["/","division"], ["^","power"]]), "NAME");

//Simple maths function
Blockly.JavaScript['simple_maths'] = function(block) {
  var value_first_input = Blockly.JavaScript.valueToCode(block, 'first_input', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  var value_second_input = Blockly.JavaScript.valueToCode(block, 'second_input', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  if (dropdown_name == "addition") {
    code = value_first_input + '+' + value_second_input;
  } else if (dropdown_name == "subtraction"){
    code = value_first_input + '-' + value_second_input;
  } else if (dropdown_name == "multiplication"){
    code = value_first_input + '*' + value_second_input;
  } else if (dropdown_name == "division"){
    code = value_first_input + '/' + value_second_input;
  } else if (dropdown_name == "power"){
    code = 'Math.pow(' + value_first_input + ',' + value_second_input + ')';
  };

  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


//If statement
Blockly.JavaScript['if_statement'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

//Block to call a variable

//Compare two inputs

//Compound statement block
Blockly.JavaScript['compound_statement'] = function(block) {
  var statements_compound = Blockly.JavaScript.statementToCode(block, 'compound');
  // TODO: Assemble JavaScript into code variable.
  var code = statements_compound;
  return code;
};

