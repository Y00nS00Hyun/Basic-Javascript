function printRabbitname1(user) {
  console.log(user.rabbit.name);
}

const user1000 = {
  name: "soohyun",
  rabbit: {
    name: "bunny",
    breed: "carrot",
    age: "3",
  },
};

const user1001 = {
  name: "soorim",
};

printRabbitname1(user1000);

console.log(user1001.rabbit); // undefined
// printRabbitname(user1001);  ->error
// ->위와 같은 상황을 없애기 위해 검사하는 것이 옵셔널 체이닝

function printRabbitname2(user) {
  console.log(user.rabbit?.breed); // ?. 써주기
}

function printRabbitname3(user) {
  console.log(user.rabbit?.age ?? "토끼를 키우지 않습니다");
}

printRabbitname3(user1000);
