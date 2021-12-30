import axios from "axios";

const mockyUrl = "http://www.mocky.io/v2/598b16861100004905515ec7";
const api = axios.create({ baseURL: mockyUrl });
api.interceptors.response.use((value) => value.data);

export default api;
