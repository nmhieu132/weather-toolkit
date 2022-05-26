import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import weatherApi from '../apis/weatherApi'
import { getPreciseLocation} from '../apis/currentPosition';
import name from '../apis/name';
const initialState = {
  weather:{
  },
  status: 'idle',
};
export const getWeatherAsync = createAsyncThunk(
  'weather/getWeatherAsync',
     async(city='')=>{
        let lat=0,lon=0;
        if(city===''){
            const currentPostion = await getPreciseLocation();
            lat=currentPostion[0];
            lon=currentPostion[1];
        }
        else{
            const position = await name.GET_LATLON({q: city})
            
            lat=position.lat
            lon=position.lon
        }
        const weather = await weatherApi.GET({lat:lat,lon:lon});
        const cityname = await name.GET({lat,lon});
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return {...weather,cityName: cityname}
        // dispatch(weatherAction.GET_WEATHER({...weather,cityName: cityname}))
    }
);

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeatherAsync.pending,(state)=>{
        state.status = 'loading';
        
      })
      .addCase(getWeatherAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.weather = action.payload;
      })
      .addCase(getWeatherAsync.rejected,(state)=>{
        state.status = 'error';
      });
  },
});
export const statusSelector = (state)=>state.weather.status
export const weatherSelector = (state) => state.weather.weather;
export default weatherSlice.reducer;
