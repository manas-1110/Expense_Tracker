const IncomeSchema = require("../models/incomeModel");

exports.addIncome = async (req, res) => {
    const { title, amount, category, description, date } = req.body;

    const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date,
    });

    try {
        if (!title || !category || !description || !date) {
            return res.status(400).json({ message: "All fields are required" });
        }

        if (amount <= 0 || !amount == "number") {
            return res.status(400).json({ message: "Amount must be a number" });
        }
        await income.save();
        res.status(200).json({ message: "Income Added" });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }

    // console.log(income);
};

exports.getIncomes = async (req, res) => {
    try {
        const incomes = await IncomeSchema.find().sort({ createdAt: -1 });
        res.status(200).json(incomes);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

exports.deleteIncome = async (req, res) => {
    const { id } = req.params;
    // console.log(req.params);
    IncomeSchema.findByIdAndDelete(id)
        .then((income) => {
            res.status(200).json({ message: "Income Deleted" });
        })
        .catch((err) => {
            res.status(500).json({ message: "Server Error" });
        });
};
