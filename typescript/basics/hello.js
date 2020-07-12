function greeter(person) {
    return "Hello, " + person;
}
var user = { firstName: "Jane", lastName: "Doe" };
document.body.textContent = greeter(user);
