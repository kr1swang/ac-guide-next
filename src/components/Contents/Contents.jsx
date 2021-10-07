import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useStyles } from './contentCSS'
import routes from '../../routes'
import { isEmptyFunc } from '../../utils/LengthUtils'

export default function Contents() {
  const classes = useStyles()
  const { userID } = useSelector((state) => state.auth)
  // 依據 router.role 篩出可以訪問之路由
  const allowAccessRoutes = routes.filter((item) => !item.isPrivate || !isEmptyFunc(userID))

  return (
    <div className={classes.root}>
      <Switch>
        {allowAccessRoutes.map(({ path, Component }, key) => (
          <Route exact={path === '/' ? true : null} path={path} key={key} component={Component} />
        ))}
        <Redirect to={'/'} />
      </Switch>
    </div>
  )
}
