var add = (function () {
    var counter = 0;
    return function () {
        return counter += 1;
    }
})();

// to module
const count = (function () {
    let counter = 0;
    return {
        value() {
            return counter;
        },
        add() {
            return counter += 1;
        },
        reset() {
            counter = 0;
        }
    };
})();

count.add();
count.add();
console.log(count.value());
count.reset();
console.log(count.value());
