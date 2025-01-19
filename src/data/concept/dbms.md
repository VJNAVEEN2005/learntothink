# MySQL

# Create Schemas

```sql
create schemas dummy
```

# Create Table

## Select the schemas

```sql
use dummy
```

## Create table now

```sql
create table student(
Name varchar(100),
Dept varchar(100),
Marks_scored float,
)
```

# Alter table

## Adding column

```sql
alter table student add column City varchar(100)
```

## Changing name

```sql
alter table student change Marks_scored Marks float
```

## Change datatype

```sql
alter table student change Marks Marks int
```

# Drop Table

```sql
drop table student
```

# Insert Value

```sql
insert into student values("Jhon",23,"CSE")
```

# Display Table

## Display all

```sql
select * from student
```

| Name | Age | Dept |
| --- | --- | --- |
| Jhon | 23 | CSE |

## Display selected column

```sql
select customer_name,address from customer
```

| customer_name | address |
| --- | --- |
| John Doe | 392, Sunset |
| Gova | N0.2c,Ohangara Street |

## Display selected row with condition (where)

```sql
select * from customer where state = "Puducherry"
```

# Update data

## In all column

```sql
UPDATE student set age=23
```

## Change in selected

```sql
UPDATE student set department="Computer" where department="CSE"
```

## Delete row

```sql
delete from sutdent where department="Computer"
```

## Delete column

```sql
alter table customer drop column mobile_number
```

# Condition

```sql
select * from customer where customer_id >= 3
```

# Truncate (Remove data from the table)

```sql
truncate table customer
```

# Aggregate Function

Let the table be,

| student_name | student_mark | department |
| --- | --- | --- |
| Praveen | 1 | CSE |
| Manoj | 2 | MECH |
| Karthi | 3 | ECE |
| Raju | 4 | MECH |
| Deepak | 5 | CSE |

## SUM()

```sql
select sum(student_mark) from student
```

| sum(student_mark) |
| --- |
| 15 |

```sql
select sum(student_mark) as totalmarks from student
```

| totalmarks |
| --- |
| 15 |

## MAX()

```sql
select max(student_mark) from student
```

| max(student_mark) |
| --- |
| 5 |

## MIN()

```sql
select min(student_mark) from student
```

| min(student_mark) |
| --- |
| 1 |

## AVG()

```sql
select avg(student_mark) from student
```

| avg(student_mark) |
| --- |
| 3.0000 |

## COUNT()

```sql
select count(student_name) from student where department = "CSE"
```

| count(student_name) |
| --- |
| 2 |