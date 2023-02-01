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
  var code_to_test = Blockly.JavaScript.valueToCode(block, 'statement_input', Blockly.JavaScript.ORDER_ATOMIC);
  var statement = Blockly.JavaScript.statementToCode(block, 'statement_output');
  // TODO: Assemble JavaScript into code variable.
  var code = 'if(' + code_to_test +'){\n' + statement + '};\n';
  return code;
};

//Block to call a variable

//Compare two inputs
Blockly.JavaScript['compare'] = function(block) {
  var value_first_input = Blockly.JavaScript.valueToCode(block, 'first_input', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_comparison = block.getFieldValue('comparison');
  var value_second_input = Blockly.JavaScript.valueToCode(block, 'second_input', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  if (dropdown_comparison == "equal") {
    code = value_first_input + '==' + value_second_input;
  } else if (dropdown_comparison == "doesnt_equal"){
    code = value_first_input + '!=' + value_second_input;
  } else if (dropdown_comparison == "greater_equal"){
    code = value_first_input + '>=' + value_second_input;
  } else if (dropdown_comparison == "lesser_equal"){
    code = value_first_input + '<=' + value_second_input;
  } else if (dropdown_comparison == "greater"){
    code = value_first_input + '>' + value_second_input;
  } else if (dropdown_comparison == "lesser"){
    code = value_first_input + '<' + value_second_input;
  };


  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


//Compound statement block
Blockly.JavaScript['compound_statement'] = function(block) {
  var statements_compound = Blockly.JavaScript.statementToCode(block, 'compound');
  // TODO: Assemble JavaScript into code variable.
  var code = '{\n\t' + statements_compound + '\n};';
  return code;
};

// Block for variable getter.
Blockly.JavaScript['variable_getter'] = function(block) {
  var value_variable = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('variable_input'), Blockly.Names.NameType.VARIABLE);
  var code = value_variable;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// Block for variable setter.
Blockly.JavaScript['variable_setter'] = function(block) {
  var value_variable = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('variable_input'), Blockly.Names.NameType.VARIABLE);
  var value_setting = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_variable + ' = ' + value_setting + ';\n';
  return code;
};

//True or false
Blockly.JavaScript['boolean_output'] = function(block) {
  var dropdown_boolean = block.getFieldValue('boolean');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  if (dropdown_boolean == "true") {
    code = 'true';
  } else if (dropdown_boolean == "false"){
    code = 'false';
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//For loop
Blockly.JavaScript['for_loop'] = function(block) {
  var variable_input = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('VARIABLE'), Blockly.Names.NameType.VARIABLE);
  var value_first_input = Blockly.JavaScript.valueToCode(block, 'first_input', Blockly.JavaScript.ORDER_ATOMIC);
  var value_second_input = Blockly.JavaScript.valueToCode(block, 'second_input', Blockly.JavaScript.ORDER_ATOMIC);
  var value_third_input = Blockly.JavaScript.valueToCode(block, 'third_input', Blockly.JavaScript.ORDER_ATOMIC);
  var statement_input = Blockly.JavaScript.statementToCode(block, 'statement_input');
  // TODO: Assemble JavaScript into code variable.
  var code = 'for (' + variable_input + ' = ' + value_first_input + '; ' + variable_input + ' < ' + value_second_input + '; '
              + variable_input + ' += ' + value_third_input + '){\n' + statement_input + '};\n';
  return code;
};

//Example for loop code
// for (let i = 0; i < cars.length; i++) {
//   text += cars[i] + "<br>";
// }

//While loop

Blockly.JavaScript['while_loop'] = function(block) {
  var value_first_input = Blockly.JavaScript.valueToCode(block, 'first_input', Blockly.JavaScript.ORDER_ATOMIC);
  var statement_input = Blockly.JavaScript.statementToCode(block, 'statement_input');
  // TODO: Assemble JavaScript into code variable.
  var code = 'while (' + value_first_input + '){\n' + statement_input + '};\n';
  return code;
};

//example while loop code
// while (i < 10) {
//   text += "The number is " + i;
//   i++;
// }

//Break or continue
Blockly.JavaScript['break'] = function(block) {
  var dropdown_value = block.getFieldValue('first_input');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  if (dropdown_value == "breakout") {
    code = 'break;\n';
  } else if (dropdown_value == "continue"){
    code = 'continue;\n';
  }
  return code;
};

//Array
Blockly.JavaScript['declare_array'] = function(block) {
  var variable = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('VARIABLE'), Blockly.Names.NameType.VARIABLE);
  var type_choice = block.getFieldValue('type_choice');
  var dimensions = block.getFieldValue('dimensions');
  var num_of_items = block.getFieldValue('num_of_items');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  var code = variable + ' = ' + 'new Array(' + dimensions + ');\n'
  if (type_choice == "number"){
    //code = variable + ' = [];\n' + 'for (let i = 1; i <= ' + dimensions + '; i++){\n' + variable + '.push(i);\n};\n';

    code += 'for (let i = 1; i <= ' + dimensions + '; i++){\n\t' 
      + variable + '[i] = new Array(' + num_of_items + ');\n'
      + '};\n'
    }
  return code;
};

