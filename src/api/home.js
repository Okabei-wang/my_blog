import { host } from './server'
import request from '../util/request'

export function getHomeInfo() {
    return request({
        url: `${host}/home/info`,
        method: 'get'
    })
}