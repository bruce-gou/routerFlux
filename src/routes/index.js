import { connect } from '../utils/dva';
import React, { Component } from 'react';
//组件
import Routers from './router.js';
class Router extends Component {
  render() {
    return <Routers/>;
  }
}
//export function routerReducer(state, action = {}) {
//return Routers.router.getStateForAction(action, state)
//}
export default Router;
