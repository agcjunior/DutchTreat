using DutchTreat.Data;
using DutchTreat.Services;
using DutchTreat.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

namespace DutchTreat.Controllers
{
    public class AppController : Controller
    {
        private IMailService _mailService;
        private IDutchRepository _repository;

        public AppController(IMailService mailService, IDutchRepository repository)
        {
            _mailService = mailService;
            _repository = repository;
        }
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Contact()
        {                     
            return View();
        }

        [HttpPost]
        public IActionResult Contact(ContactViewModel model)
        {       
            if (ModelState.IsValid)
            {
                _mailService.SendMessage("antonio.jr@outlook.com", "Teste", "corpo da mensagem");
                ViewBag.UserMesssage = "Mail Sent";
                ModelState.Clear();
            } 
            return View();
        }

        public IActionResult About()
        {
            ViewBag.Title = "About";
            return View();
        }

        public IActionResult Shop()
        {
            var results = _repository.GetAllProducts();
            return View(results);
        }
    }
}
