import { createSlice } from '@reduxjs/toolkit'

const appsettingSlice = createSlice({
  name: 'appSetting',
  initialState: {
    lang: 'en',
    // isDark: true,
    selectedTheme:'dark'
  },
  reducers: {
    changeLang: (state, action) => {
      state.lang = action.payload;
    },
    ChangeTheme: (state, action) => {
      // state.isDark = action.payload;
      state.selectedTheme=action.payload;
    }
  },

})

export const { ChangeTheme, changeLang } = appsettingSlice.actions

export default appsettingSlice.reducer