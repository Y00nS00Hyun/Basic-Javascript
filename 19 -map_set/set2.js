//최초에 추가된 순서를 유지하면서, 나중에 중복된 값을 추가하려고 하면 그 값은 무시

// Set 생성
const members = new Set();

// add 메소드
members.add("영훈"); // Set(1) {"영훈"}
members.add("윤수"); // Set(2) {"영훈", "윤수"}
members.add("영훈"); // Set(2) {"영훈", "윤수"}
members.add("영훈"); // Set(2) {"영훈", "윤수"}
members.add("동욱"); // Set(3) {"영훈", "윤수", "동욱"}
members.add("동욱"); // Set(3) {"영훈", "윤수", "동욱"}
members.add("동욱"); // Set(3) {"영훈", "윤수", "동욱"}
members.add("태호"); // Set(4) {"영훈", "윤수", "동욱", "태호"}
members.add("동욱"); // Set(4) {"영훈", "윤수", "동욱", "태호"}
members.add("태호"); // Set(4) {"영훈", "윤수", "동욱", "태호"}
members.add("태호"); // Set(4) {"영훈", "윤수", "동욱", "태호"}

//

const numbers = [1, 3, 4, 3, 3, 3, 2, 1, 1, 1, 5, 5, 3, 2, 1, 4];
const uniqNumbers = new Set(numbers);

console.log(uniqNumbers); // Set(5) {1, 3, 4, 2, 5}
