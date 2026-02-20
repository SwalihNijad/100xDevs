
//Assignment create a array of an object which returns the age above 18
function isLegal(users){
    let LegalUsers = [];

    for (let i = 0; i < users.length ; i++) {
        if (users[i].age >= 18) {
            LegalUsers.push(users[i])
        }
    }

    return LegalUsers
}

const users = [{
        name : "Harkirat",
        age: 56,
        password : "mypass123"
    },{
        name : "John",
        age : 34 ,
        password : "mypassword321"
    },{
        name : "Kirat",
        age :14,
        password: "ey2dg39"
    }];

let LegalAllowedUsers = isLegal(users)
console.log(LegalAllowedUsers)


