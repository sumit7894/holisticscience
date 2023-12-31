import React, { useEffect, useState } from 'react'
import './home.css'
import NavBar from '../../Components/Navbar/Navbar'
import {db} from '../../firebase-config'
import { collection,  getDocs } from 'firebase/firestore'
// import NavBar from '../../Components/Navbar/NavBar'
const Home = () => {
  const [data,setData] = useState([]);

  useEffect(()=>{
    getData();
  },[]);

  const getData = async()=>{
    const valRef= collection(db,"post");
    const dataDb = await getDocs(valRef);
    const allData = await dataDb.docs.map(val=>({...val.data(),id:val.id}))
    setData(allData);
    console.log("yup all data",data);
    console.log(allData);
  }
  return (
    <div>
      <NavBar/>
      Home
    </div>
  )
}

export default Home