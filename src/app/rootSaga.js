import { GET_WEATHER } from "../redux/weatherAction";
import { all, takeLatest } from "redux-saga/effects";
import { getWeatherAsync } from "../redux/getWeatherAsync";

export default function* rootSaga(){
    yield all ([
        getWeatherAsync()
    ])
}
export function* test(){
    yield takeLatest('*',(action)=>{
        console.log('')
    })
}