// Map 생성
const map = new Map()
// set(key, value) : 요소 추가
map.set('오은아', '90점')
map.set('이태원', '50점')
map.set('황다정', '10점')

// get(key) : 요소 가져오기
console.log(map);
console.log(map.get('오은아'));
console.log(map.get('이태원'));
console.log(map.get('황다정'));

// Map 초기화 생성
const map2 = new Map([
    ['오은아', '개근'],
    ['김슬기', '지각']
])
console.log(map2);

// map 반복
console.log("map 반복");
map.forEach((value, key, map) => {
    console.log(`${key} : ${value}`);
    })
    
// map의 value 반복
console.log("map의 value 반복");
for ( const value of map.values() ) {
    console.log(value);
}