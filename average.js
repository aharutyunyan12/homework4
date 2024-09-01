const evaluations = [
    {
    studentId: 1,
    studentName: "John Doe",
    courseId: 1,
    courseName: "JS Bootcamp",
    score: 70
    },
    {
    studentId: 1,
    studentName: "John Doe",
    courseId: 2,
    courseName: "JS Level 0",
    score: 60
    },
    {
    studentId: 1,
    studentName: "John Doe",
    courseId: 3,
    courseName: "JS Level 1",
    score: 50
    },
    {
    studentId: 2,
    studentName: "Tom Colins",
    courseId: 1,
    courseName: "JS Bootcamp",
    
    score: 60
    },
    {
    studentId: 2,
    studentName: "Tom Colins",
    courseId: 2,  
    courseName: "JS Level 0",
    score: 50
    },
    {
    studentId: 2,
    studentName: "Tom Colins",
    courseId: 3,
    courseName: "JS Level 1",
    score: 40
    },
    {
    studentId: 3,
    studentName: "Sarah Conor",
    courseId: 1,
    courseName: "JS Bootcamp",
    score: 45
    },
    {
    studentId: 3,
    studentName: "Sarah Conor",
    courseId: 2,
    courseName: "JS Level 0",
    score: 35
    },
    {
    studentId: 3,
    studentName: "Sarah Conor",
    courseId: 3,
    courseName: "JS Level 1",
    score: 25
    }
    ];

function getStudentsAverage(arr = []) {
    let array = []
    let score = 0
    for (let item of arr) {
        for (let value of arr) {
            if (item.studentName == value.studentName) {
               score += item.score
               
            }
            if (score < 40) array.push(item)
        }
    }
    return array
}

const res = getStudentsAverage(evaluations)

console.log(res)