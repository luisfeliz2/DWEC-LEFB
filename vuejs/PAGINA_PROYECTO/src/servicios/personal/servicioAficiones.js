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
    post(aficion){
        return http.post('/aficiones/',aficion)
    }
    findByNombre(nombre){
        return http.get(`aficiones/?nombre=${nombre}`)
    }
    update(id,aficion){
        return http.put(`aficiones/${id}`,aficion)
    }
}

export default new serviciosAficiones();