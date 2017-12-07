using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AssetManagement
{
    public class CustomerManagement
    {        
        public IEnumerable<Customer> GetCustomers()
        {
            SqlConnection connection;
            SqlCommand command;
            string sql = "SELECT * FROM Customer";
            connection = new SqlConnection(Common.connectionString);
            IEnumerable<Customer> customers = null;
            try
            {                
                connection.Open();
                DataTable dt = new DataTable();
                command = new SqlCommand(sql, connection);
                SqlDataAdapter da = new SqlDataAdapter(command);
                da.Fill(dt);

                if (dt != null && dt.Rows.Count > 0)
                    customers = dt.AsEnumerable().Select(row => new Customer(row));
                command.Dispose();
                connection.Close();                
            }
            catch (Exception ex)
            {

            }
            return customers;
        }

        public void AddCustomer(Customer customer)
        {
            SqlConnection connection;
            SqlCommand command;
            try
            {
                connection = new SqlConnection(Common.connectionString);
                command = new SqlCommand("proc_AddCustomer", connection);
                command.CommandType = CommandType.StoredProcedure;
                command.CommandTimeout = 300;
                connection.Open();
                command.Parameters.Add("@p_Name", SqlDbType.VarChar, 50).Value = customer.Name;
                command.Parameters.Add("@p_City", SqlDbType.VarChar, 50).Value = customer.City;
                command.Parameters.Add("@p_Phone", SqlDbType.VarChar, 50).Value = customer.Phone;
                command.ExecuteNonQuery();
                command.Dispose();
                connection.Close();
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public void DeleteCustomer(int customerId)
        {
            SqlConnection connection;
            SqlCommand command;
            try
            {
                connection = new SqlConnection(Common.connectionString);
                command = new SqlCommand("proc_DeleteCustomer", connection);
                command.CommandType = CommandType.StoredProcedure;
                command.CommandTimeout = 300;
                connection.Open();
                command.Parameters.Add("@p_CustomerId", SqlDbType.Int).Value = customerId;
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
