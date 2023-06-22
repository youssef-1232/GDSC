const bcrypt = require('bcrypt')
const mongoos = require('mongoose')

const taskSchema = mongoos.Schema({
    descrption: {
        type: String,
        //required: true,
        //enm: ["Ahmed", "mohamed"],
    },
    Date: {
        type: Date,
        required: true,
        //unique: true,
    },

    // online: {
    //     type: String,
    //     required: true,

    // },

})



const taskModel = mongoos.model('tasks', taskSchema)

module.exports = taskModel