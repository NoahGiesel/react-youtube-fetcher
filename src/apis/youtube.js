import axios from "axios"


const KEY = "AIzaSyBsmHRRSQVo6HAwGjiveJYGuEbqWVM1KlI"



export default axios.create ({
    baseURL : "https://www.googleapis.com/youtube/v3",
    params : {
        part : "snippet",
        maxResults : 6,
        key : KEY,
        
    }
})