import axios from 'axios'
const jsonP = require('jsonp')
// import QS from 'qs'
// import { Message, MessageBox } from 'element-ui'
// import $config from '../config/index'

/**
 * @description 封住http请求
 * @author mr_zhaojie
 * @date 2020-03-06
 */

axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.baseURL = 'http://rap2.taobao.org:38080/app/mock/248550/'

const request = function (url, params, config, method) {
  return new Promise((resolve, reject) => {
    axios[method](url, params, Object.assign({}, config)).then(response => {
      resolve(response.data)
    }, err => {
      if (err.Cancel) {
        console.log(err)
      } else {
        reject(err)
      }
    }).catch(err => {
      reject(err)
    })
  })
}

const post = (url, params, config = {}) => {
  return request(url, params, config, 'post')
}

const get = (url, params, config = {}) => {
  return request(url, params, config, 'get')
}

const jsonp = function (url) {
  return new Promise((resolve, reject) => {
    jsonP(url, null, (err, data) => {
      if (err) {
        reject(err.message)
      } else {
        resolve(data)
      }
    })
  })
}

export { post, get, jsonp }
