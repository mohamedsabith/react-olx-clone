import React,{useState,useEffect,useContext} from 'react';
import { collection, getDocs} from "firebase/firestore";
import { useHistory } from 'react-router-dom';
import Heart from '../../assets/Heart';
import { firebaseContext } from '../../Store/FirebaseContext';
import './Post.css';
import { PostContext } from '../../Store/PostContext';

function Posts() {

  const {setPost} = useContext(PostContext)
const {db} = useContext(firebaseContext)

const [products,setProducts] = useState([])

useEffect(async()=>{

  const colRef = collection(db, 'products')

      const snapshots = await getDocs(colRef)

      const docs = snapshots.docs.map(doc=>{
         const data = doc.data()
         data.id = doc.id
         return data
       })
       setProducts(docs)

},[])

const history = useHistory()

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
        
        {
          products.map(product =>{
            return   <div
            onClick={()=>{setPost(product);history.push('/view')}}
            className="card"
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.url} alt="image" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name"> {product.name}</p>
            </div>
            <div className="date">
              <span>{product.createdAt}</span>
            </div>
          </div>
          })
        }
        
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
