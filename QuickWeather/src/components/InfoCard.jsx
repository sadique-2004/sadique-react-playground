import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// cold
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
// import CardActionArea from '@mui/material/CardActionArea';
import './InfoCard.css'

const InfoCard = ({ info }) => {

  const initaialImg = 'https://tse1.mm.bing.net/th?id=OIP.QXYu8JqMdwfnNnAlDTuoGQHaFN&pid=Api&P=0&h=220';
  const Cold_URL = 'https://wallpaperaccess.com/full/2943299.jpg';
  const Hot_URL = 'https://scopeblog.stanford.edu/wp-content/uploads/2022/07/AdobeStock_268489083-scaled.jpeg';
  const Rain_URL = 'https://wallpaperaccess.com/full/800698.jpg';
  const Snow_URL = 'https://c.pxhere.com/photos/84/59/snow_mountain_winter_landscape_evergreen_frost_north_day-655199.jpg!d';

  const getIconForWeather = () => {
    if (info.temp < 10) return <AcUnitIcon />;
    if (info.temp > 30) return <WbSunnyIcon />;
    if (info.Weather === 'Rain') return <ThunderstormIcon />;
    if (info.Weather === 'Snow') return <AcUnitIcon />;
    return null; // Default icon, adjust if necessary
  };


  return (
    <div className='info-card'>
      <Card sx={{ minWidth: 380 }}>
        {/* <CardActionArea> */}
        <CardMedia
          component="img"
          height="140"
          // image= {initaialImg}
          image={info.temp < 10 ? Cold_URL : info.temp > 30 ? Hot_URL : info.Weather === 'Rain' ? Rain_URL : info.Weather === 'Snow' ? Snow_URL : initaialImg}
          alt="green iguana"
          className='card-media'
        />
        <CardContent className='card-content'>
          <Typography gutterBottom variant="h5" component="div">
            {info.city} {getIconForWeather()}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Temperature : {info.temp}&deg;C   <br />
            Humidity : {info.humidity}% <br />
            Min Temperature : {info.tempMin}&deg;C <br />
            Max Temperature : {info.tempMax}&deg;C <br />
            The Weather can be described as <b>{info.Weather}</b> & Feels like <b>{info.feelsLike}&deg;C</b> <br />

          </Typography>
        </CardContent>
        {/* </CardActionArea> */}
      </Card>
    </div>
  )
}

export default InfoCard


