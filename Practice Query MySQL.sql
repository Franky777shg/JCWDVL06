-- cari customers yang tinggal di negara USA dan tidak tinggal di suite lalu urutkan berdasarkan credit limit dari yang paling rendah
select * from customers where country = 'USA' and addressLine2 is null order by creditLimit;

-- cari rata2 buyPrice per productLine lalu urutkan dari yang terbesar
select productLine, avg(buyPrice) as Average from products group by productLine order by Average desc;

-- dapatkan data dari table customers, cari yang country nya di USA dan France, order by customer name, dibatasi 5 data dimulai setelah data ke 3
select * from customers where country in ('USA', 'France') order by customerName limit 3, 5;

-- get data customer yang hanya membeli lewat sales, tinggal di negara germany, nama mengandung huruf n, dan urutkan berdarkan nama
select * from customers where salesRepEmployeeNumber is not null and country = 'Germany' and customerName like '%n%' order by customerName;

-- Practice:
-- get data customer dimana yang hanya membeli lewat sales dan credit limit di atas 60000 lalu urutkan berdasarkan credit limit dan di kasih limit 4 data, dimulai setelah data ke 10
-- hitung total customer per country, cari country yang rata2 credit limit nya di atas 50000
-- cari di table product untuk total quntityInStock, total buyPrice, dan total nilai secara keseluruhan per productLine dan diurutkan berdasarkan total nilai secara keseluruhan dari yang terbesar
-- get data dari table customers, cari country yang rata2 credit limit nya lebih tinggi daripada rata2 credit limit negara singapore 
