// =========================
// 과목별 등급컷 (5등급제)
// =========================

const cutLine = {

    korean: [72, 55, 35, 21],
    math: [77, 58, 38, 19],
    english: [89, 73, 54, 31],
    science: [84, 71, 56, 34],
    society: [76, 57, 35, 23],
    history: [67, 49, 32, 18],
    chinese: [92, 83, 68, 44]

};

// =========================
// 과목명
// =========================

const subjectName = {

    korean: "국어",
    math: "수학",
    english: "영어",
    science: "통합과학",
    society: "통합사회",
    history: "한국사",
    chinese: "한문"

};

// =========================
// 계열별 학과
// =========================

const majorData = {

    engineering: [

        "컴퓨터공학",
        "기계공학",
        "전자공학",
        "화학공학"

    ],

    science: [

        "수학",
        "물리학",
        "화학",
        "생명과학"

    ],

    medical: [

        "의예과",
        "치의예과",
        "한의예과",
        "간호학과"

    ],

    education: [

        "초등교육",
        "국어교육",
        "영어교육",
        "수학교육"

    ],

    art: [

        "산업디자인",
        "시각디자인",
        "체육교육",
        "실용음악"

    ]

};

// =========================
// 계열 변경
// =========================

function changeMajor(){

    const category=document.getElementById("category").value;

    const major=document.getElementById("major");

    major.innerHTML="";

    majorData[category].forEach(function(item){

        major.innerHTML+=`
            <option value="${item}">
                ${item}
            </option>
        `;

    });

}

// =========================
// 등급 계산
// =========================

function getGrade(score, subject){

    const cut=cutLine[subject];

    if(score>=cut[0]) return 1;
    if(score>=cut[1]) return 2;
    if(score>=cut[2]) return 3;
    if(score>=cut[3]) return 4;

    return 5;

}

// =========================
// 등급 색상
// =========================

