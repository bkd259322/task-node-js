const express = require("express");
const Budget = require("../models/Budget");
const router = express.Router();

router.post("/", async (req, res) => {
  const { dailyLimit, weeklyLimit, monthlyLimit, userId } = req.body;

  // console.log(dailyLimit,weeklyLimit,monthlyLimit)
  try {
    if (dailyLimit > weeklyLimit) {
      return res.json({ message: "daily limit is grater then weekly limit" });
    }

    if (weeklyLimit > monthlyLimit) {
      return res.json({ message: "weekly limit is grater then monthly limit" });
    }

    // daily !> weekly !> monthly
    // findOne query
    // budget exists ??
    // if exists and updated in this month than not update
    // in not updated in this month than update

    const budget_new = await Budget.findOne({ _id: userId });

    console.log(budget_new);

    if (budget_new) {
      if (budget_new.Date < new Date()) {
        const temp = await Budget.findOneAndUpdate(
          { _id: userId },
          {
            dailyLimit,
            weeklyLimit,
            monthlyLimit,
            Date: new Date().setMonth(new Date().getMonth() + 1),
          }
        );
        console.log(temp)
        return res.json({message:"update succesfully"})
      }

      return res.json({ message: "budget already created for this month" });
    }

    const budget = new Budget({
      dailyLimit,
      weeklyLimit,
      monthlyLimit,
      Date: new Date().setMonth(new Date().getMonth() + 1),
    });

    await budget.save();

    res.status(201).json(budget);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  const budgets = await Budget.find();
  res.json(budgets);
});

module.exports = router;
