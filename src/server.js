require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const dns = require('node:dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

const app = express();

// conectar banco
connectDB();

// middleware
app.use(express.json());

// 👇 ROTAS (todas aqui)
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

// rota teste
app.get("/", (req, res) => {
  res.send("API rodando 🚀");
});

// rota temporária (pode remover depois)
const User = require("./models/User");

app.get("/create-user", async (req, res) => {
  try {
    const user = await User.create({
      name: "Rayan",
      email: "rayan@email.com",
      password: "123456",
    });

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
