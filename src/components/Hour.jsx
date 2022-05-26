import React from "react";
import { useSelector } from "react-redux";
import datetime from "../helper/datetime";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import {weatherSelector} from '../redux/weatherSlice'

export default function Hour() {
  const weather = useSelector(weatherSelector);
  let data= []
  const day = new Date().getDay();
    weather?.hourly?.map((w)=>{
        if(datetime.convertDtToDayNum(w.dt)=== day){
        data.push({
            temp: w.temp,
            dt: datetime.convertDtToOclock(w.dt),
            day:datetime.convertDtToDayNum(w.dt),
            feels_like: w.feels_like
        })}
    })
  console.log(data);
  return (
    <>
      {weather !== {} && (
        <LineChart
          width={800}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={'dt'} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="temp"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="feels_like" stroke="#82ca9d" />
        </LineChart>
      )}
    </>
  );
}
