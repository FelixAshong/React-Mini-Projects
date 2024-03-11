import React,{useState,useEffect} from 'react';
import './App.css';
import PersonalCard from './Component/PersonalCard';
import reformDate from './Component/test';
import axios from "axios";
function App() {
const [data, setData] = useState("");
const [isLoading, setIsLoading] = useState(false);


 useEffect(()=>{

   return ()=> fetching()
 },[])

const fetching=async()=>{
  setIsLoading(true);
  try{
    const response=await axios.get("https://randomuser.me/api/?results=10");

     const relevantData=  response.data.results.map((eachProperty,index)=>{
          return (
            <PersonalCard
             key={index}
             fullName={eachProperty.name.title+ eachProperty.name.first + eachProperty.name.last}
              profilePicture={eachProperty.picture.medium}
               age={eachProperty.registered.age} 
               gender={eachProperty.gender} 
               address={eachProperty.location.street.number + eachProperty.location.street.number + eachProperty.location.city + eachProperty.location.state + eachProperty.location.postcode+ eachProperty.location.country} 
               email={eachProperty.email} 
               phoneNumber={eachProperty.cell}
               birthDate={reformDate(eachProperty.registered.date)} />
          )
      
        })
    
        setData(relevantData)
        setIsLoading(false);
    
    //!     the person's object itself 
    console.log(response.data)
     console.log("ME",relevantData)
     
  }
  catch(error){
    console.log(error)
  }
}
  return (
    <>
    
    {!isLoading? data:<p>Loading...</p>}
    </>
    // <div >  <PersonalCard fullName={} profilePicture={} age={} gender={} address={} email={} phoneNumber={} />  </div>
  );
}

export default App;



  //{
      //    title:eachProperty.name.title,
      //    firstname:eachProperty.name.first,
      //    lastname:eachProperty.name.last,
      //    fullname: this.title + this.firstname + this.lastname,
      //   //  fullXXname:[title],
      //    picture:eachProperty.picture.medium,
      //    birthdate:eachProperty.registered.date,
      //    age:eachProperty.registered.age,
      //    gender:eachProperty.gender,
      //    email:eachProperty.email,
      //    phoneNumber:eachProperty.cell,
      //    city:eachProperty.location.city,
      //    country:eachProperty.location.country,
      //    street:`${eachProperty.location.street.number}, ${eachProperty.location.street.name}`,
      //    state:eachProperty.location.state,
      //    postcode:eachProperty.location.postcode,
      //     fulladdress:`${eachProperty.street}, ${eachProperty.city}, ${eachProperty.state}, ${eachProperty.postcode}. ${eachProperty.country}`
      //  }
     
