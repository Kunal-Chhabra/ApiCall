using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;
using WebApplication1.RequestModel;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class testController : ControllerBase
    {
        private readonly CginfinityContext _c;
        public testController(CginfinityContext cg)
        {
            _c = cg;
        }
        // GET: api/Country
        [HttpGet]
       
 public IActionResult Get1()
        {
            var emp = _c.Employee.ToList();
            return Ok(emp);


        }

        [HttpGet("{id:int}")]

        public IActionResult Get2(int id)
        {
            try
            {
                var res = _c.Employee.First(obj1 => obj1.EmpId == id);

                if (res == null)
                    return NotFound();
                return Ok(res);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status400BadRequest, "Not Found");
            }
        }

        [HttpGet("Employee/{value}")]
        public IActionResult Get(string value)
        {



            var result = _c.Employee.Where(obj => obj.FirstName.Contains(value));
            return Ok(result);



        }


        [HttpPost]
        public void Post([FromBody] Empl value)
        {
            Employee obj = new Employee();
                obj.EmpId = value.EmpId;
                obj.FirstName = value.FirstName;
                obj.LastName = value.LastName;
                obj.Department = value.Department;
                obj.Salary = value.Salary;
                obj.City = value.City;
            
           
            _c.Employee.Add(obj);
            _c.SaveChanges();
        }


    }
}



    

