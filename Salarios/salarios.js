const colombia = [];

for (let index = 0; index <= 19; index++) {
    let nombre = "Empleado"+index;

    let salarys = Math.floor(Math.random() * 4500) + 1;
    console.log(salarys);
    colombia.push({
        name : nombre,
        salary : salarys,
    });

    
}
