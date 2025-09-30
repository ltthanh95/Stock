using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.DTOs.Comment;
using api.Models;

namespace api.Mappers
{
    public static class CommentMappers
    {
        public static CommentDto toCommentDto(this Comment CommentModel)
        {
            return new CommentDto
            {
                Id = CommentModel.Id,
                Title = CommentModel.Title,
                Content = CommentModel.Content,
                Created = CommentModel.Created,
                StockId = CommentModel.StockId
            };
        }

        public static Comment DtoToComment(this CommentCreateDto Comment)
        {
            return new Comment
            {
                Title = Comment.Title,
                Content = Comment.Content,
                Created = Comment.Created,
                StockId = Comment.StockId
            };
        }

        public static Comment ToCommentFromUpdate(this CommentUpdateDto commentDto, int stockId)
        {
            return new Comment
            {
                Title = commentDto.Title,
                Content = commentDto.Content,
                StockId = stockId
            };
        }
    }
}