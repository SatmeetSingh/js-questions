// What is the difference between native, host and user objects

// Native objects are objects that are part of the JavaScript language defined by the ECMAScript specification, such as String, Math, RegExp, Object, Function, etc.

// Host objects are provided by the runtime environment (browser or Node), such as window, XMLHTTPRequest, etc.

// Native objects
const obj = {
  item: 'anything',
  val: 23,
  func1: function () {
    console.log(this.val);
  },
  obj1: { testa: 'test1', testb: 'test2', testc: 'test3' },
};

//
