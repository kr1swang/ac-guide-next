import React from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { isEmptyFunc } from '../../utils/LengthUtils'
import routes from '../../routes'

export default function AutoChangeWebsiteTitle() {
  const location = useLocation()
  const baseName = 'ac-Guide 動森圖鑑'

  const handleCheckIsMatch = (path1, path2) => {
    return path1.split('/')[1] === path2.split('/')[1]
  }

  const handleFindTitle = () => {
    const pageName = routes.find((item) => handleCheckIsMatch(item.path, location.pathname))?.name

    return isEmptyFunc(pageName) ? baseName : `${pageName} - ${baseName}`
  }

  return (
    <Helmet>
      <title>{handleFindTitle()}</title>
    </Helmet>
  )
}
