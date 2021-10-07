import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: '8em'
    // backgroundImage: `url(${process.env.PUBLIC_URL}/images/analytics.png)`,
    // backgroundPosition: 'center right 60px',
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'auto 60%'
  },
  subject: {
    borderRadius: '4px',
    padding: '1em',
    background: 'rgba(255, 255, 255, 0.5)',
    '& > h4': {
      lineHeight: '1.1',
      fontSize: '3em',
      letterSpacing: '6px',
      color: '#014068',
      margin: '0'
    },
    '& > h1': {
      lineHeight: '1.1',
      fontSize: '8em',
      letterSpacing: '12px',
      color: '#014068',
      margin: '0'
    },
    '& > p': {
      margin: '3em 0',
      letterSpacing: '2px',
      color: '#808080'
    }
  },
  funcDiv: {
    margin: '1em 0',
    display: 'flex',
    alignItems: 'center',
    gap: '1em',
    '& > button': {
      fontWeight: 'bold',
      letterSpacing: 1,
      '& > span > svg': {
        marginRight: '0.5em'
      }
    }
  }
}))

export { useStyles }
