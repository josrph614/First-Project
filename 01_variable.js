// async<defer

// JS 'use strict'; 제일 앞에 써놓는게 좋다

// 상식적,효율적임
//
// 변수
// {}안에 있는 변수는 밖에선 사용 X
// global 변수는 다 사용 가능 (메모리 사용하기에 적당히 사용하기)

//use it for Valina JS
// 'use strict';
// console.log('Hello World');

// //2. Variable
// //let (added in ES6) - 변수 생성할 때 사용
// //mutable

// let name='ellie';
// console.log(name);
// name='hello';
// console.log(name);

 //var(옛날 방식) (don't use this)
 //hoisting 있다 선언을 위로 끌어올리는 것
 //has no block scope

 //constants 한 번 설정하면 변경 X
//immutable - 전염성X
//변경하면 안되는 data type에 할당하라
//security, thread safety
// const daysInWeek=7;
// const maxNumber=5;

//4. variable types
//primitive, single item:number, string, boolean, null, undefined,symbol
//object 
//function, first-class function (변수에 할당 가능)

//java,C 등은 숫자도 크기 지정
//JS는 number 하나만 존재 

//*bigint 존재 숫자 끝에 n만 붙이면 O 

//string
//char, string 구분 없다
//+로 concatenation 가능

//template - stinrg+string+ 이렇게 반복 안해도 된다
// ' quotation X ` 이다


// const brendan='brendan';
// const greeting = 'hello'+brendan;
// console.log('value: ${greeting}, type: ${typeof greeting}'); 
// const helloBob='hi ${brendan}!';//template literals (stirng)
// console.log('value:${helloBob}, type: ${typeof helloBob}');

/*boolean
false: 0,null, undefined, NaN, ''
true: any other value
*/


//--------------------------------------------------------------
//드림코딩 노트
//--------------------------------------------------------------


// 1. Use strict
// added in ES 5
// use this for Vanila Javascript.
'use strict';

// 2. Variable, rw(read/write)
// let (added in ES6)
let globalName = 'global name';
{
  let name = 'ellie';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope
{
  age = 4;
  var age;
}
console.log(age);

// 3. Constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.
//웬만해선 variable 말고 constant로 하는 게 좋다
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: premitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

// number
const count = 17; // integer
const size = 17.1; // decimal number

//★ 이거 `` 백래시다!!
console.log(`value: ${count}, type: ${typeof count}`);

console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x//선언 but 지정 X
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id'); 
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);//.description - string을 변환해줌


// object, real-life object, data structure
const ellie = { name: 'ellie', age: 20 };

ellie.age = 21;

//primitive - value. 변경 불가
//ojb - ojb가 가르키는 ref가 저장. 변경 가능


// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
//console.log(text.charAt(0)); string이었다가 1 - number로 바꾸면 이전에 쓰던 개발자가 오류 난다
//이런거 막기 위해 typescript 나온 것
