var product={
    name:"laptop",
    price:50000,
version:undefined,
    model:"Pavilion",
    avail:true,
    num:123456789n,
    email:null,
}
console.log(product);
console.log(typeof(product));
delete product.version;
console.log(product);
product.features="touchscreen";
console.log(product);
console.log(product[1]);
console.log(product);
console.log(typeof product.name);
console.log(typeof product.price);
console.log(typeof product.version);
console.log(typeof product.model);
console.log(typeof product.avail);
console.log(typeof product.features);
console.log(typeof product.num);
console.log(typeof product.emp);
console.log(product.email);



//arrays
var val=[11,22,33,44,55,66];
console.log(val);
console.log(typeof(val));
console.log(val[2]);
console.log(val[5]);
delete val[2];
console.log(val);
val.length=0;
console.log(val);
console.log(typeof(val));
console.log(val[0]);
val [4]="new value";
console.log(val);
console.log(val[4]);
console.log(val.length);