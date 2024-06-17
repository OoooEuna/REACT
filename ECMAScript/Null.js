// 입력을 받아왔다고 가정
let input
// const nickname = input ?? '스누피'  // NULL 병합
const nickname = input

if( nickname ) {
    console.log("이름이 있습니다.");
}
if( !nickname ) {
    console.log("이름이 없습니다.");
}

console.log(`이름 : ${nickname}`);
