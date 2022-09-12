const myEventEmitter = makeEventEmitter();
// You can put functions inside of arrays, just like they were numbers.
// To have .addEventListener and .emit, that means they are attached to the same OBJECT.

myEventEmitter.addEventListener("partyStarted", () => {
    console.log("Woooo!");
});

myEventEmitter.addEventListener("partyStarted", () => {
    console.log("Yeeeee, Im here too");
});

setTimeout(() => {
    myEventEmitter.emit("partyStarted"); // Should activate all of the listeners.
    // As a result of this line, you should see both console.logs above.
}, 1000);

