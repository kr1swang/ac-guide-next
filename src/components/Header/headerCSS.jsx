import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '60px',
    width: '100%',
    margin: '0 auto',
    zIndex: 1,
    backgroundColor: '#fff',
    boxShadow: '0px 0px 1px #cbcbcb'
  },
  main: {
    height: '100%',
    maxWidth: '1440px',
    margin: '0 auto',
    display: 'flex',
    boxSizing: 'border-box',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logoDiv: {
    height: '100%',
    margin: '0 0.5em',
    '& > button': {
      height: '100%',
      '& > img': {
        height: '100%',
        padding: '0.5em',
        cursor: 'pointer'
      }
    }
  },
  funcDiv: {
    height: '100%',
    margin: '0 0.5em',
    display: 'flex',
    alignItems: 'center',
    '& > button': {
      margin: '0 0.5em',
      fontWeight: 'bold',
      letterSpacing: 1,
      '& > span > svg': {
        marginRight: '0.5em'
      }
    },
    '& > hr': {
      margin: '0',
      height: '2em'
    }
  },
  selected: {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    '&::after': {
      content: '""',
      display: 'block',
      width: '90%',
      height: '2px',
      background: '#000',
      position: 'absolute',
      bottom: 0
    },
    '&:active': {
      '&::after': {
        background: '#05A0E1'
      }
    }
  }
}))

export { useStyles }
