import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppState } from "./store"

const initialState: File = null

export const fileManagementSlice = createSlice({
    name: 'fileManager',
    initialState: initialState,
    reducers: {
        getFileToProcess: () => {
            console.log("Get File To Process...")
        },
        setFileToProcess: (state, action: PayloadAction<File>) => {
            console.log("FILE->", action.payload)
        }
    }
})

export const { getFileToProcess, setFileToProcess } = fileManagementSlice.actions

export const fileManager = (state: AppState) => state.fileManager

export const fileManagementReducer = fileManagementSlice.reducer