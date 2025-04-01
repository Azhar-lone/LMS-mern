//importing dependencies
import express from "express";
import cookieParser from "cookie-parser";
import "dotenv/config";


//initializing express app
const app = express();

const port = process.env.PORT || 4000;
//listening
app.listen(port, () => console.log(`listening on http://localhost:${port}`));



//middlewares for parsing json,cookies and body data
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));


app.get("/",(req,res)=>{
    res.send("<h1>HOME PAGE</h1>")
})

//404 page
app.use((req, res) => {
  try {
    return res.status(404).json({
      msg: "Page Not found",
    });
  } catch (error) {
    res.status(500).json({
      msg: "internal server error",
    });
  }
});