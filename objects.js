//singleton
//object literals
const mySym = Symbol("Key1")
const JsUser = {
    name: "Vedika",
    "full name": "Vedika Mishra",
    [mysym]: "myKey1",
    age: 20,
    location: "Jaipur",
    email: "vedika@google.com",
    isLoggedIn: false,
    lastlogindays: ["Monday","Saturday"]
}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(jsUser["full name"])
console.log(Jsuser[mySym])

JsUser.email = "Vedika@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "vedika@mishra.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log('Hello JS user, ${this.name}');
}
console.log(JsUser.greeting());
console.log(JsUser.greetigTwo());

//object singleton 
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Samay"
tinderUser.osLoggedIn = false
console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname: {
        firstname: "Vedika",
        lastname:"Mishra"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname.lastname);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1, obj2}
const obj3 = Object.assign({},obj1, obj2)
console.log(obj3);