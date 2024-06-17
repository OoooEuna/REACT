
async function fetchData() {
    const response = await fetch('https://httpbin.org/get')
    // await가 없다면 응답이 오기 전에 지나가므로 의미가 없음
    console.log(response);  
    // json 객체로 변환
    const data = await response.json() 
    return data
}

// await는 async 함수 안에서만 사용 가능 ❕
fetchData()
    .then((data) => {
        console.log(data);
    })

console.log(`awync await 비동기 요청 처리`);