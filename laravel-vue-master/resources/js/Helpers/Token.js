class Token{

    isValid(token){
        const payload = this.payload(token)
        if (payload) {
            if(payload.iss == "http://vuejs_resful.xyz/api/auth/login") {
                return true;
            } else if(payload.iss == "http://vuejs_resful.xyz/api/auth/signup") {
                return true;
            }
        }
        return false
    }

    payload(token){
        const payload = token.split('.')[1]
        return this.decode(payload)
    }

    decode(payload){
        return JSON.parse(atob(payload))
    }
}

export default Token = new Token()
