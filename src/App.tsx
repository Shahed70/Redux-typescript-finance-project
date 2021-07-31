import React, { useState } from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { depositMoney, withdrawtMoney, balanceMoney } from './redux/actions'
import './App.css';



function App() {
  const [num, setNum] = useState<number>(0)
  const [show, setShow] = useState(false)
  const [deposit, setDiposit] = useState<number>(0)
  const [witdraw, setWitdraw] = useState<number>(0)
  const { bank } = useSelector((state: RootStateOrAny) => state)

  const handleClick = () => {
    dispatch(depositMoney(deposit))
    setDiposit(0)
  }

  const dispatch = useDispatch()
  return (
    <div className="App">
      <div className="container">
        <div className="row p-5">
          <div className="col-md-6 offset-md-3">
            <div className="card card-body p-5 shadow-1">

              {
                show && <h5 className="card-title text-uppercase">Current Balance $ {bank}</h5>
              }
              <div className="input-group my-3">
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">DEPOSIT</span>
                </div>
                <input type="number"
                  placeholder="Enter  amount"
                  onChange={e => setDiposit(Number(e.target.value))}
                  className="form-control"
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">WITHDRAW</span>
                </div>
                <input type="number"
                  placeholder="Enter amount"
                  onChange={e => setWitdraw(Number(e.target.value))}
                  className="form-control"
                />
              </div>

              {
                show ? <button className="btn btn-primary text-uppercase"
                  onClick={() => setShow(!show)}>
                  Hide Balance
                </button> :
                  <button className="btn btn-primary text-uppercase"
                    onClick={() => setShow(!show)}>
                    Show Balance
                  </button>
              }
              <button className="btn btn-primary text-uppercase my-4"
                onClick={handleClick}>
                Diposit
              </button>
              <button className="btn btn-primary text-uppercase"
                onClick={() => dispatch(withdrawtMoney(witdraw))}>
                Withdraw
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
