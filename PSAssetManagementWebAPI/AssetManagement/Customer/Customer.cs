using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AssetManagement
{
    public class Customer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string City { get; set; }
        public string Phone { get; set; }

        public Customer()
        {

        }

        public Customer(DataRow dr)
        {
            this.Id = Convert.ToInt32(dr["Id"]);
            this.Name = dr["Name"].ToString();
            this.City = dr["City"].ToString();
            this.Phone = dr["Phone"].ToString();
        }
    }
}