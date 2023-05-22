const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const userRouter = require('./routes/users');
require('dotenv').config();

const PORT = process.env.PORT;
const connectionString = process.env.ATLAS_URI;

app.use(cors());
app.use(express.json());

mongoose.connect(connectionString, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Connection to the database has been established succesfully"))
	.catch((error) => console.error("Connection to database has failed... Error: " + error))

app.use('/welcome', userRouter);

app.listen(PORT, () => {
	console.log(`Server is running at PORT: ${PORT}`);
});

