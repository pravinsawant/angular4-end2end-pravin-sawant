using AssetManagement;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace PSAssetManagementWebAPI.Controllers
{
    public class CustomerController : ApiController
    {
        [Route("api/customer/")]
        // GET api/customer
        //http://localhost:50097/Api/customer/
        public IEnumerable<Customer> Get()
        {
            CustomerManagement custMgmt = new CustomerManagement();
            return custMgmt.GetCustomers();
        }

        // GET api/customer/5
        public string Get(int id)
        {
            return "value";
        }

        [Route("api/customer/")]
        // POST api/values
        public void Post(Customer cust)
        {
            CustomerManagement custMgmt = new CustomerManagement();
            custMgmt.AddCustomer(cust);
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        [Route("api/customer/{customerId?}")]
        // DELETE api/values/5
        public void Delete(int customerId)
        {
            CustomerManagement custMgmt = new CustomerManagement();
            custMgmt.DeleteCustomer(customerId);
        }
    }
}