import { useEffect, useState } from "react"
import { collection, getDocs, getFirestore, snapshotEqual } from "firebase/firestore"


const Collection = () => {
  const [products, setProducts] = useState([])
  console.log(products)

useEffect(()=>{

  const db = getFirestore()

  const itemsCollection = collection(db, "Compras")
  getDocs(itemsCollection).then((snapshot)=>{
    const docs = snapshot.docs.map((doc)=> doc.data())
    setProducts(docs)
  })
},[])

return(
  <div>

    <h1>
    Collection
    </h1>

    {
        products.map((p)=>(
        <div key={p.nombre}>

          <h4>producto: {p.nombre}</h4>
          <h5>categoria: {p.categoria}</h5>
          <h6>${p.precio}</h6>

          </div>

        ))
    }

  </div>
)
  
}
