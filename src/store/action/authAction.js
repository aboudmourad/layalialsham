export const authSingIn = (singIn) =>{
    return (dispatch, getState,{getFirebase})=>{
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            singIn.email,
            singIn.password,
        )
        .then((response)=>{
            window.location.href = "/admin";
            dispatch({
                type:"LOGIN_SUCESS",
                 response
          })
        }).catch((error)=>{
            dispatch({
                type:"LOGIN_ERROR",
                error
            }) 
        })
    }
}

export const authSingOut = () =>{
    return (dispatch, getState,{getFirebase})=>{
        const firebase = getFirebase();
        firebase.auth().signOut()
        .then((response)=>{
            dispatch({
                type:"LOGOUT_SUCESS",
                 response
          })
        }).catch((error)=>{
            dispatch({
                type:"LOGOUT_ERROR",
                error
            }) 
        })
    }
}
