import React,{useEffect,useState} from 'react';
import axios from 'axios';
const Axiosjsontable = () => {
    const[jsondata,setJsondata]=useState([]);
    const url="https://jsonplaceholder.typicode.com/users";
    useEffect(()=>{
        axios.get(url)
    .then((response)=>{
        setJsondata(response.data);
    })
    .catch((err)=>{console.error(err)});
    },[])
    return (
        <div>
        <table className="nv" border="1">
            <tbody>
            <tr>
                <th>index</th>
                <th>NAME</th>
                <th>USER NAME</th>
                <th>EMAIL</th>
                <th>ZIP CODE</th>
                <th>LATITUDE</th>
            </tr>
            
            {
            jsondata.map((x,index)=>{
               return(
                <tr>
                    <td key={index}>{x.id}</td>
                    <td key={index}>{x.name}</td>
                    <td key={index}>{x.username}</td>
                    <td key={index}>{x.email}</td>
                    <td key={index}>{x.address.zipcode}</td>
                    <td key={index}>{x.address.geo.lat}</td>
                    
                </tr>
               )}
            )}
            </tbody>
        </table>
    </div>
    );
    };
export default Axiosjsontable;