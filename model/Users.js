import {connection as db} from "../Config/index.js"
import {hash, compare} from 'bcrypt'
import { createToken } 
from "../Middleware/AuthenticateUser.js"