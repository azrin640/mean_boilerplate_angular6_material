const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Product =  mongoose.model('Product');
const User = mongoose.model('User');
const Category = mongoose.model('Category');
const { promisify } = require('es6-promisify');
require ('express-validator');

exports.createCategory = async (req, res) => {
    if(req.body.id){
        const category = {
            name: req.body.name,
            description: req.body.description 
        };
        const updateCategory = await Category.findOneAndUpdate({_id: req.body.id}, category);
        if(updateCategory && updateCategory._id){
            res.json(updateCategory);
        }    
    }
    else{
        const category = new Category({
            name: req.body.name,
            description: req.body.description 
        });

        await category.save(function(err, success){
            if(err){
                res.json(err);
            }
            if(success){
                res.json(success);
            }
        });
    }
    
}

exports.updateProductCategory = async (req, res) => {
    console.log(req.body.id);
    const category = {
        name: req.body.name,
        description: req.body.description
    }
    if(req.body.id){        
        const updateCategory = await Category.findOneAndUpdate({_id: req.body.id}, category);
        if(updateCategory && updateCategory._id){
            res.json(updateCategory);
        }    
        else{
            res.json({status: 400, message: 'Bad Request'});
        }
    }
    else{
        res.json({status: 404, message: 'Not Found' })
    }
}

exports.getProductsCategories = async (req, res) => {
    const categories = await Category.find();
    if(categories){
        const result = categories.sort(function(a, b){
            if(a.name < b.name) return -1;
            if(a.name > b.name) return 1;
            return 0;
        });
        res.json(result);
    }
    else{
        res.json({
            status: '401', 
            message: 'No category found'
        });
    }    
}

exports.validateProduct = (req, res, next) => {
    req.sanitizeBody('title');
    req.checkbody('title').notEmpty();
    req.sanitizeBody('price');
    req.checkbody('price').notEmpty();
    req.sanitizeBody('category');
    req.checkbody('category').notEmpty();
    req.sanitizeBody('title');
    req.checkbody('title').notEmpty();
}

exports.createProduct = async (req, res) => {
    console.log(req.body);
    const product = new Product({
        title: req.body.title,
        price: req.body.price,
        category: req.body.category,
        image: req.body.imageUrl
    });
    await product.save(function(err, result){
       if(result){
           res.json(result);
       }
       else{
           res.json(err);
       }
   });    
}

exports.getProducts = async (req, res) => {
    const products = await Product.find(function(err, results){
        if(err){
            res.json(err);
        }
        if(results){
            res.json(results);
        }
    });
}

exports.getProduct = async (req, res) => {
    const product = await Product.findOne({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }
        if(result){
            res.json(result);
        }
    });
}

exports.updateProduct = async (req, res) => {
    const id = req.params.id;
    const product = req.body;

    await Product.findByIdAndUpdate(
        {_id: id},
        {   title: req.body.title,
            price: req.body.price,
            category: req.body.category,
            image: req.body.imageUrl
        }, 
        {new: true},
        function(err, result) {
            if(err){
                res.json(err);
            }
            if(result){
                res.json(result);
            }
    });
}

exports.deleteProductCategory = async (req, res) => {
    console.log(req.body);
    if(req.body && req.body._id){
        await Category.findByIdAndRemove({_id: req.body._id}, function(err, result){
            if(err){
                res.json(err);
            }
            if(result){
                res.json(result);
            }
        });
    }
    else{
        res.json({
            status: 404,
            message: 'Request Not Found'
        })
    }
}