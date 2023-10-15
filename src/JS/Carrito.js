import { db } from '../Firebase'
import { doc, setDoc } from "firebase/firestore";

export async function FinalizarCompra(productos, nombre, apellido, dni, email) {
    debugger
    try {
        let idCompra = generateUUID()
        let precio = 0
        productos?.forEach(element => {
            precio += element.precio
        })
        let productosArray = []
        productos.forEach(item => {
            var prod = {
                id: item.id,
                nombre: item.nombre
            }
            productosArray.push(prod)
        })

        await setDoc(doc(db, "Compras", idCompra), {
            total: precio,
            nombre: nombre,
            apellido: apellido,
            dni: dni,
            email: email,
            productos: productosArray
        })
        
        // .then(() => {
        //     productos?.forEach(element => {
        //         let idProd = generateUUID()
        //         setDoc(doc(db, "ProductosDeCompra", idProd), {
        //             idProducto: element.idProducto,
        //             idCompra: idCompra
        //         });
        //     });
        // }).catch(error => {
        //     console.log(error)
        // })
    } catch (error) {
        console.log(error)
    }
}


function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}