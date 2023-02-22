/** @format */

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();

import userRoutes from "./routes/users.js";
import questionRoutes from "./routes/Questions.js";
import answerRoutes from "./routes/answers.js";
const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// app.get("/", (req, res) => {
// 	res.send("this is the stack overflow api ");
// });
app.get('/', function (req, res) {
	res.send('Hello World!');
  });
app.use("/user", userRoutes);
app.use("/questions", questionRoutes);
app.use("/answer", answerRoutes);
// app.use('/user/*', (req, res)=>{  res.send("this is the stack overflow api ")})
const PORT = process.env.PORT || 5000;
const CONNECTION_URL = process.env.MONGODB_URI;

// ==========VERCEL DEPLOY================

if (process.env.NODE_ENV === "production") {
	app.get("/", (req, res) => {
		app.use(express.static(path.resolve(__dirname, "../client", "build")));
		res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
	});
}
// ===================

// const CONNECTION_URL ="mongodb+srv://admin:admin@stack-overflow-clone.3mscsti.mongodb.net/stack-overflow-clone?retryWrites=true&w=majority"
mongoose
	.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() =>
		app.listen(PORT, () => {
			console.log(`Server is running port ${PORT}`);
		})
	)
	.catch((err) => console.log(err.massage));
