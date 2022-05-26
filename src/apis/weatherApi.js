import axios from "axios";
import urls from "./urls";

const apiKey = "75afa79d37fac7cfad03a5850d0a2a74";
const weatherApi= {
    GET: async (params) => {
        const weather = await axios.get(urls.weatherOneCall, {
            params: {
                ...params,
                appid: apiKey,
                units: "metric",
            },
        });
        return weather.data;
    },
    
};
export default weatherApi
