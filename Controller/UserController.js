import express from 'express'
import bodyParser from 'body-parser'
import { users } from '../model/index.js'
import { verifyAToken } 
from "../Middleware/AuthenticateUser.js"