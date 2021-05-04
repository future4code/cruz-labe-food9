import axios from "axios"
import { useEffect, useState } from "react"



const useRequestData = (initialData,url) =>{
    const [data,setData] = useState(initialData)

    const getData = async() =>{
        try{
            const response = await axios.get(url,{
                headers:{
                    auth:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im5DM1lKZk1DY2Rsc0NFTWF6dmZXIiwibmFtZSI6IkVkaW1hciBzYW50b3MiLCJlbWFpbCI6ImVkaW5ob0BmdXR1cmU0LmNvbSIsImNwZiI6IjY5Ni45OTMuMjM0LTkxIiwiaGFzQWRkcmVzcyI6ZmFsc2UsImlhdCI6MTYyMDE0NDAwNH0.aB7xc65IrfUMKqyI3P5yr_XTVrnDGdHiUCC2R1C7xmc"
                }
            })
            setData(response.data)
        }catch(erro){
            console.log(erro.response.data.message)
        }
    }

    useEffect(()=>{
        getData();
    },[])

    return data;
}
export default useRequestData;