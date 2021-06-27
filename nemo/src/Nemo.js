import React from 'react';
import styled from 'styled-components';

const Nemo = (props) => {
    const [count, setCount] = React.useState(3);
    console.log('in nemo');
    console.log(count);

    const addNemo = () => {
        setCount(count+1);
    }
    const removeNemo = () => {
        setCount(count > 0? count-1:0);
    }

    const nemo_count = Array.from({length: count}, (v,i)=>(i));

    return (
        <div className="App">
         {nemo_count.map((num, idx)=>{
          return (
            <Nnemo key={idx}>
              nemo
            </Nnemo>
          )
        })};
        <button onClick={addNemo}>하나 추가</button>
        <button onClick={removeNemo}>하나 빼기</button>
        </div>
    );
}

const Nnemo = styled.div`
  width: 150px;
  height: 150px;
  background-color: #eee;
  margin: 10px;
`


export default Nemo;