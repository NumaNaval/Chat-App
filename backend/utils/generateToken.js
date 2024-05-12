import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn : '60d',
    })

    res.cookie("jwt",token,{
        maxAge: 60*24*60*60*1000,
        httpOnly:true,//prevent XSS attacks cross-side scripting attack
        sameSite:"strict",//CSRF attacks cross-site request forgery attacks  
        secure: process.env.NODE_ENV !== "development" ,
    });
};

export default generateTokenAndSetCookie;