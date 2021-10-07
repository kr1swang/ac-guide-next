import Home from './containers/Home'
// import Login from './containers/Login'
// import Profile from './containers/Profile'
// import Guide from './containers/Guide'
// import Privacy from './containers/Privacy'
// import Terms from './containers/Terms'
// import License from './containers/License'

const routes = [
  {
    path: '/',
    name: '首頁',
    Component: Home,
    isPrivate: false
  }
  // {
  //   path: '/login',
  //   name: '用戶登入',
  //   Component: Login,
  //   isPrivate: false
  // },
  // {
  //   path: '/profile',
  //   name: '帳戶設定',
  //   Component: Profile,
  //   isPrivate: true
  // },
  // {
  //   path: '/guide/:type(bug|fish|sea-creatures|fossil|art|song)?',
  //   name: '圖鑑',
  //   Component: Guide,
  //   isPrivate: false
  // },
  // {
  //   path: '/privacy',
  //   name: '私隱政策',
  //   Component: Privacy,
  //   isPrivate: false
  // },
  // {
  //   path: '/terms',
  //   name: '使用條款',
  //   Component: Terms,
  //   isPrivate: false
  // },
  // {
  //   path: '/license',
  //   name: '授權條款',
  //   Component: License,
  //   isPrivate: false
  // }
]

export default routes
