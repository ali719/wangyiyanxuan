/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import data from './datahome.json'// webapck在打包会自动解析成对应的js对象/数组

Mock.mock('/focusList', {code: 0, data: data.focusList})

Mock.mock('/home', {code: 0, data: data})



