const mongoose = require("mongoose")



mongoose.connect('mongodb+srv://ym79793:a9ZoKqdFNfAuiA2z@atlasdb.in2rkqn.mongodb.net/atlasdb?retryWrites=true&w=majority')

.then(() => {
    console.log("concteded to atlas")
})

.catch(() => {
    console.log("filed to connect to atlas")
})