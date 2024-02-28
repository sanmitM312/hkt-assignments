const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
  
    // const existingUser = await User.findOne({ username : username });
    // if (existingUser) {
    //   return res.status(400).send("User already exists");
    // }
  
    const user = new User({
      username: username,
      password: password,
    });
  
    await user.save();
  
    res.json({
      msg: "user created succcessfully",
    });
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({},{_id:1,title:1,description:1,price:1,imageLink:1,published:1});

    res.json(courses);
    
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    console.log("here")
    const courseId  = req.params.courseId
    const username = req.headers.username

   
    const courses = await Course.find({
      _id : courseId
    }).then(async (val) => {
      if(val){
        // purchase course
        await User.updateOne({
           username:username
        },{
          "$push": {
            purchasedCourses: courseId
        }
        })
        
      }else{
        res.status(403).json("Invalid course id")
      
      }
    })
    courses.array.forEach(course => {
      console.log(course);
      res.json({
        "msg" : "Course " + course.title + " purchased"
      })
    }, err => {
        if (err) {
            console.log('Error occurred while iterating over courses:', err);
        }
    });

    
    
});

router.get('/purchasedCourses', userMiddleware,async (req, res) => {

  const username = req.headers.username;
  const password = req.headers.password;

  
  const user =  await User.findOne({
      username : username,
      password : password
  }) // }).then(async (user) => {
    //   if(user){
    //     // console.log(user.purchasedCourses[0])
    //     user.purchasedCourses.forEach( async (course) => {
    //       await Course.find({
    //         _id : course._id
    //       }).then((val) => {
    //         res.status(200).json({
    //           course
    //         })
    //       })
    //     })
        
    //   }else{
    //     res.status(403).json({
    //       "msg" : "User not found"
    //     })
    //   }
    // })
    const courses = await Course.find({
      _id: {
          "$in": user.purchasedCourses
      }
    });
    res.json({
      "purchasedCourses" : courses
    })
});

module.exports = router