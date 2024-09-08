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
    const courseScores = evaluations.reduce((acc, {courseId, courseName, score}) => {
      if (!acc[courseId]) {
        acc[courseId] = {courseName, scores: []}
      }
      acc[courseId].scores.push(score)
      return acc
    }, {})

    const result = Object.values(courseScores).map((course) => {
        const average = course.scores.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / course.scores.length
        return { courseName: course.courseName, average }
    })
    return result
}

const res = getStudentsAverage(evaluations)

console.log(res)