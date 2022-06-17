import { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const Weather = () => {
    
    const [weather, setWeather] = useState('');
    const [icon, setIcon] = useState('');
    const [load, setLoad] = useState(false);
    
    useEffect(() => {
        axios('https://api.openweathermap.org/data/2.5/weather?q=Moscow,ru&lang=ru&units=metric&APPID=efac8ea240bff691ede8922ddfa1d241')
            .then(res => {
                setWeather((+res.data.main.temp).toFixed())
                setIcon(res.data.weather[0].main);
                setLoad(true);
            })
            .catch(err => console.log(err))
    }, [])

    if (!load) {
        return <CircularProgress size="3.3rem" sx={{color: '#fff'}} />
    }

    const renderIcon = (string) => {
        switch(string) {
            case 'Clouds':
                return <CloudIcon fontSize="large" />
            case 'Rain':
                return <ThunderstormIcon fontSize="large" />
            case 'Snow':
                return <AcUnitIcon fontSize="large" />
            case 'Clear':
                return <WbSunnyIcon fontSize="large" />
            default:
                return <WbSunnyIcon fontSize="large" />
        }
    }

    const weatherIcon = renderIcon(icon);

    return (
        <Grid container>
            <Grid item xs={6}>
                <Typography variant="h3" sx={{marginLeft: '30px'}}>
                    {load ? `+${weather}` : null}&#176;
                </Typography>
            </Grid>
            <Grid item xs={6}>
                {weatherIcon}
            </Grid>
        </Grid>
    )
}

export default Weather;