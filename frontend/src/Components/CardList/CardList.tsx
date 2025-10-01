import React, {type JSX, type SyntheticEvent} from 'react'
import Card from '../Cards/Card.tsx';
import type {CompanySearch} from "../../company";
interface Props{
    searchResult: CompanySearch[];
    onPortfolioCreate: (e:SyntheticEvent) => void;
}

const CardList: React.FC<Props> = ({searchResult,onPortfolioCreate}:Props) : JSX.Element => {
    
  return (
    <>
        {searchResult.length>0 ? (
            searchResult.map((res,id)=>(
                <Card key={id} id={res.symbol} searchResult={res} onPortfolioCreate={onPortfolioCreate}/>
            ))
        ):(
            <h1>No results</h1>
        )}
        
    </>
   
  )
}

export default CardList
