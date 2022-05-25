import axios from 'axios'

// create an axios instance
const service = axios.create({
    baseURL: '', // url = base url + request url
    withCredentials: true, // send cookies when cross-domain requests
    timeout: 15000 * 2 // request timeout
})

service.interceptors.request.use(
    config => {
        return config
    },
    error => {
        // do something with request error
        // console.log(error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */
  
    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
      const res = response.data
      if (res.code && res.code !== 0) {
        console.log(res.message)
      } else if (response.data instanceof Blob) {
        return res
      } else {
        return res
      }
    },
    error => {
      // console.log('err' + error) // for debug
      Message({
        message: error.errmsg,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(error)
    }
)

export default service