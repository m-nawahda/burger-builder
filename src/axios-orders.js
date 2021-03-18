import axios from "axios"

const _instance = axios.create({
    baseURL: "https://react-burger-a1e78-default-rtdb.firebaseio.com/"
})

export default _instance;