import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import weatherApi from '../apis/weatherApi'
import { getPreciseLocation} from '../apis/currentPosition';
import name from '../apis/name';
const initialState = {
  weather:{
  },
  status: 'idle',
};

// export const GET_WEATHER = createAsyncThunk(
//   'weather/GET_WEATHER',
//      async(city='')=>{
//         let lat=0,lon=0;
//         if(city===''){
//             const currentPostion = await getPreciseLocation();
//             lat=currentPostion[0];
//             lon=currentPostion[1];
//         }
//         else{
//             const position = await name.GET_LATLON({q: city})
            
//             lat=position.lat
//             lon=position.lon
//         }
//         const weather = await weatherApi.GET({lat:lat,lon:lon});
//         const cityname = await name.GET({lat,lon});
//         await new Promise((resolve) => setTimeout(resolve, 1000));
//         return {...weather,cityName: cityname}
//         // dispatch(weatherAction.GET_WEATHER({...weather,cityName: cityname}))
//     }
// );

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
      setWeather:(state,action)=>{
           return {
             ...state,
             weather: action.payload
           }
      },
      setStatus:(state,action)=>{
        return{
          ...state,
          status: action.payload
        }
      }
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(GET_WEATHER.pending,(state)=>{
  //       state.status = 'loading';
        
  //     })
  //     .addCase(GET_WEATHER.fulfilled, (state, action) => {
  //       state.status = 'idle';
  //       state.weather = action.payload;
  //     })
  //     .addCase(GET_WEATHER.rejected,(state)=>{
  //       state.status = 'error';
  //     });
  // },
});
export const {setWeather,setStatus} = weatherSlice.actions;
export const statusSelector = (state)=>state.weather.status
export const weatherSelector = (state) => state.weather.weather;
export default weatherSlice.reducer;
