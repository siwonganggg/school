// 과목별 등급컷
const cutLine = {

    korean: [72, 55, 35, 21],
    math: [77, 58, 38, 19],
    english: [89, 73, 54, 31],
    science: [84, 71, 56, 34],
    society: [76, 57, 35, 23],
    history: [67, 49, 32, 18],
    chinese: [92, 83, 68, 44]

};

// 등급 계산 함수
function getGrade(score, subject) {

    const cut = cutLine[subject];

    if (score >= cut[0]) return 1;
    if (score >= cut[1]) return 2;
    if (score >= cut[2]) return 3;
    if (score >= cut[3]) return 4;

    return 5;
}

// 등급 색상 클래스
function getGradeClass(grade) {

    switch (grade) {

        case 1:
            return "grade1";

        case 2:
            return "grade2";

        case 3:
            return "grade3";

        case 4:
            return "grade4";

        default:
            return "grade5";
    }
}

// 과목명 변환
function getSubjectName(subject) {

    const names = {

        korean: "국어",
        math: "수학",
        english: "영어",
        science: "통합과학",
        society: "통합사회",
        history: "한국사",
        chinese: "한문"

    };

    return names[subject];
}

// 계산
function calculate() {

    const subjects = {

        korean: Number(document.getElementById("korean").value),
        math: Number(document.getElementById("math").value),
        english: Number(document.getElementById("english").value),
        science: Number(document.getElementById("science").value),
        society: Number(document.getElementById("society").value),
        history: Number(document.getElementById("history").value),
        chinese: Number(document.getElementById("chinese").value)

    };

    let totalScore = 0;
    let totalGrade = 0;
    let count = 0;

    let table = `
        <table>
            <tr>
                <th>과목</th>
                <th>점수</th>
                <th>예상 등급</th>
            </tr>
    `;

    for (let subject in subjects) {

        const score = subjects[subject];

        if (isNaN(score) || score < 0 || score > 100) {
            continue;
        }

        const grade = getGrade(score, subject);

        totalScore += score;
        totalGrade += grade;
        count++;

        table += `
            <tr>
                <td>${getSubjectName(subject)}</td>
                <td>${score}점</td>
                <td class="${getGradeClass(grade)}">
                    ${grade}등급
                </td>
            </tr>
        `;
    }

    table += `</table>`;

    if (count === 0) {

        document.getElementById("result").innerHTML =
            "<h2>점수를 입력해주세요.</h2>";

        return;
    }

    const averageScore = (totalScore / count).toFixed(2);
    const averageGrade = (totalGrade / count).toFixed(2);

    document.getElementById("result").innerHTML = `
        ${table}

        <div class="average">
            평균 점수 : ${averageScore}점
            <br><br>
            평균 등급 : ${averageGrade}
        </div>
    `;
} 
