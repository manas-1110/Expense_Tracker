const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            maxLength: 50,
        },
        amount: {
            type: Number,
            required: true,
            maxLength: 20,
            trim: 20,
        },
        type: {
            type: String,
            default: "income",
        },
        date: {
            type: Date,
            required: true,
        },
        category: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
            maxLength: 20,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Expense", ExpenseSchema);
