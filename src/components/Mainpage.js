import React, { useEffect, useRef,useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { FaTemperatureLow } from "react-icons/fa6";
import { CSSTransition } from 'react-transition-group';
import './style.css'
import Select from 'react-select';
import report from '../images/report-bg.png'
import close from '../images/close.png'
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import axios from 'axios';



const PopupComponent = ({ onClose,alldata }) => {
  const [selectedFromDate, setSelectedFromDate] = useState('');
  const [selectedToDate, setSelectedToDate] = useState('');
  const[dropdowndata,setDropdown]=useState([]);

  
  const sensors = [
    { label: 'Reformer-1', value: 'sensor1' },
    { label: 'Reformer-2', value: 'sensor2' },
    { label: 'Reformer-3', value: 'sensor3' },
    { label: 'Reformer-4', value: 'sensor4' },
    { label: 'Reformer-5', value: 'sensor5' },
    { label: 'Reformer-6', value: 'sensor6' },
    { label: 'Reformer-7', value: 'sensor7' },
    { label: 'Reformer-8', value: 'sensor8' },
  ];

  const handleDateChange = (event, dateType) => {
    const selectedDate = event.target.value;
    if (dateType === 'from') {
      setSelectedFromDate(selectedDate);
    } else if (dateType === 'to') {
      setSelectedToDate(selectedDate);
    }
  };

  const handleSensorChange = (selectedOption) => {
    setDropdown(selectedOption);
  };

  const handleDownload = async () => {
    const sample = alldata[dropdowndata.value].map(item => {
      const originalTimestamp = new Date(item.timestamp);
      const formattedDate = `${originalTimestamp.getFullYear()}-${(originalTimestamp.getMonth() + 1).toString().padStart(2, '0')}-${originalTimestamp.getDate().toString().padStart(2, '0')}`;
      return { ...item, timestamp: formattedDate };
    });

    try{
      if (!Array.isArray(sample)) {
        console.error('Invalid data format:', sample);
        return;
      }
      const doc = new jsPDF();
      const tableHeaders= [
        ['Reformer Tube',"Sensor1","Sensor2","Sensor3","Sensor4","Sensor5","Time"],
      ];
      const tableData = sample.map(item=>[
        item.R_N,
        item.sensor1,
        item.sensor2,
        item.sensor3,
        item.sensor4,
        item.sensor5,
        item.time,
      ]);
      doc.autoTable({
        head: tableHeaders,
        body: tableData,
      });
      const blob = doc.output('blob');
      const pdfUrl = URL.createObjectURL(blob);
      window.open(pdfUrl,'_blank');
    }catch(error){
      console.error("Error generating PDF:",error)
    }
  }
  
  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={300}
      classNames="popup-fade"
      unmountOnExit
    >
      <div className="popup-container">
      <div className="popup grid grid-cols-1 md:grid-cols-2">

        <img src={report} alt="Popup Image" />
        <div className='grid grid-rows-3 md:flex md:flex-col md:justify-between'>

          <div className='md:text-center'>
            <h1 className='font-bold text-2xl'>Conventionally Download Your Reports</h1>
          </div>

          <div>
          <div className="grid grid-rows-4 mt-10 items-center md:items-start justify-center">
            <div className='text-white grid grid-cols-2'>
              <h1 className='text-white mb-2 md:mb-0'>Select a Device :</h1>
              <Select options={sensors} className="text-black" isSearchable={true} onChange={handleSensorChange} />
            </div>
            <div className='grid grid-cols-2'>
              <h1 className='text-white'>From Date :</h1>
              <input type="date" className="border rounded p-2 ml-2 "onChange={(e) => handleDateChange(e, 'from')} />
            </div>
            <div className=' grid grid-cols-2 mt-2'>
              <h1 className='text-white'>To Date :</h1>
              <input type="date" className="border rounded p-2 ml-2"onChange={(e) => handleDateChange(e, 'to')}   />
            </div>
            <button className="bg-blue-500 text-white p-2 rounded mt-2" onClick={handleDownload}>Download</button> 
          </div>
          </div>
          <div className='md:text-right'>
          <button onClick={onClose} className=' bg-[#B22F27] font-bold text-white rounded w-14'>close</button>
          </div>
        </div>
        </div>
      </div>
    </CSSTransition>
  );
};

