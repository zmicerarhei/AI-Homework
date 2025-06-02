-- Total sales for March: 27,000 

SELECT SUM(amount) AS total_sales_march
FROM orders
WHERE STRFTIME('%Y-%m', order_date) = '2024-03';

-- Top-spending customer: Alice (20,000 )

SELECT customer, SUM(amount) AS total_spent
FROM orders
GROUP BY customer
ORDER BY total_spent DESC
LIMIT 1;

-- Average order value (total sales / number of orders): 6,000 

SELECT AVG(amount) AS average_order_value
FROM orders
WHERE order_date >= DATE('2024-01-01');