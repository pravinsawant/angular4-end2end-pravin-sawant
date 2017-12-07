using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AssetManagement
{
    public class TransactionManagement
    {
        public IEnumerable<Transaction> GetTransactions(string customerName)
        {
            SqlConnection connection;
            SqlCommand command;
            IEnumerable<Transaction> transactions = null;
            try
            {
                connection = new SqlConnection(Common.connectionString);
                command = new SqlCommand("proc_GetTransactions", connection);
                command.CommandType = CommandType.StoredProcedure;
                command.CommandTimeout = 300;
                connection.Open();
                command.Parameters.Add("@p_CustomerName", SqlDbType.VarChar, 50).Value = customerName;
                DataTable dt = new DataTable();
                SqlDataAdapter da = new SqlDataAdapter(command);
                da.Fill(dt);
                if (dt != null && dt.Rows.Count > 0)
                    transactions = dt.AsEnumerable().Select(row => new Transaction(row));
                command.Dispose();
                connection.Close();
            }
            catch (Exception ex)
            {

            }
            return transactions;
        }

        public void AddTransaction(Transaction transaction)
        {
            SqlConnection connection;
            SqlCommand command;
            try
            {
                connection = new SqlConnection(Common.connectionString);
                command = new SqlCommand("proc_AddTransaction", connection);
                command.CommandType = CommandType.StoredProcedure;
                command.CommandTimeout = 300;
                connection.Open();
                command.Parameters.Add("@p_CustId", SqlDbType.Int).Value = transaction.CustId;
                command.Parameters.Add("@p_NoOfShares", SqlDbType.Int).Value = transaction.NoOfShares;
                command.Parameters.Add("@p_PurchasePrice", SqlDbType.Int).Value = transaction.PurchasePrice;
                command.Parameters.Add("@p_Symbol", SqlDbType.VarChar, 50).Value = transaction.Symbol;
                command.ExecuteNonQuery();
                command.Dispose();
                connection.Close();
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public void DeleteTransaction(int transactionId)
        {
            SqlConnection connection;
            SqlCommand command;
            try
            {
                connection = new SqlConnection(Common.connectionString);
                command = new SqlCommand("proc_DeleteTransaction", connection);
                command.CommandType = CommandType.StoredProcedure;
                command.CommandTimeout = 300;
                connection.Open();
                command.Parameters.Add("@p_TransactionId", SqlDbType.Int).Value = transactionId;
                command.ExecuteNonQuery();
                command.Dispose();
                connection.Close();
            }
            catch (Exception ex)
            {
                throw;
            }
        }
    }
}
