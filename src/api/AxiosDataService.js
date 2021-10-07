import axios from 'axios'

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_ENDPOINT}/api`
})

const getData = async (options) => {
  const { method, url, data, token, config } = options
  const lowerMethod = method.toLowerCase()
  const headers = {
    headers: {
      Authorization: token ? `Bearer ${token}` : null
    }
  }

  switch (lowerMethod) {
    case 'post':
      return await instance.post(url, data, headers, config)
    case 'get':
      return await instance.get(url, { ...headers, params: data })
    case 'delete':
      return await instance.delete(url, { ...headers, params: data })
    case 'put':
      return await instance.put(url, data, headers)
    case 'patch':
      return await instance.patch(url, data)
    default:
      console.log(`未知的 method: ${method}`)
      return false
  }
}

const axiosData = async (options) => {
  try {
    const res = await getData(options)
    return res
  } catch (err) {
    return Promise.reject(err)
  }
}

export default axiosData
