console.log("Hello world");

var myString:string  = "Hello World";

myString=22+"";


var miNumero:number=22; 

var myBool: boolean=true||false;

var myVariable:any = "hello";
myVariable=false;

//STRINGS

document.write(myString);

document.write(miNumero.toString());

// ARRAYS

var StringArrays: any[] =["","",""];
StringArrays=[2,3,4];

var StringArrays2: string[] =["item1","item2",""];
var NumberArray: number[]=[2,3,4];
var boolArray: boolean[]=[true,false, false];
var anyArray: any[]=[1, "1", true, "hello", [], {}]

//TUPLE

var strNumTuple: [string, number];


strNumTuple=["hello", 22];

//strNumTuple=[22+"", "hello"];

//strNumTuple=["world", 245, [], {}];

//strNumTuple=["world", 245, "sss", 22];

//void undefined null

//let myVoid: void= undefined;
//let myNull:null=null;
//let myUndefined:undefined=undefined;

document.write(typeof(strNumTuple));

//document.write(typeof(myVoid));

//functions

function getSumar(num1:number, num2:number):number
{
    return num1+num2;
}


let mySum = function(
    num1: number|string,
    num2: number|string):number{
        if(typeof(num1)==="string")
        {
            num1=parseInt(num1);
        }
        if(typeof(num2)==="string")
        {
            num2=parseInt(num2);
        }
        return num1+num2;

    }

function getName(firstName:string, lastName?:string)
{
    if(lastName==undefined)
        return firstName;
    return `${firstName} ${lastName}`;
}

getName("Jesos");

function myVoidFunction(): void{
    return;
}


//INTERFACES

/*function showTodo(todo)
{
    console.log(`${todo.title} - ${todo.text}`);
}

showTodo({title: "Eat dinner", text:"prueba"});*/

/*function showTodo(todo: {title: string; text:string;})
{
    console.log(`${todo.title} - ${todo.text}`);
}*/

interface ITodo
{
    title: string; 
    text:string;
}
function showTodo(todo: ITodo)
{
    console.log(`${todo.title} - ${todo.text}`);
}

showTodo({title: "Eat dinner", text:"prueba"});



let myTodo = {title: "hola", text: "aaaa"};

showTodo(myTodo);

//CLASES

class Usuario
{
    private name:string;
    public email:string;
    protected age:number;

    constructor(name:string, email:string, age:number)
    {
        this.name=name;
        this.email=email;
        this.age=age;
    }

    register()
    {
        console.log(`${this.name} esta registrado`);
    }


    muestraEdad()
    {
        return this.age;
    }

    public AgeInYears(){
        return this.age+" años";
    }

    payInVoice()
    {
        console.log(this.name+" ha pagado")
    }

}

var juan = new Usuario('juan', 'a@.es', 20);

//document.write(juan.name);

console.log(juan.register());

document.write(juan.email);

//document.write(juan.register());

console.log(juan.AgeInYears());


class Miembros extends Usuario
{
    id: number;

    constructor(id, nombre, email, edad){
        super(name, nombre, email);
        this.id=id;

    }

    payInVoice(){
        super.payInVoice();
    }
}


var gordon = new Miembros("2", "Gordon", "g@gmail.com", 25);

gordon.payInVoice();


let nombre:string;
nombre = "Miguelo" ;
let edad:number;
edad = 30 ;
 
const PERSONAJE = {
    nombre:nombre ,
    edad:edad
}





