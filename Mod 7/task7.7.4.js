// Задание 7.7.4
// Создайте функцию setFullName, которая будет устанавливать свойство fullName у 
// переданного ей объекта. Используйте метод bind, чтобы создать новую функцию 
// setPersonFullName, которая будет устанавливать fullName для объекта person из 
// предыдущего примера. Вызовите setPersonFullName с параметром "John Smith" и 
// убедитесь, что свойство fullName объекта person было изменено соответствующим образом.

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 25
}

function setFullName(person, fullName){
    person['fullName'] = fullName;
    return person['fullName'];
}
  
const setPersonFullName = setFullName.bind(null,person);
console.log(person);
setPersonFullName("John Smith");
console.log(person);