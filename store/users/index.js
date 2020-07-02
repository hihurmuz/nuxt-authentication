import {auth} from "@/services/firebase"
import Cookie from "js-cookie"


export const state = ()=>({
    user: null
})

export const mutations = {
    saveUser(state,userData){
        this.state.users.user= userData;
    }
}

export const actions ={
    async createUser({commit},userData){
        try {
            await auth.createUserWithEmailAndPassword(userData.email, userData.password);

            const { email, uid} = auth.currentUser;
            const token= await auth.currentUser.getIdToken()
            
            Cookie.set("access_token",token);
            commit("saveUser",{email,uid})
            console.log(auth);
            
        } catch (error) {
            throw error;
        }
    },
    async singin({commit},userData){
        try {
            await auth.signInWithEmailAndPassword(userData.email, userData.password);

            const { email, uid} = auth.currentUser;
            const token= await auth.currentUser.getIdToken()
            
            Cookie.set("access_token",token);
            commit("saveUser",{email,uid})
            //console.log(auth);
        } catch (error) {
            throw error;
        }
    }
}