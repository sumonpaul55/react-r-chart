import axios from 'axios';
import { useEffect, useState } from 'react';
import { LineChart as Lcahrt, Line ,CartesianGrid, XAxis, YAxis,BarChart, Bar, Cell, Tooltip, Legend, ResponsiveContainer} from 'recharts';

function LineChart() {
    const [phone, setPhone] = useState([])
    const studentData = [
        { name: "Alice", mathScore: 10, scienceScore: 92, socialScore: 78 },
        { name: "Bob", mathScore: 78, scienceScore: 100, socialScore: 75 },
        { name: "Charlie", mathScore: 92, scienceScore: 94, socialScore: 88 },
        { name: "David", mathScore: 88, scienceScore: 91, socialScore: 82 },
        { name: "Emma", mathScore: 75, scienceScore: 80, socialScore: 70 },
        { name: "Frank", mathScore: 96, scienceScore: 98, socialScore: 92 },
        { name: "Grace", mathScore: 5, scienceScore: 87, socialScore: 79 },
        { name: "Henry", mathScore: 89, scienceScore: 92, socialScore: 85 },
        { name: "Isabella", mathScore: 91, scienceScore: 95, socialScore: 90 },
        { name: "Jack", mathScore: 79, scienceScore: 83, socialScore: 76 }
      ];
      
useEffect(()=>{
    axios.get("https://openapi.programming-hero.com/api/phones?search=iphone")
    .then(data =>{
        const phones = data.data.data;
        // console.log(phones)
       const needPhones = phones.map((phone)=>{
          const phoneData ={
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1])
          } 
          return phoneData
        })
        setPhone(needPhones)
    })
},[])
// console.log(phone)

  return (
    <div>
        <h1>Line Chart</h1>
        <div className='bg-black'>
            <Lcahrt width={800} height={400} data={studentData}>
                <Line type="monotone" dataKey="scienceScore" stroke="white"></Line>
                <Line type="monotone" dataKey="socialScore"stroke="#00f"></Line>
                <Line type="monotone" dataKey="mathScore" stroke='yellow'></Line>
               <XAxis/>
               <YAxis/>
               <CartesianGrid stroke='#afa'/>
            </Lcahrt>
        </div>
        <div className='bg-black mt-10'>
            <Lcahrt width={500} height={400} data={studentData}>
                <Line type="monotone" dataKey="scienceScore" stroke="white"></Line>
                <Line type="monotone" dataKey="socialScore"stroke="#00f"></Line>
                <Line type="monotone" dataKey="mathScore" stroke='yellow'></Line>
               <XAxis/>
               <YAxis/>
            </Lcahrt>
        </div>
        <div className="mt-32">
            <h1 className="mt-10">Phone Chart based price</h1>
            <BarChart width={1000} height={400} data={phone}>
          <Bar dataKey="price" fill="#000" />
          <XAxis dataKey="name"/>
          <YAxis dataKey="price"/>
        </BarChart> 
        </div>
    </div>
  )
}

export default LineChart