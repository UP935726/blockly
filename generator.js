//Start code block
Blockly.JavaScript['start_code'] = function() {
  var code = '';
  return code;
};

//Get the string length
Blockly.JavaScript['string_length'] = function(block) {
  var value_string_length = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_string_length + '.length';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//Print statement
Blockly.JavaScript['print_statement'] = function(block) {
  var value_userinput = Blockly.JavaScript.valueToCode(block, 'user_input', Blockly.JavaScript.ORDER_ATOMIC);
  // return code;
  return 'window.alert(' + value_userinput + ');\n';
};

//String input from user
Blockly.JavaScript['text'] = function(block) {
  var text_user_input = block.getFieldValue('user_input');
  var code = "'" + text_user_input + "'";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//Convert number to string
Blockly.JavaScript['num_to_string'] = function(block) {
  var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_value + '.toString()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//Number input from user
Blockly.JavaScript['number'] = function(block) {
  var number_value = block.getFieldValue('VALUE');
  var code = number_value;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//Simple maths function
Blockly.JavaScript['simple_maths'] = function(block) {
  var value_first_input = Blockly.JavaScript.valueToCode(block, 'first_input', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_user_choice = block.getFieldValue('user_choice');
  var value_second_input = Blockly.JavaScript.valueToCode(block, 'second_input', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  if (dropdown_user_choice == "addition") {
    code = value_first_input + ' + ' + value_second_input;
    return [code, Blockly.JavaScript.ORDER_ADDITION];
  } else if (dropdown_user_choice == "subtraction"){
    code = value_first_input + ' - ' + value_second_input;
    return [code, Blockly.JavaScript.SUBTRACTION];
  } else if (dropdown_user_choice == "multiplication"){
    code = value_first_input + ' * ' + value_second_input;
    return [code, Blockly.JavaScript.ORDER_MULTIPLICATION];
  } else if (dropdown_user_choice == "division"){
    code = value_first_input + ' / ' + value_second_input;
    return [code, Blockly.JavaScript.ORDER_DIVISION];
  } else if (dropdown_user_choice == "power"){
    code = value_first_input + ' ** ' + value_second_input;
    return [code, Blockly.JavaScript.ORDER_EXPONENTIATION];
  };
};


//If statement
Blockly.JavaScript['if_statement'] = function(block) {
  let n = 0;
  let code = '';
  do {
    const conditionCode = Blockly.JavaScript.valueToCode(block, 'if' + n, Blockly.JavaScript.ORDER_NONE) || 'false';
    let branchCode = Blockly.JavaScript.statementToCode(block, 'do' + n);
    code += (n > 0 ? ' else ' : '') + 'if (' + conditionCode + ') {\n' + branchCode + '}';
    n++;
  } while (block.getInput('if' + n));

  if (block.getInput('else')) {
    let branchCode = Blockly.JavaScript.statementToCode(block, 'else');
    code += ' else {\n' + branchCode + '}';
  }
  return code + ';\n';
};


//Block to call a variable

//Block to initialise a variable
// Blockly.JavaScript['var'] = function(block) {
//   var variable_name = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('variable_name'));
//   // TODO: Assemble JavaScript into code variable.
//   var code = 'var ' + variable_name + ';\n';
//   return code;
// };

//Compare two inputs
Blockly.JavaScript['compare'] = function(block) {
  var value_first_input = Blockly.JavaScript.valueToCode(block, 'first_input', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_comparison = block.getFieldValue('comparison');
  var value_second_input = Blockly.JavaScript.valueToCode(block, 'second_input', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '...';
  if (dropdown_comparison == "equal") {
    code = value_first_input + '==' + value_second_input;
    return [code, Blockly.JavaScript.ORDER_EQUALITY];
  } else if (dropdown_comparison == "not_equal"){
    code = value_first_input + '!=' + value_second_input;
    return [code, Blockly.JavaScript.ORDER_EQUALITY];
  } else if (dropdown_comparison == "strict_equal"){
    code = value_first_input + '===' + value_second_input;
    return [code, Blockly.JavaScript.ORDER_EQUALITY];
  } else if (dropdown_comparison == "strict_not_equal"){
    code = value_first_input + '!==' + value_second_input;
    return [code, Blockly.JavaScript.ORDER_EQUALITY];
  } else if (dropdown_comparison == "greater_equal"){
    code = value_first_input + '>=' + value_second_input;
    return [code, Blockly.JavaScript.ORDER_RELATIONAL];
  } else if (dropdown_comparison == "lesser_equal"){
    code = value_first_input + '<=' + value_second_input;
    return [code, Blockly.JavaScript.ORDER_RELATIONAL];
  } else if (dropdown_comparison == "greater"){
    code = value_first_input + '>' + value_second_input;
    return [code, Blockly.JavaScript.ORDER_RELATIONAL];
  } else if (dropdown_comparison == "lesser"){
    code = value_first_input + '<' + value_second_input;
    return [code, Blockly.JavaScript.ORDER_RELATIONAL];
  };
};

//Compound statement block
Blockly.JavaScript['compound_statement'] = function(block) {
  var statements_compound = Blockly.JavaScript.statementToCode(block, 'compound');
  var code = '{\n\t' + statements_compound + '\n};';
  return code;
};

//Variable block
Blockly.JavaScript['variable_getter'] = function(block) {
  var value_variable = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('variable_input'), Blockly.Names.NameType.VARIABLE);
  var code = value_variable;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//Assigning a varaible a value
Blockly.JavaScript['variable_setter'] = function(block) {
  var value_variable = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('variable_input'), Blockly.Names.NameType.VARIABLE);
  var value_setting = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_variable + ' = ' + value_setting + ';\n';
  return code;
};

//Let variable equal something
Blockly.JavaScript['let_equal'] = function(block) {
  var value_variable = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('variable_input'), Blockly.Names.NameType.VARIABLE);
  var first_input = Blockly.JavaScript.valueToCode(block, 'first_input', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'let ' + value_variable + ' = ' + first_input;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//True or false
Blockly.JavaScript['boolean_output'] = function(block) {
  var dropdown_boolean = block.getFieldValue('boolean');
  var code = '...';
  if (dropdown_boolean == "true") {
    code = 'true';
  } else if (dropdown_boolean == "false"){
    code = 'false';
  }
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//For loop
Blockly.JavaScript['for_loop'] = function(block) {
  var value_first_input = Blockly.JavaScript.valueToCode(block, 'first_input', Blockly.JavaScript.ORDER_ATOMIC);
  var value_second_input = Blockly.JavaScript.valueToCode(block, 'second_input', Blockly.JavaScript.ORDER_ATOMIC);
  var value_third_input = Blockly.JavaScript.valueToCode(block, 'third_input', Blockly.JavaScript.ORDER_ATOMIC);
  var statement_input = Blockly.JavaScript.statementToCode(block, 'statement_input');
  var code = 'for (' + value_first_input + '; ' + value_second_input + '; '
              + value_third_input + '){\n' + statement_input + '};\n';
  return code;
};

//While loop
Blockly.JavaScript['while_loop'] = function(block) {
  var value_first_input = Blockly.JavaScript.valueToCode(block, 'first_input', Blockly.JavaScript.ORDER_ATOMIC);
  var statement_input = Blockly.JavaScript.statementToCode(block, 'statement_input');
  var code = 'while (' + value_first_input + '){\n' + statement_input + '};\n';
  return code;
};

//Break or continue
Blockly.JavaScript['break'] = function(block) {
  var dropdown_value = block.getFieldValue('first_input');
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

//Convert expression to statement
Blockly.JavaScript['expression_to_statement'] = function(block) {
  var value_expression= Blockly.JavaScript.valueToCode(block, 'expression', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_expression + ';\n';
  return code;
};

//Increment variable 
Blockly.JavaScript['increment'] = function(block) {
  var variable_input = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('variable_input'), Blockly.Names.NameType.VARIABLE);
  var code = variable_input + '++';
  return [code, Blockly.JavaScript.ORDER_INCREMENT];
};

//Decrement variable 
Blockly.JavaScript['decrement'] = function(block) {
  var variable_input = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('variable_input'), Blockly.Names.NameType.VARIABLE);
  var code = variable_input + '--';
  return [code, Blockly.JavaScript.ORDER_DECREMENT];
};