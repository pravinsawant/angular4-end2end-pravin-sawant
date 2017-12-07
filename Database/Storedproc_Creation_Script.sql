/****************** proc_AddCustomer ***************/

CREATE PROC proc_AddCustomer(
	@p_Name VARCHAR(50),
	@p_City VARCHAR(50),
	@p_Phone VARCHAR(50)
)
AS
BEGIN
	INSERT INTO Customer(Name, City, Phone) 
	SELECT @p_Name, @p_City, @p_Phone
END
GO

/****************** proc_DeleteCustomer ***************/

CREATE PROC proc_DeleteCustomer(
	@p_CustomerId INT
)
AS
BEGIN
	DELETE Customer 
	 WHERE Id = @p_CustomerId
END
GO
/****************** proc_GetTransactions ***************/

CREATE PROC proc_GetTransactions(
	@p_CustomerName VARCHAR(50)
)
AS
BEGIN
	IF(Lower(@p_CustomerName) = 'all')
		SET @p_CustomerName = NULL

	SELECT A.*, B.Name 
	  FROM [Transaction] A 
	 INNER JOIN Customer B 
	    ON A.CustId = B.Id
	 WHERE B.Name = ISNULL(@p_CustomerName, B.Name)
END
GO

/****************** proc_AddTransaction ***************/

CREATE PROC proc_AddTransaction(
	@p_CustId INT,
	@p_NoOfShares INT,
	@p_PurchasePrice INT,
	@p_Symbol VARCHAR(50)
)
AS
BEGIN
	INSERT INTO [Transaction](
		CustId,		Symbol,			NoOfShares,		PurchasePrice) 
 SELECT @p_CustId,	UPPER(@p_Symbol),		@p_NoOfShares,	@p_PurchasePrice
END
GO

/****************** proc_DeleteTransaction ***************/

CREATE PROC proc_DeleteTransaction(
	@p_TransactionId INT
)
AS
BEGIN
	DELETE [Transaction]
	 WHERE Id = @p_TransactionId
END
GO