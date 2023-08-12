import axios from "axios";
import { localSevice } from "./LocalStoreService";

export const https = axios.create(
    {
        baseURL: 'https://movienew.cybersoft.edu.vn',
        headers:{
            tokenCybersoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0NCIsIkhldEhhblN0cmluZyI6IjA5LzEyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTcwMjA4MDAwMDAwMCIsIm5iZiI6MTY3MjQxOTYwMCwiZXhwIjoxNzAyMjI3NjAwfQ.P5fJSMdFWDXkAXi_Hm7kZhuXoxo6xtTzIno_q6kp38I',
            Authorization: "Bearer " + localSevice.get()?.accessToken,
        }
    }
)