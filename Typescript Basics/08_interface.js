"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    _id: "123456",
    courseName: "Typescript",
    courseId: "123456",
    courseDescription: "Typescript Course",
    coursePrice: 1000,
    getCourseCoupon: function (courseId) {
        return "123456";
    },
    getCourseOffer: function () {
        return 1000;
    }
};
console.log(user);
var student = {
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
    getCourseCoupon: function (courseId) {
        return "123456";
    },
    getCourseOffer: function () {
        return 1000;
    }
};
console.log(student);
