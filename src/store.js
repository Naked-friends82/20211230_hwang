// 사용계획:
// savedReck과 함께 쓰일꺼야,
// 이미지 클릭해서 savedReck이 아닌 state에 넣어,
// 이미지 클릭되면 savedReck에서 빼
// useState는 왔다갔다 안하고, 지엽적인 변화에만 사용하자.
// store의 활용은 여러군데에서 사용할 경우!!!
import {createStore} from 'redux';


const ADD  = 'ADD';
const DELETE = 'DELETE';

const addImg = (imgId,src) => {
  return {
    type: ADD,
    imgId,
    src
  }
}

const deleteImg = (imgId) => {
  return {
    type: DELETE,
    imgId
  }
}

const savedReck_reducer = (state = [], action) =>{
  switch(action.type){
    case ADD:
      return[...state,{ id: Date.now() , imgId: action.imgId, src: action.src }];
    case DELETE:
      return state.filter(img => img.imgId !== action.imgId);
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