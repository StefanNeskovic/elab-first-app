// Pattern za pisanje varijabli
// var naziv_varijable=vrednost;

// String -- REC/Slovo/Recenica 
var varString1='neki string';
var varString2="neki string";

// Number -- BROJ
var varNumber1=0;
var varNumber2=0.3;
var varNumber3=-10;

// Boolean -- True/False -- Tacno/Netacno
var varBooleanTrue=true;
var varBooleanFalse=false;

// List -- Niz nekih vrednosti [String, String,String] ili [Number,String]
var varList1=[0,1,2,3,4];
var varList2=['Elab','Silab','Ai','MMKLAB'];
var varList3=[true, true, false,false];
var varListMesovita=[true, 'Elab',0,false]

// Null -- Nista - Papir bez texta 
var varNull=null;
// varNull='dsasdasd'
// varNull=123

// Undefined -- Bez papira
var varUndefined; //Undefined vrednost ima varUndefined promenljiva
var varUndefined1=undefined; //identicno kao i linija iznad

// Object
// kljuc:vrednost
// ime:'Stefan'
// prezime:'Neskovic'
// brojIndex:'225/16'
var varStudent1Object={
    ime:'Milan',
    prezime:'Lazic',
    brojIndex:'22/2020',
    godina:1
}
var varStudent2Object={
    ime:'Milan',
    prezime:'Vasic',
    brojIndex:'23/2020',
    godina:1
}
// Pattern za dobijanje vrednosti na osnovu kljuca iz objekta
// var vrednost_kljuca=naziv_objekta['naziv_kljuca']
var varImeStudenta1=varStudent1Object['ime']
var varPrezimeStudenta1=varStudent1Object['prezime']
var varBrojIndexaStudenta1=varStudent1Object['brojIndexa']
var varGodinaStudenta1=varStudent1Object['godina']

var varListaStudenata=[varStudent1Object,varStudent2Object]


// Umesto var sada se u JS koriste let i const

// Let promenljiva je veoma slicna var-u
// let naziv_varijable=vrednost;
// let je varijabla koja se moze menjati
let letVar=1;
letVar=3;
letVar=4;

// Const suprotna je var-u
// const naziv_varijable=vrednost;
// cont je varijabla koja se ne moze menjati
const constVar=100;
constVar=99;

// Operacije sa Number tipovima promenljivih
const prviBroj=1;
const drugiBroj=3;
// const zbir=1+3;
const zbir=prviBroj+drugiBroj;
const razlika=prviBroj-drugiBroj;
const proizvod=prviBroj*drugiBroj;
const kolicnik=prviBroj/drugiBroj;
const ostatak=prviBroj%drugiBroj;
// prviBroj^2 -- prviBroj**2
// prviBroj^3 -- prviBroj**3
const kvadrat=prviBroj**2;


// Operacije sa String tipovima promenljivih
const string1='Elab';
const string2='katedra';
// 'Elab'+'katedra' daje 'Elabkatedra'
const spojeniStringovi=string1+' '+string2;

// Uvodim pojam Console
console.log(spojeniStringovi);

const rec1='7'
const broj1=1
const rezultat= rec1+broj1
console.log(rezultat);
// Indexi pocinju od 0,1,2,3,4,...
const recenica='Elab katedra je katedra na FONU-u'
const result=recenica.substring(0,6)
console.log(result);

let promenljiva = "neki string";
let string2 = "drugi string";
let promenljiva3 = "25" + 5 - "5";

console.log(promenljiva3);

for (let i = 0; i < 400; i++) {
  console.log("hello world");
}

for (let i = 0; i < 4; i++) {
  console.log(i);
}

let snaga = 10;

while (snaga > 0) {
  console.log("Uradi sklek");
  snaga--;
}

let broj = 10;

// {/* < >  <=   >=   == */}

if (broj == 10) {
  console.log("jeste 10");
} else {
  console.log("nije 10");
}

let broj = 2319;

if (broj > 99 && broj < 1000) {
  console.log("broj je trocifren");
}

if (broj == 9 || broj == 6) {
  console.log("broj je 9 ili 6");
}

if (broj != 10) {
  console.log("broj nije 10");
}

alert("Hello world ovo je iskacuci prozor");
let unosKorisnika = prompt("Unesite nesto");

function prikaziNesto() {
    console.log("Hello world");
  }
  
  function ispisiNesto(text) {
    console.log(text);
  }
  
  function saberi(broj1, broj2) {
    let zbir = broj1 + broj2;
  
    return zbir;
  }
  
  function klik() {
    console.log("Dugme je kliknuto!!!");
  }
  
  let rezultat = saberi(10, 100);
  
// neki komentar