using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using api.Helpers;
using Microsoft.EntityFrameworkCore.Query;

namespace api.Repository
{
    public interface IRepository<T,TUpdate,Obj> where T : class where TUpdate : class where Obj:class
    {
        Task<List<T>> GetAllAsync(Obj obj);

        Task<T?> FindAsync(int id);

        Task<T> Create(T entity);

        Task<T?> UpdateAsync(int id, TUpdate entity);

        Task<T?> Delete(int id);
    }
}