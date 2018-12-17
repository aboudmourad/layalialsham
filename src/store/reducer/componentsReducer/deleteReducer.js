const initState = {
    deleteError:null,
}

const deleteReducer = (state = initState, action)=>{
    switch (action.type){
        case "DELETE_SUCESS":
        return {
            ...state,
        }
        case "DELETE_ERROR":
        return {
            ...state,
            deleteError : "deleted Faild",
        }
        case "DELETE_PIC_SUCESS":
        return {
            ...state,
        }
        case "DELETE_PIC_ERROR":
        return {
            ...state,
            deleteError : "deleted Faild",
        }
        default:
        return state;
    }
}

export default deleteReducer;