
import React, { useEffect, useRef,useState } from 'react';
import './style.css'
import Select from 'react-select';
import ReactApexChart from 'react-apexcharts';
const Chart = () => {
  const [RN1_device,setRN1]=useState([])
  const [device ,setDropdownDays]=useState([])

  useEffect(()=>{
    fetchData();
    const data =setInterval(fetchData,2000)
    return()=>{
      clearInterval(data);
    }
  },[device])

  const dropdown_datas =[
    { label: 'Reformer-1', value: '01' },
    { label: 'Reformer-2', value: '02' },
    { label: 'Reformer-3', value: '03' },
    { label: 'Reformer-4', value: '04' },
    { label: 'Reformer-5', value: '05' },
    { label: 'Reformer-6', value: '06' },
    { label: 'Reformer-7', value: '07' },
    { label: 'Reformer-8', value: '08' },
    { label: 'Reformer-9', value: '09' },
    { label: 'Reformer-10', value: '10' },
    { label: 'Reformer-11', value: '11' },
    { label: 'Reformer-12', value: '12' },
    { label: 'Reformer-13', value: '13' },
    { label: 'Reformer-14', value: '14' },
    { label: 'Reformer-15', value: '15' },
    { label: 'Reformer-16', value: '16' },
    { label: 'Reformer-17', value: '17' },
    { label: 'Reformer-18', value: '18' },
    { label: 'Reformer-19', value: '19' },
    { label: 'Reformer-20', value: '20' },
    { label: 'Reformer-21', value: '21' },
    { label: 'Reformer-22', value: '22' },
    { label: 'Reformer-23', value: '23' },
    { label: 'Reformer-24', value: '24' },
    { label: 'Reformer-25', value: '25' },
    { label: 'Reformer-26', value: '26' },
    { label: 'Reformer-27', value: '27' },
    { label: 'Reformer-28', value: '28' },
    { label: 'Reformer-29', value: '29' },
    { label: 'Reformer-30', value: '30' },
    { label: 'Reformer-31', value: '31' },
    { label: 'Reformer-32', value: '32' },
    { label: 'Reformer-33', value: '33' },
    { label: 'Reformer-34', value: '34' },
    { label: 'Reformer-35', value: '35' },
    { label: 'Reformer-36', value: '36' },
    { label: 'Reformer-37', value: '37' },
    { label: 'Reformer-38', value: '38' },
    { label: 'Reformer-39', value: '39' },
    { label: 'Reformer-40', value: '40' },
    { label: 'Reformer-41', value: '41' },
    { label: 'Reformer-42', value: '42' },
    { label: 'Reformer-43', value: '43' },
    { label: 'Reformer-44', value: '44' },
    { label: 'Reformer-45', value: '45' },
    { label: 'Reformer-46', value: '46' },
    { label: 'Reformer-47', value: '47' },
    { label: 'Reformer-48', value: '48' },
    { label: 'Reformer-49', value: '49' },
    { label: 'Reformer-50', value: '50' },
    { label: 'Reformer-51', value: '51' },
    { label: 'Reformer-52', value: '52' },
    { label: 'Reformer-53', value: '53' },
    { label: 'Reformer-54', value: '54' },
    { label: 'Reformer-55', value: '55' },
    { label: 'Reformer-56', value: '56' },
    { label: 'Reformer-57', value: '57' },
    { label: 'Reformer-58', value: '58' },
    { label: 'Reformer-59', value: '59' },
    { label: 'Reformer-60', value: '60' },
  
  ]

  const handleDaysDropdown = (selectedOption) => {
    setDropdownDays(selectedOption.value);
};


const without_resverse_s1 = RN1_device.map(data => data.sensor1);
const with_whole_s1 = without_resverse_s1.reverse()

const without_resverse_s2 = RN1_device.map(data => data.sensor2);
const with_whole_s2 = without_resverse_s2.reverse()

const without_resverse_s3 = RN1_device.map(data => data.sensor3);
const with_whole_s3 = without_resverse_s3.reverse()

const without_resverse_s4 = RN1_device.map(data => data.sensor4);
const with_whole_s4 = without_resverse_s4.reverse()

const without_resverse_s5 = RN1_device.map(data => data.sensor5);
const with_whole_s5 = without_resverse_s5.reverse()

const without_resverse_time = RN1_device.map(data => data.time);
const with_whole_time = without_resverse_time.reverse()


  const chartOptions = {
    grid: {
      show: false,
    },
    series: [
      {
        name: 'Sensor-1',
        // style: {
        //   colors: '#ffffff'
        // },
        data: with_whole_s1,
      },
      {
        name: 'Sensor-2',
        data: with_whole_s2, 
      },
      {
        name: 'Sensor-3',
        data: with_whole_s3, 
      },
      {
        name: 'Sensor-4',
        data: with_whole_s4, 
      },
      {
        name: 'Sensor-5',
        data: with_whole_s5, 
      },
    ],
    chart: {
      height: 700,
      type: 'area',
      toolbar: {
        show: false, 
      },
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      categories:with_whole_time,
      labels: {
        style: {
          colors: '#ffffff', 
        },
      },
    },
    yaxis:{
      labels:{
        style:{
          colors:'#ffffff'
        }
      }
    },
    legend: {
      labels: {
        colors: ['#27B8F3', '#16F05E','#F3D818','#F35718','#B110F3'], // Set colors for series names
      },
    },
  };

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:2001/backend/LastData');
      const info = await response.json();
      if (device === '01'){

        const RN= info['sensor1']
        if(RN.R_N === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
       
      }
      else if(device ==='02'){
        const RN = info['sensor2']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
        
          setRN1(RN)
        }
      }
      else if(device ==='03'){
        const RN = info['sensor3']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device ==='04'){
        const RN = info['sensor4']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device ==='05'){
        const RN = info['sensor5']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device ==='06'){
        const RN = info['sensor6']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device ==='07'){
        const RN = info['sensor7']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device ==='08'){
        const RN = info['sensor8']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device ==='09'){
        const RN = info['sensor9']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device ==='10'){
        const RN = info['sensor10']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }

      if (device === '11'){
        const RN= info['sensor11']
        if(RN.R_N === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
       
      }
      else if(device ==='12'){
        const RN = info['sensor12']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device ==='13'){
        const RN = info['sensor13']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device ==='14'){
        const RN = info['sensor14']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device ==='15'){
        const RN = info['sensor15']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device ==='16'){
        const RN = info['sensor16']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device ==='17'){
        const RN = info['sensor17']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device ==='18'){
        const RN = info['sensor18']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device ==='19'){
        const RN = info['sensor19']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device ==='20'){
        const RN = info['sensor20']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }

      if (device === '21'){
        const RN= info['sensor21']
        if(RN.R_N === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
       
      }
      else if(device ==='22'){
        const RN = info['sensor22']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device ==='23'){
        const RN = info['sensor23']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device ==='24'){
        const RN = info['sensor24']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device ==='25'){
        const RN = info['sensor25']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device ==='26'){
        const RN = info['sensor26']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device ==='27'){
        const RN = info['sensor27']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device ==='28'){
        const RN = info['sensor28']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device ==='29'){
        const RN = info['sensor29']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device ==='30'){
        const RN = info['sensor30']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }


      if (device === '31'){
        const RN= info['sensor31']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
       
      }
      else if(device ==='32'){
        const RN = info['sensor32']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device ==='33'){
        const RN = info['sensor33']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device ==='34'){
        const RN = info['sensor34']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device ==='35'){
        const RN = info['sensor35']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device ==='36'){
        const RN = info['sensor36']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device ==='37'){
        const RN = info['sensor37']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device ==='38'){
        const RN = info['sensor38']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device ==='39'){
        const RN = info['sensor39']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device ==='40'){
        const RN = info['sensor40']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      if (device === '41'){
        const RN= info['sensor41']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
       
      }
      else if(device ==='42'){
        const RN = info['sensor42']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device ==='43'){
        const RN = info['sensor43']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device ==='44'){
        const RN = info['sensor44']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device ==='45'){
        const RN = info['sensor45']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device ==='46'){
        const RN = info['sensor46']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device =='47'){
        const RN = info['sensor47']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device ==='48'){
        const RN = info['sensor48']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device ==='49'){
        const RN = info['sensor49']
        if(RN.R_N === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device ==='50'){
        const RN = info['sensor50']
        if(RN.R_N === '-' ){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
  
      if (device === '51'){
        const RN= info['sensor51']
        if(RN.R_N === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device ==='52'){
        const RN = info['sensor52']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device ==='53'){
        const RN = info['sensor53']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device ==='54'){
        const RN = info['sensor54']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device ==='55'){
        const RN = info['sensor55']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device ==='56'){
        const RN = info['sensor56']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device ==='57'){
        const RN = info['sensor57']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device ==='58'){
        const RN = info['sensor58']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
        
      }
      else if(device ==='59'){
        const RN = info['sensor59']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
      else if(device ==='60'){
        const RN = info['sensor60']
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          setRN1(RN)
        }
      }
        

      
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  
  return (
    <div className="bg-dark_color height">
    <h1 className='text-white font-bold text-2xl text-center'>Analytics a Temperature Datas</h1>
      <div className="flex flex-col md:flex-row justify-end bg-dark_color rounded-lg p-4 md:ml-5 md:mr-5">
        <div>
          <h1 className="text-white mb-4 md:mb-0 font-bold mr-2 mt-1">Select the Reformer Tube:</h1>
        </div>
        <Select options={dropdown_datas} className="text-black w-32" isSearchable={true} onChange={handleDaysDropdown} />
      </div>
      <div>
        <div className="mt-3 bg-[#0d0b3348] mb-2 border ml-14 mr-14 chart_Mobile ">
          <div className=''>
            <ReactApexChart options={chartOptions} series={chartOptions.series}  type='area' />
          </div>
        </div>
      </div>
  </div>
  
  );
};

export default Chart;


