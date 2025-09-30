using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using api.DBContext;
using api.DTOs.Stock;
using api.Helpers;
using api.Mappers;
using api.Models;
using api.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace api.Controllers
{
    [Route("/api/stock")]
    [ApiController]
    [Authorize]
    public class StockController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IStockRepository _stockRepo;

        public StockController(ApplicationDbContext _context, IStockRepository _stockRepo)
        {
            this._context = _context;
            this._stockRepo = _stockRepo;

        }
        [HttpGet]

        public async Task<IActionResult> GetAll([FromQuery] QueryObject obj)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var stock = await _stockRepo.GetAllAsync(obj);
            var stockDto = stock.Select(x => x.toStockDto());
            return Ok(stockDto);
        }
        [HttpGet("{id:int}")]
        public async Task<IActionResult> FindById([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var stock = await _stockRepo.FindAsync(id);
            if (stock == null)
            {
                return NotFound();
            }
            return Ok(stock.toStockDto());
        }

        [HttpPost]
        [Authorize(Roles = "ADMIN")]
        public IActionResult Create([FromBody] CreateStockDto CreateStock)
        {
            if (ModelState.IsValid)
            {
                var stock = CreateStock.DtoToStock();

                _stockRepo.Create(stock);

                return CreatedAtAction(nameof(FindById), new { id = stock.Id }, stock.toStockDto());
            }
            else
            {

                return BadRequest(ModelState);
            }
        }

        [HttpPut]
        [Route("{id}")]
        //Take whatever is in the HTTP request body, run it through the JSON deserializer, and map it into this parameter
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateStockDto stockDto)
        {
            if (ModelState.IsValid)

            {
                var stockModel = await _stockRepo.FindAsync(id);
                if (stockModel == null)
                {
                    return NotFound();
                }
                await _stockRepo.UpdateAsync(id, stockDto);
                return Ok(stockModel.toStockDto());


            }
            else
            {
                return BadRequest(ModelState);
            }
        }
        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            if (ModelState.IsValid)
            {
                var stockModel = await _stockRepo.FindAsync(id);
                if (stockModel == null)
                {
                    return NotFound();
                }
                await _stockRepo.Delete(id);
                return NoContent();

            }
            else
            {
                return BadRequest(ModelState);
            }
        }
    }
}