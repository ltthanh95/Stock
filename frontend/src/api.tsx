import axios from "axios";
import type {CompanySearch} from "./company";
interface SearchResponse{
    data: CompanySearch[];
}
export const searchCompanies = async (query:string)=>{
    try{
        const data = await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/stable/search-symbol?query=${query}&limit=10&exchange=NASDAQ&apikey=${import.meta.env.VITE_SERECT_KEY}`,
        );
        console.log(data);
        return data;
    }
    catch(error){
        if (axios.isAxiosError(error)) {
            //console.log(import.meta.env.VITE_SERECT_KEY)
            console.log("error message: ", error.message);
            return error.message;
        } else {
            console.log("unexpected error: ", error);
            return "An expected error has occured.";
        }
    }
}