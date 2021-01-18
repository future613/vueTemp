import Cookies from 'js-cookie'

import uuid from './uuid'
const TOKEN_KEY = 'token'
const PIN_KEY = 'PIN'
const USER_KEY = 'user'


// 获取 token
export function getToken() {
    return Cookies.get(TOKEN_KEY)
}
// 保存 token
export function setToken(token) {
    return Cookies.set(TOKEN_KEY, token)
}
// 获取 pin
export function getPin() {
    return Cookies.get(PIN_KEY)
}
// 设置 pin
export function setPin() {
    return Cookies.set(PIN_KEY, uuid())
}
// 获取用户信息
export function getUser() {
    return JSON.parse(Cookies.get(USER_KEY))
}
//保存用户信息
export function setUser(user) {
    Cookies.set(USER_KEY, JSON.stringify(user))
}
//移除用户信息
export function removeToken() {
    Cookies.remove(TOKEN_KEY)
    Cookies.remove(PIN_KEY)
    Cookies.remove(USER_KEY)
}
