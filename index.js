
function receivesAFunction(cb) {
    cb();
}

function sayHi() {
    console.log("Hi!")
};

function returnsANamedFunction() {
    return sayHi;
}

function returnsAnAnonymousFunction() {
    return () => console.log("Hello~");
}