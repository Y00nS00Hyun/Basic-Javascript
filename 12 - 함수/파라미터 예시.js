function introduce(name = '홍길동', birth = 1443) {
    console.log(`안녕하세요 저는 ${name}입니다.`);
    console.log(`${birth}년에 태어났습니다.`);
}

introduce('장동건');
introduce('Winter', null);      //null -> null로 출력
introduce(undefined, 2090);     //undefined -> undefined로 출력