using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.DTOs.Stock;
using api.Helpers;
using api.Models;

namespace api.Repository
{
    public interface IStockRepository : IRepository<Stock, UpdateStockDto, QueryObject>
    {
        Task<bool> StockExist(int id);
        Task<Stock?> GetBySymbolAsync(string symbol);
        
    }
}