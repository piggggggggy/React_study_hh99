import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    // config
    apiKey: "AIzaSyAeRZYmh8Vsk7La3bZRUIYiTI4aIq4q0m8",
    authDomain: "react-practice99.firebaseapp.com",
    projectId: "react-practice99",
    storageBucket: "react-practice99.appspot.com",
    messagingSenderId: "430562558509",
    appId: "1:430562558509:web:caf54dad190db0a3beaea4",
    measurementId: "G-Z60VE66VXX",
};

firebase.initializeApp(firebaseConfig);  // 초기화

const firestore = firebase.firestore();
// 파이어 스토어에 우리가 가져다 쓸 수 있는 인스턴스가 있을 건데
// 그걸 변수에 넣어놓고 막 가져가 쓰려고 하는 것

export { firestore };