import { ActionType } from '../action-type/index';

interface DepositAction {
    type:ActionType.DEPOSIT,
    payload:number
}

interface WithdrawAction {
    type:ActionType.WITHDRAW,
    payload:number
}

interface BanlanceAction {
    type:ActionType.BALANCE,
}

type Action = DepositAction | WithdrawAction | BanlanceAction


export default Action