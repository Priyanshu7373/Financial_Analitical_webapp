import { Transaction } from "../models/transaction.js";
import { User } from "../models/user.js";

export const withdrawl = async (req, res) => {
    const { amount, caption, date,description,mode } = req.body;
    const user = await User.findOne({ _id: req.user._id });
    if (user.initial_balance < amount) {
        return (
            res.status(404).json({
                success: false,
                message: "insufficient balance",
            }))
    }
    const user_transaction = await Transaction.findOne({ owner: req.user._id });
    if (!user_transaction) {
        const transaction = await Transaction.create({ owner: req.user._id, amount, caption, date,description,mode });
        transaction.withdrawl.unshift({ amount, caption, date,description,mode });
        transaction.save();
    }
    else {
        user_transaction.withdrawl.unshift({ amount, caption, date,description,mode });
        user_transaction.save();
    }
    user.initial_balance = user.initial_balance - amount;
    user.Total_transaction = user.Total_transaction + amount;
    user.save();
    return (
        res.status(200).json({
            success: true,
            message: "withdrawl success",
        }))
}
export const deposit = async (req, res) => {
    const { amount, caption, date } = req.body;
    const user = await User.findOne({ _id: req.user._id });
    const user_transaction = await Transaction.findOne({ owner: req.user._id });
    if (!user_transaction) {
        const transaction = await Transaction.create({ owner: req.user._id, amount, caption, date });
        transaction.deposit.unshift({ amount, caption, date });
        transaction.save();
    }
    user_transaction.deposit.unshift({ amount, caption, date });
    user_transaction.save();
    user.initial_balance = user.initial_balance + amount;
    user.Total_transaction = user.Total_transaction + amount;
    user.save();
    return (
        res.status(200).json({
            success: true,
            message: "deposit success",
        }))
}
export const getwithdrawl = async (req, res) => {
    const user = await User.findOne({ _id: req.user._id });
    const user_transaction = await Transaction.findOne({ owner: req.user._id });
    if (!user_transaction) {
        return (
            res.status(404).json({
                success: false,
                message: "no transaction found"
            })
        )
    }
    const withdraw = user_transaction.withdrawl;
    return (
        res.status(200).json({
            success: true,
            withdraw,
        }))
}
export const getdeposit = async (req, res) => {
    const user = await User.findOne({ _id: req.user._id });
    const user_transaction = await Transaction.findOne({ owner: req.user._id });
    if (!user_transaction) {
        return (
            res.status(404).json({
                success: false,
                message: "no transaction found"
            })
        )
    }
    const deposit = user_transaction.deposit;
    return (
        res.status(200).json({
            success: true,
            deposit,
        }))
}

export const loan_given = async (req, res) => {
    const { amount, person, date } = req.body;
    const user = await User.findOne({ _id: req.user._id });
    if (user.initial_balance < amount) {
        return (
            res.status(404).json({
                success: false,
                message: "insufficient balance",
            }))
    }
    const user_transaction = await Transaction.findOne({ owner: req.user._id });
    if (!user_transaction) {
        const transaction = await Transaction.create({ owner: req.user._id, amount, person, date });
        transaction.loan_given.push({ amount, caption, date });
        transaction.save();
    }
    else {
        user_transaction.loan_given.push({ amount, person, date });
        user_transaction.save();
    }
    user.initial_balance = user.initial_balance - amount;
    user.Total_transaction = user.Total_transaction + amount;
    user.save();
    return (
        res.status(200).json({
            success: true,
            message: "loan disbursed success",
        }))
}
export const loan_taken = async (req, res) => {
    const { amount, person, date } = req.body;
    const user = await User.findOne({ _id: req.user._id });

    const user_transaction = await Transaction.findOne({ owner: req.user._id });
    if (!user_transaction) {
        const transaction = await Transaction.create({ owner: req.user._id, amount, person, date });
        transaction.loan_taken.push({ amount, person, date });
        transaction.save();
    }
    else {
        user_transaction.loan_taken.push({ amount, person, date });
        user_transaction.save();
    }
    user.initial_balance = user.initial_balance + amount;
    user.Total_transaction = user.Total_transaction + amount;
    user.save();
    return (
        res.status(200).json({
            success: true,
            message: "loan taken success",
        }))
}
export const viewloan = async (req, res) => {
    const user = await User.findOne({ _id: req.user._id });

    const user_transaction = await Transaction.findOne({ owner: req.user._id });
    if (!user_transaction) {
        return (
            res.status(404).json({
                success: false,
                message: "No transaction found",
            }))
    }
    const loangiven=user_transaction.loan_given;
    const loantaken=user_transaction.loan_taken;
    return(
        res.status(200).json({
            success:true,
            loangiven,
            loantaken
        })
    )
}
