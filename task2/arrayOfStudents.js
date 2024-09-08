const payments = [
    {
    studentId: 1, 
    studentName: "John Doe",
    payedAmount: 1600,
    year: 2020,
    },
    {
    studentId: 1,
    studentName: "John Doe",
    payedAmount: 1500,
    year: 2021
    },
    {
    studentId: 1,
    studentName: "John Doe",
    payedAmount: 1400,
    year: 2022
    },
    {
    studentId: 1,
    studentName: "John Doe",
    payedAmount: 1300,
    year: 2023
    },
    {
    studentId: 2,
    studentName: "Lu Kang",
    payedAmount: 1500,
    year: 2020
    },
    {
    studentId: 2,
    studentName: "Lu Kang",
    payedAmount: 1400,
    year: 2021
    },
    {
    studentId: 2,
    studentName: "Lu Kang",
    payedAmount: 1300,
    year: 2023
    },
    {
    studentId: 2,
    studentName: "Lu Kang",
    payedAmount: 1200,
    year: 2023
    }
    ];

function calculateTheSum(arr = []) {
    return Object.values(payments.reduce ((acc, { studentId, studentName, payedAmount }) => {
        if (!acc[studentId]) {
            acc[studentId] = {
                studentName,
                payedAmount: 0
            }
        }
        acc[studentId].payedAmount += payedAmount
        return acc
    }, {}))
} 


const res = calculateTheSum(payments)

console.log(res)