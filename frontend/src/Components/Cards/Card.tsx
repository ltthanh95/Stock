import React, {type JSX, type SyntheticEvent} from 'react'
import "./css/Card.css"
import type {CompanySearch} from "../../company";
import {AddPortfolio} from "../Portfolio/AddPortfolio/AddPortfolio.tsx";

interface Props {
    id: string;
    searchResult: CompanySearch;
    onPortfolioCreate: (e:SyntheticEvent) => void;
    
}

const Card : React.FC<Props> = ({id,searchResult,onPortfolioCreate}: Props) : JSX.Element => {
  return (
    <div className='card'>
      <img src="https://picsum.photos/seed/picsum/200/300" alt='image'></img>
      <div className='details'>
            <h2>{searchResult.name} ({searchResult.symbol})</h2>
            <p>{searchResult.currency}</p>
      </div>
      <div className='info'>
            <p>{searchResult.exchangeFullName} - {searchResult.exchange}</p>
      </div>
      <div>
          <AddPortfolio onPortfolioCreate={onPortfolioCreate} symbol={searchResult.symbol} />
      </div>
    </div>
  ) 
}

export default Card;