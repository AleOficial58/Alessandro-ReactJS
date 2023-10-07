import { useEffect, useState } from "react"
import { collection, getDocs, getFirestore } from "firebase/firestore"


const Collection = () => {
  const [products, setProducts] = useState([])
  console.log(products)

useEffect(()=>{

},[])

return(
  <div>Collection</div>
)
  
}
