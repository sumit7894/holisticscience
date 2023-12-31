import React, { useEffect, useState } from 'react'
import NavBar from '../../Navbar/Navbar'
import { db } from '../../../firebase-config';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import './blogpost.css'
const BlogPost = ({htmlContent}) => {
    const [postContent,setPostContent] = useState();
    const [cardsData,setCardsData] = useState();
    const { postId } = useParams();
    
    const getContent = async()=>{
        const docRef = doc(db, "content", `${postId}`);
        getDoc(docRef).then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          console.log("Document data:", doc.data());
          setPostContent(data);
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.error("Error getting document:", error);
      });
      }

      const getData = async()=>{
        const valCardRef= collection(db,"post");
        const dataCardDb = await getDocs(valCardRef);
        const cards = dataCardDb.docs.map(val=>({...val.data(),id:val.id}));
        const filteredData = cards.filter((card)=>card.id === `${postId}`);
        setCardsData(filteredData);
      }
      console.log("here is card data",cardsData)
    useEffect(()=>{
        getData();
        getContent();
      },[postId]);
    
  return (
    <div>
        <NavBar/>
        <div className='full-post-page'>
        {postContent ? (
        <div className="full-post-content">
          <h1>{cardsData[0].title}</h1>
          <div dangerouslySetInnerHTML={{ __html: postContent?.content }} />
          <p>
            <strong>Author:</strong> {cardsData[0].author} | <strong>Date:</strong> {cardsData[0].date}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
        </div>
       
    </div>
  )
}

export default BlogPost