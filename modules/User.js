var express = require('express');
var router = express.Router();
var Category = require('../Models/Category')
var Product = require('../Models/Product')
router.get('/tamcho',(request,response) => {
    return response.send('Tam la mot con cho')
})

router.post('/testpost',(request,response)=>{
    console.log(request.body)
    const { username, password } = request.body;
    const data = {
        username,
        password
    }
    return response.status(200).send(data);
})

router.post('/createCategory', (request,response)=>{
    const {name,description} = request.body;
    const newCategory = new Category({
        name:name,
        description:description
    })
    newCategory.save()
    .then(result=>{
        return response.status(200).send({
            result: 'da save thanh cong'
        })
    })
    .catch(error=>{
        return response.status(400).send({
            result: 'save that bai'
        })
    })
})

router.post('/createProduct', (request,response)=>{
    const {name,description,category} = request.body;

    const newProduct = new Product({
        name:name,
        description:description,
        category: category
    })

    newProduct.save()

    .then(result=>{
        return response.status(200).send({
            result: 'da save thanh cong'
        })
    })
    .catch(error=>{
        return response.status(400).send({
            result: 'save that bai'
        })
    })
})

router.get('/getCategory',(request,response)=>{
    Category.find()
    .then(result => {
        return response.status(200).send({
            data: result
        })
    })
})


router.get('/getProduct',(request,response)=>{
    Product.find()
    .then(result => {
        const queryResult = result;
        console.log(queryResult)
    })
})
module.exports = router;