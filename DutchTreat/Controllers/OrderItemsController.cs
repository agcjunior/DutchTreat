using AutoMapper;
using DutchTreat.Data;
using DutchTreat.Data.Entities;
using DutchTreat.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;

namespace DutchTreat.Controllers
{
    [Route("/api/orders/{orderid}/Items")]
    public class OrderItemsController : Controller
    {
        private IDutchRepository _repository;
        private ILogger<OrderItemsController> _logger;
        private IMapper _mapper;

        public OrderItemsController(IDutchRepository repository,
            ILogger<OrderItemsController> logger,
            IMapper mapper)
        {
            _repository = repository;
            _logger = logger;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult Get(int orderId)
        {
            var order = _repository.GetOrderById(orderId);

            if (order != null)
                return Ok(_mapper.Map<IEnumerable<OrderItem>, IEnumerable<OrderItemViewModel>>(order.Items));

            return NotFound();
        }

        [HttpGet("{id}")]
        public IActionResult Get(int orderId, int id)
        {
            var order = _repository.GetOrderById(orderId);

            if (order != null)
            {
                var item = order.Items.FirstOrDefault(i => i.Id == id);
                if (item != null)
                    return Ok(_mapper.Map<OrderItem, OrderItemViewModel>(item));
            }

            return NotFound();
        }
    }
}
