const express = require("express");
const app = express();
const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");
const userController = require("./controllers/userController"); 
const verifyUser = require("./middleware/authUser"); 
app.use(express.json());

app.use("/admin", adminRoutes);
app.use("/user", userRoutes);


app.get("/cars",verifyUser,userController.getCars);

app.get("/", (req, res) => {
  res.send("Car Management System API");
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
