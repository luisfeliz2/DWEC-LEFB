import http from "./http-axios";

class serviciosAficiones {
    getAll(){
        return http.get("/aficiones");
    }

    get(id){
        return http.get(`/aficiones/${id}`)
    }
    delete(id){
        return http.delete(`/aficiones/${id}`)
    }
    post(d){
        return http.post(`/aficiones/`)
    }
}

export default new serviciosAficiones();