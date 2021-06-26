// // 리액트 패키지를 불러옵니다.
// import React from 'react'; 
// import img from "./scc_img01.png"

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
// const Friends = (props) => {
    
//     // Quiz 1: my_list에 ['a', 'b', 'c'] 대신 부모 컴포넌트가 넘겨준 값을 넣으려면 어떻게 해야할까요?
//     console.log(props);
//     // 컴포넌트가 뿌려줄 ui 요소(리엑트 엘리먼트라고 불러요.)를 반환해줍니다.
//     return (
//         <div
//             style={{
//                 display: "flex",
//                 height: "100vh",
//                 width: "100vw",
//                 overflow: "hidden",
//                 padding: "16px",
//                 boxSizing: "border-box",
//             }}
//         >
//             <div className="outter"
//                 style={{
//                     display: "flex",
//                     alignitems: "center",
//                     flexDirection: "column",
//                     justifyContent: "center",
//                     height: "100vh",
//                     width: "100vw",
//                     overflow: "hidden",
//                     padding: "0px 10vw",
//                     boxSizing: "border-box",
//                     maxWidth: "400px",
//                 }}
//             >
//                 <img src={img} style={{ width: "80%", margin: "16px" }} />
//                 <h1 style={{ fontSize: "1.5em", margin: "0px", lineHeight: "1.4" }}>
//                     나는{" "}
//                     <span
//                         style={{
//                             backgroundColor: "yellowgreen",
//                             padding: "5px 10px",
//                             borderRadius: "30px",
//                         }}
//                     >
//                         {props.name}
//                     </span>
//                     에 대해 얼마나 알고 있을까?
//                 </h1>
//                 <input 
//                     type="text"
//                     style={{
//                         padding: "10px",
//                         margin: "24px 0px",
//                         border: "1px solid #dadafc",
//                         borderRadius: "30px",
//                         width: "100%",
//                     }}
//                     placeholder="내 이름" 
//                 />
//                 <button
//                     style={{
//                         padding: "8px 24px",
//                         backgroundColor: "#dadafc",
//                         borderRadius: "30px",
//                         border: "dadafc",
//                     }}
//                 >
//                     시작하기
//                 </button>
//             </div>
//         </div>
           
//     );
// }

// 우리가 만든 함수형 컴포넌트를 export 해줍니다.
// export 해주면 다른 컴포넌트에서 BucketList 컴포넌트를 불러다 쓸 수 있어요.
export default Friends;