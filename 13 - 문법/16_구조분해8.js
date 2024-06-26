//printFavoritSong 함수를 어떻게 선언해야 할까요?

function printFavoritSong(name, music) {
  let { singer, title } = music;
  console.log(
    `최근 '${name}'님이 즐겨듣는 노래는 '${singer}'의 '${title}'이라는 노래입니다.`
  );
}

const music1 = { title: "난치병", singer: "하림" };
const music2 = { title: "너의 모든 순간", singer: "성시경" };
const music3 = { title: "무릎", singer: "아이유" };
const music4 = { title: "옛사랑", singer: "이문세" };
const music5 = { title: "한숨", singer: "이하이" };
const music6 = { title: "추억의 책장을 넘기면", singer: "이선희" };

printFavoritSong("영훈", music4);
printFavoritSong("동욱", music1);
printFavoritSong("대위", music3);
printFavoritSong("소원", music2);
printFavoritSong("우재", music5);
printFavoritSong("영준", music6);

//같은 코드
function printFavoritSong(name, music) {
  console.log(
    `최근 '${name}'님이 즐겨듣는 노래는 '${music.singer}'의 '${music.title}'이라는 노래입니다.`
  );
}
