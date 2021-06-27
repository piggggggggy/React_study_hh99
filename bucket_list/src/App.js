// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
  // const styles = {
  //   border: '1px solid #eee',
  //   padding: '20px',
  //   display: 'flex',
  //   width: '100vw',
  //   maxWidth: '400px',
  //   margin: '30px auto',
  //   flexDirection: 'column',

  // };
//   return (
//     <div className="App">
      // <div style={styles}>
      //   <h1 style={{color: 'green'}}>안녕하세요!</h1>
      //   <hr style={{width: '100%'}}/>
      //   <p style={{textAlign: 'left'}}>이름을 입력해주세요.</p>
      //   <input type='text'/>
      // </div>
//     </div>
//   );
// }

// export default App;

// -------------------------------------------------
// 함수형 컴포넌트

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// // BucketList 컴포넌트를 import 해옵니다.
// // import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
// import BucketList from './BucketList';
// // 함수형 컴포넌트 가져오기

// function App() {

//   return (
//     <div className="App">
//       <h1>내 버킷리스트</h1>
//       {/* 컴포넌트를 넣어줍니다. */}
//       <BucketList/>
//     </div>
//   );
// }

// export default App;


// -----------------------------------------

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// // BucketList 컴포넌트를 import 해옵니다.
// // import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
// import BucketList from './BucketList';

// // 클래스형 컴포넌트는 이렇게 생겼습니다!
// class App extends React.Component {

//   constructor(props){
//     super(props);
//     // App 컴포넌트의 state를 정의해줍니다.
//     this.state = {
//       list: ['영화관 가기', '매일 책읽기', '수영 배우기', '노래 배우기'],
//     };
//   }

//   // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
//   render() {
    
//       console.log(this.state);
//       return (
//       <div className="App">
//         <h1>내 버킷리스트</h1>
//         {/* 컴포넌트를 넣어줍니다. */}
//         <BucketList list = {this.state.list}/>
//       </div>
//     );
//   }
// }

// export default App;

//----------------------------------------------------------

import React from "react";
import logo from "./logo.svg";
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from "./BucketList";
import styled from "styled-components";

// 클래스형 컴포넌트는 이렇게 생겼습니다!
class App extends React.Component {
  constructor(props) {
    super(props);
    // App 컴포넌트의 state를 정의해줍니다.
    this.state = {
      list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
    };

    this.text = React.createRef();
  }

  componentDidMount() {
    console.log(this.text);
    console.log(this.text.current);
  }
  // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
  render() {
    return (
      <div className="App">
        <Container>
          <Title >내 버킷리스트</Title>
          <Line/>
          {/* 컴포넌트를 넣어줍니다. */}
          {/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}
          <BucketList list={this.state.list} />
        </Container>
        
        <div>
          <input type="text" ref={this.text}/>
        </div>
      
      </div>
    );
  }
}

const Container = styled.div`
  max-width: 350px;
  min-height: 80vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

export default App;
//---------------------숙제----------------------------

// import React from 'react';
// import logo from './logo.svg';
// // BucketList 컴포넌트를 import 해옵니다.
// // import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
// import Friends from './Friends';


// // 클래스형 컴포넌트는 이렇게 생겼습니다!
// class App extends React.Component {

//   constructor(props){
//     super(props);
//     // App 컴포넌트의 state를 정의해줍니다.
//     this.state = {
//       name: '벤'
//     };
//   }

//   // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
//   render() {
//     // this 키워드를 통해 state에 접근할 수 있어요.
//       return (
//       <div className="App">
//         <Friends name={this.state.name}/>
//       </div>
//     );
//   }
// }

// export default App;