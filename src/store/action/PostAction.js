const PostAction = (post) =>{
    return (dispatch, getState,{getFirebase, getFirestore})=>{
        const newPost ={
            title:post.title,
            description:post.description,
            picture : post.selectedFile.name,
            price : post.price,
            name : post.name,
        }
        const firestore = getFirestore();
        firestore.collection('post').add({newPost})
        .then((response)=>{
            dispatch({
                type:"POST_POSTED",
                 response
          })
        }).catch((error)=>{
            dispatch({
                type:"POST_ERROR",
                error
            }) 
        })
    }
}

export default PostAction;