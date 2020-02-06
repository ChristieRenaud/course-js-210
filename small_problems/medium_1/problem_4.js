 // input:  a string of numbers and commands
 // output:  a number or numbers which are the result of following the commands
 // nothing could also be output
 // rules:
 // there is a stack which is an array or integers. It is initialized to []
 // there is a register with the value of an integer.
 // There are commands performed on the value of the register, using the last
 // value in the stack.
 // stack operations:
 // n: place a value n in the register
 // PUSH: Push the register value on the stack. Leave the value in the register
 // ADD: Pop a value from the stack and add it to the register value, storing the result
 // in the register
 // SUB: Pop a value from the stack and subtract it from the register value, storing the result
 // in the register.
 // MULT: Pop a value from the stack and multiply it by the register value, storing the result
 // in the register
 // DIV: Pop a value from the stack and divide it into the register value, storing the integer
 // result in the register
 // MOD: Pop a value from the stack and divide it into the register value, storing the integer
 // remainder of the division in the register
 // POP: Remove the topmost item from the stack and place it in the register
 // PRINT: Print the register value
 // algorithm:
 // Convert the string into an array of strings, splitting on white space.
 // Initialize the stack to [] and the register to 0
 // Create functions with the name of the operations as the variable name that perform
 // The appropriate actions on the register and stack.
 // Make sure to convert the result of DIV and MOD to an integer.
 // Iterate through the program array and perform the function with name of the command
 // on the stack and register
 // If the program command is a number string, convert it to a number and put it in the
 // register.

function minilang(commandString) {
  var commandArray = commandString.split(' ')
  var register = 0;
  var stack = [];
// console.log(commandArray)
  commandArray.forEach(function (command) {
    switch (command) {
      case 'PRINT':
        console.log(register);
        break;
      case 'ADD':
        register += stack.pop();
        break;
      case 'SUB':
        register = register - stack.pop();
        break;
      case 'MULT':
        register = register * stack.pop();
        break;
      case 'DIV':
        register = Math.floor(register / stack.pop());
        break;
      case 'MOD':
        register = Math.floor(register % stack.pop());
        break;
      case 'POP':
        register = stack.pop();
        break;
      case 'PUSH':
        stack.push(register);
        break;
      default:
        register = parseInt(command, 10);
    };
  // console.log(stack)
  //   console.log(register)
  });
}

// function PRINT(stack, register) {
//   console.log(register);
// }
// function POP(stack, register) {
//   return register = stack.pop();
// }
//
// function PUSH(stack, register) {
//   stack.push(register);
// }
//
// function ADD(stack, register) {
//
//   register += stack.pop();
// }
//
// function SUB(stack, register) {
//   return register = register - stack.pop();
// }
//
// function MULT(stack, register) {
//
//   register = register * stack.pop();
// }
//
// function DIV(stack, register) {
//   return register = Math.floor(register / stack.pop());
// }
//
// function MOD(stack, register) {
//   return register = Math.floor(register % stack.pop());
// }
 // examples:
minilang('PRINT');
// // 0
minilang('5 ADD PRINT');
// 5

minilang('5 PUSH 3 PUSH 6 PUSH ADD PRINT');
// // 15
//
minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// // // 5
// // // 3
// // // 8
// //
minilang('5 PUSH POP PRINT');
// // // 5
// //
minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// // // 5
// // // 10
// // // 4
// // // 7
// //
minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// // // 6
// //
minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// // // 12
// //
minilang('-3 PUSH 5 SUB PRINT');
// // // 8
// //
minilang('6 PUSH');
// // // (nothing is printed because the `program` argument has no `PRINT` commands)
