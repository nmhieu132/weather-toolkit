import { Grid, Paper, CircularProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import datetime from "../helper/datetime"
import { statusSelector, weatherSelector } from "../redux/weatherSlice";

const useStyles = makeStyles({
  grid_item: {
    padding: "0 10px",
  },
  day: {
    color: "#00000042",
  },
  feeling: {
    color: "#6c757d",
    fontWeight: "700",
  },
  content: {
    margin: "0 auto",
    width: "fit-content",
    padding: "20px 0",
  },
  icon: {
    width: "70px",
    height: "70px",
    margin: "0 auto",
    display: "block",
    objectFit: "contain",
  },
  detail: {
    marginTop: "30px",
    
  },
  detail_paper: {
    padding: ' 20px 20px',
  },
  detail_header: {
      paddingBottom: '10px',
      fontWeight: 'bold',
      color: '#6c757d',
  },
  detail_content:{
   color: '#6c757d',
   '& div':{
       padding: '5.5px 0'
   }
  },
  grid_item_active:{
    backgroundColor:'#ADD8E6',
    '& [class*="feeling"]':{
        color:'#ec6e4c',
    },
    '& [class*="day"]':{
        color:'#ec6e4c',
    },
  },
  progress:{
    position: 'absolute',
    
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  loading: {
    color: '#FFC0CB',
  }
});
function Week() {
  const weather = useSelector(weatherSelector)
  const status = useSelector(statusSelector)
  const classes = useStyles();
  const [weatherDetail,setWeatherDetail]=useState(
      
  )
  useEffect(() => {
    setWeatherDetail( weather?.daily?.[0]) 
  }, [status,weather])
  
  const handleChangeWdetail= (weather) => {
      setWeatherDetail(weather) 
  }
  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 12, sm: 6, md: 3 }}>
        {weather?.daily?.map((w, index) => {
          return (
            <Grid item md={3} xs={12} sm={6} key={index}>
              {status==='loading'
              ?
              <div className={classes.progress}>
                    <CircularProgress className={classes.loading}/>
              </div>
              :
              <Paper 
                className={`${classes.grid_item}  ${w.dt===weatherDetail?.dt?classes.grid_item_active:''}`}
                onClick={(e)=>{handleChangeWdetail(w)}} 
              >
                <div className={classes.day}>
                  {datetime.convertDtToDay(w.dt)}
                </div>
                <div className={classes.content}>
                  <img
                    className={classes.icon}
                    src={`http://openweathermap.org/img/wn/${w.weather?.[0].icon}@2x.png`}
                    alt=""
                  />
                  <div
                    className={classes.feeling}
                  >{`${w.temp.min}°C - ${w.temp.max}°C`}</div>
                </div>
              </Paper>
              }
            </Grid>
          );
        })}
      </Grid>
      <Grid className={classes.detail}>
        <Paper className={classes.detail_paper}>
          <div className={classes.detail_header}>{datetime.convertDtToDay(weatherDetail?.dt)}</div>
          <Grid
            className={classes.detail_content}
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <div>Temperature: {`${weatherDetail?.temp.min}°C - ${weatherDetail?.temp.max}°C`}</div>
              <div>Rain: {weatherDetail?.rain}%</div>
              <div>Humidity: {weatherDetail?.humidity} %</div>
              <div>Wind speed: {weatherDetail?.wind_speed} km/h</div>
            </Grid>
            <Grid item xs={6}>
              <div>Sunrise: {datetime.convertDtToOclock(weatherDetail?.sunrise)}</div>
              <div>Sunset: {datetime.convertDtToOclock(weatherDetail?.sunset)}</div>
              <div>Description: {weatherDetail?.weather?.[0].description}</div>
              <div>Atmospheric pressure: {weatherDetail?.pressure} hPa</div>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
}

export default Week;