const Mainpage = () => {
  const [device,setR_N]=useState([])
  const [isPopupVisible, setPopupVisibility] = useState(false);
  const [RN1_device,setRN1]=useState([])
  const [fetchedData, setFetchedData] = useState(null);
  const[limitdata,setDropdownDays]=useState(null);
  const inputRef = useRef(null);
  const [chartfiltered_Data,setFilterData]=useState([])
  const [color_Limit,setLimitData]=useState([])

  const [device1,DeviceData1]=useState([])
  const [device2,DeviceData2]=useState([])
  const [device3,DeviceData3]=useState([])
  const [device4,DeviceData4]=useState([])
  const [device5,DeviceData5]=useState([])
  const [device6,DeviceData6]=useState([])
  const [device7,DeviceData7]=useState([])
  const [device8,DeviceData8]=useState([])
  const [device9,DeviceData9]=useState([])
  const [device10,DeviceData10]=useState([])
  const [device11,DeviceData11]=useState([])
  const [device12,DeviceData12]=useState([])
  const [device13,DeviceData13]=useState([])
  const [device14,DeviceData14]=useState([])
  const [device15,DeviceData15]=useState([])
  const [device16,DeviceData16]=useState([])
  const [device17,DeviceData17]=useState([])
  const [device18,DeviceData18]=useState([])
  const [device19,DeviceData19]=useState([])
  const [device20,DeviceData20]=useState([])
  const [device21,DeviceData21]=useState([])
  const [device22,DeviceData22]=useState([])
  const [device23,DeviceData23]=useState([])
  const [device24,DeviceData24]=useState([])
  const [device25,DeviceData25]=useState([])
  const [device26,DeviceData26]=useState([])
  const [device27,DeviceData27]=useState([])
  const [device28,DeviceData28]=useState([])
  const [device29,DeviceData29]=useState([])
  const [device30,DeviceData30]=useState([])
  const [device31,DeviceData31]=useState([])
  const [device32,DeviceData32]=useState([])
  const [device33,DeviceData33]=useState([])
  const [device34,DeviceData34]=useState([])
  const [device35,DeviceData35]=useState([])
  const [device36,DeviceData36]=useState([])
  const [device37,DeviceData37]=useState([])
  const [device38,DeviceData38]=useState([])
  const [device39,DeviceData39]=useState([])
  const [device40,DeviceData40]=useState([])
  const [device41,DeviceData41]=useState([])
  const [device42,DeviceData42]=useState([])
  const [device43,DeviceData43]=useState([])
  const [device44,DeviceData44]=useState([])
  const [device45,DeviceData45]=useState([])
  const [device46,DeviceData46]=useState([])
  const [device47,DeviceData47]=useState([])
  const [device48,DeviceData48]=useState([])
  const [device49,DeviceData49]=useState([])
  const [device50,DeviceData50]=useState([])
  const [device51,DeviceData51]=useState([])
  const [device52,DeviceData52]=useState([])
  const [device53,DeviceData53]=useState([])
  const [device54,DeviceData54]=useState([])
  const [device55,DeviceData55]=useState([])
  const [device56,DeviceData56]=useState([])
  const [device57,DeviceData57]=useState([])
  const [device58,DeviceData58]=useState([])
  const [device59,DeviceData59]=useState([])
  const [device60,DeviceData60]=useState([])

  useEffect(()=>{
    fetchData();
    limit_data();
    const data = setInterval(fetchData,2000)
    const limitdata = setInterval(limit_data,2000)
    return()=>{
      clearInterval(data);
      clearInterval(limitdata);
    }
  },[device,limitdata,])

  //device,limitdata,Sensor_Name
  const dashboard_data =(value)=>{
    try{
      setR_N(value)
    }catch(error){
    }
  }

  const datas = async(RN)=>{
    if(limitdata == "07"){
      if(RN.R_N === '-' && RN.sensor1 === '-'){
        console.log("Error")
      }
      else{
        const lastSevenData = RN.slice(0,7);
        setFilterData(lastSevenData);
      }
      
    }else if(limitdata == "15"){
      if(RN.R_N === '-' && RN.sensor1 === '-'){
        console.log("Error")
      }
      else{
        const lastSevenData = RN.slice(0,15);
        setFilterData(lastSevenData);

      }
    }else if(limitdata == "30"){
      if(RN.R_N === '-' && RN.sensor1 === '-'){
        console.log("Error")
      }
      else{

        const lastSevenData = RN.slice(0,30);
        setFilterData(lastSevenData);
      }
    }
  }
  const limit_data = async()=>{
    try{
      const datas = await fetch('http://localhost:2001/backend/Limits_Data');
      const Limit_Data = await datas.json()
      console.log(Limit_Data)
      setLimitData(Limit_Data)
    }catch(error){
      console.error('Error fetching data:', error);
    }
  }
  
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:2001/backend/LastData');
      const info = await response.json();
      setFetchedData(info);

      if (device === '01'){
        const RN= info['sensor1']
        datas(RN)
        if(RN.R_N === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
       
      }
      else if(device ==='02'){
        const RN = info['sensor2']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='03'){
        const RN = info['sensor3']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='04'){
        const RN = info['sensor4']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='05'){
        const RN = info['sensor5']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='06'){
        const RN = info['sensor6']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='07'){
        const RN = info['sensor7']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='08'){
        const RN = info['sensor8']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='09'){
        const RN = info['sensor9']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='10'){
        const RN = info['sensor10']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }

      if (device === '11'){
        const RN= info['sensor11']
        datas(RN)
        if(RN.R_N === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
       
      }
      else if(device ==='12'){
        const RN = info['sensor12']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='13'){
        const RN = info['sensor13']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='14'){
        const RN = info['sensor14']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='15'){
        const RN = info['sensor15']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='16'){
        const RN = info['sensor16']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='17'){
        const RN = info['sensor17']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='18'){
        const RN = info['sensor18']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='19'){
        const RN = info['sensor19']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='20'){
        const RN = info['sensor20']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }

      if (device === '21'){
        const RN= info['sensor21']
        datas(RN)
        if(RN.R_N === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
       
      }
      else if(device ==='22'){
        const RN = info['sensor22']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='23'){
        const RN = info['sensor23']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='24'){
        const RN = info['sensor24']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='25'){
        const RN = info['sensor25']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='26'){
        const RN = info['sensor26']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='27'){
        const RN = info['sensor27']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='28'){
        const RN = info['sensor28']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='29'){
        const RN = info['sensor29']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='30'){
        const RN = info['sensor30']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }


      if (device === '31'){
        const RN= info['sensor31']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
       
      }
      else if(device ==='32'){
        const RN = info['sensor32']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='33'){
        const RN = info['sensor33']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='34'){
        const RN = info['sensor34']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='35'){
        const RN = info['sensor35']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='36'){
        const RN = info['sensor36']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='37'){
        const RN = info['sensor37']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='38'){
        const RN = info['sensor38']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='39'){
        const RN = info['sensor39']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='40'){
        const RN = info['sensor40']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      if (device === '41'){
        const RN= info['sensor41']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
       
      }
      else if(device ==='42'){
        const RN = info['sensor42']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='43'){
        const RN = info['sensor43']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='44'){
        const RN = info['sensor44']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='45'){
        const RN = info['sensor45']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='46'){
        const RN = info['sensor46']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device =='47'){
        const RN = info['sensor47']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='48'){
        const RN = info['sensor48']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='49'){
        const RN = info['sensor49']
        datas(RN)
        if(RN.R_N === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='50'){
        const RN = info['sensor50']
        datas(RN)
        if(RN.R_N === '-' ){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
  
      if (device === '51'){
        const RN= info['sensor51']
        datas(RN)
        if(RN.R_N === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='52'){
        const RN = info['sensor52']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='53'){
        const RN = info['sensor53']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='54'){
        const RN = info['sensor54']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='55'){
        const RN = info['sensor55']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='56'){
        const RN = info['sensor56']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='57'){
        const RN = info['sensor57']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='58'){
        const RN = info['sensor58']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
        
      }
      else if(device ==='59'){
        const RN = info['sensor59']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
      else if(device ==='60'){
        const RN = info['sensor60']
        datas(RN)
        if(RN.R_N === '-' && RN.sensor1 === '-' && RN.sensor2 === '-' && RN.sensor3 === '-'){
          console.log("Error")
        }
        else{
          const RN_tube = RN[0]
          setRN1(RN_tube)
        }
      }
        
      const device1_lastdata = info.sensor1 && info.sensor1.length > 0 ? info.sensor1[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device2_lastdata = info.sensor2 && info.sensor2.length > 0 ? info.sensor2[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device3_lastdata = info.sensor3 && info.sensor3.length > 0 ? info.sensor3[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device4_lastdata = info.sensor4 && info.sensor4.length > 0 ? info.sensor4[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device5_lastdata = info.sensor5 && info.sensor5.length > 0 ? info.sensor5[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device6_lastdata = info.sensor6 && info.sensor6.length > 0 ? info.sensor6[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device7_lastdata = info.sensor7 && info.sensor7.length > 0 ? info.sensor7[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device8_lastdata = info.sensor8 && info.sensor8.length > 0 ? info.sensor8[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device9_lastdata = info.sensor9 && info.sensor9.length > 0 ? info.sensor9[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device10_lastdata = info.sensor10 && info.sensor10.length > 0 ? info.sensor10[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device11_lastdata = info.sensor11 && info.sensor11.length > 0 ? info.sensor11[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device12_lastdata = info.sensor12 && info.sensor12.length > 0 ? info.sensor12[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device13_lastdata = info.sensor13 && info.sensor13.length > 0 ? info.sensor13[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device14_lastdata = info.sensor14 && info.sensor14.length > 0 ? info.sensor14[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device15_lastdata = info.sensor15 && info.sensor15.length > 0 ? info.sensor15[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device16_lastdata = info.sensor16 && info.sensor16.length > 0 ? info.sensor16[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device17_lastdata = info.sensor17 && info.sensor17.length > 0 ? info.sensor17[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device18_lastdata = info.sensor18 && info.sensor18.length > 0 ? info.sensor18[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device19_lastdata = info.sensor19 && info.sensor19.length > 0 ? info.sensor19[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device20_lastdata = info.sensor20 && info.sensor20.length > 0 ? info.sensor20[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device21_lastdata = info.sensor21 && info.sensor21.length > 0 ? info.sensor21[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device22_lastdata = info.sensor22 && info.sensor22.length > 0 ? info.sensor22[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device23_lastdata = info.sensor23 && info.sensor23.length > 0 ? info.sensor23[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device24_lastdata = info.sensor24 && info.sensor24.length > 0 ? info.sensor24[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device25_lastdata = info.sensor25 && info.sensor25.length > 0 ? info.sensor25[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device26_lastdata = info.sensor26 && info.sensor26.length > 0 ? info.sensor26[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device27_lastdata = info.sensor27 && info.sensor27.length > 0 ? info.sensor27[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device28_lastdata = info.sensor28 && info.sensor28.length > 0 ? info.sensor28[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device29_lastdata = info.sensor29 && info.sensor29.length > 0 ? info.sensor29[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device30_lastdata = info.sensor30 && info.sensor30.length > 0 ? info.sensor30[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device31_lastdata = info.sensor31 && info.sensor31.length > 0 ? info.sensor31[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device32_lastdata = info.sensor32 && info.sensor32.length > 0 ? info.sensor32[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device33_lastdata = info.sensor33 && info.sensor33.length > 0 ? info.sensor33[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device34_lastdata = info.sensor34 && info.sensor34.length > 0 ? info.sensor34[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device35_lastdata = info.sensor35 && info.sensor35.length > 0 ? info.sensor35[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device36_lastdata = info.sensor36 && info.sensor36.length > 0 ? info.sensor36[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device37_lastdata = info.sensor37 && info.sensor37.length > 0 ? info.sensor37[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device38_lastdata = info.sensor38 && info.sensor38.length > 0 ? info.sensor38[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device39_lastdata = info.sensor39 && info.sensor39.length > 0 ? info.sensor39[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device40_lastdata = info.sensor40 && info.sensor40.length > 0 ? info.sensor40[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device41_lastdata = info.sensor41 && info.sensor41.length > 0 ? info.sensor41[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device42_lastdata = info.sensor42 && info.sensor42.length > 0 ? info.sensor42[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device43_lastdata = info.sensor43 && info.sensor43.length > 0 ? info.sensor43[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device44_lastdata = info.sensor44 && info.sensor44.length > 0 ? info.sensor44[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device45_lastdata = info.sensor45 && info.sensor45.length > 0 ? info.sensor45[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device46_lastdata = info.sensor46 && info.sensor46.length > 0 ? info.sensor46[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device47_lastdata = info.sensor47 && info.sensor47.length > 0 ? info.sensor47[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device48_lastdata = info.sensor48 && info.sensor48.length > 0 ? info.sensor48[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device49_lastdata = info.sensor49 && info.sensor49.length > 0 ? info.sensor49[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device50_lastdata = info.sensor50 && info.sensor50.length > 0 ? info.sensor50[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device51_lastdata = info.sensor51 && info.sensor51.length > 0 ? info.sensor51[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device52_lastdata = info.sensor52 && info.sensor52.length > 0 ? info.sensor52[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device53_lastdata = info.sensor53 && info.sensor53.length > 0 ? info.sensor53[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device54_lastdata = info.sensor54 && info.sensor54.length > 0 ? info.sensor54[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device55_lastdata = info.sensor55 && info.sensor55.length > 0 ? info.sensor55[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device56_lastdata = info.sensor56 && info.sensor56.length > 0 ? info.sensor56[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device57_lastdata = info.sensor57 && info.sensor57.length > 0 ? info.sensor57[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device58_lastdata = info.sensor58 && info.sensor58.length > 0 ? info.sensor58[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device59_lastdata = info.sensor59 && info.sensor59.length > 0 ? info.sensor59[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device60_lastdata = info.sensor60 && info.sensor60.length > 0 ? info.sensor60[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };


      DeviceData1(device1_lastdata);
      DeviceData2(device2_lastdata);
      DeviceData3(device3_lastdata);
      DeviceData4(device4_lastdata);
      DeviceData5(device5_lastdata);
      DeviceData6(device6_lastdata);
      DeviceData7(device7_lastdata);
      DeviceData8(device8_lastdata);
      DeviceData9(device9_lastdata);
      DeviceData10(device10_lastdata);
      DeviceData11(device11_lastdata);
      DeviceData12(device12_lastdata);
      DeviceData13(device13_lastdata);
      DeviceData14(device14_lastdata);
      DeviceData15(device15_lastdata);
      DeviceData16(device16_lastdata);
      DeviceData17(device17_lastdata);
      DeviceData18(device18_lastdata);
      DeviceData19(device19_lastdata);
      DeviceData20(device20_lastdata);
      DeviceData21(device21_lastdata);
      DeviceData22(device22_lastdata);
      DeviceData23(device23_lastdata);
      DeviceData24(device24_lastdata);
      DeviceData25(device25_lastdata);
      DeviceData26(device26_lastdata);
      DeviceData27(device27_lastdata);
      DeviceData28(device28_lastdata);
      DeviceData29(device29_lastdata);
      DeviceData30(device30_lastdata);
      DeviceData31(device31_lastdata);
      DeviceData32(device32_lastdata);
      DeviceData33(device33_lastdata);
      DeviceData34(device34_lastdata);
      DeviceData35(device35_lastdata);
      DeviceData36(device36_lastdata);
      DeviceData37(device37_lastdata);
      DeviceData38(device38_lastdata);
      DeviceData39(device39_lastdata);
      DeviceData40(device40_lastdata);
      DeviceData41(device41_lastdata);
      DeviceData42(device42_lastdata);
      DeviceData43(device43_lastdata);
      DeviceData44(device44_lastdata);
      DeviceData45(device45_lastdata);
      DeviceData46(device46_lastdata);
      DeviceData47(device47_lastdata);
      DeviceData48(device48_lastdata);
      DeviceData49(device49_lastdata);
      DeviceData50(device50_lastdata);
      DeviceData51(device51_lastdata);
      DeviceData52(device52_lastdata);
      DeviceData53(device53_lastdata);
      DeviceData54(device54_lastdata);
      DeviceData55(device55_lastdata);
      DeviceData56(device56_lastdata);
      DeviceData57(device57_lastdata);
      DeviceData58(device58_lastdata);
      DeviceData59(device59_lastdata);
      DeviceData60(device60_lastdata);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const without_resverse_s1 = chartfiltered_Data.map(data => data.sensor1);
  const with_whole_s1 = without_resverse_s1.reverse()

  const without_resverse_s2 = chartfiltered_Data.map(data => data.sensor2);
  const with_whole_s2 = without_resverse_s2.reverse()

  const without_resverse_s3 = chartfiltered_Data.map(data => data.sensor3);
  const with_whole_s3 = without_resverse_s3.reverse()

  const without_resverse_s4 = chartfiltered_Data.map(data => data.sensor4);
  const with_whole_s4 = without_resverse_s4.reverse()

  const without_resverse_s5 = chartfiltered_Data.map(data => data.sensor5);
  const with_whole_s5 = without_resverse_s5.reverse()

  const without_resverse_time = chartfiltered_Data.map(data => data.time);
  const with_whole_time = without_resverse_time.reverse()


  const chartOptions = {
      grid: {
        show: true,
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
        enabled: false,
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

    const getBackgroundColor = (value) => {
      return value >= color_Limit.inputValue ? 'bg-red-500' : ''; 
    };
    const handleReportButtonClick = () => {
      setPopupVisibility(true);
    };
  
    const handleClosePopup = () => {
      setPopupVisibility(false);
    };
    ///////dropdown in the days////////////
    const dropdown_datas =[
      {label:'7 Days',value:'07'},
      {label:'15 Days',value:'15'},
      {label: '30 Days',value: '30'}

    ]

    const handleDaysDropdown = (selectedOption) => {
        setDropdownDays(selectedOption.value);
    };



  const handleSubmit = async (event) => {
    event.preventDefault();
    const inputValue = inputRef.current.value;

    try {
      // Make a POST request to your API endpoint
      await axios.post('http://localhost:2001/saveData', { inputValue });

      console.log('Data saved successfully');
      inputRef.current.value = '';
      
    } catch (error) {
      console.error('Error saving data:', error.message);
    }
    };

  return (
    <div className="text-center">
        <h1 className="text-2xl font-sans font-bold tracking-normal">
        IOCL HALDIA - REFORMER TUBE TEMPERATURE MEASUREMENT
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mt-4">
          <div className="mb-4 md:mb-0 bg-dark_color rounded-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between bg-dark_color rounded-lg p-4 md:ml-5 md:mr-5">
            <h1 className="text-white mb-4 md:mb-0 md:mr-4 md:justify-self-start">REFORMER TUBE: {RN1_device.R_N}</h1>
            
            <div className="flex items-center"> {/* Container for buttons and input */}
              <button className='bg-[#27B299] w-20 h-10 rounded text-white mr-2 font-bold' onClick={handleReportButtonClick}>
                Report
              </button>

             <input type="text" placeholder={`Limit-${color_Limit.inputValue}`}ref={inputRef} className="text-black mr-2 h-10 w-32 rounded-md border  px-2 py-1" />
              <button onClick={handleSubmit} className='bg-[#0EB3FA] w-20 h-10 rounded text-white font-bold' >
                Submit
              </button> 
            </div>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4 ml-5 mr-5">
          <div className="bg-gray-200 grid grid-rows-2 md:grid-rows-2 rounded p-4">
            <div className="flex flex-cols-2">
              <FaTemperatureLow className='text-2xl'/>
              <h1 className='ml-5 font-bold'>{RN1_device.sensor1}℃</h1>
            </div>
            <h1 className='font-bold mt-1'>Sensor1</h1>
          </div>
          <div className="bg-gray-200 grid grid-rows-2 md:grid-rows-2 rounded p-4">
            <div className="flex flex-cols-2">
              <FaTemperatureLow className='text-2xl'/>
              <h1 className='ml-5 font-bold'>{RN1_device.sensor2}℃</h1>
            </div>
            <h1 className='font-bold mt-1'>Sensor2</h1>
          </div>
          <div className="bg-gray-200 grid grid-rows-2 md:grid-rows-2 rounded p-4">
            <div className="flex flex-cols-2">
              <FaTemperatureLow className='text-2xl'/>
              <h1 className='ml-5 font-bold'>{RN1_device.sensor3}℃</h1>
            </div>
            <h1 className='font-bold mt-1'>Sensor3</h1>
          </div>
          <div className="bg-gray-200 grid grid-rows-2 md:grid-rows-2 rounded p-4">
            <div className="flex flex-cols-2">
              <FaTemperatureLow className='text-2xl'/>
              <h1 className='ml-5 font-bold'>{RN1_device.sensor4}℃</h1>
            </div>
            <h1 className='font-bold mt-1'>Sensor4</h1>
          </div>
          <div className="bg-gray-200 grid grid-rows-2 md:grid-rows-2 rounded p-4">
            <div className="flex flex-cols-2">
              <FaTemperatureLow className='text-2xl'/>
              <h1 className='ml-5 font-bold'>{RN1_device.sensor5}℃</h1>
            </div>
            <h1 className='font-bold mt-1'>Sensor5</h1>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between bg-dark_color rounded-lg p-4 md:ml-5 md:mr-5">
            <h1 className="text-white mb-4 md:mb-0 md:mr-4 md:justify-self-start">Graph</h1>
            <Select options={dropdown_datas} className="text-black" isSearchable={true} onChange={handleDaysDropdown} />

        </div>
        <div className="mb-4 mt-3">
          <div className=''>
            <ReactApexChart options={chartOptions} series={chartOptions.series} type='area' />
          </div>
        </div>
      </div>


            {/* Second Column */}
            <div className="grid grid-cols-2 gap-4 ">
              {/* First Column */}
              <div className="col-span-1 overflow-x-auto bg-dark_color w-full  max-h-screen overflow-y-auto rounded-lg">
                {/* Your 31x6 table content for the first column */}
                <table className="border-collapse table_border  table-auto w-full">
                  <tbody>
                  <tr>
                      <th className='w-3'>R.N</th>
                      <th>Sensor1</th>
                      <th>Sensor2</th>
                      <th>Sensor3</th>
                      <th>Sensor4</th>
                      <th>Sensor5</th>
                    </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('01')}>1</td>
                    <td className={getBackgroundColor(device1.sensor1)}>{device1.sensor1}</td>
                    <td className={getBackgroundColor(device1.sensor2)}>{device1.sensor2}</td>
                    <td className={getBackgroundColor(device1.sensor3)}>{device1.sensor3}</td>
                    <td className={getBackgroundColor(device1.sensor4)}>{device1.sensor4}</td>
                    <td className={getBackgroundColor(device1.sensor5)}>{device1.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('02')}>2</td>
                    <td className={getBackgroundColor(device2.sensor1)}>{device2.sensor1}</td>
                    <td className={getBackgroundColor(device2.sensor2)}>{device2.sensor2}</td>
                    <td className={getBackgroundColor(device2.sensor3)}>{device2.sensor3}</td>
                    <td className={getBackgroundColor(device2.sensor4)}>{device2.sensor4}</td>
                    <td className={getBackgroundColor(device2.sensor5)}>{device2.sensor5}</td> 
                  </tr>
                  <tr onClick={()=>dashboard_data('03')}>
                    <td>3</td>
                    <td className={getBackgroundColor(device3.sensor1)}>{device3.sensor1}</td>
                    <td className={getBackgroundColor(device3.sensor2)}>{device3.sensor2}</td>
                    <td className={getBackgroundColor(device3.sensor3)}>{device3.sensor3}</td>
                    <td className={getBackgroundColor(device3.sensor4)}>{device3.sensor4}</td>
                    <td className={getBackgroundColor(device3.sensor5)}>{device3.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('04')}>4</td>
                    <td className={getBackgroundColor(device4.sensor1)}>{device4.sensor1}</td>
                    <td className={getBackgroundColor(device4.sensor2)}>{device4.sensor2}</td>
                    <td className={getBackgroundColor(device4.sensor3)}>{device4.sensor3}</td>
                    <td className={getBackgroundColor(device4.sensor4)}>{device4.sensor4}</td>
                    <td className={getBackgroundColor(device4.sensor5)}>{device4.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('05')}>5</td>
                    <td className={getBackgroundColor(device5.sensor1)}>{device5.sensor1}</td>
                    <td className={getBackgroundColor(device5.sensor2)}>{device5.sensor2}</td>
                    <td className={getBackgroundColor(device5.sensor3)}>{device5.sensor3}</td>
                    <td className={getBackgroundColor(device5.sensor4)}>{device5.sensor4}</td>
                    <td className={getBackgroundColor(device5.sensor5)}>{device5.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('06')}>6</td>
                    <td className={getBackgroundColor(device6.sensor1)}>{device6.sensor1}</td>
                    <td className={getBackgroundColor(device6.sensor2)}>{device6.sensor2}</td>
                    <td className={getBackgroundColor(device6.sensor3)}>{device6.sensor3}</td>
                    <td className={getBackgroundColor(device6.sensor4)}>{device6.sensor4}</td>
                    <td className={getBackgroundColor(device6.sensor5)}>{device6.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('07')}>7</td>
                    <td className={getBackgroundColor(device7.sensor1)}>{device7.sensor1}</td>
                    <td className={getBackgroundColor(device7.sensor2)}>{device7.sensor2}</td>
                    <td className={getBackgroundColor(device7.sensor3)}>{device7.sensor3}</td>
                    <td className={getBackgroundColor(device7.sensor4)}>{device7.sensor4}</td>
                    <td className={getBackgroundColor(device7.sensor5)}>{device7.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('08')}>8</td>
                    <td className={getBackgroundColor(device8.sensor1)}>{device8.sensor1}</td>
                    <td className={getBackgroundColor(device8.sensor2)}>{device8.sensor2}</td>
                    <td className={getBackgroundColor(device8.sensor3)}>{device8.sensor3}</td>
                    <td className={getBackgroundColor(device8.sensor4)}>{device8.sensor4}</td>
                    <td className={getBackgroundColor(device8.sensor5)}>{device8.sensor5}</td> 
                  </tr>

                  <tr>
                    <td onClick={()=>dashboard_data('09')}>9</td>
                    <td className={getBackgroundColor(device9.sensor1)}>{device9.sensor1}</td>
                    <td className={getBackgroundColor(device9.sensor2)}>{device9.sensor2}</td>
                    <td className={getBackgroundColor(device9.sensor3)}>{device9.sensor3}</td>
                    <td className={getBackgroundColor(device9.sensor4)}>{device9.sensor4}</td>
                    <td className={getBackgroundColor(device9.sensor5)}>{device9.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('10')}>10</td>
                    <td className={getBackgroundColor(device10.sensor1)}>{device10.sensor1}</td>
                    <td className={getBackgroundColor(device10.sensor2)}>{device10.sensor2}</td>
                    <td className={getBackgroundColor(device10.sensor3)}>{device10.sensor3}</td>
                    <td className={getBackgroundColor(device10.sensor4)}>{device10.sensor4}</td>
                    <td className={getBackgroundColor(device10.sensor5)}>{device10.sensor5}</td> 
                  </tr>

                   <tr>
                    <td onClick={()=>dashboard_data('11')}>11</td>
                    <td className={getBackgroundColor(device11.sensor1)}>{device11.sensor1}</td>
                    <td className={getBackgroundColor(device11.sensor2)}>{device11.sensor2}</td>
                    <td className={getBackgroundColor(device11.sensor3)}>{device11.sensor3}</td>
                    <td className={getBackgroundColor(device11.sensor4)}>{device11.sensor4}</td>
                    <td className={getBackgroundColor(device11.sensor5)}>{device11.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('12')}>12</td>
                    <td className={getBackgroundColor(device12.sensor1)}>{device12.sensor1}</td>
                    <td className={getBackgroundColor(device12.sensor2)}>{device12.sensor2}</td>
                    <td className={getBackgroundColor(device12.sensor3)}>{device12.sensor3}</td>
                    <td className={getBackgroundColor(device12.sensor4)}>{device12.sensor4}</td>
                    <td className={getBackgroundColor(device12.sensor5)}>{device12.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('13')}>13</td>
                    <td className={getBackgroundColor(device13.sensor1)}>{device13.sensor1}</td>
                    <td className={getBackgroundColor(device13.sensor2)}>{device13.sensor2}</td>
                    <td className={getBackgroundColor(device13.sensor3)}>{device13.sensor3}</td>
                    <td className={getBackgroundColor(device13.sensor4)}>{device13.sensor4}</td>
                    <td className={getBackgroundColor(device13.sensor5)}>{device13.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('14')}>14</td>
                    <td className={getBackgroundColor(device14.sensor1)}>{device14.sensor1}</td>
                    <td className={getBackgroundColor(device14.sensor2)}>{device14.sensor2}</td>
                    <td className={getBackgroundColor(device14.sensor3)}>{device14.sensor3}</td>
                    <td className={getBackgroundColor(device14.sensor4)}>{device14.sensor4}</td>
                    <td className={getBackgroundColor(device14.sensor5)}>{device14.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('15')}>15</td>
                    <td className={getBackgroundColor(device15.sensor1)}>{device15.sensor1}</td>
                    <td className={getBackgroundColor(device15.sensor2)}>{device15.sensor2}</td>
                    <td className={getBackgroundColor(device15.sensor3)}>{device15.sensor3}</td>
                    <td className={getBackgroundColor(device15.sensor4)}>{device15.sensor4}</td>
                    <td className={getBackgroundColor(device15.sensor5)}>{device15.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('16')}>16</td>
                    <td className={getBackgroundColor(device16.sensor1)}>{device16.sensor1}</td>
                    <td className={getBackgroundColor(device16.sensor2)}>{device16.sensor2}</td>
                    <td className={getBackgroundColor(device16.sensor3)}>{device16.sensor3}</td>
                    <td className={getBackgroundColor(device16.sensor4)}>{device16.sensor4}</td>
                    <td className={getBackgroundColor(device16.sensor5)}>{device16.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('17')}>17</td>
                    <td className={getBackgroundColor(device17.sensor1)}>{device17.sensor1}</td>
                    <td className={getBackgroundColor(device17.sensor2)}>{device17.sensor2}</td>
                    <td className={getBackgroundColor(device17.sensor3)}>{device17.sensor3}</td>
                    <td className={getBackgroundColor(device17.sensor4)}>{device17.sensor4}</td>
                    <td className={getBackgroundColor(device17.sensor5)}>{device17.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('18')}>18</td>
                    <td className={getBackgroundColor(device18.sensor1)}>{device18.sensor1}</td>
                    <td className={getBackgroundColor(device18.sensor2)}>{device18.sensor2}</td>
                    <td className={getBackgroundColor(device18.sensor3)}>{device18.sensor3}</td>
                    <td className={getBackgroundColor(device18.sensor4)}>{device18.sensor4}</td>
                    <td className={getBackgroundColor(device18.sensor5)}>{device18.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('19')}>19</td>
                    <td className={getBackgroundColor(device19.sensor1)}>{device19.sensor1}</td>
                    <td className={getBackgroundColor(device19.sensor2)}>{device19.sensor2}</td>
                    <td className={getBackgroundColor(device19.sensor3)}>{device19.sensor3}</td>
                    <td className={getBackgroundColor(device19.sensor4)}>{device19.sensor4}</td>
                    <td className={getBackgroundColor(device19.sensor5)}>{device19.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('20')}>20</td>
                    <td className={getBackgroundColor(device20.sensor1)}>{device20.sensor1}</td>
                    <td className={getBackgroundColor(device20.sensor2)}>{device20.sensor2}</td>
                    <td className={getBackgroundColor(device20.sensor3)}>{device20.sensor3}</td>
                    <td className={getBackgroundColor(device20.sensor4)}>{device20.sensor4}</td>
                    <td className={getBackgroundColor(device20.sensor5)}>{device20.sensor5}</td> 
                  </tr>

                  <tr>
                    <td onClick={()=>dashboard_data('21')}>21</td>
                    <td className={getBackgroundColor(device21.sensor1)}>{device21.sensor1}</td>
                    <td className={getBackgroundColor(device21.sensor2)}>{device21.sensor2}</td>
                    <td className={getBackgroundColor(device21.sensor3)}>{device21.sensor3}</td>
                    <td className={getBackgroundColor(device21.sensor4)}>{device21.sensor4}</td>
                    <td className={getBackgroundColor(device21.sensor5)}>{device21.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('22')}>22</td>
                    <td className={getBackgroundColor(device22.sensor1)}>{device22.sensor1}</td>
                    <td className={getBackgroundColor(device22.sensor2)}>{device22.sensor2}</td>
                    <td className={getBackgroundColor(device22.sensor3)}>{device22.sensor3}</td>
                    <td className={getBackgroundColor(device22.sensor4)}>{device22.sensor4}</td>
                    <td className={getBackgroundColor(device22.sensor5)}>{device22.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('23')}>23</td>
                    <td className={getBackgroundColor(device23.sensor1)}>{device23.sensor1}</td>
                    <td className={getBackgroundColor(device23.sensor2)}>{device23.sensor2}</td>
                    <td className={getBackgroundColor(device23.sensor3)}>{device23.sensor3}</td>
                    <td className={getBackgroundColor(device23.sensor4)}>{device23.sensor4}</td>
                    <td className={getBackgroundColor(device23.sensor5)}>{device23.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('24')}>24</td>
                    <td className={getBackgroundColor(device24.sensor1)}>{device24.sensor1}</td>
                    <td className={getBackgroundColor(device24.sensor2)}>{device24.sensor2}</td>
                    <td className={getBackgroundColor(device24.sensor3)}>{device24.sensor3}</td>
                    <td className={getBackgroundColor(device24.sensor4)}>{device24.sensor4}</td>
                    <td className={getBackgroundColor(device24.sensor5)}>{device24.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('25')}>25</td>
                    <td className={getBackgroundColor(device25.sensor1)}>{device25.sensor1}</td>
                    <td className={getBackgroundColor(device25.sensor2)}>{device25.sensor2}</td>
                    <td className={getBackgroundColor(device25.sensor3)}>{device25.sensor3}</td>
                    <td className={getBackgroundColor(device25.sensor4)}>{device25.sensor4}</td>
                    <td className={getBackgroundColor(device25.sensor5)}>{device25.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('26')}>26</td>
                    <td className={getBackgroundColor(device26.sensor1)}>{device26.sensor1}</td>
                    <td className={getBackgroundColor(device26.sensor2)}>{device26.sensor2}</td>
                    <td className={getBackgroundColor(device26.sensor3)}>{device26.sensor3}</td>
                    <td className={getBackgroundColor(device26.sensor4)}>{device26.sensor4}</td>
                    <td className={getBackgroundColor(device26.sensor5)}>{device26.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('27')}>27</td>
                    <td className={getBackgroundColor(device27.sensor1)}>{device27.sensor1}</td>
                    <td className={getBackgroundColor(device27.sensor2)}>{device27.sensor2}</td>
                    <td className={getBackgroundColor(device27.sensor3)}>{device27.sensor3}</td>
                    <td className={getBackgroundColor(device27.sensor4)}>{device27.sensor4}</td>
                    <td className={getBackgroundColor(device27.sensor5)}>{device27.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('28')}>28</td>
                    <td className={getBackgroundColor(device28.sensor1)}>{device28.sensor1}</td>
                    <td className={getBackgroundColor(device28.sensor2)}>{device28.sensor2}</td>
                    <td className={getBackgroundColor(device28.sensor3)}>{device28.sensor3}</td>
                    <td className={getBackgroundColor(device28.sensor4)}>{device28.sensor4}</td>
                    <td className={getBackgroundColor(device28.sensor5)}>{device28.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('29')}>29</td>
                    <td className={getBackgroundColor(device29.sensor1)}>{device29.sensor1}</td>
                    <td className={getBackgroundColor(device29.sensor2)}>{device29.sensor2}</td>
                    <td className={getBackgroundColor(device29.sensor3)}>{device29.sensor3}</td>
                    <td className={getBackgroundColor(device29.sensor4)}>{device29.sensor4}</td>
                    <td className={getBackgroundColor(device29.sensor5)}>{device29.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('30')}>30</td>
                    <td className={getBackgroundColor(device30.sensor1)}>{device30.sensor1}</td>
                    <td className={getBackgroundColor(device30.sensor2)}>{device30.sensor2}</td>
                    <td className={getBackgroundColor(device30.sensor3)}>{device30.sensor3}</td>
                    <td className={getBackgroundColor(device30.sensor4)}>{device30.sensor4}</td>
                    <td className={getBackgroundColor(device30.sensor5)}>{device30.sensor5}</td> 
                  </tr>
                  </tbody>
                </table>
              </div>



              {/* Second Column */}
              <div className="col-span-1 overflow-x-auto bg-dark_color w-full  max-h-screen overflow-y-auto rounded-lg">
                {/* Your 31x6 table content for the second column */}
                <table className="border-collapse table2_border  table-auto w-full">
                <tbody>
                    <tr>
                      <th className='w-3'>R.N</th>
                      <th>Sensor1</th>
                      <th>Sensor2</th>
                      <th>Sensor3</th>
                      <th>Sensor4</th>
                      <th>Sensor5</th>
                    </tr>
                 
                  <tr>
                    <td onClick={()=>dashboard_data('31')}>31</td>
                    <td className={getBackgroundColor(device31.sensor1)}>{device31.sensor1}</td>
                    <td className={getBackgroundColor(device31.sensor2)}>{device31.sensor2}</td>
                    <td className={getBackgroundColor(device31.sensor3)}>{device31.sensor3}</td>
                    <td className={getBackgroundColor(device31.sensor4)}>{device31.sensor4}</td>
                    <td className={getBackgroundColor(device31.sensor5)}>{device31.sensor5}</td>
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('32')}>32</td>
                    <td className={getBackgroundColor(device32.sensor1)}>{device32.sensor1}</td>
                    <td className={getBackgroundColor(device32.sensor2)}>{device32.sensor2}</td>
                    <td className={getBackgroundColor(device32.sensor3)}>{device32.sensor3}</td>
                    <td className={getBackgroundColor(device32.sensor4)}>{device32.sensor4}</td>
                    <td className={getBackgroundColor(device32.sensor5)}>{device32.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('33')}>33</td>
                    <td className={getBackgroundColor(device33.sensor1)}>{device33.sensor1}</td>
                    <td className={getBackgroundColor(device33.sensor2)}>{device33.sensor2}</td>
                    <td className={getBackgroundColor(device33.sensor3)}>{device33.sensor3}</td>
                    <td className={getBackgroundColor(device33.sensor4)}>{device33.sensor4}</td>
                    <td className={getBackgroundColor(device33.sensor5)}>{device33.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('34')}>34</td>
                    <td className={getBackgroundColor(device34.sensor1)}>{device34.sensor1}</td>
                    <td className={getBackgroundColor(device34.sensor2)}>{device34.sensor2}</td>
                    <td className={getBackgroundColor(device34.sensor3)}>{device34.sensor3}</td>
                    <td className={getBackgroundColor(device34.sensor4)}>{device34.sensor4}</td>
                    <td className={getBackgroundColor(device34.sensor5)}>{device34.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('35')}>35</td>
                    <td className={getBackgroundColor(device35.sensor1)}>{device35.sensor1}</td>
                    <td className={getBackgroundColor(device35.sensor2)}>{device35.sensor2}</td>
                    <td className={getBackgroundColor(device35.sensor3)}>{device35.sensor3}</td>
                    <td className={getBackgroundColor(device35.sensor4)}>{device35.sensor4}</td>
                    <td className={getBackgroundColor(device35.sensor5)}>{device35.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('36')}>36</td>
                    <td className={getBackgroundColor(device36.sensor1)}>{device36.sensor1}</td>
                    <td className={getBackgroundColor(device36.sensor2)}>{device36.sensor2}</td>
                    <td className={getBackgroundColor(device36.sensor3)}>{device36.sensor3}</td>
                    <td className={getBackgroundColor(device36.sensor4)}>{device36.sensor4}</td>
                    <td className={getBackgroundColor(device36.sensor5)}>{device36.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('37')}>37</td>
                    <td className={getBackgroundColor(device37.sensor1)}>{device37.sensor1}</td>
                    <td className={getBackgroundColor(device37.sensor2)}>{device37.sensor2}</td>
                    <td className={getBackgroundColor(device37.sensor3)}>{device37.sensor3}</td>
                    <td className={getBackgroundColor(device37.sensor4)}>{device37.sensor4}</td>
                    <td className={getBackgroundColor(device37.sensor5)}>{device37.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('38')}>38</td>
                    <td className={getBackgroundColor(device38.sensor1)}>{device38.sensor1}</td>
                    <td className={getBackgroundColor(device38.sensor2)}>{device38.sensor2}</td>
                    <td className={getBackgroundColor(device38.sensor3)}>{device38.sensor3}</td>
                    <td className={getBackgroundColor(device38.sensor4)}>{device38.sensor4}</td>
                    <td className={getBackgroundColor(device38.sensor5)}>{device38.sensor5}</td> 
                  </tr>

                  <tr>
                    <td onClick={()=>dashboard_data('39')}>39</td>
                    <td className={getBackgroundColor(device39.sensor1)}>{device39.sensor1}</td>
                    <td className={getBackgroundColor(device39.sensor2)}>{device39.sensor2}</td>
                    <td className={getBackgroundColor(device39.sensor3)}>{device39.sensor3}</td>
                    <td className={getBackgroundColor(device39.sensor4)}>{device39.sensor4}</td>
                    <td className={getBackgroundColor(device39.sensor5)}>{device39.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('40')}>40</td>
                    <td className={getBackgroundColor(device40.sensor1)}>{device40.sensor1}</td>
                    <td className={getBackgroundColor(device40.sensor2)}>{device40.sensor2}</td>
                    <td className={getBackgroundColor(device40.sensor3)}>{device40.sensor3}</td>
                    <td className={getBackgroundColor(device40.sensor4)}>{device40.sensor4}</td>
                    <td className={getBackgroundColor(device40.sensor5)}>{device40.sensor5}</td> 
                  </tr>

                   <tr>
                    <td onClick={()=>dashboard_data('41')}>41</td>
                    <td className={getBackgroundColor(device41.sensor1)}>{device41.sensor1}</td>
                    <td className={getBackgroundColor(device41.sensor2)}>{device41.sensor2}</td>
                    <td className={getBackgroundColor(device41.sensor3)}>{device41.sensor3}</td>
                    <td className={getBackgroundColor(device41.sensor4)}>{device41.sensor4}</td>
                    <td className={getBackgroundColor(device41.sensor5)}>{device41.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('42')}>42</td>
                    <td className={getBackgroundColor(device42.sensor1)}>{device42.sensor1}</td>
                    <td className={getBackgroundColor(device42.sensor2)}>{device42.sensor2}</td>
                    <td className={getBackgroundColor(device42.sensor3)}>{device42.sensor3}</td>
                    <td className={getBackgroundColor(device42.sensor4)}>{device42.sensor4}</td>
                    <td className={getBackgroundColor(device42.sensor5)}>{device42.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('43')}>43</td>
                    <td className={getBackgroundColor(device43.sensor1)}>{device43.sensor1}</td>
                    <td className={getBackgroundColor(device43.sensor2)}>{device43.sensor2}</td>
                    <td className={getBackgroundColor(device43.sensor3)}>{device43.sensor3}</td>
                    <td className={getBackgroundColor(device43.sensor4)}>{device43.sensor4}</td>
                    <td className={getBackgroundColor(device43.sensor5)}>{device43.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('44')}>44</td>
                    <td className={getBackgroundColor(device44.sensor1)}>{device44.sensor1}</td>
                    <td className={getBackgroundColor(device44.sensor2)}>{device44.sensor2}</td>
                    <td className={getBackgroundColor(device44.sensor3)}>{device44.sensor3}</td>
                    <td className={getBackgroundColor(device44.sensor4)}>{device44.sensor4}</td>
                    <td className={getBackgroundColor(device44.sensor5)}>{device44.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('45')}>45</td>
                    <td className={getBackgroundColor(device45.sensor1)}>{device45.sensor1}</td>
                    <td className={getBackgroundColor(device45.sensor2)}>{device45.sensor2}</td>
                    <td className={getBackgroundColor(device45.sensor3)}>{device45.sensor3}</td>
                    <td className={getBackgroundColor(device45.sensor4)}>{device45.sensor4}</td>
                    <td className={getBackgroundColor(device45.sensor5)}>{device45.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('46')}>46</td>
                    <td className={getBackgroundColor(device46.sensor1)}>{device46.sensor1}</td>
                    <td className={getBackgroundColor(device46.sensor2)}>{device46.sensor2}</td>
                    <td className={getBackgroundColor(device46.sensor3)}>{device46.sensor3}</td>
                    <td className={getBackgroundColor(device46.sensor4)}>{device46.sensor4}</td>
                    <td className={getBackgroundColor(device46.sensor5)}>{device46.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('47')}>47</td>
                    <td className={getBackgroundColor(device47.sensor1)}>{device47.sensor1}</td>
                    <td className={getBackgroundColor(device47.sensor2)}>{device47.sensor2}</td>
                    <td className={getBackgroundColor(device47.sensor3)}>{device47.sensor3}</td>
                    <td className={getBackgroundColor(device47.sensor4)}>{device47.sensor4}</td>
                    <td className={getBackgroundColor(device47.sensor5)}>{device47.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('48')}>48</td>
                    <td className={getBackgroundColor(device48.sensor1)}>{device48.sensor1}</td>
                    <td className={getBackgroundColor(device48.sensor2)}>{device48.sensor2}</td>
                    <td className={getBackgroundColor(device48.sensor3)}>{device48.sensor3}</td>
                    <td className={getBackgroundColor(device48.sensor4)}>{device48.sensor4}</td>
                    <td className={getBackgroundColor(device48.sensor5)}>{device48.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('49')}>49</td>
                    <td className={getBackgroundColor(device49.sensor1)}>{device49.sensor1}</td>
                    <td className={getBackgroundColor(device49.sensor2)}>{device49.sensor2}</td>
                    <td className={getBackgroundColor(device49.sensor3)}>{device49.sensor3}</td>
                    <td className={getBackgroundColor(device49.sensor4)}>{device49.sensor4}</td>
                    <td className={getBackgroundColor(device49.sensor5)}>{device49.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('50')}>50</td>
                    <td className={getBackgroundColor(device50.sensor1)}>{device50.sensor1}</td>
                    <td className={getBackgroundColor(device50.sensor2)}>{device50.sensor2}</td>
                    <td className={getBackgroundColor(device50.sensor3)}>{device50.sensor3}</td>
                    <td className={getBackgroundColor(device50.sensor4)}>{device50.sensor4}</td>
                    <td className={getBackgroundColor(device50.sensor5)}>{device50.sensor5}</td> 
                  </tr>

                  <tr>
                    <td onClick={()=>dashboard_data('51')}>51</td>
                    <td className={getBackgroundColor(device51.sensor1)}>{device51.sensor1}</td>
                    <td className={getBackgroundColor(device51.sensor2)}>{device51.sensor2}</td>
                    <td className={getBackgroundColor(device51.sensor3)}>{device51.sensor3}</td>
                    <td className={getBackgroundColor(device51.sensor4)}>{device51.sensor4}</td>
                    <td className={getBackgroundColor(device51.sensor5)}>{device51.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('52')}>52</td>
                    <td className={getBackgroundColor(device52.sensor1)}>{device52.sensor1}</td>
                    <td className={getBackgroundColor(device52.sensor2)}>{device52.sensor2}</td>
                    <td className={getBackgroundColor(device52.sensor3)}>{device52.sensor3}</td>
                    <td className={getBackgroundColor(device52.sensor4)}>{device52.sensor4}</td>
                    <td className={getBackgroundColor(device52.sensor5)}>{device52.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('53')}>53</td>
                    <td className={getBackgroundColor(device53.sensor1)}>{device53.sensor1}</td>
                    <td className={getBackgroundColor(device53.sensor2)}>{device53.sensor2}</td>
                    <td className={getBackgroundColor(device53.sensor3)}>{device53.sensor3}</td>
                    <td className={getBackgroundColor(device53.sensor4)}>{device53.sensor4}</td>
                    <td className={getBackgroundColor(device53.sensor5)}>{device53.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('54')}>54</td>
                    <td className={getBackgroundColor(device54.sensor1)}>{device54.sensor1}</td>
                    <td className={getBackgroundColor(device54.sensor2)}>{device54.sensor2}</td>
                    <td className={getBackgroundColor(device54.sensor3)}>{device54.sensor3}</td>
                    <td className={getBackgroundColor(device54.sensor4)}>{device54.sensor4}</td>
                    <td className={getBackgroundColor(device54.sensor5)}>{device54.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('55')}>55</td>
                    <td className={getBackgroundColor(device55.sensor1)}>{device55.sensor1}</td>
                    <td className={getBackgroundColor(device55.sensor2)}>{device55.sensor2}</td>
                    <td className={getBackgroundColor(device55.sensor3)}>{device55.sensor3}</td>
                    <td className={getBackgroundColor(device55.sensor4)}>{device55.sensor4}</td>
                    <td className={getBackgroundColor(device55.sensor5)}>{device55.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('56')}>56</td>
                    <td className={getBackgroundColor(device56.sensor1)}>{device56.sensor1}</td>
                    <td className={getBackgroundColor(device56.sensor2)}>{device56.sensor2}</td>
                    <td className={getBackgroundColor(device56.sensor3)}>{device56.sensor3}</td>
                    <td className={getBackgroundColor(device56.sensor4)}>{device56.sensor4}</td>
                    <td className={getBackgroundColor(device56.sensor5)}>{device56.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('57')}>57</td>
                    <td className={getBackgroundColor(device57.sensor1)}>{device57.sensor1}</td>
                    <td className={getBackgroundColor(device57.sensor2)}>{device57.sensor2}</td>
                    <td className={getBackgroundColor(device57.sensor3)}>{device57.sensor3}</td>
                    <td className={getBackgroundColor(device57.sensor4)}>{device57.sensor4}</td>
                    <td className={getBackgroundColor(device57.sensor5)}>{device57.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('58')}>58</td>
                    <td className={getBackgroundColor(device58.sensor1)}>{device58.sensor1}</td>
                    <td className={getBackgroundColor(device58.sensor2)}>{device58.sensor2}</td>
                    <td className={getBackgroundColor(device58.sensor3)}>{device58.sensor3}</td>
                    <td className={getBackgroundColor(device58.sensor4)}>{device58.sensor4}</td>
                    <td className={getBackgroundColor(device58.sensor5)}>{device58.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('59')}>59</td>
                    <td className={getBackgroundColor(device59.sensor1)}>{device59.sensor1}</td>
                    <td className={getBackgroundColor(device59.sensor2)}>{device59.sensor2}</td>
                    <td className={getBackgroundColor(device59.sensor3)}>{device59.sensor3}</td>
                    <td className={getBackgroundColor(device59.sensor4)}>{device59.sensor4}</td>
                    <td className={getBackgroundColor(device59.sensor5)}>{device59.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('60')}>60</td>
                    <td className={getBackgroundColor(device60.sensor1)}>{device60.sensor1}</td>
                    <td className={getBackgroundColor(device60.sensor2)}>{device60.sensor2}</td>
                    <td className={getBackgroundColor(device60.sensor3)}>{device60.sensor3}</td>
                    <td className={getBackgroundColor(device60.sensor4)}>{device60.sensor4}</td>
                    <td className={getBackgroundColor(device60.sensor5)}>{device60.sensor5}</td> 
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>

        </div>
        <CSSTransition
        in={isPopupVisible}
        timeout={100}
        classNames="popup-overlay"
        unmountOnExit
      >
        <div className="overlay">
          <PopupComponent onClose={handleClosePopup} alldata={fetchedData}/>
        </div>
      </CSSTransition>

    </div>
);
};

export default Mainpage
