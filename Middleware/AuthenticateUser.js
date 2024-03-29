import "dotenv/config"
import jwt from "jsonwebtoken";
const {sign, verify} = jwt
function createToken(user){
    return sign({
        emailAdd: user.emailAdd,
        userPass: user.userPass
    }, 
    process.env.SECRET_KEY,
    {
        expiresIn: '2h'
    }
    )
}

function verifyAToken(req, res, next) {
    // Retrieve a token from the browser
    const token = req?.headers['Authorization']
    if(token) {
        if(verify(token, process.env.SECRET_KEY)){
            next()
        }else {
            res?.json({
                status: res.statusCode,
                msg: "Please provide the accurate login information."
            })
        }
    }else {
        res?.json({
            status: res.statusCode,
            msg: "Please login."
        })
    }
}
export {
    createToken,
    verifyAToken
}