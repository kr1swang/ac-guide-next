import React from 'react'
import PropTypes from 'prop-types'
import { Backdrop, CircularProgress } from '@mui/material'
import { useStyles } from './loadingCSS'

Loading.propTypes = {
  isLoading: PropTypes.bool
}

export default function Loading({ isLoading = true }) {
  const classes = useStyles()

  return (
    <Backdrop className={classes.backdrop} open={isLoading} transitionDuration={500}>
      <CircularProgress />
    </Backdrop>
  )
}
