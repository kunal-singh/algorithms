/* eslint-disable func-names */
// Functions: push, pop, peek, view, length

const Stack = (function () {
  // eslint-disable-next-line no-shadow
  function Stack() {
    this.values = [];
    this.top = 0;
  }
  Stack.prototype.push = function (element) {
    this.values[this.top] = element;
    this.top += 1;
    return this.top;
  };

  Stack.prototype.pop = function () {
    if (this.top === 0) {
      throw new Error('Stack is empty');
    }
    const popped = this.values.splice(-1);
    this.top -= 1;
    return popped[0];
  };

  Stack.prototype.peek = function () {
    return this.values[this.top - 1];
  };

  // eslint-disable-next-line no-console
  Stack.prototype.view = function (output = (v) => console.log(v)) {
    for (let i = this.top - 1; i >= 0; i -= 1) {
      output(this.values[i]);
    }
  };

  Stack.prototype.size = function () {
    return this.top;
  };
  return Stack;
})();

export default Stack;
