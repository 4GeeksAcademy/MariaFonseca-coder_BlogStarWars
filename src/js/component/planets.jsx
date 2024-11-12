import React, {useContext,useEffect} from "react";
import {Context} from "../store/appContext"

export const Planets =()=>{
    const {store, actions}=useContext(Context)
    // console.log(store.demo); PARA VER QUE HAY EN STORE
    useEffect (()=>{
        actions.VehiclesFetch()
    },[])
    return 
}