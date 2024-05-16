//틀린거 고르시오

//1 (틀림)
const title = '컴퓨터 개론';
const lessonCount = 87;

// const course = {
//     title;
//     lessonCount;
// };
//세미콜론 때문에 안됨


//2 
const brand = 'Apple';

const ipad = {
    brand,
    title: 'iPad',
};


//3
function getAge() {
    const date = new Date();
    return date.getFullYear() - this.birth + 1;
}

const user = {
    getAge,         //getAge() function을 호출함
    name: 'codeit',
    birth: 2017,
};


//4
const name = {
    name: 'codeit',
    birth: 2017,
    getAge() {
        const date = new Date();
        return date.getFullYear() - this.birth + 1;
    },  //아예 함수를 넣어버림
};


//5 (틀림)
const username = {
    name: 'codeit',
    birth: 2017,
    //     () => {
    //     const date = new Date();
    //     return date.getFullYear() - this.birth + 1;
    // },
};

//this랑 arrow 같이 안씀