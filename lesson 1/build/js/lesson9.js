"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateStudent = (student, updateStudent) => {
    return Object.assign(Object.assign({}, student), updateStudent);
};
const Santi = {
    name: 'Santi',
    id: 1,
    isActive: true,
};
const updateSanti = updateStudent(Santi, { grade: 10, isActive: false });
//Required and Readonly
// Converts the atributes in required
const recordStudent = (studentPri) => {
    return studentPri;
};
//Converts the atributes in readonly
const assignStudent = Object.assign(Object.assign({}, updateSanti), { grade: 2 });
const assginLetter = {
    Sara: 'A',
    Kelly: 'B',
};
const assignGrades = {
    Sara: { assign1: 10, assign2: 20 },
    Kelly: { assign1: 30, assign2: 40 },
};
const nameStudent = { name: "Daniel" };
const prevStudent = { id: 123, isActive: false, grade: 23 };
//type NewAssing = {title : string, desc: string}
const createNewAssign = (title, desc) => {
    return { title, desc };
};
const tsAssign = createNewAssign('English task', 'Create a sentence');
console.log(tsAssign);
const assignArgs = ['English', 'Non'];
const tsAssign2 = createNewAssign(...assignArgs);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
