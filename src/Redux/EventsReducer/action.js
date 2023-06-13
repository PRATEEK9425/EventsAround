import * as types from "./actiontype"
import axios from "axios"

// Get req for event
const Getreq=()=>{
    return{
type:types.Event_Get_req
    }
}

const Getreqsuccess=(payload)=>{
    return{
type:types.Event_Get_req_success,
payload
    }
}
const Getreqfailure=()=>{
    return{
type:types.Event_Get_req_failure
    }
}

const Getdatafn=()=>(dispatch)=>{
    dispatch(Getreq())
return axios.get("https://database-yy3a.onrender.com/EventPosts")
.then((res)=>
{ 
dispatch(Getreqsuccess(res.data))

}
)
.catch((err)=>{
    console.log(err)
    dispatch(Getreqfailure())
})
}


// POST req for event
const Postreq=()=>{
    return{
type:types.Event_Post_req
    }
}

const Postreqsuccess=(payload)=>{
    return{
type:types.Event_Post_req_success,
payload
    }
}

const Postreqfailure=()=>{
    return{
type:types.Event_Post_req_failure
    }
}

const Postdatafn=(payload)=>(dispatch)=>{
    dispatch(Postreq())
    return axios.post("https://database-yy3a.onrender.com/EventPosts",payload)
    .then((res)=>{
        dispatch(Postreqsuccess(res.data))
    })
    .catch((err)=>{
        dispatch(Postreqfailure())
        console.log(err)
    })
}

// Individual Post req for Homepage  for event

const IPostreq=()=>{
    return{
type:types.Individual_Post_req
    }
}

const IPostreqsuccess=(payload)=>{
    return{
type:types.Individual_Post_req_success,
payload
    }
}

const IPostreqfailure=()=>{
    return{
type:types.Individual_Post_req_failure
    }
}

const IPostdatafn=(payload)=>(dispatch)=>{
    dispatch(IPostreq())
    return axios.post("https://database-yy3a.onrender.com/IndividualPost",payload)
    .then((res)=>{
        dispatch(IPostreqsuccess(res.data))
    })
    .catch((err)=>{
        dispatch(IPostreqfailure())
        console.log(err)
    })
}

// Individual Get req for Homepage  for event

const IGetreq=()=>{
    return{
type:types.Individual_Get_req
    }
}

const IGetreqsuccess=(payload)=>{
    return{
type:types.Individual_Get_req_success,
payload
    }
}
const IGetreqfailure=()=>{
    return{
type:types.Individual_Get_req_failure
    }
}

const IGetdatafn=()=>(dispatch)=>{
    dispatch(IGetreq())
return axios.get("https://database-yy3a.onrender.com/IndividualPost")
.then((res)=>
{ 
dispatch(IGetreqsuccess(res.data))

}
)
.catch((err)=>{
    console.log(err)
    dispatch(IGetreqfailure())
})
}

// Sell Get req for Marketplace  for event

const SellGetreq=()=>{
    return{
type:types.Sell_Get_req
    }
}

const SellGetreqsuccess=(payload)=>{
    return{
type:types.Sell_Get_req_success,
payload
    }
}
const SellGetreqfailure=()=>{
    return{
type:types.Sell_Get_req_failure
    }
}

const SellGetdatafn=()=>(dispatch)=>{
    dispatch(SellGetreq())
return axios.get("https://database-yy3a.onrender.com/Selling")
.then((res)=>
{ 
dispatch(SellGetreqsuccess(res.data))

}
)
.catch((err)=>{
    console.log(err)
    dispatch(SellGetreqfailure())
})
}

// Sell Post req for Marketplace  for event
// POST req for event
const SellPostreq=()=>{
    return{
type:types.Sell_Post_req_success
    }
}

const SellPostreqsuccess=(payload)=>{
    return{
type:types.Sell_Post_req_success,
payload
    }
}

const SellPostreqfailure=()=>{
    return{
type:types.Sell_Get_req_failure
    }
}

const SellPostdatafn=(payload)=>(dispatch)=>{
    dispatch(SellPostreq())
    return axios.post("https://database-yy3a.onrender.com/Selling",payload)
    .then((res)=>{
        dispatch(SellPostreqsuccess(res.data))
    })
    .catch((err)=>{
        dispatch(SellPostreqfailure())
        console.log(err)
    })
}
export {Getdatafn,Postdatafn,IPostdatafn,IGetdatafn,SellGetdatafn,SellPostdatafn}