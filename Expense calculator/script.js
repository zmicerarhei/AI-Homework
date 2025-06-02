// script.js
const expensesTable = document.getElementById('expenses-table');
const expensesBody = document.getElementById('expenses-body');
const addExpenseForm = document.getElementById('add-expense-form');
const addExpenseBtn = document.getElementById('add-expense-btn');
const resultsSection = document.getElementById('results-section');
const totalAmountElement = document.getElementById('total-amount');
const averageDailyExpenseElement = document.getElementById('average-daily-expense');
const topExpensesList = document.getElementById('top-expenses-list');

// Initialize expenses array
let expenses = [];

// Function to add new expense to the table
function addExpense(category, amount) {
    const expenseRow = document.createElement('tr');
    expenseRow.innerHTML = `
        <td>${category}</td>
        <td>${amount}</td>
    `;
    expensesBody.appendChild(expenseRow);
    expenses.push({ category, amount });
    recalculateResults();
}

// Function to calculate total amount of expenses
function calculateTotalAmount() {
    const totalAmount = expenses.reduce((acc, current) => acc + parseFloat(current.amount), 0);
    return totalAmount;
}

// Function to calculate average daily expense
function calculateAverageDailyExpense(totalAmount) {
    const averageDailyExpense = totalAmount / 30;
    return averageDailyExpense.toFixed(2);
}

// Function to display top 3 expenses
function displayTopExpenses() {
    const sortedExpenses = expenses.sort((a, b) => parseFloat(b.amount) - parseFloat(a.amount));
    const topExpenses = sortedExpenses.slice(0, 3);
    topExpensesList.innerHTML = '';
    topExpenses.forEach((expense) => {
        const expenseListItem = document.createElement('li');
        expenseListItem.textContent = `${expense.category} ($${expense.amount})`;
        topExpensesList.appendChild(expenseListItem);
    });
}

// Function to recalculate results
function recalculateResults() {
    const totalAmount = calculateTotalAmount();
    const averageDailyExpense = calculateAverageDailyExpense(totalAmount);
    totalAmountElement.textContent = `Total Amount: $${totalAmount}`;
    averageDailyExpenseElement.textContent = `Average Daily Expense: $${averageDailyExpense}`;
    displayTopExpenses();
}

// Event listeners
addExpenseBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const category = document.getElementById('category-input').value;
    const amount = document.getElementById('amount-input').value;
    addExpense(category, amount);
    document.getElementById('category-input').value = '';
    document.getElementById('amount-input').value = '';
});