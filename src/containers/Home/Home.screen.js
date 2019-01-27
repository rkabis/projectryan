// @flow

import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

type Props = {
  classes: { root: {} }
}

const styles = {
  root: {}
}

const HomeScreen = (props: Props) => {
  const { classes } = props
  return (
    <div className={classes.root}>
      <Typography variant="display4">Home Screen</Typography>
    </div>
  )
}

export default withStyles(styles)(HomeScreen)
