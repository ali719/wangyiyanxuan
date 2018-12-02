/*
 包含n个接口请求函数的模块
 函数的返回值是promise对象
 */

import ajax from './ajax'
//首页轮播图
export const reqBannerList = () => ajax('/focusList')
// 首页所有数据
export const reqHomeData = () => ajax('/home')
// 分类数据
export const reqClassify = () => ajax('/classify')
