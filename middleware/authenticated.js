export default function({store,route,redirect}){
    const isUserauth = store.state.users.user;

    if(isUserauth ===null && route.path === "/profile"){
        redirect("/login/singin")
    }
}