# README
================

## Projects
------------

### 1. Expense Calculator

#### Overview

Web application to calculate monthly expenses.

#### Features

* Add expenses
* Calculate total and average daily expenses
* Display top 3 largest expenses

#### Example Use Case

| Category | Amount ($) |
| --- | --- |
| Groceries | 15,000 |
| Rent | 40,000 |
| Transportation | 5,000 |
| Entertainment | 10,000 |
| Communication | 2,000 |
| Gym | 3,000 |

Output:

* Total amount of expenses: 75,000 $
* Average daily expense: 2,500 $
* Top 3 expenses:
	+ Rent (40,000)
	+ Groceries (15,000)
	+ Entertainment (10,000)

### 2. API Testing: Identifying Defects in Product Data

#### Overview

Automated tests to validate API data.

#### Tools

* CursorAI
* ReqBin/Postman
* API: https://fakestoreapi.com/products (mock store)

#### Test Objectives

1. Verify server response code (expected 200).
2. Confirm the presence of the following attributes for each product:
	* `title` (name) - must not be empty.
	* `price` (price) - must not be negative.
	* `rating.rate` - must not exceed 5.

### 3. SQL Queries: Analyzing a Database Online

#### Overview

SQL queries to analyze sales data.

#### Tools

* SQLite Online
* CursorAI/ChatGPT

#### Tasks

1. Calculate the total sales volume for March 2024.
2. Find the customer who spent the most overall.
3. Calculate the average order value for the last three months.

#### Expected Results

1. Total sales for March: 27,000
2. Top-spending customer: Alice (20,000)
3. Average order value: 6,000
