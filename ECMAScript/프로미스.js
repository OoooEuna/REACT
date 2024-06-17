
// 프로미스로 비동기 요청
function delay(ms) {
    const promise = new Promise((resolve, reject) => {
        // 타이머 : ms 밀리초 후 함수를 실행하는 타이머
        setTimeout(() => {
            resolve(`${ms} 밀리초 후, 데이터 전송 받음`)
        }, ms)

    })
    return promise
}

// 프로미스를 이용한 비동기 처리
delay(3000)
    .then((result) => {
        console.log(result);
        // 서버로 받은 데이터를 사용해서 추가 작업처리
    })
    .catch((error) => {
        console.error(error)
    })

// 나중에 나오지만, 3초 딜레이가 있으므로 이 로그가 먼저 찍힘!!
console.log(`프로미스 비동기 처리`) 