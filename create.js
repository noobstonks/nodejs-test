const fs = require("fs")

const createPerson = function (person) {
    fs.writeFileSync('./person.json', JSON.stringify(person))
    return person;
}

const Sabrina = createPerson({    
name: "Sabrina",
age: 23,
address: "BSD"
})
