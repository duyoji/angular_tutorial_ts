function greeter(person:string = 'default name') {
    return `Hello, ${person}`;
}

var user = "Jane User";
document.body.innerHTML = greeter(user);
