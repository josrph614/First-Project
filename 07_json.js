'use strict';

//브라우저에서 서버와 통신 
//1. fetch()API
//2. XMLHttps - 가독성 등 이유로 요샌 잘 안씀
//3. JSON - 요새 많이 쓴다.
//          simplest data interchange format, easy to read, key-value pair, 다른 프로그래밍 언어 호환성 좋다


// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj) -> JSON으로 변환, parsing -> Object로 변환

//stringify -> definition -> 변수 개수가 달라질 수 있다 - Overloading
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  //Date -> JSON 만들면 string으로 저장된다. 나중에 object로 다시 변환해도 string이라 오류 발생 가능
  birthDate: new Date(),
  jump: function () {
    console.log(`${this.name} can jump!`);
  },
};

//rabbit 변환 시 함수들은 변환되지 않는다
json = JSON.stringify(rabbit);
console.log(json);

//원하는 부분만 변환
json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'ellie' : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)

json = JSON.stringify(rabbit);
console.log(json);

//birthdate string인 것 바꾸는 법
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);

//rabbit은 함수 있다
rabbit.jump();
//obj는 함수 없다
// obj.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());


//JSON 관련 유용 사이트
//JSON Diff
//JSON Beautifier
//JSON Parser
//JSON Validater