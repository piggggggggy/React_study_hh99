import React from "react";
import styled from "styled-components";



const Score = (props) => {

    console.log(props);


    return (
        <Outter>
            <Contents>{''}<span>{props.name}</span> 퀴즈에 대한 내 점수는?</Contents>
            <Contents>{''}<span>20</span> 점</Contents>
            <Text>{''}{props.msg}</Text>
            <ScoreBtn>점수보기</ScoreBtn>
            <RangkingBtn>랭킹보기</RangkingBtn>
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

const Contents = styled.h1`
    font-size: 1.5em;
`

const Text = styled.div`
    margin: 5vh 0px 5vh;

`

const ScoreBtn = styled.button`
    padding: 8px 10px;

    margin: 10px 0px 5px 0px;
    width: 70vw;
    background-color: lightblue;
    border-radius: 30px;
    
`

const RangkingBtn = styled.button`
    padding: 8px 10px;
    margin-topm: 5px;
    width: 70vw;
    background-color: lightgray;
    border-radius: 30px;
`


export default Score;