import jsonp from '../assets/js/jsonp'
import axios from 'axios'
import {
  commonParams,
  options
} from './config'

export function getRich () {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'
  const data = Object.assign({},
    commonParams, {
      platform: 'h5',
      uin: 0,
      needNewCode: 1
    }
  )
  return jsonp(url, data, options)
}

export function getRichList () {
  const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg?_=1569894455994'

  return axios.post(url, {
    param: {}
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
