import Stack from './pre/stack.js';

function isValidParantheses(str) {
  const stack = new Stack();
  let invalid = false;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === '{') stack.push('}');
    else if (str[i] === '[') stack.push(']');
    else if (str[i] === '(') stack.push(')');
    else if (stack.peek() === str[i]) {
      stack.pop();
    } else {
      invalid = true;
      break;
    }
  }

  return stack.size() === 0 && !invalid;
}

export default isValidParantheses;
