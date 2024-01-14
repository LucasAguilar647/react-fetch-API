import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


const useFetchGifs = ( categoria ) => {
    
    const [state, setState] = useState( {
        data:[],
        loading: true
    } );

    useEffect( ()=>{
        getGifs( categoria )
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            })

    }, [categoria] );

    /*setTimeout( () =>{
        setState({
            data: [1,2,3,4,5,6],
            loading :false
        })
    } , 3000);*/

    return state;

}

export default useFetchGifs;

