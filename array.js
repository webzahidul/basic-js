var friendsAge = [11, 22, 21, 14, 18];
friendsAge[1] = 33;
friendsAge.push(20);
console.log(friendsAge);
friendsAge.pop();
console.log(friendsAge)

var teaLine = ['jalam','salam','dalam','kalam', 'malam', 'talam'];
teaLine.push('malan');
teaLine.pop();
teaLine.unshift('palam');
teaLine.shift();
var namePart = teaLine.slice(1 , 4);
console.log(teaLine);
console.log(namePart);
