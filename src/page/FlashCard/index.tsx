import * as React from 'react';
import { SyntheticEvent } from 'react';
import './index.less';
import { withRouter } from 'react-router-dom';

export interface FlashCardState {
  wordsList: any[]
  rotateIndexs: any[]
  position: number
}
class FlashCard extends React.Component<any, FlashCardState> {

  state: FlashCardState = {
    wordsList: [],
    rotateIndexs: [],
    position: 0,
  }

  componentDidMount() {
    let state = this.props.location.state;
    if (state != null && state.allWords != null) {
        this.setState({
          wordsList: state.allWords,
        })
    } else {
        console.log('数据没有获取到哦！')
    }
  }

  rotateCard = (e: SyntheticEvent, word: any) => {
    e.stopPropagation();
    const { rotateIndexs } = this.state;
    let newArr = [];
    if(rotateIndexs.find(i => word.key === i.key)){
      newArr = rotateIndexs.filter(i => word.key !== i.key)
    } else {
      newArr = [...rotateIndexs, word]
    }
    this.setState({
      rotateIndexs: newArr
    })
  }

  next = () => {
    const { position, wordsList } = this.state;
    const len = (wordsList.length -1 )*44 ;
    this.setState({
      position: position <= -len ? position : position - 44
    })
  }

  previous = () => {
    const { position } = this.state;
    this.setState({
      position: position >= 0 ? position : position + 44,
    })
  }

  render() {
    const { wordsList, rotateIndexs, position } = this.state;
    return (
      <div className='card-show'>
        <div className='card-content'>
          <div className='card-list' style={{width: `${wordsList.length * 44}rem`, marginLeft: `${position}rem`}}>
            {
              wordsList.length > 0 && wordsList.map((word: any) => {
                const changeFlag = rotateIndexs.find(i => i.key === word.key);
                return (
                  <div className='card-box' key={word.key}>
                    <div className={`card-front ${changeFlag ? 'rotate-front' : ''}`} >
                      <span className='change-btn' onClick={(e) => this.rotateCard(e, word)}></span>
                      <span className='pre-btn' onClick={this.previous}></span>
                      <span className='next-btn' onClick={this.next}></span>
                      <div className='word'>{word.word}</div>
                    </div>
                    <div className={`card-back ${changeFlag ? 'rotate-back' : ''}`}>
                      <span className='change-btn' onClick={(e) => this.rotateCard(e, word)}></span>
                      <div className='word'>{word.translate}</div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(FlashCard);
