 import { storage } from "../../server/fbConfig"
 
 const picture = (pic) =>{
    const namePic = pic.name
    const uploadTask =storage.ref(`image/${namePic}`).put(pic)
     return((dispatch)=>{
        uploadTask.on('state_changed',
         (snapshot) =>{
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)*100)
            dispatch({
                type:"PICTURE_PROGRESS",
                progress
                }) 
        }, (error)=>{
            dispatch({
                    type:"PICTURE_ERROR",
                    error
                    }) 
        } , ()=>{
           storage.ref('image').child(namePic).getDownloadURL().then(url=>{
            dispatch({
                type:"PICTURE_SAVED",
                url
            }) 
        })
            
        })
    }
     )
 }

 export default picture
 