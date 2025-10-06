import React, { useState, type ChangeEvent, type SyntheticEvent, useEffect } from "react";
import type {CompanySearch} from "../../company";
import { searchCompanies } from "../../api";
import Search from "../../Components/Search/Search";
import CardList from "../../Components/CardList/CardList";
import type {PortfolioGet} from "../../Models/Portfolio";
import {
    portfolioAddAPI,
    portfolioGetAPI,
} from "../../Services/PortfolioService";
import { toast } from "react-toastify";

interface Props {}

const SearchPage = (props: Props) => {
    const [search, setSearch] = useState<string>("");
    const [portfolioValues, setPortfolioValues] = useState<PortfolioGet[] | null>(
        []
    );
    const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
    const [serverError, setServerError] = useState<string | null>(null);

    useEffect(() => {
        getPortfolio();
    }, []);

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const getPortfolio = () => {
        portfolioGetAPI()
            .then((res) => {
                if (res?.data) {
                    setPortfolioValues(res?.data);
                }
            })
            .catch((e) => {
                setPortfolioValues(null);
            });
    };

    const onPortfolioCreate = (e: any) => {
        e.preventDefault();
        portfolioAddAPI(e.target[0].value)
            
            .then((res) => {
                console.log(e.target[0].value)
                if (res?.status === 204) {
                    toast.success("Stock added to portfolio!");
                    setSearchResult(searchResult.filter(val=> val.symbol!=e.target[0].value))
                    getPortfolio();
                }
            })
            .catch((e) => {
                toast.warning("Could not add stock to portfolio!");
            });
    };
    const onSearchSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const result = await searchCompanies(search);
        //setServerError(result.data);
        if (typeof result === "string") {
            setServerError(result);
        } else if (Array.isArray(result.data)) {
            const portfolio = portfolioValues["$values"].map(p=>p.symbol);
            setSearchResult( result.data.filter(val => !portfolio.includes(val.symbol)));
        }
    };
    return (
        <>
            <Search
                onSearchSubmit={onSearchSubmit}
                search={search}
                handleSearchChange={handleSearchChange}/>
            <CardList
                searchResult={searchResult}
                onPortfolioCreate={onPortfolioCreate}/>
            {serverError && <div>Unable to connect to API</div>}
        </>
    );
};

export default SearchPage;