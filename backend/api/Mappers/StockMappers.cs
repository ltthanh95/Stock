using System.Linq;
using api.DTOs.Stock;
using api.Models;

namespace api.Mappers
{
    public static class StockMappers
    {
        //         The "this" Stock stockModel tells the compiler:
        // “treat this method as if it belonged to Stock
        public static StockDto toStockDto(this Stock StockModel)
        {
            return new StockDto
            {
                Id = StockModel.Id,

                Symbol = StockModel.Symbol,

                CompanyName = StockModel.CompanyName,

                Purchase = StockModel.Purchase,

                LastDiv = StockModel.LastDiv,

                Industry = StockModel.Industry,

                MarketCap = StockModel.MarketCap,

                Comment = StockModel.Comment.Select(x => x.toCommentDto()).ToList(),


            };
        }

        public static Stock DtoToStock(this CreateStockDto stock)
        {
            return new Stock
            {
                Symbol = stock.Symbol,

                CompanyName = stock.CompanyName,

                Purchase = stock.Purchase,

                LastDiv = stock.LastDiv,

                Industry = stock.Industry,

                MarketCap = stock.MarketCap,
            };
        }
        public static Stock ToStockFromFMP(this FMPStock fmpStock)
        {
            return new Stock
            {
                Symbol = fmpStock.symbol,
                CompanyName = fmpStock.companyName,
                Purchase = (decimal)fmpStock.price,
                LastDiv = (decimal)fmpStock.lastDiv,
                Industry = fmpStock.industry,
                MarketCap = fmpStock.mktCap
            };
        }
    }
}