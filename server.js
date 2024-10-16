const express = require('express');

const userRoutes = require('./routes/users');

const app = express();
const PORT = 3000;

// Parse incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  User routes
app.use("/api", userRoutes);


app.listen(PORT, () => {
  console.log(`🚀 Server is running on PORT => ${PORT} 🚀`);
});
