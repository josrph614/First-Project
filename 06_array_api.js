// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    result=fruits.join(',');
    console.log(result);
  }
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    result=fruits.split(',');
    console.log(result);

    result2=result.reverse();
    console.log(result2);
    console.log(result);
  }
const array=[1,2,3,4,5];
result=array.splice(0,2);
console.log(array);

//Q4 new array - slice not splice
result=[1,2,3,4,5].slice(2,5);
console.log(result);

class Student{
    constructor(name,age,enrolled,score){
        this.name=name;
        this.age=age;
        this.enrolled=enrolled;
        this.score=score;

    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  {//Q5
const result = students.find(function(Student,index){
    return Student.score===90;
});
console.log(result); 
}
  {
const result = students.find((Student)=> Student.score===90
);
console.log(result); 
}

//Q6
arr2=students.filter((student)=>student.enrolled==true)
console.log(arr2);
{
//Q7

//students array 안에 student라고 지정 O
//value 같은 의미 알기 힘든 것 X
const result=students.map((student)=>student.score);
console.log(result);
}

{
   // Q9
const result=students.some((student)=>student.score<50);
console.log(result);
}

{//Q10

let sum=0; 
for(student in students){
sum+=student.score;
}
avg=sum/students.length;

console.log(avg);
}

{
    //Q11
    const result=students.map((student)=>student.score).join(',');
    console.log(result);

}
{
    //Q11
    const result=students.map((student)=>student.score)
    .sort().join(',');
    console.log(result);

}