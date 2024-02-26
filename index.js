import { userRouter, express } from "./Controller/UserController.js";
import { productRouter } from "./Controller/ProductController.js";
import cookieParser from "cookie-parser";
import {errorHandling} from './Middleware/ErrorHandling.js'
import path from 'path'
import cors from 'cors'