using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.DTOs.Stock
{
    public class UpdateStockDto
    {
        [Required(ErrorMessage = "Symbol cannot be empty")]
        [StringLength(50,ErrorMessage = "Symbol cannot be exceed 50 characters")]
        public string Symbol { get; set; } = string.Empty;

        [Required(ErrorMessage = "Company name cannot be empty")]
        [StringLength(150,ErrorMessage = "Company name cannot be exceed 150 characters")]
        public string CompanyName { get; set; } = string.Empty;

        [Required]
        [Range(1, 1000000000)]
        public decimal Purchase { get; set; }

        [Required]
        [Range(0.001, 100)]
        public decimal LastDiv { get; set; }

        [Required(ErrorMessage = "Industry cannot be empty")]
        [StringLength(150,ErrorMessage = "Industry cannot be exceed 150 characters")]
        public string Industry { get; set; } = string.Empty;

        public long MarketCap { get; set; }
    }
}