const {
    addExpense,
    getExpenses,
    deleteExpense,
} = require("../controllers/expenses");

const {
    addIncome,
    getIncomes,
    deleteIncome,
} = require("../controllers/income");

const router = require("express").Router();
const auth = require("../middleware/auth");

router.get("/", (req, res) => {
    res.send("Hellooo");
});

router
    .post("/add-income", auth, addIncome)
    .get("/get-incomes", auth, getIncomes)
    .delete("/delete-income/:id", auth, deleteIncome)
    .post("/add-expense", auth, addExpense)
    .get("/get-expenses", auth, getExpenses)
    .delete("/delete-expense/:id", auth, deleteExpense);

module.exports = router;
