import React,{useState,useEffect} from 'react'
import moment from 'moment';
const Clock = () => {
  const [time,setTime] =useState(moment().format("hh:mm A"));

  useEffect(() => {
      const interval=setInterval(()=>{
          setTime(moment().format("hh:mm A"));
      },1000);
      return () => clearInterval(interval);},[]);
  return (
    <div className="text-3xl font-semibold">{time}</div>
  )
}

export default Clock