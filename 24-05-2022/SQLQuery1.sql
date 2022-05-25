
CREATE DATABASE Cginfinity

CREATE TABLE Employee(EmpId int primary key , FirstName varchar(20), LastName varchar(30),Department varchar(30), Salary int , City varchar(20) );

INSERT INTO Employee Values(101,'Alex','Smith','Admin',$10000,'Boulder');
INSERT INTO Employee Values(102,'Amy','Mars','Admin',$12000,'New York');
INSERT INTO Employee Values(103,'James','Mont','Maketing',$6000,'Los Angeles');
INSERT INTO Employee Values(104,'John','Smith','Sales',$4000,'Houston');
INSERT INTO Employee Values(105,'Tom','Ford','Sales',$8000,'Phoenix');
INSERT INTO Employee Values(106,'William','Cruze','Database',$20000,'San Antonio');
INSERT INTO Employee Values(107,'Sam','Grace','HR',$21000,'San Diego');

select * from Employee;



