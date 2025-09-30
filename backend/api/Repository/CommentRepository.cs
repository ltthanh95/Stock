using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.DBContext;
using api.DTOs.Comment;
using api.Helpers;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class CommentRepository : IRepository<Comment, CommentUpdateDto,CommentQueryObject>
    {
        private readonly ApplicationDbContext _context;

        public CommentRepository(ApplicationDbContext _context)
        {
            this._context = _context;
        }
        public async Task<Comment> Create(Comment entity)
        {
            await _context.AddAsync(entity);
            await _context.SaveChangesAsync();
            return entity;
        }

        public async Task<Comment?> Delete(int id)
        {
            var comment = await _context.Comments.FirstOrDefaultAsync(x => x.Id == id);
            if (comment == null)
            {
                return null;
            }

            _context.Comments.Remove(comment);

            await _context.SaveChangesAsync();

            return comment;
        }

        public async Task<Comment?> FindAsync(int id)
        {
            var comment = await _context.Comments.FirstOrDefaultAsync(x => x.Id == id);
            return comment;
        }

        public async Task<List<Comment>> GetAllAsync(CommentQueryObject obj)
        {
            var comments =  _context.Comments.AsQueryable();

            if (!string.IsNullOrWhiteSpace(obj.Symbol))
            {
                comments = comments.Where(s => s.Stock.Symbol == obj.Symbol);
            };
            if (obj.IsDecsending == true)
            {
                comments = comments.OrderByDescending(c => c.Created);
            }
            return await comments.ToListAsync();
        }

        public async Task<Comment?> UpdateAsync(int id, CommentUpdateDto entity)
        {
            var comment = await _context.Comments.FirstOrDefaultAsync(x => x.Id == id);
            if (comment == null)
            {
                return null;
            }

            _context.Entry(comment).CurrentValues.SetValues(entity);

            await _context.SaveChangesAsync();

            return comment;
        }
        
        
    }
}