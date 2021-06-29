import React from "react";
import styled from "styled-components";
// import img from "./piggy";
import TinderCard from "react-tinder-card";
import Swipe from "./Swipe";


const Quiz = (props) => {

    console.log(props);
    console.log(props.list[1]);
    
    const [num, setNum] = React.useState(0);

    const onSwipe = (direction) => {
        console.log("You swiped: " + direction);
        setNum(num + 1);
    };

    if (num > 10) {
        return <div>퀴즈 끝!</div>
    }


    return (
        <Outter>
            <p>
                <Qnum>{num+1}번 문제</Qnum>
            </p>
            {props.list.map((x, idx) => {
                if (num === idx) {
                    return <QuizText key={idx}>{''}{x.question}</QuizText>
                }
            })}

            <AnswerCheck>
                <Answer>O</Answer>
                <Answer>X</Answer>
            </AnswerCheck>

            {props.list.map((l, idx) => {
                if (idx === num) {
                    return <Swipe key={idx} onSwipe={onswipe}/>;
                }
            })}
        </Outter>
    );
};

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

const Qnum = styled.h2`

`

const QuizText = styled.h1`

`

const AnswerCheck = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    min-height: 70vh;
`
const Answer = styled.div`
    with: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
    font-weight: 600;
    color: lightblue;
`


export default Quiz;