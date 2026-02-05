import axios from "axios";

const URL ="http://localhost:8082/auth/api/v1.0/usuarios/token?user=admin&password=1234";

const obtenerToken= async()=>{
    const token= await axios.get(`${URL}`).then(r=>r.data);
    return token.accessToken;
}

export const obtenerTokenFachada= async()=>{
    return await obtenerToken();
}