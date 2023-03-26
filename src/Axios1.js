import React, { useEffect ,useState} from 'react';
import axios from 'axios';
const Axios1 = () => {
    const[data,setData]=useState([]);
    const url="https://jsonplaceholder.typicode.com/users";
    useEffect(()=>{
        axios.get(url)
        .then((response)=>{
            setData(response.data);
        })
        .catch((error)=>{console.error(error)});
    })
    return (
        <div>
                {
                    data.map((item)=>{
                        return <li key={item.id}>{item.name}</li>
                    })
                }
        </div>
    );
};
export default Axios1;