import axios from "axios";

const URL ="http://localhost:8082/auth/api/v1.0/usuarios/token?user=admin&password=1234";
let tokenEnMemoria = null;

const obtenerToken= async()=>{
    if(tokenEnMemoria){
        return tokenEnMemoria;
    }
    try {
		const token = await axios.get(`${URL}`).then(r => r.data);
		tokenEnMemoria = token.accessToken;

		console.log(token.accessToken);
		return tokenEnMemoria;
	} catch (e) {
		console.error(`El token no se pudo obtener: ${e}`)
		throw er;
	}
    
}

export const obtenerTokenFachada= async()=>{
    return await obtenerToken();
}