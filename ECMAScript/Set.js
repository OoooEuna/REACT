// Set 생성 (중복 불가, 순서 없음)
const set = new Set()

// 요소 추가
set.add('상하이 버거')
set.add('1955 버거')
set.add('베토디')
set.add('빅맥')

// 원소 조회
console.log(set.has('상하이 버거'));

// 원소 삭제
set.delete('베토디')

// 크기 확인
console.log(set.size);

// 초기화 생성
const set2 = new Set(['모짜렐라 인더버거', '통새우 버거'])

console.log(set2);

// set 반복
console.log("set 반복");
set.forEach((value) => {
    console.log(value);
    })
    
console.log("set2 반복");
for (const value of set2) {
    console.log(value);
}