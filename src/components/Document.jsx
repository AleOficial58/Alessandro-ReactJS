import React from 'react';
import {useEffect, useState} from 'react'
// import {doc, getDoc, getFirestore} from 'firebase/firestore'
import { useParams } from 'react-router-dom';

const Document = () => {
    //const { id } = useParams()
    // const [product, setProduct] = useState([])
    // console.log(product)


    // useEffect(() => {
    //     // const db = getFirestore()

    //     const oneItem = doc(db, "Compras", "0fd9c0f8f9f3481b91e1f75aa7ad9dbd")
    //     getDoc(oneItem).then((snapshot)=>{
    //         if(snapshot.exists()){
    //             const docs = snapshot.data()
    //             setProduct(docs)
    //         }
    //     })
    // }, [])


    return (
        <div>
            {/* <h1>Producto</h1> */}
            
            {
                <div>
                    <h4>
                        {/* Producto:{product.nombre} */}
                    </h4>
                </div>
               
            }

        </div>

  )
}

export default Document;