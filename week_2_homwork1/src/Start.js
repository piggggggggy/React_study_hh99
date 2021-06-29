// 리액트 패키지를 불러옵니다.
import React from 'react'; 

import img from "./scc_img01.png";
import styled from 'styled-components';

const Start = (props) => {
    
    console.log(props);

    return (
        <Outter>
            <Pic src={img}/>
            <Contents>
                나는{" "}
                <Name>
                    {props.name}
                </Name>
                에서 얼마나 잘하고 있을까?
            </Contents>
            <Input placeholder="내 이름"/>
            <Btn>
                시작하기
            </Btn>
        </Outter>    
    );
}


const Outter = styled.div`
    display: flex;
    alignitems: center;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    padding: 16px 15vw 16px 15vw;
    box-sizing: border-box;
    max-width: 400px;
`

const Pic = styled.img`
    width: 80%; 
    margin: 16px;
`

const Contents = styled.h1`
    font-size: 1.5em; 
    margin: 0px; 
    line-height: 1.4;
`

const Name = styled.span`
    background-color: yellowgreen;
    padding: 5px 10px;
    border-radius: 30px;
`

const Input = styled.input`
    padding: 10px;
    margin: 24px 0px;
    border: 1px solid #dadafc;
    border-radius: 30px;
    width: 100%;
`
const Btn = styled.button`
    padding: 8px 24px;
    background-color: lightgray;
    border-radius: 30px;
    border: dadafc;
`

// 우리가 만든 함수형 컴포넌트를 export 해줍니다.
// export 해주면 다른 컴포넌트에서 BucketList 컴포넌트를 불러다 쓸 수 있어요.
export default Start;