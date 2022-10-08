export const LoggedInAction=(data)=>{
    return{
        type:"LOGGEDIN_ACTION",
        payload:{
            data:data
        }
    }
}