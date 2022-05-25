using System;
using System.Collections.Generic;

namespace WebApplication1.Models
{
    public partial class Employee
    {
        public int EmpId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Department { get; set; }
        public int? Salary { get; set; }
        public string City { get; set; }
    }
}
