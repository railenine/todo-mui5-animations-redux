import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import { useState } from "react";

const Clock = () => {
    
    const [hour, setHour] = useState();
    const [minute, setMinute] = useState();

    const timer = () => {
        setInterval(() => {
        
            const hours = dayjs().hour() < 10 ? '0' + dayjs().hour() : dayjs().hour();
            const minutes = dayjs().minute() < 10 ? '0' + dayjs().minute() : dayjs().minute();
            
            setHour(hours);
            setMinute(minutes);
        }, 60);
    }
    
    timer();

    return (
        <Typography variant="h3">
            {hour && minute ? `${hour}:${minute}` : '--:--'}
        </Typography>
    )
}

export default Clock;