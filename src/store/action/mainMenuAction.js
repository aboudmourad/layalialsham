const mainMenuAction = (mainMenu) =>{
    return (dispatch, getState,{getFirebase, getFirestore})=>{
        const newMainMenu ={
            title:mainMenu.title,
            description:mainMenu.description,
            picture : mainMenu.selectedFile.name
        }
        const firestore = getFirestore();
        firestore.collection('mainDishes').add({newMainMenu})
        .then((response)=>{
            dispatch({
                type:"MAIN_MENU_POSTED",
                 response
          })
        }).catch((error)=>{
            dispatch({
                type:"MAIN_MENU_ERROR",
                error
            }) 
        })
    }
}

export default mainMenuAction;