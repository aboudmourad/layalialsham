const menu = (menu) =>{
    return (dispatch, getState,{getFirebase, getFirestore})=>{
        const newMenu ={
            title:menu.title,
            price:menu.price,
            picture : menu.selectedFile.name
        }
        const firestore = getFirestore();
        firestore.collection('menu').add({newMenu})
        .then((response)=>{
            dispatch({
                type:"MENU_POSTED",
                 response
          })
        }).catch((error)=>{
            dispatch({
                type:"MENU_ERROR",
                error
            }) 
        })
    }
}

export default menu;