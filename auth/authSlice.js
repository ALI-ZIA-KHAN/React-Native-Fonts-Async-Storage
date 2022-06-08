import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

// export const fetchAsyncMovies=createAsyncThunk(
//     "movies/fetchAsyncMovies",
//     async ()=>{
//         const movieText="Harry"
//         const response = await movieApi.get(
//             `?apiKey=${APIKey}&s=${movieText}&type=movie`
//         )
//         return response.data;
//     } 
// )

export const saveData = createAsyncThunk(
    "login/user",
    async () => {
        try {
            await AsyncStorage.setItem("currentUser", JSON.stringify(123))

        } catch (e) {
            console.log("error")
        }
    }

)


export const getData = createAsyncThunk(
    "fetch/login/user",
    async () => {
        try {

            const res = await AsyncStorage.getItem('currentUser');

            
            if(res) return await res; 

        } catch (error) {
            console.log(error);
        }
    }

)

const initialState = {
    isUserloggedin: false,
    isUser: ""
};


const kharchaAuthSlice = createSlice({
    name: "authent",
    initialState,
    reducers: {

    },
    extraReducers: {
        [saveData.pending]: () => {
            console.log("Pending")
        },
        [saveData.fulfilled]: (state, { payload }) => {
            console.log(" Successfully")
            return { ...state, isUserloggedin: !state.isUserloggedin }
        },
        [saveData.rejected]: () => {
            console.log("Rejected ")
        },


        [getData.pending]: () => {
            console.log("Pending")
        },
        [getData.fulfilled]: (state, {payload}) => {
            console.log(" Successfully");
            console.log("getdata",payload);

        },
        [getData.rejected]: () => {
            console.log("Rejected ")
        },
    }

})

export const getuserData = (state) => state.authent.isUserloggedin
export const getuserName = (state) => state.authent.isUser

export default kharchaAuthSlice.reducer;