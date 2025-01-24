// 1. 점 접근
function printAvgScore(students) {
  for (let student in students) {
    let studentSumScore = 0;
    const studentScores = students[student].scores;

    for (let score of studentScores) {
      studentSumScore += score;
    }
    const studentAvgScore = studentSumScore / studentScores.length;

    console.log(`${student}: ${studentAvgScore}`);
  }
}

// 2. 구조 분해 할당
function printAvgScore(students) {
  for (let student in students) {
    let studentSumScore = 0;
    const { scores } = students[student];

    for (let score of scores) {
      studentSumScore += score;
    }
    const studentAvgScore = studentSumScore / scores.length;

    console.log(`${student}: ${studentAvgScore}`);
  }
}

printAvgScore({
  이정환: { hobby: "테니스", scores: [10, 20, 30, 40, 50] },
  김효빈: { hobby: "테니스", scores: [90, 80, 30, 70, 50] },
  홍길동: { hobby: "의적", scores: [100, 100, 20, 20, 50] },
});
