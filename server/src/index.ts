import express, {Express} from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records"
import cors from "cors";
import dotenv from "dotenv"; 

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json()); 
app.use(cors({
    origin: "http://localhost:5173",  // Your frontend URL
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));
 
const mongoURI: string = process.env.MONGODB_URI || "";
 
mongoose
    .connect(mongoURI)
    .then((()=> console.log("CONNECTED TO MONGODB")))
    .catch((err)=>console.error("Failed to connect to MongoDB:", err)); 

app.use("/financial-records", financialRecordRouter);

    app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});