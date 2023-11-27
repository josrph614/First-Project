'use strict';

// JavaScript is synchronous.//정해진 순서로 실행된다는 뜻
// Execute the code block by order after hoisting.
// hoisting: var, function declaration 등이 자동적으로 제일 우선순위로 실행되는 것



console.log('1');
setTimeout(() => console.log('2'), 1000);//setTimeout -> 브라우저 function, 브라우저 넘기고 1초 지나는 사이 3 출력된다
console.log('3');

// Synchronous callback 동기
function printImmediately(print) {
  print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback 비동기
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);//비동기. 브라우저에 2초 지나고 콜백 함수 실행하락

// Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
      setTimeout(() => {
        if (
          (id === 'ellie' && password === 'dream') ||
          (id === 'coder' && password === 'academy')
        ) {
          onSuccess(id);
        } else {
          onError(new Error('not found'));
        }
      }, 2000);
    }
  
    getRoles(user, onSuccess, onError) {
      setTimeout(() => {
        if (user === 'ellie') {
          onSuccess({ name: 'ellie', role: 'admin' });
        } else {
          onError(new Error('no access'));
        }
      }, 1000);
    }
  }


const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your passrod');
userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(
      user,
      userWithRole => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      error => {
        console.log(error);
      }
    );
  },
  error => {
    console.log(error);
  }
);