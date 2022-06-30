import React,{useContext,useEffect,useState} from 'react';
import { firebaseContext } from '../../Store/FirebaseContext';
import { PostContext } from '../../Store/PostContext';
import { doc,getDoc } from "firebase/firestore";
import './View.css';

function View() {

const [userDeteils,setUserDeteils] = useState()

const {post} = useContext(PostContext)
const {db} = useContext(firebaseContext)

console.log(post,'post');

useEffect(async()=>{
  const {userId} = post
        const res = doc(db,'users',userId)
        const docSnap = await getDoc(res)
       console.log(docSnap,'succes');  
},[])

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={post.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9;{post.price} </p>
          <span>{post.name}</span>
          <p>{post.category}</p>
          <span>{post.createdAt}</span>
        </div>
       {userDeteils && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDeteils.username}</p>
          <p>{userDeteils.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
