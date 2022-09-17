import { createSlice } from "@reduxjs/toolkit"
import { AppState } from "./store"

const initialState: string = null

export const fileManagementSlice = createSlice({
    name: 'fileManager',
    initialState: initialState,
    reducers: {
        getFileToProcess: () => {
            console.log("Get File To Process...")
        }
    }
})

export const { getFileToProcess } = fileManagementSlice.actions

export const fileManager = (state: AppState) => state.fileManager

export const fileManagementReducer = fileManagementSlice.reducer