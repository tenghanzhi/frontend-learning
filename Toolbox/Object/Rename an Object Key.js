// create the new property by direct assignment to the object indexed with the new key. 
// We delete the old key property with the delete operator.
const obj = { oldKey: 'value' };

obj['newKey'] = obj['oldKey'];
delete obj['oldKey'];

console.log(obj); // { newKey: 'value' }

// Use the Object.assign() method to create a new property in the object
const obj = { oldKey: 'value' };

Object.assign(obj, { newKey: obj.oldKey })['oldKey'];
delete obj['oldKey'];

console.log(obj); // { newKey: 'value' }

//This allows us to rename the object key in a single statement:
const obj = { oldKey: 'value' };

delete Object.assign(obj, { newKey: obj.oldKey })['oldKey'];

console.log(obj); // { newKey: 'value' }

// To ensure that the new key property behaves identically to the old key property, 
// use Object.defineProperty() and Object.getOwnPropertyDescriptor() 
// to create the new property with the same descriptor as the old key property before deleting it

const obj = { oldKey: 'value' };

Object.defineProperty(
    obj,
    'newKey',
    Object.getOwnPropertyDescriptor(obj, 'oldKey')
);
delete obj['oldKey'];

console.log(obj); // { newKey: 'value' }