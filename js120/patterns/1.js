Object.prototype.ancestors = function ancestors() {
  if (!Object.getPrototypeOf(this).name) return ['Object.prototype'];
  let proto = [Object.getPrototypeOf(this).name];
  return proto.concat(Object.prototype.ancestors.call(Object.getPrototypeOf(this)));
};

let foo = {name: 'foo'};
let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']