import React, { Suspense } from 'react'
import { createPack } from '../../components/CreatePack'
import { Provider } from 'react-redux'
import { SnackbarProvider } from 'notistack'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { useStyles } from './appCSS'
import store from '../../store'
import theme from '../../theme'
import Loading from '../../components/Loading'
import CssBaseline from '@mui/material/CssBaseline'
import Pace from '../../components/Pace'
import AutoChangeWebsiteTitle from '../../components/AutoChangeWebsiteTitle'
import ScrollToTop from '../../components/ScrollToTop'
import CheckLocalStorage from '../../components/CheckLocalStorage'
import Header from '../../components/Header'
import Contents from '../../components/Contents'

export default function App() {
  const classes = useStyles()

  const CombineProvider = createPack(
    <Provider store={store} />,
    <SnackbarProvider maxSnack={3} />,
    <BrowserRouter basename={process.env.PUBLIC_URL} />,
    <ThemeProvider theme={theme} />,
    <Suspense fallback={<Loading />} />
  )

  return (
    <CombineProvider>
      <>
        <CssBaseline />
        <Pace color={theme.palette.primary.main} />
        <AutoChangeWebsiteTitle />
        <ScrollToTop />
        <CheckLocalStorage />
      </>

      <div className={classes.root}>
        <Header />
        <Contents />
      </div>
    </CombineProvider>
  )
}
