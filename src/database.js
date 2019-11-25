const mongoose  = require('mongoose')



mongoose.connect('mongodb://localhost/finteres',{
    useNewUrlParser: true ,
    useUnifiedTopology: true

}).then((db)=> { console.log('database connected success')
}).catch(err => console.error(err))


