import React, { Fragment ,useState,useContext} from 'react';
import './Create.css';
import Header from '../Header/Header';
import { AuthContext,firebaseContext } from '../../Store/FirebaseContext';
import { getStorage, ref ,uploadBytes,getDownloadURL} from "firebase/storage";
import {addDoc, collection} from 'firebase/firestore'
import {useHistory} from 'react-router-dom'



const Create = () => {
  const {user} = useContext(AuthContext)
  console.log(user,'uesser');
  const [name,setName] = useState('')
  const [category,setCategory] = useState('')
  const [price,setPrice] = useState('')
  const [image,setImage] = useState('')

  const storage = getStorage();
  const {db} = useContext(firebaseContext)

  const date = new Date()

  const history = useHistory()

  const handleSubmit =()=>{
  //   const ImagesRef = ref(storage, `/image/${image.name }`)
  // console.log(ImagesRef,'inage');
  const imageRef = ref(storage ,  `/image/${image.name }`)
 const fileUrl =uploadBytes(imageRef,image).then(()=>{
getDownloadURL(imageRef).then(async(url)=>{
  const colRef = collection(db,'products') 

  await addDoc(colRef , {
   name,
   category,
   price,
   url:url,
   userId:user.uid,
   createdAt:date.toDateString()
  })
  .then(()=>{
history.push('/')
  })

})
 })
}
  

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              defaultValue="John"
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              defaultValue="John"
              value={category}
              onChange={(e)=>{setCategory(e.target.value)}}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price" 
             value={price}
             onChange={(e)=>{setPrice(e.target.value)}}
             />
           
            <br />
         
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image):''}></img>
          
            <br />
            <input onChange={(e)=>{setImage(e.target.files[0])}} type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
         
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
