require("dotenv").config();
const express = require("express");
const app = express();

require("./config/db.config")();
require("./config/session.config")(app);
require("./config/middleware.config")(app);

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

const dogRoutes = require("./routes/dog.routes");
app.use("/api/dogs", dogRoutes);

const userRoutes = require("./routes/user.routes");
app.use("/api/user", userRoutes);

const messageRoutes = require("./routes/message.routes");
app.use("/api/messages", messageRoutes);

app.listen(process.env.PORT, () => console.log("server running"));
