var members = ['dexter', 'k8805', 'hoya'];

console.log(members[1]);
var i = 0;

while (i < members.length) {
    console.log('array loop', members[i]);
    i++;
}

var roles = {
    'programmer':'dexter',
    'designer'  : 'k8805',
    'manager'   : 'hoya'
}

console.log(roles.designer);
console.log(roles['designer']);

for (var key in roles) {
    console.log('object =>', key, 'value =>', roles[key]);
}

