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

// import React from "react";
// import { withRouter } from "react-router";
// import { Route, Switch } from "react-router-dom";
// // BucketList 컴포넌트를 import 해옵니다.
// // import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
// import BucketList from "./BucketList";
// import styled from "styled-components";
// import Detail from "./Detail";
// import NotFound from "./NotFound";

// import {connect} from "react-redux";
// import { loadBucket, createBucket } from "./redux/modules/bucket";

// const mapStateToProps = (state) => {
//   return {bucket_list: state.bucket.list};
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     load: () => {
//       dispatch(loadBucket());
//     },
//     create: (bucket) => {
//       dispatch(createBucket(bucket));
//     }
//   }
// }
// // 클래스형 컴포넌트는 이렇게 생겼습니다!
// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       // list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
//     };

//     this.text = React.createRef();
//   }

//   componentDidMount() {
//     console.log(this.props);
//   }

//   addBucket = () => {
    
//     const addText = this.text.current.value;
//     this.props.create(addText);

//   }
//   // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
//   render() {
//     return (
//       <div className="App">

//         <Container>
//           <Title >내 버킷리스트</Title>
//           <Line/>
//           {/* 컴포넌트를 넣어줍니다. */}
//           {/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}
//           {/* <BucketList list={this.state.list} /> */}
//           <Switch>
//             <Route path="/" exact render={(props) => (<BucketList history={props.history}/>)}/>
//             <Route path="/detail/:index" render={(props) => <Detail match={props.match} history={props.history}/>}/>
//             <Route render={(props) => (<NotFound history={props.history}/>)} />
//           </Switch>
//         </Container>
        
//         <MiniContainer>
//           <input type="text" ref={this.text}/>
//           <button onClick={this.addBucket}>추가하기</button>
//         </MiniContainer>

//       </div>
//     );
//   }
// }

// const MiniContainer = styled.div`
//   max-width: 350px;
//   min-height: 10vh;
//   background-color: #fff; 
//   padding: 16px;
//   margin: 20px auto;
//   border-radius: 5px;
//   border: 1px solid #ddd;
// `;

// const Container = styled.div`
//   max-width: 350px;
//   min-height: 80vh;
//   background-color: #fff;
//   padding: 16px;
//   margin: 20px auto;
//   border-radius: 5px;
//   border: 1px solid #ddd;
// `;

// const Title = styled.h1`
//   color: slateblue;
//   text-align: center;
// `;

// const Line = styled.hr`
//   margin: 16px 0px;
//   border: 1px dotted #ddd;
// `;

// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
//---------------------숙제----------------------------
import React from "react";

import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";

// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from "./BucketList";
import styled from "styled-components";
import Detail from "./Detail";
import NotFound from "./NotFound";
import Progress from "./Progress";

// 리덕스 스토어와 연결하기 위해 connect라는 친구를 호출할게요!
import {connect} from 'react-redux';
// 리덕스 모듈에서 (bucket 모듈에서) 액션 생성 함수 두개를 가져올게요!
import {loadBucket, createBucket} from './redux/modules/bucket';

// 이 함수는 스토어가 가진 상태값을 props로 받아오기 위한 함수예요.
const mapStateTopProps = (state) => ({
  bucket_list: state.bucket.list,
});

// 이 함수는 값을 변화시키기 위한 액션 생성 함수를 props로 받아오기 위한 함수예요.
const mapDispatchToProps = (dispatch) => ({
  load: () => {
    dispatch(loadBucket());
  },
  create: (new_item) => {
    dispatch(createBucket(new_item));
  }
});

// 클래스형 컴포넌트는 이렇게 생겼습니다!
class App extends React.Component {
  constructor(props) {
    super(props);
    // App 컴포넌트의 state를 정의해줍니다.
    this.state = {
     
    };
    // ref는 이렇게 선언합니다!
    this.text = React.createRef();
  }

  componentDidMount() {
    console.log(this.props);
  }

  addBucketList = () => {
    const new_item = this.text.current.value;
    this.props.create(new_item);
  };

  // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
  render() {
    return (
      <div className="App">
        <Container>
          <Title>내 버킷리스트</Title>
          <Progress/>
          <Line />
          {/* 컴포넌트를 넣어줍니다. */}
          {/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}
          {/* Route 쓰는 법 2가지를 모두 써봅시다! */}
          <Switch>
            <Route path="/" exact component={BucketList} />
            <Route path="/detail/:index" component={Detail} history={this.props.history} />
            <Route component={NotFound} />
          </Switch>
        </Container>
        {/* 인풋박스와 추가하기 버튼을 넣어줬어요. */}
        <Input>
          <input type="text" ref={this.text} />
          <button onClick={this.addBucketList}>추가하기</button>
        </Input>
        <button onClick={() => {window.scrollTo({top:0, left:0, behavior:"smooth"})}}>위로가기</button>
      </div>
    );
  }
}

const Input = styled.div`
  max-width: 350px;
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Container = styled.div`
  max-width: 350px;
  min-height: 60vh;
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
// withRouter 적용
// connect로 묶어줬습니다!
export default connect(mapStateTopProps, mapDispatchToProps)(withRouter(App));
