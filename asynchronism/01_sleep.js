/**

CHALLENGE LINK: https://www.greatfrontend.com/questions/javascript/sleep?list=async-operations
In JavaScript, the setTimeout function can be used to execute callbacks after a delay. 
However, it introduces a layer of nesting in the code which may not be desired.
It'd be nice to use setTimeout in this fashion:


// Note: the following code contains invalid syntax and doesn't work.
console.log('Hello!');
setTimeout(1000);
console.log('Bye.');

// Examples:
async function greeting() {
  console.log('Hello!');
  await sleep(2000);
  console.log('Bye.'); // Only logs after 2000 milliseconds (2 seconds)
}

greeting();
// t = 0: Hello!
// t = 2000: Bye.

The sleep function should also be able to be used without await:

console.log('Hello!');
sleep(2000).then(() => {
  console.log('Bye.'); // Only logs after 2000 milliseconds (2 seconds)
});

 */

// IMPLEMENTATION
/**
 * @param {number} duration
 * @return {Promise<void>}
 */
async function sleep(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve();
      } catch (err) {
        reject();
      }
    }, duration);
  });
}

async function greeting() {
  console.log("Hello");
  await sleep(2000);
  console.log("Bye");
}


greeting()