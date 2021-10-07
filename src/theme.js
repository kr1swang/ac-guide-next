import { createTheme, responsiveFontSizes } from '@mui/material/styles'

export default responsiveFontSizes(
  createTheme({
    palette: {
      mode: 'light',
      background: {
        default: '#263238'
      }
    }
  })
)
