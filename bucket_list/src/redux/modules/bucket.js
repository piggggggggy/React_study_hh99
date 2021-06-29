// bucket.js

// Actions
const LOAD   = "bucket/LOAD"
const CREATE = "bucket/CREATE"
// Action Creators
export function loadWidgets() {
    return { type: LOAD };
  }
  
  export function createWidget(widget) {
    return { type: CREATE, widget };
  }
  
  export function updateWidget(widget) {
    return { type: UPDATE, widget };
  }
  
  export function removeWidget(widget) {
    return { type: REMOVE, widget };
  }
  
// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    // do reducer stuff
    default: return state;
  }
}

