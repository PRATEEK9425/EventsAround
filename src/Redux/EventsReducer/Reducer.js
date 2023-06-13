import * as types from "./actiontype"

const initialstate  ={
    isLoading:false,
    isError:false,
    EventData:[]
}


const Reducer =(state=initialstate ,action)=>{
   
const {type,payload} =action
switch(type){
 
    case types.Event_Get_req:return {...state,isLoading:true}
    case types.Event_Get_req_success:return {...state,isLoading:false, EventData:payload}
    case types.Event_Get_req_failure:return{...state,isError:true, EventData:[]}

    case types.Event_Post_req:return {...state,isLoading:true}
    case types.Event_Post_req_success:return {...state,isLoading:false,EventData:[...state.EventData,payload]}
    case types.Event_Post_req_failure:return{...state,isError:true,EventData:[]}

    case types.Individual_Get_req:return {...state,isLoading:true}
    case types.Individual_Get_req_success:return {...state,isLoading:false, EventData:payload}
    case types.Individual_Get_req_failure:return{...state,isError:true, EventData:[]}


    case types.Individual_Post_req:return {...state,isLoading:true}
    case types.Individual_Post_req_success:return {...state,isLoading:false,EventData:[...state.EventData,payload]}
    case types.Individual_Post_req_failure:return{...state,isError:true,EventData:[]}

    case types.Sell_Get_req:return {...state,isLoading:true}
    case types.Sell_Get_req_success:return {...state,isLoading:false, EventData:payload}
    case types.Sell_Get_req_failure:return{...state,isError:true, EventData:[]}


    case types.Sell_Post_req:return {...state,isLoading:true}
    case types.Sell_Post_req_success:return {...state,isLoading:false,EventData:[...state.EventData,payload]}
    case types.Sell_Post_req_failure:return{...state,isError:true,EventData:[]}


    default :return state
}

}

export {Reducer}