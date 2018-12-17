const initState = {
    mainMenu:null,
}

const MainDishesReducer = (state = initState, action)=>{
    switch (action.type){
        case "MAIN_MENU_POSTED":
        return {
            ...state,
            mainMenu : action.response
        }
        case "MAIN_MENU_ERROR":
        return {
            ...state,
            error : action.error,
        }
        default:
        return state;
    }
}

export default MainDishesReducer;