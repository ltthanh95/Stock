using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.DTOs.Comment;
using api.DTOs.Stock;
using api.Helpers;
using api.Mappers;
using api.Models;
using api.Repository;
using api.Service;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("/api/comment")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly IRepository<Comment, CommentUpdateDto,CommentQueryObject> _commentRepo;
        private readonly IStockRepository _stockRepo;

        private readonly UserManager<AppUser> _userManager;
        private readonly IFMPService _fmpService;

        public CommentController(IRepository<Comment, CommentUpdateDto, CommentQueryObject> _commentRepo, IStockRepository _stockRepo,
        UserManager<AppUser> userManager,
        IFMPService fmpService)
        {
            this._commentRepo = _commentRepo;
            this._stockRepo = _stockRepo;
            _userManager = userManager;
            _fmpService = fmpService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] CommentQueryObject obj)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var comment = await _commentRepo.GetAllAsync(obj);
            var commentDto = comment.Select(x => x.toCommentDto());

            return Ok(commentDto);
        }

        [HttpPost]
        [Route("{symbol:alpha}")]
        public async Task<IActionResult> Create([FromRoute] string symbol, [FromBody] CommentCreateDto createDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var stock = await _stockRepo.GetBySymbolAsync(symbol);
            if (stock==null)
            {
                stock = await _fmpService.FindStockBySymbolAsync(symbol);
                if (stock == null)
                {
                    return BadRequest("Stock does not exists");
                }
                else
                {
                    await _stockRepo.Create(stock);
                }
            }

            var comment = createDto.DtoToComment();
            await _commentRepo.Create(comment);

            return CreatedAtAction(nameof(FindById), new { id = comment.Id }, comment.toCommentDto());
        }

        [HttpGet]
        [Route("{id:int}")]
        public async Task<IActionResult> FindById([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var comment = await _commentRepo.FindAsync(id);

            if (comment == null)
            {
                return NotFound();
            }

            return Ok(comment.toCommentDto());
        }

        [HttpPut]
        [Route("{id:int}")]

        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] CommentUpdateDto commentUpdateDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var comment = await _commentRepo.FindAsync(id);
            if (comment == null)
            {
                return NotFound();
            }
            await _commentRepo.UpdateAsync(id, commentUpdateDto);
            return Ok(comment.toCommentDto());
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            if(ModelState.IsValid)
            {
                var commentModel = await _commentRepo.FindAsync(id);
                if (commentModel == null)
                {
                    return NotFound();
                }
                await _commentRepo.Delete(id);
                return NoContent();

            }
            else
            {
                return BadRequest(ModelState);
            }
        }


    }
}