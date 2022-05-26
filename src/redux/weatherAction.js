import types from '../const/types'
const weatherAction = {
    GET_WEATHER: (data) => {
        return {
            type: types.GET_WEATHER,
            payload : data
        }
    }
}
export default weatherAction