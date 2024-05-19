const menu1 = { name: "아메리카노" };
const menu2 = { name: "바닐라 라떼", ice: true };
const menu3 = { name: "카페 모카", ice: false };

function printMenu(menu) {
  //  menu 파라미터로 전달되는 객체에 ice 프로퍼티가 없을 경우 기본값은 true여야 합니다
  const { name, ice = "true" } = menu;

  console.log(
    `주문하신 메뉴는 '${ice == true ? "아이스" : "따뜻한"} ${name}입니다'`
  );
  //   console.log(`주문하신 메뉴는 '${ice ? "아이스" : "따뜻한"} ${name}'입니다.`);
}

printMenu(menu1);
printMenu(menu2);
printMenu(menu3);
