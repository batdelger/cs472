/**
 * app.js
 */
"use strict";
window.onload = function () {

    function CourseReg(studentId, fullName, course) {
        this.studentId = studentId;
        this.fullName = fullName;
        this.course = course;
    }

    const courseRegData = [
        new CourseReg('000-61-1101', 'Anna Lynn Smith', 'CS472 – WAP'),
        new CourseReg('000-98-1006', 'Bob R. Jones', 'CS401 – MPP')
    ];

    const formNewCourseReg = document.querySelector("#formCourseReg");
    formNewCourseReg.addEventListener("submit",
        event => {
            event.preventDefault();
            const txtStudentId = document.querySelector("#txtStudentId");
            const txtFullName = document.querySelector("#txtFullName");
            const selectCourse = document.querySelector("#selectCourse");
            const strStudentId = txtStudentId.value;
            const strFullName = txtFullName.value;
            const strCourse = selectCourse.value;

            if (addNewRegistrationDataRow(strStudentId, strFullName, strCourse)) {
                txtStudentId.value = "";
                txtFullName.value = "";
                selectCourse.value = "";
                txtStudentId.focus();
            }
        });

    const displayRow = function (regRow, rowId) {
        const tbody = document.querySelector("#tblRegistrations tbody");
        const newRow = tbody.insertRow(-1);
        const newCellRowId = newRow.insertCell(0);
        const strNewRowId = document.createTextNode(`${rowId + 1}.`);
        newCellRowId.appendChild(strNewRowId);
        const newCellStudentId = newRow.insertCell(1);
        const strNewRowStudentId = document.createTextNode(`${regRow.studentId}`);
        newCellStudentId.appendChild(strNewRowStudentId);
        const newCellFullName = newRow.insertCell(2);
        const strNewRowFullName = document.createTextNode(`${regRow.fullName}`);
        newCellFullName.appendChild(strNewRowFullName);
        const newCellCourse = newRow.insertCell(3);
        const strCourse = document.createTextNode(`${regRow.course}`);
        newCellCourse.appendChild(strCourse);
    }

    const displayTableData = function () {
        courseRegData.forEach(displayRow);
    }

    const addNewRegistrationDataRow = function (studentId, fullName, course) {
        const newRow = new CourseReg(studentId, fullName, course);
        if (courseRegData.find(r => {
            return (r.studentId === newRow.studentId &&
                r.course === newRow.course)
        })) {
            alert('Data duplicated!');
            return false;
        }
        else {
            courseRegData.push(newRow);
            displayRow(newRow, courseRegData.length - 1);
            return true;
        }
    }

    displayTableData();
}