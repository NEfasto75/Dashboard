import { createSlice } from '@reduxjs/toolkit';
import students from '../components/output';


const wincDataSlice = createSlice({

    name: 'winc-data',
    initialState: {
        students: students,
        singleStudent: [],
        chekedStudents: [],
        student: []
    },
    reducers: {
        addNewStudent: (state, action) => {
            const name = action.payload;
            let oneStudent = state.students.filter(student => student.name === name);
            state.singleStudent = oneStudent;
            state.student = name;
        },

        addCheckedStudent: (state, action) => {
            const name = action.payload;
            state.chekedStudents.push(name);
        },
        removeUncheckedStudent: (state, action) => {
            const name = action.payload;
            let removedStudent = state.chekedStudents.filter(student => student !== name);
            console.log("removedStudents", removedStudent)
            state.chekedStudents = removedStudent;
        },
    }
});

export const { addNewStudent, addCheckedStudent, removeUncheckedStudent } = wincDataSlice.actions;

export default wincDataSlice.reducer;