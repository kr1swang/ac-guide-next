import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center'
  },
  imageSide: {
    width: '60%',
    height: '100%',
    margin: '0 auto',
    overflow: 'hidden',
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/company.png)`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    clipPath: 'polygon(0% 0%, 100% 0, 95% 100%, 0% 100%)',
    shapeOutside: 'polygon(0% 0%, 100% 0, 95% 100%, 0% 100%)'
  },
  inputSide: {
    width: '40%',
    height: '100%',
    padding: '5em 2em',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    '& > form': {
      width: '100%',
      maxWidth: '400px',
      display: 'flex',
      flexDirection: 'column',
      '& > div': {
        margin: '8px'
      }
    }
  },
  subject: {
    textAlign: 'center',
    marginBottom: '16px'
  },
  forgot: {
    textAlign: 'right'
  },
  submit: {
    marginTop: '24px !important'
  },
  title: {
    color: '#2d3748',
    fontWeight: 'bold',
    fontSize: '2.5em',
    letterSpacing: '2px',
    margin: '0',
    padding: '8px'
  },
  subTitle: {
    color: '#718096',
    fontSize: '1em',
    letterSpacing: '2px',
    margin: '0',
    padding: '8px',
    '& > a': {
      color: '#05A0E1',
      textDecoration: 'none'
    }
  }
}))

export { useStyles }
