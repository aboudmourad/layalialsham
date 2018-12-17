const slides = (slides) =>{
    return (dispatch, getState,{getFirebase, getFirestore})=>{
        console.log(slides)
        const firestore = getFirestore();
        firestore.collection('slides').add({slides})
        .then((response)=>{
            dispatch({
                type:"SLIDES_POSTED",
                 response
          })
        }).catch((error)=>{
            dispatch({
                type:"SLIDES_ERROR",
                error
            }) 
        })
    }
}

export default slides;