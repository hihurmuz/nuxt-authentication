import JWTDecode from "jwt-decode";
import cookieparser from "cookieparser";

export const actions= {
    nuxtServerInit({commit},{req}){
        if(process.server && process.static) return
        if(!req.headers.cookie) return

        const parsedCookie = cookieparser.parse(req.headers.cookie)
        const parsedToken = parsedCookie.access_token


        if(!parsedToken) return;

        const decoded= JWTDecode(parsedToken)

        if(decoded){
            commit("users/saveUser",{
                email: decoded.email,
                uid: decoded.user_id
            })
        }
    }
}