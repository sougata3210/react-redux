import { createStore } from 'redux'
import { combineReducers } from 'redux'
function todosReducer(state = {"user":"initial user"}, action) { //[] is considered as initial state
    switch (action.type) {
      case 'ADD_TODO':
          alert(action.text);
       // return state.concat([action.text])
       return {...state,"payload":action.text}
      default:
        return state
    }
  }

  function accessReducer(state = {"role":"read-only"}, action) { 
    switch (action.type) {
      case 'READ':
          alert(action.text);
       // return state.concat([action.text])
       return {...state,"payload":action.text}
      default:
        return state
    }
  }

   var rootReducer = combineReducers({
    todosReducer,
    accessReducer
  })
  export const store = createStore(rootReducer)


  function actionCreater(){
      return {
        type: 'ADD_TODO',
        text: 'Read the docs'
      }
  }
  
  store.dispatch(actionCreater())
  
  console.log(store.getState())
  // [ 'Use Redux', 'Read the docs' ]
  
