// bucket.js

// firestore 객체 가져오기!!!
import { DOCUMENT_POSITION_CONTAINED_BY } from "min-document";
import { firestore } from "../../firebase.js"

// collection 을 전역변수로 만들기!!!
const bucket_db = firestore.collection("bucket");


// Actions
const LOAD = "bucket/LOAD"
const CREATE = "bucket/CREATE"
const DELETE = "bucket/DELETE"
const UPDATE = "bucket/UPDATE"

const initialState = {
    list: [
        {text: "영화관 가기", completed: false },
        {text: "매일 책읽기", completed: false },
        {text: "수영 배우기", completed: false },
    ]
    // list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
}

// Action Creators

export const loadBucket = (bucket) => {
    return { type: LOAD, bucket };
}

export const createBucket = (bucket) => {
    return {type: CREATE, bucket};
}

export const deleteBucket = (bucket) => {
    return {type: DELETE, bucket};
}

export const updateBucket = (bucket) => {
    return {type: UPDATE, bucket};
}

// 통신함수
// load
export const loadBucketFB = () => {
    // 객체 대신 함수를 반환 하므로
    return function (dispatch){
        bucket_db.get().then((docs) => {
            let bucket_data = [];
            docs.forEach((doc) => {
                if(doc.exists){
                    bucket_data = [...bucket_data, {id: doc.id, ...doc.data()}];
                }
            });
            console.log(bucket_data);
            // 액션생성함수한테 우리가 가져온 데이터를 넘겨주는 부분, 튜터님 누락??
            dispatch(loadBucket(bucket_data));
        });
    };
};

// add
export const addBucketFB = (bucket) => {

    return function (dispatch){
        // 우리가 추가할 버킷 데이터
        let bucket_data = {text: bucket, completed: false};

        bucket_db.add(bucket_data).then(docRef => {
            bucket_data = {...bucket_data, id: docRef.id};
            dispatch(createBucket(bucket_data));
            // dispatch를 왜 여기서 하는지 이해가 ㅇㄴ되넹...
        });
    };
};

// update
export const updateBucketFB = (bucket) => {
    // 이번엔 getState 사용
    return function (dispatch, getState){
        // 수정되기 전에 데이터를 담을 변수
        // => 이 리덕스 스토어에서 가지고있는 어떤 state 들을 가져옴
        // 여기서 뒤에 bucket은 파라미터, 앞에 bucket은 뭘까,,, 컬렉션 네임???
        const _bucket_data = getState().bucket.list[bucket];
        console.log(_bucket_data);
        // 업데이트할 데이터를 담을 변수
        let bucket_data = {..._bucket_data, completed: true};

        if(!bucket_data.id){
            return;
        }; // 요청한 데이터의 id가 없으면 파이어스토어에 요청을 멈춘다
        // 에러를 미연에 방지 (혹시나 있을 에러)

        // 업데이트 + 아이디 지정해주지
        // completed 만 바꿔줘도 되지만 변수만드는 걸 연습하려고 이렇게 했다고함
        bucket_db.doc(_bucket_data.id).update(bucket_data).then(docRef => {
            dispatch(updateBucket(bucket));
            // 여기에서 docRef 도 이해가 안되고 dispatch의 역할과 위치도 이해가 안된다.
            // 리덕스의 구조에 대해 다시 공부해야할듯...
            // 리듀서를 안고쳐도 된다는데 왜그런지도 잘모르겠다.
        }).catch(error => {
            console.log(error);
        });   // 에러가 나면 에러 메세지 찍어주는 구문
    };
};

// delete
export const deleteBucketFB = (bucket) => {
    return function (dispatch, getState) {
        const bucket_data = getState().bucket.list[bucket];

        if(!bucket_data.id){
            return;
        }; // 에러 미연에 방지 (혹시나 있을 에러)

        bucket_db.doc(bucket_data.id).delete().then(docRef => {
            dispatch(deleteBucket(bucket));
            // 삭제가 되고난 다음에 dispatch???? 리덕스 다시 공부,,,
        }).catch(error => {
            console.log(error);
        });
    };
};

  
// Reducer

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
      // do reducer stuff
      case "bucket/LOAD": {
        if (action.bucket.length > 0){
            return {list: action.bucket}
        };
        return state;        
      }

  
      case "bucket/CREATE":
        const new_bucket_list = [...state.list, action.bucket];
        return { list: new_bucket_list };
        
      case "bucket/DELETE":
        const delete_list = state.list.filter( (l, idx) => {
            if (idx !== action.bucket){
                return l;
            }   //??????????????????????????????????????
        });
        return { list: delete_list };  
      
      case "bucket/UPDATE":
        const bucket_list = state.list.map((l, idx) => {
            if (idx === action.bucket){
                return { ...l, completed: true };
            }else{
                return l;
            }
        });  
        return { list: bucket_list };

      default:
        return state;
    }
  }

