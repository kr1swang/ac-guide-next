import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 'auto',
    width: '100%',
    maxWidth: '1440px',
    margin: '0 auto',
    padding: '1em',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '& > div:nth-child(n)': {
      overflow: 'auto'
    }
  }
}))

export { useStyles }
