/* eslint-disable func-names */
// Functions: push, pop, peek, view, length

const Queue = (function () {
  // eslint-disable-next-line no-shadow
  function Queue() {
    this.values = [];
    this.last = 0;
  }
  Queue.prototype.enqueue = function (element) {
    this.values[this.last] = element;
    this.last += 1;
    return this.last;
  };

  Queue.prototype.dequeue = function () {
    if (this.last === 0) {
      throw new Error('Queue is empty');
    }
    const popped = this.values.splice(0, 1);
    this.last -= 1;
    return popped[0];
  };

  Queue.prototype.peek = function () {
    return this.values[0];
  };

  // eslint-disable-next-line no-console
  Queue.prototype.view = function (output = (v) => console.log(v)) {
    for (let i = 0; i < this.last; i += 1) {
      output(this.values[i]);
    }
  };

  Queue.prototype.size = function () {
    return this.last;
  };
  return Queue;
})();

export default Queue;
