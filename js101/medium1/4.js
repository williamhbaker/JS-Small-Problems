let emptyStackError = function(cmd, stck) {
  if (['POP', 'ADD', 'SUB', 'MULT', 'DIV', 'MOD'].includes(cmd)) {
    if (stck.length === 0) {
      return true;
    }
  }
  return false;
};

const OPERATIONS = {
  POP: (_, stck) => stck.pop(),
  ADD: (reg, stck) => reg + stck.pop(),
  SUB: (reg, stck) => reg - stck.pop(),
  MULT: (reg, stck) => reg * stck.pop(),
  DIV: (reg, stck) => Math.trunc(reg / stck.pop()),
  MOD: (reg, stck) => Math.trunc(reg % stck.pop()),
  PRINT: (reg) => {
    console.log(reg);
    return reg;
  },
  PUSH: (reg, stck) => {
    stck.push(reg);
    return reg;
  },
};

let minilang = function(program) {
  let stack = [];
  let register = 0;
  let commands = program.split(' ');

  for (let counter = 0; counter < commands.length; counter += 1) {
    let command = commands[counter];
    if (emptyStackError(command, stack)) return 'ERROR: EMPTY STACK';

    if (Object.keys(OPERATIONS).includes(command)) {
      register = OPERATIONS[command](register, stack);
    } else if (Number.isInteger(Number(command))) {
      register = Number(command);
    } else {
      return 'ERROR: INVALID COMMAND';
    }
  }
  return undefined;
};

console.log(minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT'));