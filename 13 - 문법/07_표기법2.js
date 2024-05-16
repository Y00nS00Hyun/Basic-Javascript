//틀린거 고르시오

const propertyName = 'birth';
const getJob = () => 'job';

//[표현식]: 값
const codeit = {
    ['topic' + 'Name']: 'Modern JavaScript',
    [propertyName]: 2017,
    [getJob()]: '프로그래밍 강사',
};

//1
codeit.topicName;

//2
codeit[propertyName];

//3
codeit[getJob()];

//4
codeit.job;

//5 propertyName 은 표현식이므로 . 으로 연결하는게 아니라 대괄호로 연결해야함
codeit.propertyName;

//6
codeit.birth;



