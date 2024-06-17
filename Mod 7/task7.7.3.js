// Задание 7.7.3
// Есть массив объектов, представляющих собой пользователей, каждый из которых имеет 
// свойство age (возраст). Создайте новый массив, содержащий только тех пользователей, 
// чей возраст больше или равен 18. Затем создайте новый массив, содержащий только 
// свойства name (имя) каждого пользователя.

const users = [
    { name: "Lili Rut", age: 18 },
    { name: "Dan Ballan", age: 31 },
    { name: "Harry Potter", age: 11 },
    { name: "Rik Morty", age: 16 }
];

const filteredUsersAge = users.filter((user) => {return user.age >= 18;});
console.log(filteredUsersAge);

const nameMap = users.map(users => users.name );    
console.log(nameMap);