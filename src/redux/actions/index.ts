import { ActionType } from './../action-type/index';
import {Dispatch} from 'redux'
import Action from '../actionsInterface';

export const depositMoney = (amount: number)=> {
            return (dispatch:Dispatch<Action>) => {
                dispatch({
                    type:ActionType.DEPOSIT,
                    payload:amount
                })
            }
}
export const withdrawtMoney = (amount: number)=> {
    return (dispatch:Dispatch<Action>) => {
        dispatch({
            type:ActionType.WITHDRAW,
            payload:amount
        })
    }
}

export const balanceMoney = ()=> {
    return (dispatch:Dispatch<Action>) => {
        dispatch({
            type:ActionType.BALANCE,
        })
    }
}