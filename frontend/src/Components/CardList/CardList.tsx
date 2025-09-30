import React from 'react'
import Card from '../Cards/Card.tsx';

type List={
    "companyName": string,
    "ticker": string,
    "price": number
}

const CardList = () => {
    var data : Array<List> =[{
        "companyName": "test",
        "ticker": "test",
        "price": 10
    },{
        "companyName": "test1",
        "ticker": "test1",
        "price": 10
    }]
    console.log(data)
  return (
    <div>
        {data.length>0 ? (

            data.map((element,id) => (
                <div>
                    <Card key={id} companyName={element.companyName} ticker={element.ticker} price={element.price}></Card>
                </div>
                
                
            ))
        ) : (<p>Empty</p>)

        }
        
    </div>
   
  )
}

export default CardList
