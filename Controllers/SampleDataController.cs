using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace UIBlocks.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private static Random _random = new Random();
        private static string[] _summaries = new[]
        {
            "Freezing",
            "Bracing",
            "Chilly",
            "Cool",
            "Mild",
            "Warm",
            "Balmy",
            "Hot",
            "Sweltering",
            "Scorching"
        };

        [HttpGet("[action]")]
        public IEnumerable<WeatherForecast> WeatherForecasts() =>
            Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
                TemperatureC = _random.Next(-20, 55),
                Summary = _summaries[_random.Next(_summaries.Length)]
            });

        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
          
            public int TemperatureC { get; set; }
         
            public string Summary { get; set; }

            public int TemperatureF { get { return 32 + (int)(TemperatureC / 0.5556); } }
        }
    }
}
