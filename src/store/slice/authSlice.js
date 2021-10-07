import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  socialType: '',
  userID: '',
  userName: '',
  avatar: '',
  hemisphere: 'northern'
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSocialType(state, action) {
      state.socialType = action.payload
    },
    setUserID(state, action) {
      state.userID = action.payload
    },
    setUserName(state, action) {
      state.userName = action.payload
    },
    setAvatar(state, action) {
      state.avatar = action.payload
    },
    setHemisphere(state, action) {
      state.hemisphere = action.payload
    }
  }
})

export const { setSocialType, setUserID, setUserName, setAvatar, setHemisphere } = authSlice.actions
export default authSlice.reducer
