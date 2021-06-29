import React from 'react';
import styled from 'styled-components';

import Quiz from './Quiz';
import Score from './Score';
import Start from './Start';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "항해99",
      page: "Quiz",
      scoreMsg: "분발 좀 하셔야겠어요,,?",
      list: [
        {question: "주특기 강의를 4주차까지 끝냈다.", answer: "O"},
        {question: "숙제나 퀴즈를 스스로 풀었다..", answer: "O"},
        {question: "알고리즘 스터디에 여유롭게 참여할 수 있다.", answer: "O"},
        {question: "잠은 충분히자고, 운동도 꾸준히 한다..", answer: "O"},
        {question: "새로운 조원들과 친하게 지낸다..", answer: "O"},
      ],
    };
  }

  render() {

    return (
      <div className="App">
        {this.state.page === "Start" && (<Start name={this.state.name}/>)}
        {this.state.page === "Score" && (<Score name={this.state.name} msg={this.state.scoreMsg}/>)}
        {this.state.page === "Quiz" && (<Quiz list={this.state.list}/>)}
      </div>
    );
  }

}

export default App;
