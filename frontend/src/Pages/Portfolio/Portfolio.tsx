import React, {useState, type ChangeEvent, type SyntheticEvent, useEffect, useRef} from "react";
import type {CompanySearch} from "../../company";
import { ListPortfolio } from "../../Components/Portfolio/ListPortfolio/ListPortfolio";
import type {PortfolioGet} from "../../Models/Portfolio";
import {
    portfolioAddAPI,
    portfolioDeleteAPI,
    portfolioGetAPI,
} from "../../Services/PortfolioService";
import { toast } from "react-toastify";
import Spinner from "../../Components/Spinners/Spinner.tsx";

interface Props {}

const Portfolio = (props: Props) => {
    const [portfolioValues, setPortfolioValues] = useState<PortfolioGet[]>(
        []
    );
    const [serverError, setServerError] = useState<string | null>(null);
    const fetchedRef = useRef(false);
    
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        if (fetchedRef.current) return;
        fetchedRef.current = true;
        void getPortfolio();
    },[]);
    const getPortfolio = async () => {
        try {
            const res = await portfolioGetAPI();
            const data = res?.data?.$values ?? res?.data ?? [];
            setPortfolioValues(data ?? []);
        } catch {
            setPortfolioValues([]);
            setServerError("Unable to connect to API");
        } finally {
            setIsLoading(false);
        }
    };

    const onPortfolioDelete = (e: any) => {
        e.preventDefault();
        portfolioDeleteAPI(e.target[0].value).then((res) => {
            if (res?.status == 200) {
                toast.success("Stock deleted from portfolio!");
                getPortfolio();
            }
        });
    };
    useEffect(() => {
    }, [portfolioValues]);
    return (
        <>
            {isLoading ? <Spinner/> : (
                <ListPortfolio portfolioValues={portfolioValues} onPortfolioDelete={onPortfolioDelete}/>
            )}
        </>
       
    
    )
    
};

export default Portfolio;