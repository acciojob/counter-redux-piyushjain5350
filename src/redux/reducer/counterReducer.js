import { INCREMENT,DECREMENT } from "../action/actionTypes";

const initalValue={count:0};

function counterReducer(state=initalValue,action){
    switch(action.type){
        case INCREMENT: return {...state,count:state.count+action.value}
        case DECREMENT:return {...state,count:state.count-action.value}
        default :return state   
    }
}
export default counterReducer;