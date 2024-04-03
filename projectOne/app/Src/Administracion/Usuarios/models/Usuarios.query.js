const query = "SELECT * from newtable";
const listarUsuario = "SELECT * from newtable where usuario_id = $1";

export default {
    query,
    listarUsuario,
};