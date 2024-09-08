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
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1400,
    year: 2021
    },
    {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1300,
    year: 2023
    },
    {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1600,
    year: 2023
    }
    ];

function maxPayment (arr = []) {
    let max = -Infinity
    for (const item of arr) {
        if (item.payedAmount > max) {
            max = item.payedAmount
        }
    }
    return max
}

const res = maxPayment(payments)

console.log(res)