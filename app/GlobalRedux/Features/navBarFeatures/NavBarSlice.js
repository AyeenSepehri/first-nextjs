"use client";
import { createSlice } from '@reduxjs/toolkit'

const initialState = 
  [
    {
      title: "بلیط",
      options: ["هواپیما", "قطار", "اتوبوس"]
    },

    {
      title: "اقامت",
      options: ["هتل", "ویلا", "اقامتگاه"]
    },

    {
      title: "تور",
      options: ["خارجی", "داخلی"]
    },
  ]


export const navBarSlice = createSlice({
  name: 'NavBar',
  initialState,
  reducers: {
  },
})

// Action creators are generated for each case reducer function
export const { } = navBarSlice.actions

export default navBarSlice.reducer