const initState = [null,0]
export default function AuthReducer(state=initState,action){
    switch(action.type){
        case "login":
            state[0]=action.data.un
            state[1]=action.data.role
localStorage.setItem("un",action.data.un)
            localStorage.setItem("role",action.data.role)
            return state
        case "logout":
localStorage.removeItem("un")
            localStorage.removeItem("role")
            return initState
        default:
            return state
    }
}
//action={"type":"login","data":{"un":user, "role":1}}