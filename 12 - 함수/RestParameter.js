//args는 배열이라서 splice가 되는데
//arguments는 유사배열이라서 splice가 안된다

function study(...args) {
    console.log(args.splice(0, 2));
    //console.log(arguments.splice(0, 2));  에러
}

study('A', 'B', 'C', 'D', 'E');



//...argument는 맨 마지막에 쓰기

function Rank(first, second, ...others) {
    console.log(`1등: ${first}`);
    console.log(`2등: ${second}`);
    console.log(`나머지: ${others}`);
}

Rank('수현', '슈', '초희', '리아');


//결론: arguments를 자주 쓰자!!!!!!!!!!!