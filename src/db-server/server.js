const mongoose = require("mongoose")

export const dbConnect = () =>{
    mongoose.connect('mongodb+srv://Vicky1:Vicky2k18@cluster0.yuzrm.mongodb.net/VueDB?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
    }).then(()=>{
        console.log("DB Connected")
    })

  
}

