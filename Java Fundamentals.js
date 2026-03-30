console.log("Hello Fucker")

let a=4
console.log(a)
console.log(typeof(a))

let b = 234.345
console.log(typeof(b))

var c = "Rashed"
console.log(typeof(c))

let required = true
console.log(typeof(required))

//null and undefined

// let c = a+b ( it did not work //we cannot redeclare variable with let keyword but possible with var)

// reassigning is allowed with let
c = a+b 
//var c=a+b )this is also allowed)
console.log(c)

console.log(!required)

const flag = true

if(flag)
{
    console.log("condition satisfied")
}
else
{
    console.log("condition not satisfied")
}

let i=0
while(i>7)
{
    console.log(i)
}

do
{
i++
}while(i>10);
console.log(i)
// 2 and   5 
//  from 1 to 10 give me common multiple values of 2 and 5
console.log("***********************")
let n =0
for(let k=1;k<=100;k++)
{
    if(k%2 == 0 && k%5 == 0)
    {
        n++
    console.log(k)
    if(n ==3)
    break
    }
}

required = true
while(required)
{
console.log(required)
required= false
}
