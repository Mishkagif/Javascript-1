const user={
firstName:'Michael',
lastName:'Dulyak',
age:27,
IsAdmin:true,
email:'test@gamil.com',
'user-address':{
        city:'Kyiv'

},
skills:['html','css','js']
};

let value;
let prop='email';
value=user.age;
value=user['IsAdmin'];
value=user['user-address'].city;
value=user['user-address']['city'];
value=user[prop][0];

user.firstName='Micha';
value=user.firstName;
user.info='some.info';
value=user.info;
user['user-address'].city='Kharkiv';
user['user-address'].country='Ukraine';



console.log(value);
console.log(user);
