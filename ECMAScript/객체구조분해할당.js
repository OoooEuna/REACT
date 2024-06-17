const person = {
    name   : 'oeuna',
    age    : 25,
    gender : '여자' 
}

// 객체의 구조 분해 할당
const { name, age, ...rest } = person

console.log(name);
console.log(age);
console.log(rest);


// 매개변수에서의 구조 분해 할당
function functionName({ param1, param2, param3}) {
    console.log(`param1: ${param1}, param2: ${param2}, param3: ${param3}`);
  }
  
  const params = {
    param1: 1,
    param2: 2,
    param3: 3
  };
  
  functionName(params); 

  