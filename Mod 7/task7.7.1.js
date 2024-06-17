// Задание 7.7.1
// Создайте функцию printInfo, которая будет выводить информацию о человеке в формате 
// "Name: <имя>, Age: <возраст>". Создайте объект person с двумя свойствами: name и age. 
// Используйте метод call, чтобы вызвать функцию printInfo от имени объекта person.

function printInfo (){
    return `Name: ${this.name}, Age: ${this.age}`;
}
 
const person = {
    name: 'Anton',
    age: 24
}

const infoString = printInfo.call(person);
console.log(infoString);