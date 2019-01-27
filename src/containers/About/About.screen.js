// @flow

import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

type Props = {
  classes: Object
}

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column'
  }
}

const AboutScreen = (props: Props) => {
  const { classes } = props
  return (
    <div className={classes.root}>
      <Typography variant="h4" align="center">
        about me
      </Typography>
    </div>
  )
}

export default withStyles(styles)(AboutScreen)
