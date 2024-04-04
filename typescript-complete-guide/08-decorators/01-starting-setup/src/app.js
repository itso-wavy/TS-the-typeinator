console.log('Your code goes here...');
var Role;
(function (Role) {
    Role[Role["a"] = 0] = "a";
    Role[Role["b"] = 1] = "b";
    Role[Role["c"] = 2] = "c";
})(Role || (Role = {}));
console.log('sum: ', Role.a + Role.b);
