const initState = {
    progress:0,
    error:null,
    url:null
}

const PictureReducer = (state = initState, action)=>{
    switch (action.type){
        case "PICTURE_PROGRESS":
        return {
            ...state,
            progress : action.progress
        }
        case "PICTURE_ERROR":
        return {
            ...state,
            error : action.error,
        }
        case " PICTURE_SAVED":
        return {
            ...state,
            url : action.imageURL,
        }     
        default:
        return state;
    }
}

export default PictureReducer;