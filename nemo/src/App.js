// import React from 'react';
// import styled from 'styled-components';

// class App extends React.Component {

//   constructor(props){
//     super(props);

//     this.state = {
//       count: 3,
//     };
//   }

//    addNemo = () => {
//     this.setState({count: this.state.count + 1});
//     console.log('add nemo');
//    }
   
//    removeNemo = () => {
//     if(this.state.count > 0) {
//     this.setState({count: this.state.count - 1});
//     console.log('remove nemo')
//     }else{
//       window.alert('네모가 업성요!');
//     }
//   }

//   render() {
//     const nemo_count = Array.from({length: this.state.count}, (v,  i)=>(i));
//     return (
//       <div className="App">
//         {nemo_count.map((num, idx)=>{
//           return (
//             <Nemo key={idx}>
//               nemo
//             </Nemo>
//           )
//         })};
//         <button onClick={this.addNemo}>하나 추가</button>
//         <button onClick={this.removeNemo}>하나 빼기</button>
//       </div>
//     );
//   }
      
// }

// const Nemo = styled.div`
//   width: 150px;
//   height: 150px;
//   background-color: #eee;
//   margin: 10px;
// `

// export default App;


// 위에는 클래스형

// ==========================================================================

import React from 'react';
import styled from 'styled-components';

import Nemo from './Nemo';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {};

    this.div = React.createRef();
  }

  hoverEvent = (e) => {
    console.log(e);
    console.log(e.target);
    
    e.target.style.backgroundColor = "#eee"
  }

  componentDidMount() {
    this.div.current.addEventListener("mouseover", this.hoverEvent);
  }

  componentWillUnmount() {
    this.div.current.removeEventListener("mouseover", this.hoverEvent);
  }


  render() {
    return (
      <div className="App" ref={this.div}>
        <Nemo/>
      </div>
    );
  }
      
}

export default App;

