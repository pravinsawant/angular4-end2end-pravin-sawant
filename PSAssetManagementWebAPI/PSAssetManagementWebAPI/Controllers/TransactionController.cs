using AssetManagement;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace PSAssetManagementWebAPI.Controllers
{
    public class TransactionController : ApiController
    {
        [Route("api/transaction/{customername?}")]
        // GET api/customer
        //http://localhost:50097/Api/transaction/
        public IEnumerable<Transaction> Get(string customerName)
        {
            TransactionManagement tranMgmt = new TransactionManagement();
            return tranMgmt.GetTransactions(customerName);
        }

        [Route("api/transaction/")]
        // POST api/values
        public void Post(Transaction tran)
        {
            TransactionManagement tranMgmt = new TransactionManagement();
            tranMgmt.AddTransaction(tran);
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        [Route("api/transaction/{transactionId?}")]
        // DELETE api/values/5
        public void Delete(int transactionId)
        {
            TransactionManagement tranMgmt = new TransactionManagement();
            tranMgmt.DeleteTransaction(transactionId);
        }
    }
}