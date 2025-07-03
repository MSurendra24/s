let emp={
    ename:"krs",
    eid:101,
    eage:24,

}
console.log(emp);
console.log(typeof(emp));
console.log(emp.ename);
console.log(emp.eid);
console.log(emp.eage);
console.log(emp.location);
emp.location="KA";
console.log(emp);
delete emp.eid;
emp.email="s@";
console.log(emp);