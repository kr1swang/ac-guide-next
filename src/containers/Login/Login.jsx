/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useSnackbar } from 'notistack'
import { useHistory, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
// import { setAccount, setToken, setUsername, setUserKind } from '../../store/slice/authSlice'
import { useStyles } from './loginCSS'
import { Fade, Card, Button } from '@material-ui/core'
// import { login } from '../../api/AuthService'
import { MuiTextField } from '../../components/CustomInput'

const defaultValues = {
  account: '',
  password: ''
}

export default function Login() {
  const classes = useStyles()
  const { enqueueSnackbar } = useSnackbar()
  const history = useHistory()
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const { control, formState, handleSubmit, setValue } = useForm({ defaultValues })

  const handleSubmitRequest = async (data) => {
    setIsLoading(true)

    // const res = await login(data)

    // if (res.result !== '0') {
    //   enqueueSnackbar(`登入失敗! ${res.message}`, { variant: 'error', autoHideDuration: 3000 })

    //   setTimeout(() => setIsLoading(false), 500)
    // } else {
    //   enqueueSnackbar(`${res.data.username} 登入成功! `, { variant: 'success', autoHideDuration: 3000 })

    //   // localStorage
    //   localStorage.setItem(
    //     process.env.REACT_APP_LOCALSTORAGE_KEY,
    //     JSON.stringify({
    //       username: res.data.username,
    //       account: res.data.account,
    //       token: res.data.token,
    //       userKind: res.data.userKind,
    //       timestamp: new Date().getTime()
    //     })
    //   )

    // redux
    // dispatch(setUsername(res.data.username))
    // dispatch(setAccount(res.data.account))
    // dispatch(setToken(res.data.token))
    // dispatch(setUserKind(res.data.userKind))

    // redirect
    //   setTimeout(() => history.push('/'), 500)
    // }
  }

  return (
    <Fade in={true} timeout={500}>
      <Card className={classes.root}>
        <div className={classes.imageSide} />
        <div className={classes.inputSide}>
          <div className={classes.subject}>
            <h3 className={classes.title}>{'用戶登入'}</h3>
          </div>
          <form onSubmit={handleSubmit(handleSubmitRequest)}>
            <MuiTextField
              control={control}
              formState={formState}
              setValue={setValue}
              type={'text'}
              name={'account'}
              label={'帳號'}
              required={true}
            />
            <MuiTextField
              control={control}
              formState={formState}
              setValue={setValue}
              type={'password'}
              name={'password'}
              label={'密碼'}
              required={true}
            />
            <div className={classes.forgot}>
              <h6 className={classes.subTitle}>
                <span>{'忘記密碼了嗎？'}</span>
                <Link to={'/resetpassword'} title={'密碼重設'}>
                  {'點選重設'}
                </Link>
              </h6>
            </div>
            <div className={classes.submit}>
              <Button
                type={'submit'}
                title={'登入'}
                variant={'contained'}
                color={'primary'}
                fullWidth={true}
                className={classes.loginButton}
                disabled={isLoading}
              >
                {'登入'}
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </Fade>
  )
}
