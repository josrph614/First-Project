// Function
// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, 동사 형태로 이름 저장 (변수는 명사로 보통 저장함)
// e.g. createCardAndPoint -> createCard, createPoint(세분화)
// function is object in JS
function printHello() {
    console.log('Hello');
    
  }
  printHello();
  
  function log(message) {
    console.log(message);
  }
  log('Hello@');
  log(1234);
 
  // 2. Parameters
  // primitive parameters: passed by value
  // object parameters: passed by reference
  function changeName(obj) {
    obj.name = 'coder';
  }
  const ellie = { name: 'ellie' };
  changeName(ellie);
  console.log(ellie);
  
  // 3. Default parameters (added in ES6)
  //만약 default 없으면 undefined 된다.
  function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
  }
  showMessage('Hi!');
  
  // 4. Rest parameters (added in ES6)
  function printAll(...args) {//... 하면 배열 형태로 전달
    for (let i = 0; i < args.length; i++) {
      console.log(args[i]);
    }
  

    // 또 다른 방법
    for (const arg of args) {
      console.log(arg);
    }
  
    args.forEach((arg) => console.log(arg));
  }
  printAll('dream', 'coding', 'ellie');
  
  // 5. Local scope

  //function은 local scope이다

  let globalMessage = 'global'; // global variable
  function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother() {
      console.log(message);
      let childMessage = 'hello';
    }
    // console.log(childMessage); //error
  }
  printMessage();
  
  // 6. Return a value
  function sum(a, b) {
    return a + b;
  }
  const result = sum(1, 2); // 3
  console.log(`sum: ${sum(1, 2)}`);
  
  //만약 return 타입 지정 안하면 return undefined 지정이 기본값
   
  // 7. Early return, early exit
  // bad
  function upgradeUser(user) {
    if (user.point > 10) {
      // long upgrade logic...
    }
  }
  
  // good
  //빨리 내보내라
  function upgradeUser(user) {
    if (user.point <= 10) {
      return;
    }
    // long upgrade logic...
  }
  
  // First-class function
  // functions are treated like any other variable
  // can be assigned as a value to variable
  // can be passed as an argument to other functions.
  // can be returned by another function
  
  // 1. Function expression
  // a function declaration can be called earlier than it is defined. (hoisted)
  // a function expression is created when the execution reaches it.
  const print = function () {
    // anonymous function
    //익명 function을 print에 할당
    console.log('print');
  };
  print();
  const printAgain = print;
  printAgain();
  const sumAgain = sum;
  console.log(sumAgain(1, 3));

  //function - hoisting 가능
  //선언 전에 call function 가능

  
  // 2. Callback function 
  //using function expression
  function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
      printYes();
    } else {
      printNo();
    }
  }
  // anonymous function
  const printYes = function () {
    console.log('yes!');
  };
  
  // named function
  // better debugging in debugger's stack traces
  //나중에 자세히
  // recursions
  const printNo = function print() {
    console.log('no!');
  };
  randomQuiz('wrong', printYes, printNo);
  randomQuiz('love you', printYes, printNo);
  
  // Arrow function
  //매우 유용
  // always anonymous
  // const simplePrint = function () {
  //   console.log('simplePrint!');
  // };
  //한줄일 경우만 사용
  const simplePrint = () => console.log('simplePrint!');
  const add = (a, b) => a + b;
  const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
  };
  
  // IIFE: Immediately Invoked Function Expression
  //괄호 묵고 뒤에(); 바로 호출
  //최근엔 잘 쓰이지 X

  (function hello() {
    console.log('IIFE');
  })();
  
  // Fun quiz time❤️
  // function calculate(command, a, b)
  // command: add, substract, divide, multiply, remainder
  
  function calculate(command,a,b){
    switch (command) {
        case add:
            return a+b;
        case subtract:
            return a-b;
        case divide:
            return a/b;
        case multiply:
            return a*b;
        case remainder:
            return a%b;
    
        default:
            return NaN;
    }
  }

  //정답
  function calculate(command, a, b) {
    switch (command) {
      case 'add':
        return a + b;
      case 'substract':
        return a - b;
      case 'divide':
        return a / b;
      case 'multiply':
        return a * b;
      case 'remainder':
        return a % b;
      default:
        throw Error('unknown command');
    }
  }
  console.log(calculate('add', 2, 3));