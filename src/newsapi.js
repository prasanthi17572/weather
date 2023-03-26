import React, { useEffect ,useState} from 'react';
import axios from 'axios';
const Axios1 = () => {
    const[data,setData]=useState([]);
    const url="https://newsapi.org/v2/everything?q=tesla&from=2023-01-14&sortBy=publishedAt&apiKey=260905e0b2fe4e138dc5c86d76238f3f";
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