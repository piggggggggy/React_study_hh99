// // 리액트 패키지를 불러옵니다.
// import React from 'react'; 

// // 함수형 컴포넌트는 이렇게 쓸 수도 있고
// // function Bucketlist(props){
// //     return (
// //         <div>버킷 리스트</div>
// //     );
// // }

// // 이렇게 쓸 수도 있어요. =>가 들어간 함수를 화살표 함수라고 불러요.
// // 저희는 앞으로 화살표 함수를 사용할거예요.
// // 앗 () 안에 props! 부모 컴포넌트에게 받아온 데이터입니다.
// // js 함수가 값을 받아오는 것과 똑같이 받아오네요.
// const BucketList = (props) => {
//     console.log(props)
//     // 컴포넌트가 뿌려줄 ui 요소(리엑트 엘리먼트라고 불러요.)를 반환해줍니다.
//     return (
//         <div>
//             버킷 리스트
//         </div>
//     );
// }

// // 우리가 만든 함수형 컴포넌트를 export 해줍니다.
// // export 해주면 다른 컴포넌트에서 BucketList 컴포넌트를 불러다 쓸 수 있어요.
// export default BucketList;

// ---------------------------------------------------------------------

// // 리액트 패키지를 불러옵니다.
// import React from 'react'; 

// // 함수형 컴포넌트는 이렇게 쓸 수도 있고
// // function Bucketlist(props){
// //     return (
// //         <div>버킷 리스트</div>
// //     );
// // }

// // 이렇게 쓸 수도 있어요. =>가 들어간 함수를 화살표 함수라고 불러요.
// // 저희는 앞으로 화살표 함수를 사용할거예요.
// // 앗 () 안에 props! 부모 컴포넌트에게 받아온 데이터입니다.
// // js 함수가 값을 받아오는 것과 똑같이 받아오네요.
// const BucketList = ({ list }) => {
    
//     // console.log(props);
//     // Quiz 1: my_list에 ['a', 'b', 'c'] 대신 부모 컴포넌트가 넘겨준 값을 넣으려면 어떻게 해야할까요?
//     const my_lists = list;

//     console.log(my_lists)

//     // 컴포넌트가 뿌려줄 ui 요소(리엑트 엘리먼트라고 불러요.)를 반환해줍니다.
//     return (
//         <div>
//             {
//                 // js의 내장 함수 중 하나인 map입니다. 리스트의 갯수만큼 => 오른쪽 구문을 반복해요. 
//                 // 자세한 사용법은 아래 링크를 확인해주세요.
//                 // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//                 my_lists.map((list, index) => {
//                     // 콘솔을 확인해봅시다 :)
//                     console.log(list); 
//                     return (<div key={index}>{list}</div>);
//                 })
//             }
//         </div>
//     );
// }

// // 우리가 만든 함수형 컴포넌트를 export 해줍니다.
// // export 해주면 다른 컴포넌트에서 BucketList 컴포넌트를 불러다 쓸 수 있어요.
// export default BucketList;

//-----------------------------------------------------------------------------------------

// 리액트 패키지를 불러옵니다.
// 리액트 패키지를 불러옵니다.
// import React from "react";
// import styled from "styled-components";
// // import { withRouter } from "react-router";
// import { useSelector, useDispatch } from "react-redux";

// const BucketList = (props) => {
//   const bucket_list = useSelector(state => state.bucket.list)

//   return (
//     <ListStyle>
//       {bucket_list.map((list, index) => {
//         return (
//           <ItemStyle className="list_item" key={index} onClick={() => {props.history.push("/detail/"+index);}}>
//             {list}
//           </ItemStyle>
//         );
//       })}
//     </ListStyle>
//   );
// };

// const ListStyle = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 100%;
//   overflow-x: hidden;
//   overflow-y: auto;
// `;

// const ItemStyle = styled.div`
//   padding: 16px;
//   margin: 8px;
//   background-color: aliceblue;
// `;

// export default BucketList;

// --------------------------------------------------------

// 리액트 패키지를 불러옵니다.
import React from "react";
import styled from "styled-components";

// redux hook을 불러옵니다.
import {useDispatch, useSelector} from 'react-redux';

const BucketList = (props) => {
  // 버킷리스트를 리덕스 훅으로 가져오기
  const bucket_list = useSelector(state => state.bucket.list);

  console.log(bucket_list);




  
  return (
    <ListStyle>
      {bucket_list.map((list, index) => {
        return (
          <ItemStyle
            className="list_item"
            key={index}
            color={list.completed? "orange":"aliceblue"}
            onClick={() => {
              // 배열의 몇번째 항목을 눌렀는 지, url 파라미터로 넘겨줍니다.
              props.history.push("/detail/"+index);
            }}
          >
            {list.text}
          </ItemStyle>
        );
      })}
    </ListStyle>
  );
};

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 50vh;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ItemStyle = styled.div`
  padding: 16px;
  margin: 8px;
  background-color: ${props => props.color};
  font-weight: bold;
`;

export default BucketList;

