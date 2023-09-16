"use client";
import { configureStore } from '@reduxjs/toolkit';
import { navBarSlice } from './Features/navBarFeatures/NavBarSlice';

export const store = configureStore({
  reducer: {
    navBarSlice
  },
})