import axios from "axios";

export const FetchFromTMDB = async (url) => {
    
    const response = await axios.get(url);
  
    if(response.status !== 200){
      throw new Error(response.data.message)
    }    
    
    return response.data
  }
export {FetchFromTMDB as GET};