import React from 'react'
interface Iprop{
    num:number,
    setNum: React.Dispatch<React.SetStateAction<number>>
}
const Home = ({num, setNum}:Iprop) => {
    const handleClick = (value:number) =>   {
        setNum((prv) => prv + value)
    }
    return (
        <div>
            <button onClick={()=> handleClick(5)}>ADD {num}</button>
        </div>
    )
}

export default Home
