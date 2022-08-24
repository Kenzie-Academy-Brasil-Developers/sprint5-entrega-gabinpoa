import express from "express";
import { AppDataSource } from "./data-source";
import { userRouter } from "./user.routes";

const app = express();

app.use(express.json());

app.use("/users", userRouter);

app.listen(3000, () => {
  AppDataSource.initialize().catch((err) => {
    console.log("Error during Data Source initialization");
  });
});
