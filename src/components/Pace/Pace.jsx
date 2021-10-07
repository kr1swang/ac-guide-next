import React from 'react'
import { withStyles } from '@mui/styles'
import 'pace-js'

const styles = {
  '@global': {
    '.pace': {
      pointerEvents: 'none',
      userSelect: 'none'
    },
    '.pace-inactive': {
      display: 'none'
    },
    '.pace .pace-progress': {
      background: (props) => props.color || null,
      position: 'fixed',
      zIndex: 2000,
      top: 0,
      right: '100%',
      width: '100%',
      height: 3
    }
  }
}

function GlobalClass(props) {
  window.paceOptions = {
    ajax: {
      trackMethods: ['GET', 'POST']
    }
  }

  return <React.Fragment />
}

export default withStyles(styles)(GlobalClass)
