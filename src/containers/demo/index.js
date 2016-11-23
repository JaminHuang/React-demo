/**
 * Created by JaminHuang on 2016/11/23.
 */
'use strict';
import React,{ Component } from 'react';

import Change from '../../components/demo/change';

class Demo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        switch (this.props.params.type) {
            case "change":
                return (<Change></Change>);
            default:
                return (<div>测试</div>);
        }
    }
}

export default Demo;