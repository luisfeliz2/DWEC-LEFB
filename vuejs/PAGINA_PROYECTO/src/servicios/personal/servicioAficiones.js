import http from "./http-axios";

class serviciosAficiones {
    getAll(){
        return http.get("/aficiones");
    }

    get(id){
        return http.get(`/aficiones/${id}`)
    }
}

export default new serviciosAficiones();