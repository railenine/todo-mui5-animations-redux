import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import { useState } from "react";

const Clock = () => {
    
    const [hour, setHour] = useState();
    const [minute, setMinute] = useState();

    //const hour = dayjs().hour();
    //const minute = dayjs().minute();

    const timer = () => {
        setInterval(() => {
            setHour(dayjs().hour());
            setMinute(dayjs().minute());
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