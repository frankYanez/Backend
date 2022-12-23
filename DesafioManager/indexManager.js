// const Manager1 = require('./DesafioManager/ManagerUsuarios');

// const manager = new Manager1('./DesafioManager/Usuarios.json');

// const processManager = async () => {
//     try {
//         const firtsUser = await manager.consultUser();
//         console.log(firtsUser);

//         //Creando Usuario
//         const newUser1 = {
//             name: 'Frank',
//             lastName: 'yanez',
//             age: 28,
//             curso: 'Programing backend'
//         }
//         const user1Result = await manager.createUser(newUser1)
//         console.log(user1Result);
//     } catch (error) {
//         console.log(error);
//     }
// }

// processManager()



const ProductManager= require('./ManagerProductos')

const manager = new ProductManager('../productos.json')



const products = async () => {
    try {
        // Consult number One
        // let products = await manager.getProducts()
        // console.log(products);

        //Writing first product
        // const newProduct1 = {
        //     title: 'Remera',
        //     description: 'The best',
        //     price: 200,
        //     thumbnail: 'http/:remera.com',
        //     code: 748251 ,
        //     stock: 10
        // }

        //Adding first product
        // const productResult = await manager.addProduct(newProduct1);
        // console.log(productResult);

        // // Consult number Two
        // products = await manager.getProducts()
        // console.log(products);

        // //Writing second product
        // const newProduct2 = {
        //     title: 'Camisa',
        //     description: 'The best',
        //     price: 500,
        //     thumbnail: 'http/:Camisa.com',
        //     code: 710251 ,
        //     stock: 8
        // }

        //Adding second product
        // const productResult2 = await manager.addProduct(newProduct2);
        // console.log(productResult2);

        //Prueba filter
        // let deleteProduct = await manager.deleteProduct(1)ñ
        

       
        
    } catch (error) {
        console.log(error);
    }
}

products()


