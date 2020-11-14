function Array2() {
  this.data = {};
  this.length = this.len();
}

// TODO
Array2.from = function () {};

Array2.isArray = function (obj) {
  return obj instanceof Array2;
};

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
  this.length = this.len();
  return this.length;
};

Array2.prototype.pop = function () {
  const lastItem = this.data[this.lastKey()];
  let newObj = {};

  for (let i = 0; i < Number(this.lastKey()); i++) {
    const key = i.toString();
    const value = this.data[i.toString()];
    newObj = { ...newObj, [key]: value };
  }
  this.data = newObj;
  this.length = this.len();
  return lastItem;
};

Array2.prototype.toString = function () {
  return Object.values(this.data).toString();
};

Array2.prototype.keys = function* () {
  let res;
  for (value of Object.keys(this.data)) {
    res = yield value;
  }
  return res;
};

Array2.prototype.values = function* () {
  let res;
  for (value of Object.values(this.data)) {
    res = yield value;
  }
  return res;
};

Array2.prototype[Symbol.iterator] = function () {
  return this.values();
};

a = new Array2();
a.push('item 1');
a.push('item 2');
a.push('item 3');
