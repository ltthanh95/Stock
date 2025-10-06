import axios from "axios";
import type {
    CompanyBalanceSheet, CompanyCashFlow,
    CompanyCompData, CompanyHistoricalDividend,
    CompanyIncomeStatement,
    CompanyKeyMetrics,
    CompanyProfile,
    CompanySearch,
    CompanyTenK,
    Dfc, Earnings, GradeConsensus, GradeHistory, HistoricalData, StockNews
} from "./company";
interface SearchResponse{
    data: CompanySearch[];
}
const url="https://financialmodelingprep.com/stable/"
export const searchCompanies = async (query:string)=>{
    try{
        const data = await axios.get<SearchResponse>(
            url+`search-symbol?query=${query}&limit=10&exchange=NASDAQ&apikey=${import.meta.env.VITE_SERECT_KEY}`,
        );

        return data;
    }
    catch(error :any){
        
        return {
            Error: error.message,
            Response: error.response.data["Error Message"]
        };
        
    }
}

export const getCompanyProfile = async (query:string)=>{
    try{
        const data = await axios.get<CompanyProfile[]>(
            url+`profile?symbol=${query}&apikey=${import.meta.env.VITE_SERECT_KEY}`,
        )
        return data;
    }
    catch(error:any){
        return {
            Error: error.message,
            Response: error.response.data["Error Message"]
        };
    }
}

export const getCompData = async (query: string) => {
    try {
        const data = await axios.get<CompanyCompData[]>(
            url+`stock-peers?symbol=${query}&apikey=${import.meta.env.VITE_SERECT_KEY}`
        );
        
        return data;
    } catch (error: any) {
        return {
            Error: error.message,
            Response: error.response.data["Error Message"]
        };
    }
};


export const getKForm = async (query: string) => {
    try {
        // Get current date and date from one year ago
        const dateTo = new Date(); // today
        const dateFrom = new Date(dateTo.getFullYear(), 0, 1);

        // Format dates as YYYY-MM-DD
        const formatDate = (date: Date) => {
            return date.toISOString().split('T')[0];
        };

        const data = await axios.get<CompanyTenK[]>(
            url + `sec-filings-search/symbol?symbol=${query}&from=${formatDate(dateFrom)}&to=${formatDate(dateTo)}&limit=100&page=0&apikey=${import.meta.env.VITE_SERECT_KEY}`
        );

        return data;
    } catch (error: any) {
        return {
            Error: error.message,
            Response: error.response.data?.["Error Message"] || "Unknown error"
        };
    }
};

export const getKeyMetrics = async (query: string) => {
    try {
        const data = await axios.get<CompanyKeyMetrics[]>(
            url+`key-metrics-ttm?symbol=${query}&apikey=${import.meta.env.VITE_SERECT_KEY}`
            
        );
        return data;
    } catch (error: any) {
        return {
            Error: error.message,
            Response: error.response.data["Error Message"]
        };
    }
};

export const getIncomeStatement = async (query: string) => {
    try {
        const data = await axios.get<CompanyIncomeStatement[]>(
            url+`income-statement?symbol=${query}&limit=50&apikey=${import.meta.env.VITE_SERECT_KEY}`
        );
        return data;
    } catch (error: any) {
        return {
            Error: error.message,
            Response: error.response.data["Error Message"]
        };
    }
};

export const getBalanceSheet = async (query: string) => {
    try {
        const data = await axios.get<CompanyBalanceSheet[]>(
            url+`balance-sheet-statement?symbol=${query}&limit=20&apikey=${import.meta.env.VITE_SERECT_KEY}`
        );
        return data;
    } catch (error: any) {
        return {
            Error: error.message,
            Response: error.response.data["Error Message"]
        };
    }
};

export const getCashFlow = async (query: string) => {
    try {
        const data = await axios.get<CompanyCashFlow[]>(
            url+`cash-flow-statement?symbol=${query}&limit=100&apikey=${import.meta.env.VITE_SERECT_KEY}`
        );
        return data;
    } catch (error: any) {
        return {
            Error: error.message,
            Response: error.response.data["Error Message"]
        };
    }
};


export const getHistoricalDividend = async (query: string) => {
    try {
        const data = await axios.get<CompanyHistoricalDividend>(
            url+`dividends?symbol=${query}&apikey=${import.meta.env.VITE_SERECT_KEY}`
        );
        return data;
    } catch (error: any) {
        return {
            Error: error.message,
            Response: error.response.data["Error Message"]
        };
    }
};

export const getHistoricalChart = async (query: string) => {
    try{
        
        const data = await axios.get<HistoricalData[]>(
            url+`historical-chart/5min?symbol=${query}&apikey=${import.meta.env.VITE_SERECT_KEY}`
        );
        return data;
    }
    catch(error: any) {
        return {
            Error: error.message,
            Response: error.response.data["Error Message"]
        };
    }
}

export const getNews = async (query: string) => {
    try{
        // Get current date and date from one year ago
        const dateTo = new Date();
        const dateFrom = new Date();
        dateFrom.setDate(dateFrom.getDate() - 2);

        // Format dates as YYYY-MM-DD
        const formatDate = (date: Date) => {
            return date.toISOString().split('T')[0];
        };

        const data = await axios.get<StockNews[]>(
            url+`news/stock?symbols=${query}&from=${formatDate(dateFrom)}&to=${formatDate(dateTo)}&page=0&limit=5&apikey=${import.meta.env.VITE_SERECT_KEY}`
        );
        return data;
    }
    catch(error: any) {
        return {
            Error: error.message,
            Response: error.response.data["Error Message"]
        };
    }
}

export const getGradesConsensus = async (query: string) => {
    try{
        const data = await axios.get<GradeConsensus>(
            url+`grades-consensus?symbol=${query}&apikey=${import.meta.env.VITE_SERECT_KEY}`
        );
        return data;
    }
    catch(error: any) {
        return {
            Error: error.message,
            Response: error.response.data["Error Message"]
        };
    }
}

export const getGradeHistory = async (query: string) => {
    try{
        const data = await axios.get<GradeHistory[]>(
            url+`grades-historical?symbol=${query}&apikey=${import.meta.env.VITE_SERECT_KEY}`
        );
        return data;
    }
    catch(error: any) {
        return {
            Error: error.message,
            Response: error.response.data["Error Message"]
        };
    }
}

export const getEarnings = async (query: string) => {
    try{
        const data = await axios.get<Earnings[]>(
            url+`earnings?symbol=${query}&apikey=${import.meta.env.VITE_SERECT_KEY}`
        );
        return data;
    }
    catch(error: any) {
        return {
            Error: error.message,
            Response: error.response.data["Error Message"]
        };
    }
}