import axios from 'axios'
import { message } from 'antd'

export default class Axios {
  static ajax(options){
    const baseURL = 'https://easy-mock.com/mock/5cb68dd0e3926e3006389002/api/'
    return new Promise((resolve,reject)=>{
      axios({
        url: options.url,
        method: 'get',
        baseURL,
        timeout: 5000,
        params: (options.data && options.data.params) || ''
      })
      .then(res=>{
        if(res.status === 200 && res.data.code === 0){
          resolve(res.data)
          message.success('列表信息获取成功')
        }else{
          message.error('列表信息获取失败')
          reject(res.data)
        }
      })
      .catch(err=>{
        message.error('列表信息获取失败')
        reject(err)
      })
    })
  }
}