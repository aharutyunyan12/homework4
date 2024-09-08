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
    const studentScores = evaluations.reduce((acc, {studentId, studentName, score}) => {
      if (!acc[studentId]) {
        acc[studentId] = {studentName, scores: []}
      }
      acc[studentId].scores.push(score)
      return acc
    }, {})

    const average = Object.values(studentScores).map((student) => {
        const average = student.scores.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / student.scores.length
        return { studentName: student.studentName, average }
    })
    const result = average.filter(({average}) => average < 40) 
    return result
}

const res = getStudentsAverage(evaluations)

console.log(res)