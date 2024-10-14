import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function InfoBox({info}){
    const INTI_URL=
    "https://plus.unsplash.com/premium_photo-1667143951629-a1b2acc1a832?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZHVzdHklMjBza3l8ZW58MHx8MHx8fDA%3D"
    // let info={
    //     city:"Delhi",
    //     feelslike:24.4,
    //     temp:25.05,
    //     tempMin:25.05,
    //     tempMax:25.05,
    //     humidity:47,
    //     weather:"haze"
        

    // }
    return(
        <div className="InfoBox">
            {/* <h1>Weather Info</h1> */}
            <br></br>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INTI_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        <p>Temprature= {info.temp}&deg;C</p>
        <p>Humidity= {info.humidity}</p>
        <p>Min temp= {info.tempMin}&deg;C</p>
        <p>Max Temp= {info.tempMax}&deg;C</p>
        <p>
            The Weather can be described as <i>{info.weather}</i>and feels like {info.feelslike}&deg;C
        </p>

           </Typography>
      </CardContent>
      
    </Card>
        </div>
    )
}