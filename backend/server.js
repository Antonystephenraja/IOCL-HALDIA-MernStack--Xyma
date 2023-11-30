import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes/iocl.js'
import Data from './components/Data.js';
//import Data from './components/Data.js';



const app = express();


app.use(cors());
app.use("/backend",routes)
app.use(express.json()); 
mongoose.connect("mongodb://127.0.0.1:27017/iocl");

app.post('/saveData', async (req, res) => {
  try {
    const inputValue = req.body.inputValue;
    const newData = new Data({ inputValue });
    await newData.save();

    res.status(201).json({ message: 'Data saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(2001, () => {
    console.log('Server started on port 2001');
  });