import {createSlice }from '@reduxjs/toolkit'


   const initialState = {modalisVisible: false , userName: "" , themeName: false}
     

 const  settingsSlice = createSlice({
     name:"settings",
     initialState, 
     
     reducers:{ 
         toggle(state){
             state.modalisVisible = !state.modalisVisible;
         },
         nameChanger(state, action ){ 
             state.userName = action.payload;
         },
         theme(state){ 
             state.themeName = !state.themeName;
         }
     }
 });



export const settingsActions = settingsSlice.actions;

export  default settingsSlice;