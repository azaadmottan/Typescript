interface Course {
    readonly _id: string,
    courseName: string,
    courseId: string,
    courseDescription: string,
    coursePrice: number,
    courseDuration?: number,
    getCourseCoupon(courseId: number): string,
    getCourseOffer: () => number
}

interface Student extends Course {                  // we can also extend the interface but in the case of 'type' we can't extend or redefine the 'type' property
    studentName: string,
    studentId: string,
    studentEmail: string,
    studentPhone: number,
    studentAddress: string,
}

const user: Course = {
    _id: "123456",
    courseName: "Typescript",
    courseId: "123456",
    courseDescription: "Typescript Course",
    coursePrice: 1000,
    getCourseCoupon: (courseId: 9324) => {
        return "123456"
    },
    getCourseOffer:() => {
        return 1000
    }
}

console.log(user);

const student: Student = {
    _id: "353234856734",
    courseName: "Typescript",
    courseId: "123456",
    courseDescription: "Typescript Course",
    coursePrice: 1000,
    studentName: "Sachin Kumar",
    studentId: "363426470856734",
    studentEmail: "sachin.kumar@gmail.com",
    studentPhone: 9876543210,
    studentAddress: "Mumbai",
    getCourseCoupon: (courseId: 9324) => {
        return "123456"
    },
    getCourseOffer:() => {
        return 1000
    }
}

console.log(student);

export {}