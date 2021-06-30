import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";


const Progress = (props) => {
    
    const bucket_list = useSelector(state => state.bucket.list);
    let count = 0;

    bucket_list.map((l, idx) => {
        if (l.completed === true) {
            count++;
        }
    })

    return (
        <ProgressBar>
            
            <HighLight width={(count/bucket_list.length)*100 + "%"}/>
            <Ball/>
            
        </ProgressBar>
    );
}



const ProgressBar = styled.div`
    background: #eee;
    width: 90%;
    height: 20px;
    border-radius: 10px;
    margin: auto;
    display: flex;
    align-items: center;
`;

const HighLight = styled.div`
    background: orange;
    height: 20px;
    width: ${props => props.width};
    transition: width 1s;
    border-radius: 10px;
`;

const Ball = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: #fff;
    border: 5px solid orange;
    margin-left: -10px;
    box-sizing: border-box;
`


export default Progress;