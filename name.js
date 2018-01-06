// module.exports = exports = function () {
//     console.log('my name is Alex');
// };

// module.exports.name = function () {
//     console.log('my name is Alex (exports)');
// }

module.exports = {
    name: function () {
        console.log('my name is Alex (exports)');
    },
    a: function () {
        console.log('function A');
    },
    b: function () {
        console.log('function B');
    }
}