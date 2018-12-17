const initState = {
    post:null,
}

const PostReducer = (state = initState, action)=>{
    switch (action.type){
        case "POST_POSTED":
        return {
            ...state,
            post : action.response
        }
        case "POST_ERROR":
        return {
            ...state,
            error : action.error,
        }
        default:
        return state;
    }
}

export default PostReducer;