try {
  // 실행할 코드
} catch (err) {
  // 에러가 발생했을 때 실행할 코드
} finally {
  // 항상 실행할 코드
}

//finally문에서 에러가 나는 경우
try {
  try {
    // 실행할 코드
  } catch (err) {
    // 에러가 발생했을 때 실행할 코드
  } finally {
    // 항상 실행할 코드
  }
} catch (err) {
  // finally문에서 에러가 발생했을 때 실행할 코드
}
