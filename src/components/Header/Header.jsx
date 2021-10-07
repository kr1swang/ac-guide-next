import React from 'react'
import { useSnackbar } from 'notistack'
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setSocialType, setUserID, setUserName, setAvatar, setHemisphere } from '../../store/slice/authSlice'
import clsx from 'clsx'
import { useStyles } from './headerCSS'
import { ButtonBase, Button, Avatar, Divider } from '@mui/material'
import { Settings, Dashboard, Business, PieChart, AccountCircle } from '@mui/icons-material'
import { isEmptyFunc } from '../../utils/LengthUtils'

export default function Header() {
  const classes = useStyles()
  const { enqueueSnackbar } = useSnackbar()
  const history = useHistory()
  const location = useLocation()
  const dispatch = useDispatch()
  const { userID, userName, avatar } = useSelector((state) => state.auth)
  const funcList = [
    {
      path: '/admin',
      name: '系統管理',
      icon: <Settings />,
      role: ['admin'],
      isDisabled: false
    },
    {
      path: '/news',
      name: '公告資訊',
      icon: <Dashboard />,
      role: ['user', 'admin'],
      isDisabled: false
    },
    {
      path: '/inventory',
      name: '庫存整合',
      icon: <Business />,
      role: ['user', 'admin'],
      isDisabled: true
    },
    {
      path: '/analytics',
      name: '庫存分析',
      icon: <PieChart />,
      role: ['user', 'admin'],
      isDisabled: true
    }
  ]

  const handleCheckIsMatch = (path1, path2) => {
    return path1.split('/')[1] === path2.split('/')[1]
  }

  const handleLogout = async () => {
    enqueueSnackbar(`${userName} 登出成功!`, { variant: 'success', autoHideDuration: 3000 })

    // localStorage
    localStorage.removeItem(process.env.REACT_APP_LOCALSTORAGE_KEY)

    // redux
    dispatch(setSocialType(''))
    dispatch(setUserID(''))
    dispatch(setUserName(''))
    dispatch(setAvatar(''))
  }

  const handleLogin = async () => {
    enqueueSnackbar('kriswang 登入成功!', { variant: 'success', autoHideDuration: 3000 })

    // localStorage
    localStorage.setItem(
      process.env.REACT_APP_LOCALSTORAGE_KEY,
      JSON.stringify({
        socialType: 'FACEBOOK',
        userID: 'W1zL?2khPhYoHvJ0LriPfddQlrlEzhZSB1c3aWxgi/o&',
        userName: 'kr1swang',
        avatar:
          'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=4370730243014377&height=50&width=50&ext=1636188420&hash=AeRQ8ckHGXnn3pfE0W4',
        hemisphere: 'northern'
      })
    )

    // redux
    dispatch(setSocialType('FACEBOOK'))
    dispatch(setUserID('W1zL?2khPhYoHvJ0LriPfddQlrlEzhZSB1c3aWxgi/o&'))
    dispatch(setUserName('kr1swang'))
    dispatch(
      setAvatar(
        'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=4370730243014377&height=50&width=50&ext=1636188420&hash=AeRQ8ckHGXnn3pfE0W4'
      )
    )
    dispatch(setHemisphere('northern'))
  }

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <div className={classes.logoDiv}>
          {/* 網頁 logo */}
          <ButtonBase onClick={() => history.push('/')} title={'返回首頁'}>
            <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="website logo" />
          </ButtonBase>
        </div>
        <div className={classes.funcDiv}>
          {funcList
            // temp to hide disabled func
            .filter((item) => !item.isDisabled)
            .map((item, index) => (
              <Button
                key={index}
                size={'large'}
                className={clsx(handleCheckIsMatch(item.path, location.pathname) && classes.selected)}
                onClick={() => history.push(item.path)}
                title={item.name}
              >
                {item.icon}
                {item.name}
              </Button>
            ))}
          <Divider orientation={'vertical'} />
          {isEmptyFunc(userID) ? (
            <>
              {/* 未登入 */}
              <Button size={'large'} onClick={() => handleLogin()} title={'登入'}>
                <AccountCircle />
                {'登入'}
              </Button>
            </>
          ) : (
            <>
              {/* 已登入 */}
              <Button onClick={() => handleLogout()} title={'登出'} size={'large'}>
                <Avatar alt={userName} src={avatar} sx={{ width: 24, height: 24 }} />
                {userName}
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export { Header }
