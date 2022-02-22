const mongoose  = require('mongoose')



mongoose.connect('mongodb+srv://ho:26290357r@cluster0.e5jrf.mongodb.net/test',{
    useNewUrlParser: true ,
    useUnifiedTopology: true

}).then((db)=> { console.log('database connected success')
}).catch(err => console.error(err))


