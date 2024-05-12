//아규먼트 개수만큼 출력하기 

function classmates(a, b, c) {
    for (const student of arguments) {
        console.log(student);
    }
    console.log('-------------------');
}

classmates('윈터');
classmates('윈터', '해린');
classmates('윈터', '해린', '원영');
classmates('윈터', '해린', '원영', '수현');