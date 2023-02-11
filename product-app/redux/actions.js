import axios from "axios"
import { DELETE_ERROR, DELETE_LOADING, DELETE_SUCCESS } from "./types"

export const deleteProduct = (id) =>async (dispatch)=>{

    dispatch({type:DELETE_LOADING})

    try {
        await axios.delete(`http://localhost:8080/deleteProduct/${id}`)
        dispatch({type:DELETE_SUCCESS})
    } catch (error) {
        dispatch({type:DELETE_ERROR})
    }
}