import React, { type JSX } from 'react'
import "./css/Card.css"

interface Props {
    companyName: string;
    ticker: string;
    price: number
}

const Card : React.FC<Props> = ({companyName,ticker,price}: Props) : JSX.Element => {
  return (
    <div className='card'>
      <img src="https://picsum.photos/seed/picsum/200/300" alt='image'></img>
      <div className='details'>
            <h2>{companyName}</h2>
            <p>{price}</p>
      </div>
      <div className='info'>
            <p>{ticker}</p>
      </div>
    </div>
  )
}

export default Card;