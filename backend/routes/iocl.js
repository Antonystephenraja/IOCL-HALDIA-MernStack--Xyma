import express from 'express'

import { register,login,insertData, LastData,SavedData,Limits_Data} from "../controller/alldata.js";
const routes = express.Router();

 routes.post("/register",register);
 routes.post("/login",login);
 routes.get("/insertData",insertData)
routes.get('/LastData',LastData)
routes.post('/SaveData',SavedData)
routes.get('/Limits_Data',Limits_Data)

export default routes