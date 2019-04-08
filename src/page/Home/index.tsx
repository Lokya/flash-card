import * as React from 'react';
import { Link } from 'react-router-dom';
import './index.less';

export default class Home extends React.Component{
  render(){
    return (
      <React.Fragment>
        <div className='flash-card'>
          <div className='flash-card-content'>
            <div className='title'>
              <h1>欢迎使用记忆卡片</h1>
            </div>
            <div className='menu'>
              <div className='menu-card'>
                <Link to='/study'>
                  开始学习
                </Link>
              </div>
              <div className='menu-card'>
                <Link to='/help'>
                  使用文档
                </Link>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
