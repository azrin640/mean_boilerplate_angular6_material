const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const productController = require('../controllers/productController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', (req, res) => {
    res.render('index');
})

// ** USER **
// Register User
router.post('/register', 
    userController.validateRegister,
    catchErrors(userController.register)
);

// Login User
router.post('/login', userController.login);

// ** PRODUCT **
// Create Category
router.post('/product/category', 
    //catchErrors(userController.isLoggedIn),
    catchErrors(productController.createCategory)
);

// Delete Category
router.post('/product/category/delete',
    catchErrors(productController.deleteProductCategory)
);

// Update Category
router.post('/product/category/update', 
    catchErrors(productController.updateProductCategory)
);


// ** PRODUCTS ** 
router.get('/products/categories', 
    catchErrors(productController.getProductsCategories)
);

router.get('/categories', catchErrors(productController.getCategories));
router.post('/product', catchErrors(productController.createProduct));
router.get('/products', catchErrors(productController.getProducts));
router.get('/product/:id', catchErrors(productController.getProduct));
router.post('/product/update/:id', catchErrors(productController.updateProduct));

module.exports = router;


