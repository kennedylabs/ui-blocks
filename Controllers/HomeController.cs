using Microsoft.AspNetCore.Mvc;

namespace UIBlocks.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index() => View();

        public IActionResult Error() => View();
    }
}
