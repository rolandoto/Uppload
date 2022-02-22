const express = require('express')
const router = express.Router();
const {unlink} = require('fs-extra')
const path = require('path')

const Image = require('../model/image.js')


router.get('/', async (req,res,next)=>{

    const image = await Image.find()
    console.log(image)
    res.status(201).json({
        list:image,
        ok:true
    })
})

router.get('/upload', (req,res,next)=>{
    res.render('upload')
})

router.post('/upload', async (req,res,next)=>{
      
     const image = new Image()
     image.title = req.body.title,
     image.description = req.body.description,
     image.filename = req.file.filename,
     image.originalname = req.file.originalname,
     image.path   = '/img/upload/'+ req.file.filename,
     image.mimetype =req.file.mimetype,
     image.size  = req.file.size
     await image.save()

      res.redirect('/')
})


router.get('/images/:id', async (req,res,next)=>{
     
      const id = req.params.id;
      const image = await Image.findById(id);
      res.render('profile', {image: image})
})


router.get('/images/:id/delete', async (req,res,next)=>{
     
    const id = req.params.id;
    const imageDeleted = await Image.findByIdAndDelete(id);
   
   await unlink(path.resolve(`./src/public/${imageDeleted.path}`))

    res.redirect('/')
})


module.exports = router