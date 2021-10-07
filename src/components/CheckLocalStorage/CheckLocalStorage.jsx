import { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSocialType, setUserID, setUserName, setAvatar, setHemisphere } from '../../store/slice/authSlice'

export default function CheckLocalStorage() {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
    // auth
    if (localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_KEY)) {
      const userData = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_KEY))

      dispatch(setSocialType(userData.socialType))
      dispatch(setUserID(userData.userID))
      dispatch(setUserName(userData.userName))
      dispatch(setAvatar(userData.avatar))
      dispatch(setHemisphere(userData.hemisphere))
    }

    // replace should visit pathname
    history.replace(location.pathname)
  }, [])

  return null
}
