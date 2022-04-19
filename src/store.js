// 사용계획:
// savedReck과 함께 쓰일꺼야,
// 이미지 클릭해서 savedReck이 아닌 state에 넣어,
// 이미지 클릭되면 savedReck에서 빼
// useState는 왔다갔다 안하고, 지엽적인 변화에만 사용하자.
// store의 활용은 여러군데에서 사용할 경우!!!
import {createStore} from 'redux';


const ADD  = 'ADD';
const DELETE = 'DELETE';

const addImg = (src) => {
  return {
    type: ADD,
    src
  }
}

const deleteImg = (id) => {
  return {
    type: DELETE,
    id: parseInt(id)
  }
}

const savedReck_reducer = (state = [], action) =>{
  switch(action.type){
    case ADD:
      return[{ src: action.src, id: Date.now() }, ...state];
    case DELETE:
      return state.filter(img => img.id !== action.id);
    default:
      return state
  }
}

const savedReck_rdx = createStore(savedReck_reducer)

export const actionCreators = {
  addImg,
  deleteImg
}

export default savedReck_rdx