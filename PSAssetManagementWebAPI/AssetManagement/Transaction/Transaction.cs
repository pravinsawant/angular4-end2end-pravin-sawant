using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AssetManagement
{
    public class Transaction
    {
        public int Id { get; set; }
        public int CustId { get; set; }
        public int PurchasePrice { get; set; }
        public string Symbol { get; set; }
        public string NoOfShares { get; set; }        
        public string CustomerName { get; set; }

        public Transaction()
        {

        }

        public Transaction(DataRow dr)
        {
            this.Id = Convert.ToInt32(dr["Id"]);
            this.CustId = Convert.ToInt32(dr["CustId"]);
            this.PurchasePrice = Convert.ToInt32(dr["PurchasePrice"]);
            this.Symbol = dr["Symbol"].ToString();
            this.NoOfShares = dr["NoOfShares"].ToString();
            this.CustomerName = dr["Name"].ToString();
        }
    }
}