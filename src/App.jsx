import { useEffect, useState } from 'react'
import './App.css'

const getFormattedTime = (time) => {
  const totalSeconds = Math.floor(time / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);
  const totalYears = Math.floor(totalDays / 365);
  const days = totalDays % 365;
  const hours = totalHours % 24;
  const minutes = totalMinutes % 60;
  const seconds = totalSeconds % 60;
  return `${totalYears}y ${days}d. ${hours}h ${minutes}m ${seconds}s.`;
};

const getMillersPlanetTime = (time) => {
  const earthSeconds = Math.floor(time / 1000);

  const earthMinutes = earthSeconds / 60;
  const earthHours = earthMinutes / 60;
  const earthDays = earthHours / 24;
  const earthYears = earthDays / 365;
  
  let millerHours = earthYears / 7;
  let millerMinutes = (millerHours % 1) * 60;
  let millerSeconds = (millerMinutes % 1) * 60;
  let millerMs = (millerSeconds % 1) * 1000;
  
  millerHours = Math.floor(millerHours);
  millerMinutes = Math.floor(millerMinutes);
  millerSeconds = Math.floor(millerSeconds);
  millerMs = Math.floor(millerMs);

  return `${millerHours}h ${millerMinutes}m ${millerSeconds}s ${millerMs}ms.`;
}

function App() {
  const [time, setTime] = useState(new Date());
  const interstellarDate = new Date('December 7, 2014 00:00:00');

  useEffect(() => {
    const dateRefreshTimeout = setTimeout(() => setTime(new Date()), 1000);
    return () => clearTimeout(dateRefreshTimeout);
  }, [time])

  const timeSinceInterstellar = time - interstellarDate;
  return (
    <div className="App">
      <h2>Earth time since 7 November 2014</h2>
      <h1>{getFormattedTime(timeSinceInterstellar)}</h1>
      <h2>Time on Miller's Planet since 7 November 2014</h2>
      <h1>{getMillersPlanetTime(timeSinceInterstellar)}</h1>
    </div>
  )
}

export default App
