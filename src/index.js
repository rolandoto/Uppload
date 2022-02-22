const express  = require('express')
const path     = require('path')
const app      = express();
const morgan   = require('morgan')
const multer   = require('multer')
const uuid   =    require('uuid/v4')
const {format} = require('timeago.js')


//setting
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


//mongoose conection
 require('./database.js')


//middleware
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())



app.use((req, res , next)=> {
    app.locals.format = format;
    next()
})


//multer
const storage = multer.diskStorage({
    destination: function(req, file ,cb){
       cb(null, path.join(__dirname,'./public/img/upload'))
    },
    filename: function(req, file , cb){
        cb(null, uuid()+path.extname(file.originalname))
    }
})
app.use(multer({storage:storage}).single('image'))


//routes
app.use(require('./routes/index.js'))



//file static
app.use(express.static(path.join(__dirname,'./public')))


app.listen(app.get('port'), ()=> {
    console.log('port on server', app.get('port'))
})