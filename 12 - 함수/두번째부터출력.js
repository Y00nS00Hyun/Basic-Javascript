
function ignoreFirst(first, ...arguments) {
    for (const each of arguments) {         //하나씩 따로따로 출력
        console.log(each);
    }
}


ignoreFirst('1세대', '2세대', '3세대');
ignoreFirst('곰팡이', '강아지', '고양이');
ignoreFirst(20, 9, 18, 19, 30, 34, 40);