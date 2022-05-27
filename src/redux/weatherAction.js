import types from '../const/types'
const weatherAction = {
    GET_WEATHER: (data) => {
        
        return {
            type: types.GET_WEATHER,
            payload : data
        }
    },

}
export const GET_WEATHER=weatherAction.GET_WEATHER
export default weatherAction