INSERT INTO Customer(Name, City, Phone) 
SELECT 'Jack', 'Pune', '823234981'

INSERT INTO Customer(Name, City, Phone) 
SELECT 'Jill', 'Pune', '823234982'

INSERT INTO Customer (Name, City, Phone) 
SELECT 'Jane', 'Pune', '823234983'

INSERT INTO Customer(Name, City, Phone) 
SELECT 'Jimy', 'Mumbai', '823234984'

INSERT INTO Customer (Name, City, Phone) 
SELECT 'Jacob', 'Mumbai', '823234985'

INSERT INTO Customer (Name, City, Phone) 
SELECT 'Jason', 'Mumbai', '823234986'
GO

INSERT INTO [Transaction](
	   CustId,		Symbol,		NoOfShares,		PurchasePrice)
SELECT 1,			'MSFT',		5,				500

INSERT INTO [Transaction](
	   CustId,		Symbol,		NoOfShares,		PurchasePrice)
SELECT 2,			'INFY',		10,				350

INSERT INTO [Transaction](
	   CustId,		Symbol,		NoOfShares,		PurchasePrice)
SELECT 3,			'COGN',		10,				200

INSERT INTO [Transaction](
	   CustId,		Symbol,		NoOfShares,		PurchasePrice)
SELECT 4,			'PERS',		20,				600

INSERT INTO [Transaction](
	   CustId,		Symbol,		NoOfShares,		PurchasePrice)
SELECT 5,			'FTIL',		50,				400