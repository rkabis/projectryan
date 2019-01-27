// @flow

import React from 'react'

import { Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

type Props = {
  classes: Object
}

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  about: {
    textDecoration: 'none'
  }
}

const HomeScreen = (props: Props) => {
  const { classes } = props
  return (
    <div className={classes.root}>
      <Typography variant="h4" align="center">
        Ryan Abis
      </Typography>
      <Link to="/about" className={classes.about}>
        <Typography variant="h6" align="center" color="textSecondary">
          About
        </Typography>
      </Link>
    </div>
  )
}

export default withStyles(styles)(HomeScreen)
