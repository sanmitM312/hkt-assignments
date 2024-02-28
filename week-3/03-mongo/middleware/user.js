const {User} = require('../db')
async function userMiddleware(req, res, next) {
    const username = req.headers.username
    const password = req.headers.password

    await User.findOne({
        username,
        password
    }).then((val) => {
        if(val){
            next();
        }else{
            res.status(403).json({
                "msg" : "User doesn\'t exist"
            })
        }
    })
}

module.exports = userMiddleware;