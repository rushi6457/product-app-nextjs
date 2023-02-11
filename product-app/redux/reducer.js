import { DELETE_ERROR, DELETE_LOADING, DELETE_SUCCESS } from "./types"

const initState = {
    loading:false,
    error:false,
    data:[]
}

export const reducer = (state = initState,{type,payload}) =>{

    switch(type) {

    case DELETE_LOADING:{
        return{
            ...state,
            loading:true,
            error:false,
          
        }
    }
    case DELETE_SUCCESS:{
        return{
            ...state,
            loading:false,
            error:false
        }
    }
    case DELETE_ERROR:{
        return {
            ...state,
            loading:false,
            error:true
        }
    }
        default:{
            return state
        }
    }
}