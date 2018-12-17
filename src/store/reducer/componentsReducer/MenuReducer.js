const initState = {
    menu:null,
    error:null,
    // MenuFood : [ 
    //     {image:"template/images/p4.jpg", title:"CUM SOCIIS NATOQUE ", price:"05"},
    //     {image:"template/images/p5.jpg", title:"SOCIIS NATOQUE", price:"05"},
    //     {image:"template/images/p6.jpg", title:"NATOQUE", price:"05"},
    //     {image:"template/images/p7.jpg", title:"CUM SOCIIS NATOQUE", price:"05"},
    //     {image:"template/images/img1.jpg", title:"CUM SOCIIS  ", price:"05"},
    //     {image:"template/images/img2.jpg", title:"CUM SOCIIS NATOQUE", price:"05"},
    //     {image:"template/images/img3.jpg", title:"CUM SOCIIS ", price:"05"},
    //     {image:"template/images/img4.jpg", title:"CUM SOCIIS ", price:"05"}
    // ]
}

const MenuReducer = (state = initState, action)=>{
    switch (action.type){
        case "MENU_POSTED":
        return {
            ...state,
            menu : action.response
        }
        case "MENU_ERROR":
        return {
            ...state,
            error : action.error,
        }
        default:
        return state;
    }
}

export default MenuReducer;