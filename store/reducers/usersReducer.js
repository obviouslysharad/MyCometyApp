import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: 'users',
    initialState : {
        users: []
    },
    reducers: {
        addUser: (state, data) => {
            state.users = state.users?.concat(data?.payload)
        }
    }
})

export const { addUser } = usersSlice.actions;