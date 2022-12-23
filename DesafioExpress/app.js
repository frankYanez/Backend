const ProductManager = require('../DesafioManager/ManagerProductos')
const Manager = new ProductManager('../productos.json')
const express = require('express')
const app = express()


 function productsTodos () {
    return  Manager.getProducts()
} 
const products = productsTodos()
console.log(products);


app.get('/products',(req,res)=>{
    const limit = req.query
    
    if(limit){
       const filter = products.filter( product => product.id <= limit)
       res.send(filter)
       return
    }
    res.send(products)

})

app.get('/products/:pid', (req,res)=>{
    const paramId = req.params.pid

    if (paramId) {
        const search = products.find( product => product.id === Number(paramId))
        res.send(search)
    }else{
        res.send('Product not found')
    }
})








const PORT = 8080
app.listen(PORT , ()=>{
    console.log(`El servidor esta escuchando en el puerto ${PORT}`);
})
