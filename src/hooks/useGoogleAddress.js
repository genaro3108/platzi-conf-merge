import { useState, useEffect } from 'react';
import axios from 'axios';


const useGoogleAddress = address => {
    const [map,setMap] = useState({});
    const API_KEY = 'fbb80221a125d717a9d2a2faaab3ab08';
    
    useEffect(async ()=>{
        const getCoordinates = async () =>{
            const params = {
                access_key: API_KEY,
                query: address
            };
            const response =  await axios.get('http://api.positionstack.com/v1/forward', {params});               
            const coordinates = {
                lat:response.data.data[0].latitude,
                lng:response.data.data[0].longitude
            }
            console.log(coordinates);
            setMap(coordinates);   
        }
        getCoordinates();
    },[]);
    return map;
};

export default useGoogleAddress;