import axios from "axios";


 const axioxSecqure = axios.create(
    {
        baseURL: 'http://localhost:5000'
    }
)
export default function useAxiosSecqure() {
    return axioxSecqure;
}
