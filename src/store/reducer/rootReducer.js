import { combineReducers } from "redux";
import slideReducer from "./componentsReducer/SlideReducer";
import MainDishesReducer from "./componentsReducer/MainDishesReducer";
import MenuReducer from "./componentsReducer/MenuReducer";
import EventReducer from "./componentsReducer/EventReducer";
import TestimonialsReducer from "./componentsReducer/TestimonialsReducer";
import { firestoreReducer } from "redux-firestore"
import PictureReducer from "./componentsReducer/PictureReducer";
import { firebaseReducer } from "react-redux-firebase"

import PostReducer from "./componentsReducer/PostReducer";


const rootReducers = combineReducers ({
    slides:slideReducer,  
    dishes:MainDishesReducer,
    menu:MenuReducer,
    event:EventReducer,
    test:TestimonialsReducer,
    firestore : firestoreReducer,
    firebase: firebaseReducer,
    picture:PictureReducer,
    post:PostReducer,
})

export default rootReducers;