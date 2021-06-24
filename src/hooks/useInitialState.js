import { useEffect, useState } from 'react';
import axios from "axios";
import initialState from '../initialState';
const useInitialState = () => {
    const [state,setState] = useState(initialState);   
    /* useEffect(async () => {
        const response = await axios(API);
        setProducts(response.data);
    },[]); */
    
    return {      
        state
    }
};

export default useInitialState;