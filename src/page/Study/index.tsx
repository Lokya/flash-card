import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { loadExlFile } from '../../util/util'
import './index.less';

export interface StudyProps {
}
export interface StudyState {
  fileList: any[]
  fileName: string | undefined
}
class Study extends React.Component <any, StudyState>{

  uploadBtnRef: any = React.createRef();

  state: StudyState = {
    fileList: [],
    fileName: undefined,
  }

  // 上传方法
  onUpload = () => {
    this.uploadBtnRef.current.click()
  }

  // 读取文件
  realUpload = (file: any) => {
    loadExlFile(file).then((res: any) => {
      if(res) {
        this.setState({
          fileName: res.fileName,
          fileList: res.content,
        })
      }
    })
  }

  // 顺序学习
  orderStudy = () => {
    const { fileList } = this.state;
    this.props.history.push({
      pathname: '/flash-card',
      state: {allWords: fileList},
    })
  }

  // 打乱学习
  roundStudy = () => {
    const { fileList } = this.state;
    const shuffleArr = this.shuffle(fileList);
    this.props.history.push({
      pathname: '/flash-card',
      state: {allWords: shuffleArr},
    })
  }

  // 打乱函数
  shuffle = (arr: any) => {
    let i = arr.length;
    let j = 0;
    while (i) {
      j = Math.floor(Math.random() * i--);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  render(){
    const {fileList, fileName} = this.state;
    return (
      <React.Fragment>
        <div className='study'>
          <div className='study-content'>
            <div className='study-title'>
              <div className='upLoad'>
                <input className='upload-btn-real' type="file" ref={this.uploadBtnRef} onChange={this.realUpload}/>
                <a className='upload-btn-phoney' onClick={this.onUpload}>
                  {
                    fileName ? `已经上传:${fileName}` : '上传您要学习的Excel文件'
                  }
                </a>
              </div>
            </div>
            <div className='study-menu'>
              {
                fileList.length > 0 && (
                  <React.Fragment>
                    <div className='study-menu-card'>
                      <a onClick={this.orderStudy}>
                        顺序学习
                      </a>
                    </div>
                    <div className='study-menu-card'>
                      <a onClick={this.roundStudy}>
                        打乱学习
                      </a>
                    </div>
                  </React.Fragment>
                )
              }
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(Study)
