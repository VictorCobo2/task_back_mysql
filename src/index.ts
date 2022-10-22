import express, { Request, Response, NextFunction } from "express";
import db from "./db/connection";
import { tasks_route } from "./routes/tasks";

console.clear();
dbConnection()
const port = process.env.PORT || 9000;
const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
  //res.header('Access-Control-Allow-Origin', 'http://192.168.0.173:8080');
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, x_token ,X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(express.json());

//Connect DB-------------------
async function dbConnection() {
    try {
        await db.authenticate()
        console.log("DB online")
    } catch (error) {
        console.log(error)
        
    }
}
//-----------------------------

//URL-----------

app.use("/api", tasks_route)

//--------------

app.get("/", (req, res) => {
  res.send("API funcionado");
});


app.listen(port, () => console.log("API lisening in the port: ", port));
