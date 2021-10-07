import React from 'react'
import { useHistory } from 'react-router-dom'
import { useStyles } from './homeCSS'
import { Fade, Card, Button } from '@mui/material'
import { Settings, Dashboard, Business, PieChart } from '@mui/icons-material'

export default function Home() {
  const classes = useStyles()
  const history = useHistory()
  const funcList = [
    {
      path: '/admin',
      name: '系統管理',
      icon: <Settings />,
      role: ['admin'],
      isDisabled: true
    },
    {
      path: '/news',
      name: '公告資訊',
      icon: <Dashboard />,
      role: ['user', 'admin'],
      isDisabled: true
    },
    {
      path: '/inventory',
      name: '庫存整合',
      icon: <Business />,
      role: ['user', 'admin'],
      isDisabled: true
    },
    {
      path: '/analytics',
      name: '庫存分析',
      icon: <PieChart />,
      role: ['user', 'admin'],
      isDisabled: true
    }
  ]

  return (
    <Fade in={true} timeout={500}>
      <Card className={classes.root}>
        <div className={classes.subject}>
          <h4>{'Hello'}</h4>
          <h1>{'World'}</h1>
          <p>{'Creat React App。'}</p>
          <div className={classes.funcDiv}>
            {funcList
              // temp to hide disabled func
              .filter((item) => !item.isDisabled)
              .map((item, index) => (
                <Button
                  key={index}
                  size={'large'}
                  color={'primary'}
                  variant={'contained'}
                  onClick={() => history.push(item.path)}
                  title={item.name}
                >
                  {item.icon}
                  {item.name}
                </Button>
              ))}
          </div>
        </div>
      </Card>
    </Fade>
  )
}
