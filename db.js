const mongoose = require("mongoose")



mongoose.connect('')

.then(() => {
    console.log("concteded to atlas")
})

.catch(() => {
    console.log("filed to connect to atlas")
})
