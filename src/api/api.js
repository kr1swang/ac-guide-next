import axiosData from './AxiosDataService'

/* auth */
export const postLogin = async (data, token) => {
  try {
    const initOptions = {
      url: '/login',
      method: 'POST',
      data: data,
      token: token
    }

    const res = await axiosData(initOptions)
    return res.data
  } catch (err) {
    return Promise.reject(err)
  }
}

export const postLogout = async (data, token) => {
  try {
    const initOptions = {
      url: '/logout',
      method: 'POST',
      data: data,
      token: token
    }

    const res = await axiosData(initOptions)
    return res.data
  } catch (err) {
    return Promise.reject(err)
  }
}

/* user */
export const getUserView = async (data, token) => {
  try {
    const initOptions = {
      url: '/user/view',
      method: 'GET',
      data: data,
      token: token
    }

    const res = await axiosData(initOptions)
    return res.data
  } catch (err) {
    return Promise.reject(err)
  }
}

export const postUserRegistered = async (data, token) => {
  try {
    const initOptions = {
      url: '/user/registered',
      method: 'POST',
      data: data,
      token: token
    }

    const res = await axiosData(initOptions)
    return res.data
  } catch (err) {
    return Promise.reject(err)
  }
}

export const postUserResetPassword = async (data, token) => {
  try {
    const initOptions = {
      url: '/user/reset/password',
      method: 'POST',
      data: data,
      token: token
    }

    const res = await axiosData(initOptions)
    return res.data
  } catch (err) {
    return Promise.reject(err)
  }
}

export const postUserForgotPassword = async (data, token) => {
  try {
    const initOptions = {
      url: '/user/forgot/password',
      method: 'POST',
      data: data,
      token: token
    }

    const res = await axiosData(initOptions)
    return res.data
  } catch (err) {
    return Promise.reject(err)
  }
}

export const putUserSet = async (data, token) => {
  try {
    const initOptions = {
      url: `/user/set/${data.code}`,
      method: 'PUT',
      data: data,
      token: token
    }

    const res = await axiosData(initOptions)
    return res.data
  } catch (err) {
    return Promise.reject(err)
  }
}

export const deleteUserSet = async (data, token) => {
  try {
    const initOptions = {
      url: `/user/set/${data.code}`,
      method: 'DELETE',
      data: data,
      token: token
    }

    const res = await axiosData(initOptions)
    return res.data
  } catch (err) {
    return Promise.reject(err)
  }
}

/* nearest-forcast */
export const postNearestForcastView = async (data, token) => {
  try {
    const initOptions = {
      url: '/nearest-forcast/view',
      method: 'POST',
      data: data,
      token: token
    }

    const res = await axiosData(initOptions)
    return res.data
  } catch (err) {
    return Promise.reject(err)
  }
}

/* nearest-year-forcast */
export const getNearestYearForcastView = async (data, token) => {
  try {
    const initOptions = {
      url: `/nearest-year-forcast/view/${data.weekDiff ?? ''}`,
      method: 'GET',
      data: data,
      token: token
    }

    const res = await axiosData(initOptions)
    return res.data
  } catch (err) {
    return Promise.reject(err)
  }
}

/* factory-info-data */
export const getFactoryInfoDataView = async (data, token) => {
  try {
    const initOptions = {
      url: '/factory-info-data/view',
      method: 'GET',
      data: data,
      token: token
    }

    const res = await axiosData(initOptions)
    return res.data
  } catch (err) {
    return Promise.reject(err)
  }
}

/* stock-analysis */
export const postStockAnalysis = async (data, token) => {
  try {
    const initOptions = {
      url: '/cio-info/stock-analysis',
      method: 'POST',
      data: data,
      token: token
    }

    const res = await axiosData(initOptions)
    return res.data
  } catch (err) {
    return Promise.reject(err)
  }
}

/* stock-analysis-detail */
export const postStockAnalysisDetail = async (data, token) => {
  try {
    const initOptions = {
      url: '/cio-info/stock-analysis-detail',
      method: 'POST',
      data: data,
      token: token
    }

    const res = await axiosData(initOptions)
    return res.data
  } catch (err) {
    return Promise.reject(err)
  }
}

/* match-sale */
export const postMatchSale = async (data, token) => {
  try {
    const initOptions = {
      url: '/cio-info/match-sale',
      method: 'POST',
      data: data,
      token: token
    }

    const res = await axiosData(initOptions)
    return res.data
  } catch (err) {
    return Promise.reject(err)
  }
}

/* product-data */
export const postProductData = async (data, token) => {
  try {
    const initOptions = {
      url: '/cio-info/product-data',
      method: 'POST',
      data: data,
      token: token
    }

    const res = await axiosData(initOptions)
    return res.data
  } catch (err) {
    return Promise.reject(err)
  }
}

/* history */
export const postHistory = async (data, token) => {
  try {
    const initOptions = {
      url: '/cio-info/history',
      method: 'POST',
      data: data,
      token: token
    }

    const res = await axiosData(initOptions)
    return res.data
  } catch (err) {
    return Promise.reject(err)
  }
}

/* will-expired */
export const postWillExpired = async (data, token) => {
  try {
    const initOptions = {
      url: '/so-out/will-expired',
      method: 'POST',
      data: data,
      token: token
    }

    const res = await axiosData(initOptions)
    return res.data
  } catch (err) {
    return Promise.reject(err)
  }
}
