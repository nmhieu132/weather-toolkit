import axios from "axios";
import urls from "./urls";
const apiKey = "75afa79d37fac7cfad03a5850d0a2a74";
const name= {
    GET: async (params) => {
    const name = await axios.get(urls.cityName, {
        params: {
            ...params,
            appid: apiKey,
        },
    });
    return name.data?.[0].local_names.vi || name.data?.[0].local_names.en;
},
    GET_LATLON: async (params) => {
    const latlon = await axios.get(urls.latlon, {
        params: {
            ...params,
            appid: apiKey,
        },
    }
    );
    return {lat: latlon.data?.[0].lat, lon: latlon.data?.[0].lon};
}
}
export default name
