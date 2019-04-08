import * as React from 'react';
import './index.less';

export interface ButtonOptions{
  text: string, // 文本
  icon?: string, // 图标样式
  size?: string, // 大小
  type?: string, // 类型
  className?: string, // 名称
  onClick?: () => void, // 点击事件
}

export default class Button extends React.Component <ButtonOptions, any>{
  static defaultProps = {
    size: 'normal',
    type: 'default',
    defaultBtn: 'lk-default-btn',
  }

  constructor(props: ButtonOptions){
    super(props)
  }

  render(){
    const {
      size, onClick, text, icon, type, className
    } = this.props;
    const iconClass = `lk-icon lk-icon-${icon}`;
    const btnClass = `${className} lk-btn lk-btn-size-${size} lk-btn-type-${type}`
    return (
      <a className={btnClass} onClick={onClick} >
        {
          icon && (
            <i className={iconClass}></i>
          )
        }
        {text}
      </a>
    )
  }
}
