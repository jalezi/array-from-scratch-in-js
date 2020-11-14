function Array2() {
  this.data = {};
  this.length = this.len();
}

Array2.prototype.len = function () {
  const isInfinite = !isFinite(this.lastKey());
  return isInfinite ? 0 : this.lastKey() + 1;
};

Array2.prototype.lastKey = function () {
  return Math.max(...Object.keys(this.data));
};

Array2.prototype.push = function (item) {
  const key = (this.lastKey() < 0 ? 0 : this.lastKey() + 1).toString();
  this.data = { ...this.data, [key]: item };
  return this.len();
};

Array2.prototype.pop = function () {
  const lastItem = this.data[this.lastKey()];
  let newObj = {};

  for (let i = 0; i < Number(this.lastKey() + 1); i++) {
    const newItem = this.data[i.toString()];
    if (newItem !== lastItem) newObj[i] = newItem;
  }
  this.data = newObj;
  this.length = this.length();
  return lastItem;
};

a = new Array2();
a.push('item 1');
a.push('item 2');
a.push('item 3');
a.pop();
