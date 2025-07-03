emp={
    ename:"krs",
    eid:101,
}
console.log(emp);
console.log(typeof(emp));
console.log(emp.ename);
console.log(emp.eid);
delete emp.eid;
console.log(emp);
emp.email="s@";
console.log(emp);



// Array object example
var emp1=[1,2,3,4,5];
console.log(emp1);
console.log(typeof(emp1));
console.log(emp1[0]);
emp1.push(6);
console.log(emp1);
delete emp1[0];
console.log(emp1);