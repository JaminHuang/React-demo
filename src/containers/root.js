/**
 * 创建时间：2016年9月19日 10:51:04
 * 创建人：JaminHuang
 * 描述：地址跳转配置文件
 */
'use strict';
import Index from './';
import Demo from './demo';


export default {
    component: Index,
    path: '/',
    childRoutes: [
        {
            component: Demo,
            path: 'demo-:type'
        }
    ]
}