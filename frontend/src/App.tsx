import {type ChangeEvent, type SyntheticEvent, useState} from 'react'
import "./App.css"
import CardList from './Components/CardList/CardList.tsx'
import Search from './Components/Search/Search.tsx'
import {searchCompanies} from "./api.tsx";
import type {CompanySearch} from "./company";
import {ListPortfolio} from "./Components/Portfolio/ListPortfolio/ListPortfolio.tsx";
function App() {
    const [search, setSearch] = useState<string>("");
    const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
    const [serverError, setServerError] = useState<string | null>(null);
    const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>)=> {
        setSearch(e.target.value)
    }
    const onSearchSubmit = async (e: SyntheticEvent)=>{
        e.preventDefault()
        const result = await searchCompanies(search);
        if(typeof result === "string"){
            setServerError(result)
        }
        else if(Array.isArray(result.data)){
            setSearchResult(result.data)
        }
        console.log(result.data)
    }
    
    const onPortfolioCreate = async (e: any) => {
        e.preventDefault()
        const exists=portfolioValues.find(val=>val===e.target[0].value)
        if(exists){
            return;
        }
        const updatePortfolio = [...portfolioValues, e.target[0].value]
        setPortfolioValues(updatePortfolio)
    }
    
    const OnPortfolioDelete = async (e: any) => {
        e.preventDefault();
        const revmoved = portfolioValues.filter(val=>{
            return val!==e.target[0].value
        })
        setPortfolioValues(revmoved);
    }
  return (
    <>
      <div className='App'>
          <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange}/>
          {serverError && <h1>{serverError}</h1>}
          <ListPortfolio portfolioValues={portfolioValues} onPortfolioDelete={OnPortfolioDelete}/>
          <CardList searchResult={searchResult} onPortfolioCreate={onPortfolioCreate}/>
      </div>
      
    </>
  )
}

export default App
