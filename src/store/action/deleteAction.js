import { storageRef } from "../../server/fbConfig"

export const deleteAction = (id, database) =>{
    return (dispatch, getState,{getFirebase, getFirestore})=>{
        const firestore = getFirestore();
        firestore.collection(database).doc(id).delete()
        .then((response)=>{
            dispatch({
                type:"DELETE_SUCESS",
                 response
          })
        }).catch((error)=>{
            dispatch({
                type:"DELETE_ERROR",
                error
            }) 
        })

    }
}

export const deletePicAction = (pic) =>{
    return (dispatch)=>{
        var desertRef = storageRef.child(`image/${pic}`);
        desertRef.delete().then((response)=> {
            dispatch({
                type:"DELETE_PIC_SUCESS",
                 response
          })
        }).catch((error)=>{
            dispatch({
                type:"DELETE_PIC_ERROR",
                error
            }) 
        });
        

    }
}