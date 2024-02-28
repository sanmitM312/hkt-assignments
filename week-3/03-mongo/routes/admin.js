const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin,Course} = require('../db');
// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const admin = new Admin({
        username,
        password
    })

    // check if repeated admin doesn't exist
    await admin.save();

    res.json({
        'msg' : 'admin with username ' + username + ' added successfully'
    })
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const course = new Course(req.body);

    await course.save();
    res.json({
        'msg' : "Course added successfully"
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    const courses  = await Course.find({},{_id:1,title:1,title:1,description:1,price:1,imageLink:1}); 
    res.json(courses);
});

module.exports = router;