function getGradeClass(grade){

    switch(grade){

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

// =========================
// 5등급 → 9등급(참고용)
// =========================

function convertTo9(avg){

    if(avg<=1.0) return 1.2;
    if(avg<=1.5) return 1.8;
    if(avg<=2.0) return 2.5;
    if(avg<=2.5) return 3.2;
    if(avg<=3.0) return 4.0;
    if(avg<=3.5) return 5.0;
    if(avg<=4.0) return 6.0;
    if(avg<=4.5) return 7.0;

    return 8.5;

}// =========================
// 학과별 추천 대학
// =========================

const universityData = {

    // ===== 공학계열 =====

    "컴퓨터공학":{

        school:[
            "가천대학교",
            "단국대학교",
            "국민대학교",
            "세종대학교",
            "숭실대학교",
            "홍익대학교"
        ],

        student:[
            "아주대학교",
            "경희대학교",
            "인하대학교",
            "중앙대학교",
            "한양대학교 ERICA",
            "건국대학교"
        ]

    },

    "기계공학":{

        school:[
            "단국대학교",
            "가천대학교",
            "건국대학교",
            "동국대학교",
            "홍익대학교",
            "한국공학대학교"
        ],

        student:[
            "아주대학교",
            "국민대학교",
            "세종대학교",
            "경희대학교",
            "중앙대학교",
            "인하대학교"
        ]

    },

    "전자공학":{

        school:[
            "광운대학교",
            "한국공학대학교",
            "가천대학교",
            "단국대학교",
            "명지대학교",
            "홍익대학교"
        ],

        student:[
            "아주대학교",
            "인하대학교",
            "경희대학교",
            "중앙대학교",
            "한양대학교 ERICA",
            "건국대학교"
        ]

    },

    "화학공학":{

        school:[
            "단국대학교",
            "명지대학교",
            "가천대학교",
            "인천대학교",
            "경기대학교",
            "충남대학교"
        ],

        student:[
            "경희대학교",
            "중앙대학교",
            "건국대학교",
            "아주대학교",
            "홍익대학교",
            "인하대학교"
        ]

    },

    // ===== 자연계열 =====

    "수학":{

        school:[
            "강원대학교",
            "충북대학교",
            "충남대학교",
            "가천대학교",
            "명지대학교",
            "인천대학교"
        ],

        student:[
            "건국대학교",
            "경희대학교",
            "국민대학교",
            "세종대학교",
            "중앙대학교",
            "아주대학교"
        ]

    },

    "물리학":{

        school:[
            "강원대학교",
            "충북대학교",
            "인천대학교",
            "명지대학교",
            "가천대학교",
            "충남대학교"
        ],

        student:[
            "건국대학교",
            "경희대학교",
            "중앙대학교",
            "세종대학교",
            "아주대학교",
            "국민대학교"
        ]

    },

    "화학":{

        school:[
            "충남대학교",
            "강원대학교",
            "충북대학교",
            "명지대학교",
            "가천대학교",
            "인천대학교"
        ],

        student:[
            "경희대학교",
            "건국대학교",
            "중앙대학교",
            "홍익대학교",
            "아주대학교",
            "국민대학교"
        ]

    },

    "생명과학":{

        school:[
            "강원대학교",
            "충북대학교",
            "가천대학교",
            "인천대학교",
            "명지대학교",
            "충남대학교"
        ],

        student:[
            "경희대학교",
            "중앙대학교",
            "건국대학교",
            "아주대학교",
            "국민대학교",
            "세종대학교"
        ]

    },

    // ===== 의학계열 =====

    "의예과":{

        school:[
            "가톨릭관동대학교",
            "을지대학교",
            "건양대학교",
            "조선대학교"
        ],

        student:[
            "가톨릭대학교",
            "한림대학교",
            "순천향대학교",
            "인제대학교"
        ]

    },

    "치의예과":{

        school:[
            "원광대학교",
            "조선대학교"
        ],

        student:[
            "경북대학교",
            "부산대학교",
            "전남대학교"
        ]

    },

    "한의예과":{

        school:[
            "동신대학교",
            "상지대학교"
        ],

        student:[
            "대전대학교",
            "원광대학교",
            "동국대학교"
        ]

    },

    "간호학과":{

        school:[
            "가천대학교",
            "을지대학교",
            "삼육대학교",
            "신한대학교",
            "한림대학교",
            "대구가톨릭대학교"
        ],

        student:[
            "아주대학교",
            "가톨릭대학교",
            "중앙대학교",
            "경희대학교",
            "인하대학교",
            "이화여자대학교"
        ]

    },

    // ===== 교육계열 =====

    "초등교육":{

        school:[
            "춘천교육대학교",
            "광주교육대학교",
            "청주교육대학교",
            "진주교육대학교"
        ],

        student:[
            "서울교육대학교",
            "경인교육대학교",
            "부산교육대학교",
            "대구교육대학교"
        ]

    },

    "국어교육":{

        school:[
            "강원대학교",
            "충북대학교",
            "전북대학교",
            "경북대학교"
        ],

        student:[
            "경희대학교",
            "중앙대학교",
            "한국교원대학교",
            "이화여자대학교"
        ]

    },

    "영어교육":{

        school:[
            "충남대학교",
            "전남대학교",
            "강원대학교",
            "경북대학교"
        ],

        student:[
            "한국교원대학교",
            "경희대학교",
            "중앙대학교",
            "이화여자대학교"
        ]

    },

    "수학교육":{

        school:[
            "충북대학교",
            "강원대학교",
            "전북대학교",
            "경상국립대학교"
        ],

        student:[
            "한국교원대학교",
            "경희대학교",
            "중앙대학교",
            "이화여자대학교"
        ]

    },

    // ===== 예체능 =====

    "산업디자인":{

        school:[
            "국민대학교",
            "상명대학교",
            "한성대학교",
            "협성대학교"
        ],

        student:[
            "홍익대학교",
            "건국대학교",
            "한양대학교 ERICA",
            "경희대학교"
        ]

    },

    "시각디자인":{

        school:[
            "상명대학교",
            "한성대학교",
            "계명대학교",
            "협성대학교"
        ],

        student:[
            "홍익대학교",
            "건국대학교",
            "국민대학교",
            "한양대학교 ERICA"
        ]

    },

    "체육교육":{

        school:[
            "용인대학교",
            "경기대학교",
            "조선대학교",
            "강원대학교"
        ],

        student:[
            "한국체육대학교",
            "경희대학교",
            "중앙대학교",
            "국민대학교"
        ]

    },

    "실용음악":{

        school:[
            "백석예술대학교",
            "호원대학교",
            "동아방송예술대학교",
            "서울예술대학교"
        ],

        student:[
            "동덕여자대학교",
            "경희대학교",
            "한양대학교",
            "명지대학교"
        ]

    }

};// =========================
// 차트 객체
// =========================

let scoreChart = null;

// =========================
// 성적 계산
// =========================

function calculate(){

    const subjects={

        korean:Number(document.getElementById("korean").value),
        math:Number(document.getElementById("math").value),
        english:Number(document.getElementById("english").value),
        science:Number(document.getElementById("science").value),
        society:Number(document.getElementById("society").value),
        history:Number(document.getElementById("history").value),
        chinese:Number(document.getElementById("chinese").value)

    };

    let totalScore=0;
    let totalGrade=0;
    let count=0;

    const table=document.getElementById("gradeTable");

    table.innerHTML="";

    const labels=[];
    const scores=[];

    for(let subject in subjects){

        const score=subjects[subject];

        if(isNaN(score)||score<0||score>100){

            alert(subjectName[subject]+" 점수를 확인하세요.");

            return;

        }

        const grade=getGrade(score,subject);

        totalScore+=score;
        totalGrade+=grade;
        count++;

        labels.push(subjectName[subject]);

        scores.push(score);

        table.innerHTML+=`

            <tr>

                <td>${subjectName[subject]}</td>

                <td>${score}</td>

                <td class="${getGradeClass(grade)}">

                    ${grade}등급

                </td>

            </tr>

        `;

    }

    const avgScore=(totalScore/count).toFixed(2);

    const avgGrade=(totalGrade/count).toFixed(2);

    const grade9=convertTo9(Number(avgGrade));

    document.getElementById("avgScore").textContent=avgScore+"점";

    document.getElementById("avgGrade").textContent=avgGrade+"등급";

    document.getElementById("grade9").textContent=grade9+"등급";

    drawChart(labels,scores);

    recommendUniversity(grade9);

}// =========================
// 그래프
// =========================

function drawChart(labels,data){

    const ctx=document.getElementById("scoreChart");

    if(scoreChart){

        scoreChart.destroy();

    }

    scoreChart=new Chart(ctx,{

        type:"bar",

        data:{

            labels:labels,

            datasets:[{

                label:"점수",

                data:data,

                borderWidth:1

            }]

        },

        options:{

            responsive:true,

            plugins:{

                legend:{

                    display:false

                }

            },

            scales:{

                y:{

                    beginAtZero:true,

                    max:100

                }

            }

        }

    });

}// =========================
// 지원 가능성 판정
// =========================

function getSupportLevel(grade9){

    if(grade9 <= 1.5){

        return{
            text:"안정 지원",
            color:"#16a34a"
        };

    }

    if(grade9 <= 2.5){

        return{
            text:"적정 지원",
            color:"#2563eb"
        };

    }

    if(grade9 <= 3.5){

        return{
            text:"도전 지원",
            color:"#f59e0b"
        };

    }

    return{

        text:"상향 지원",
        color:"#dc2626"

    };

}

// =========================
// 추천 대학 출력
// =========================

function recommendUniversity(grade9){

    const major=document.getElementById("major").value;

    const data=universityData[major];

    const school=document.getElementById("schoolList");

    const student=document.getElementById("studentList");

    school.innerHTML="";

    student.innerHTML="";

    let count;

    // 평균 등급에 따라 추천 개수 조절

    if(grade9<=2){

        count=6;

    }else if(grade9<=4){

        count=5;

    }else if(grade9<=6){

        count=4;

    }else{

        count=3;

    }

    data.school.slice(0,count).forEach(function(item){

        school.innerHTML+=`

            <li>${item}</li>

        `;

    });

    data.student.slice(0,count).forEach(function(item){

        student.innerHTML+=`

            <li>${item}</li>

        `;

    });

    const support=getSupportLevel(grade9);

    const supportBox=document.getElementById("support");

    supportBox.textContent=support.text;

    supportBox.style.color=support.color;

}// =========================
// 초기화
// =========================

function resetForm(){

    const ids=[

        "korean",
        "math",
        "english",
        "science",
        "society",
        "history",
        "chinese"

    ];

    ids.forEach(function(id){

        document.getElementById(id).value="";

    });

    document.getElementById("gradeTable").innerHTML="";

    document.getElementById("avgScore").textContent="-";
    document.getElementById("avgGrade").textContent="-";
    document.getElementById("grade9").textContent="-";
    document.getElementById("support").textContent="-";

    document.getElementById("schoolList").innerHTML="";
    document.getElementById("studentList").innerHTML="";

    if(scoreChart){

        scoreChart.destroy();
        scoreChart=null;

    }

}

// =========================
// 입력값 제한
// =========================

const inputs=document.querySelectorAll("input[type='number']");

inputs.forEach(function(input){

    input.addEventListener("input",function(){

        if(this.value>100){

            this.value=100;

        }

        if(this.value<0){

            this.value=0;

        }

    });

});

// =========================
// Enter키 계산
// =========================

inputs.forEach(function(input){

    input.addEventListener("keydown",function(e){

        if(e.key==="Enter"){

            calculate();

        }

    });

});

// =========================
// 페이지 시작
// =========================

window.onload=function(){

    changeMajor();

};
