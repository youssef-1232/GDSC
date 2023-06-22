const tasks = require('../model/taskSchema')

const path = require('path')


const addtask = (req, res) => {
    const newtask = new tasks({ descrption: req.body.descrption, Date: req.body.Date, })
    newtask.save().then(() => {

        // console.log(req.body.Date)
        res.status(200).redirect('/tasks')
    }).catch((err) => {
        for (let e in err.errors) {
            console.log(err.errors[e].message)
            res.status(400).send("Bad requset...")
        }
    });


}



const finedAllTasks = async(req, res) => {

    const mytasks = await tasks.find()
    if (!mytasks) {
        return res.status(400).send("not found")
    }

    res.status(200).render('task.ejs', { mytasks })
}

const deletetask = async(req, res) => {

    //const mytask = await tasks.deleteOne({})
    const mytask = await tasks.findByIdAndDelete({ id: req.body.id })


    if (!mytask) {
        return res.status(400).send("not found..")
    }

    res.redirect('/tasks')
        //  var id = req.query;

    // checking the number of tasks selected to delete
    //     var count = Object.keys(id).length;
    //     for (let i = 0; i < count; i++) {

    //         // finding and deleting tasks from the DB one by one using id
    //         tasks.findByIdAndDelete(Object.keys(id)[i], function(err) {
    //             if (err) {
    //                 console.log('error in deleting task');
    //             }
    //         })
    //     }


}



module.exports = { addtask, finedAllTasks, deletetask }