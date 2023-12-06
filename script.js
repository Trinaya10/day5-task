// Sample JSON object
const sampleObject = {
    name: 'John',
    age: 25,
    city: 'New York'
  };
  
  // Using for...in loop
  console.log('Using for...in loop:');
  for (let key in sampleObject) {
    console.log(`${key}: ${sampleObject[key]}`);
  }
  
  // Using for...of loop (Note: This is not directly applicable to objects, but can be used with arrays)
  console.log('\nUsing for...of loop:');
  try {
    for (let value of sampleObject) {
      console.log(value);
    }
  } catch (error) {
    console.error('Cannot use for...of loop with objects.');
  }
  
  // Using forEach loop on Object.keys
  console.log('\nUsing forEach loop with Object.keys:');
  Object.keys(sampleObject).forEach(key => {
    console.log(`${key}: ${sampleObject[key]}`);
  });
  
  // Using forEach loop on Object.entries
  console.log('\nUsing forEach loop with Object.entries:');
  Object.entries(sampleObject).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
  