import Action from "../actionsInterface";
import { ActionType } from "../action-type";
const initialState = 0

const bankReducer = (state:number = initialState, action: Action) => {
      switch(action.type){
          case ActionType.DEPOSIT:
              return state + action.payload;
          case ActionType.WITHDRAW:
                if(state <= 0){
                    return state = 0
                }else{
                    return state - action.payload;
                }
          case ActionType.BALANCE:
              return state

              default:
                  return state
      }

    
}

export default bankReducer
