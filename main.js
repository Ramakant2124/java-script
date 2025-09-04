var num1=19;
var num2=20;

console.log(num1+num2);


var num=21;
var name="Ramakant";
var value=true;
var age;
var rollno=null;

var ab="Premetive datatype"
console.log (ab);
console.log(typeof(num));
console.log(typeof(name));
console.log(typeof(value));
console.log(typeof(age));
console.log(rollno);
console.log(typeof(rollno));

var abc="NOn-Premetive datatype"
console.log (abc);
obj={name:"Ramakant",rollno:28,address:"kasoda"}
console.log (obj);
//data add
obj.mob=8725633654;
console.log (obj);
//data update
obj.name="Ramakant Chaudhari"
console.log (obj);
//delete data
delete obj.mob;
console.log (obj);



array=[10,20,30,40,50,60];
console.log(array);
console.log(array[2]);
//add element
array.push(80);
console.log(array);
//remove element
array.pop();
console.log(array);


var num1=10;
var num2=20;
var numu="Aretmatic Operater"
console.log(numu)
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);

var num="logical Operater"
console.log(num)
console.log(num1>num2&&num2>15);
console.log(num1<num2||num2>15);
console.log(num1!=num2);

var name="comparision Operater"
console.log(name)
console.log(num1>num2);
console.log(num1<num2);
console.log(num1>=num2);
console.log(num1<=num2);
var num3=10;
var num4=10;
console.log(num3==num4);
console.log(num3===num4);

var df="Ternory Operater"
console.log(df)
var marks=Number(prompt("enter your marks"));

var result=marks>50?"pass":"fail";
console.log(result);

var na="single Conditions"
console.log(na);

var age=Number(prompt("Enter your age :: "));

if(age>=90){
    console.log("eligble for voting");
}
else{
    console.log(" not eligble for voting");
}

var n="Milti Conditions"
console.log(n);
var marks=Number(prompt("Enter your marks :: "));
if(marks>90){
    console.log("Grade A");
}
else if(marks>=80){
    console.log("Grade B");
}
else if(marks>=70){
    console.log("Grade c");
}
else if(marks>=60){
    console.log("Grade D");
        
}
else {
    console.log("Fail");
}

var naa="For Loops"
console.log(naa);
var n=Number(prompt("Enter your number :: "));
for(let i=0;i<n;i++){
    console.log(i);
}

var naae="while Loops"
console.log(naae);
var i=0;
while(i<10){
    console.log(i*i)
    i++;
}



for(let i=1;i<11;i++){
    console.log(i*5);
}
for(let i=0;i<11;i++){
    console.log(i);
}
var i=0;
while(i<10){
    console.log(i)
    i;



    /* Questions Homework */

//1. Even or Odd:
var a=25;   //var a=Number(prompt("Enter a number : "))
if (a%2==0)
{
    console.log("Even");
}
else
{
    console.log("Odd");
}

//2. Positive, Negative or Zero:
var n=-25;   //var n=Number(prompt("Enter a number : "))
if (n==0)
{
    console.log("Zero");
}
else if (n>0)
{
    console.log("Positive");
}
else
{
    console.log("Negative");
}

//3. Greatest of two numbers:
var a=25;   //var a=Number(prompt("Enter a number : "))
var b=25;   //var b=Number(prompt("Enter a number : "))
if (a==b)
{
    console.log("A is equal to B");
}
else if (a>b)
{
    console.log("A if greater than B");
}
else
{
    console.log("A is smaller than B");
}

//4. Marks Greater than 40 are Pass else Fail:
var marks=45;   //var marks=Number(prompt("Enter a number : "))
if (marks>=40)
{
    console.log("Pass");
}
else
{
    console.log("Fail");
}

//5. Divisibility Check for 3 and 5:
var num=35;   //var num=Number(prompt("Enter a number : "))
if (num%3==0)
{
    if (num%5==0)
    {
        console.log("Number is divisible by 3 and 5 both");
    }
    else
    {
        console.log("Number is divisible by 3 but not with 5");
    }
}
else
{
    if (num%5==0)
    {
        console.log("Number is not divisible by 3 but is divisible with 5");
    }
    else
    {
        console.log("Number is neither divisible by 3 nor with 5");
    }
}

//6. Leap year Check:
var year=2025;   //var year=Number(prompt("Enter a number : "))
if (year%100!=0)
{
    if (year%4==0)
    {
        console.log("Leap year");
    }
    else
    {
        console.log("Not a leap year");
    }
}
else
{
    if (year%400==0)
    {
        console.log("Leap year");
    }
    else
    {
        console.log("Not a leap year");
    }
}

//7. Simple Login:
var user="admin";   //var user=prompt("Enter Username : ")
var pass=12345;   //var pass=Number(prompt("Enter Password : "))
if (user=="admin" && pass==1234)
{
    console.log("Login Successful");
}
else
{
    console.log("Invalid Credentials");
}

//8. Classify User as per their age:
var age=21;   //var age=Number(prompt("Enter your age : "))
if (age<13)
{
    console.log("Child");
}
else if (age>=13 && age<=19)
{
    console.log("Teen");
}
else if(age>=20 && age<=59)
{
    console.log("Adult");
}

//9. For Loop:

//9.1. Print 1 to 10:
for (var i=1;i<=10;i++)
{
    console.log(i);
}

//9.2. Table of 5:
for (var i=1;i<=10;i++)
{
    console.log(i*5);
}

//9.3. Sum of number from 1 to 50:
sum=0
for (var i=1;i<=50;i++)
{
    sum+=i;
}
console.log(sum);

//10. While Loop

//10.1. Print 10 to 1:
var i=10;
while (i>=1)
{
    console.log(i);
    i--;
}

//10.2. Factorial of number:
var num=6;   //var num=Number(prompt("Enter a number : "))
var fact=1;
var n=1;
while (n<=num)
{
    fact=fact*n;
    n++;
}
console.log(fact);

//10.3. First 10 even numbers:
var n=2;   //var n=Number(prompt("Enter a number : "))
var i=1
while(i<=10)
{
   console.log(i*n);
         i++;
}
