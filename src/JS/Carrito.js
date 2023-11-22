import { db } from '../Firebase'
import { doc, setDoc, getDocs, collection } from "firebase/firestore";

export async function FinalizarCompra(productos, nombre, apellido, dni, email) {
    debugger
    try {
        return new Promise((resolve, reject) => {
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
    
            setDoc(doc(db, "Compras", idCompra), {
                total: precio,
                nombre: nombre,
                apellido: apellido,
                dni: dni,
                email: email,
                productos: productosArray
            }).then(() => {
                resolve(idCompra);
            }).catch(error => {
                reject(error);
            })
        })
    } catch (error) {
        console.log(error)
    }
}

export async function ObtenerProductos() {
    try {
        return new Promise((resolve, reject) => {
            getDocs(collection(db, "Productos"))
                .then(data => {
                    resolve(data)
                })
                .catch(err => {
                    ToastError("Error al buscar documentos")
                    reject(err)
                })
        })

    } catch (error) {
        debugger
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