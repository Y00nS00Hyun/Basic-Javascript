const nameInput = document.querySelector("#user-name");
const phoneInput = document.querySelector("#phone-number");
const findBtn = document.querySelector("#find");

const data = [
  {
    userName: "막대기",
    phoneNumber: "01012341111",
    email: "stick@go_do_it.kr",
  },
  { userName: "young", phoneNumber: "01012342222", email: "kang@go_do_it.kr" },
  {
    userName: "코린이",
    phoneNumber: "01012343333",
    email: "corin2@go_do_it.kr",
  },
  {
    userName: "captain",
    phoneNumber: "01012344444",
    email: "crew@go_do_it.kr",
  },
  { userName: "YH", phoneNumber: "01012345555", email: "whyH@go_do_it.kr" },
  {
    userName: "망고쥬스",
    phoneNumber: "01012346666",
    email: "drinkMango@go_do_it.kr",
  },
  {
    userName: "nemoming",
    phoneNumber: "01012347777",
    email: "ractAngle@go_do_it.kr",
  },
  {
    userName: "강그루",
    phoneNumber: "01012348888",
    email: "riverTree@go_do_it.kr",
  },
  {
    userName: "개룩발룩",
    phoneNumber: "01012349999",
    email: "checkShirts@go_do_it.kr",
  },
  {
    userName: "오렌지쥬스",
    phoneNumber: "01012341010",
    email: "delmonte@go_do_it.kr",
  },
];

function findEmail() {
  //변수를 선언해서 매번 배열을 검색해야하는 비용을 줄임
  const nameValue = nameInput.value;
  const phoneValue = phoneInput.value;

  //수현 오답
  //   const user = data.find(function(p){
  //     return ({p.userName == nameInput.value} && {p.phoneNumber == phoneInput.value})
  //   })
  // return 뒤에 불필요한 중괄호를 사용하여 쓸데없는 객체를 생성함

  const user = data.find(function (p) {
    return p.userName == nameValue && p.phoneNumber == phoneValue;
  });

  const message = user
    ? `${user.userName}님의 이메일은 ${user.email} 입니다.`
    : "이메일을 찾을 수 없습니다. 입력 정보를 다시 확인해 주세요.";

  alert(message);
}

findBtn.addEventListener("click", findEmail);
