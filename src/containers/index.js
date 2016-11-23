/**
 * 创建时间：2016年9月19日 10:51:04
 * 创建人：JaminHuang
 * 描述：组件处理主文件
 */
'use strict';
import React,{ Component } from 'react';

class Container extends Component {

    componentWillMount() {
    }

    render() {
        const { children } = this.props;
        return (<div>{children}</div>)
    }
}


export default Container;