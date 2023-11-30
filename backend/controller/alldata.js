import LoginModel from '../components/logn.js'
import DataModel from "../components/insert.js";
import axios from 'axios'
import  jwt from 'jsonwebtoken';
import  bcrypt from  'bcryptjs';
import Data from '../components/Data.js';




export const login =async (req, res) => {
    const user = await LoginModel.findOne({
        email: req.body.email,
    })
    if(!user) {
        return {status: 'error', error: 'Invalid User'}
    }
    const isPasswordVaild = await bcrypt.compare(
        req.body.password,
        user.password
    )
    if (isPasswordVaild) {
        const token = jwt.sign(
            {
                name: user.name,
                email: user.email
            },
            'secret123'
        )
        return res.json({status: 'ok', user: token})
    } else {
        return res.json({status: 'error', user: false})
    }
  }

  export const register = async(req,res)=>{
    try {
        const newPassword = await bcrypt.hash(req.body.password, 10)
        await LoginModel.create({
            email: req.body.email,
            password: newPassword,
        })
        res.json({status: 'ok'})
    } catch (error) {
        res.json({status: 'error', error: 'Duplicate email'})
    }
}

export const SavedData = async(req,res)=>{
    try{
        const inputValue = req.body.inputValue;
        const newData = new Data({inputValue});
        await newData.save()
        res.status(201).json({message:"Data Saved Successfully"});
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Internal server error"})
    }
}
 



  
export const insertData = async(req,res)=>{
    const { R_N, sensor1, sensor2, sensor3, sensor4, sensor5, time } = req.query;
    if (!R_N || !sensor1 || !sensor2 || !sensor3 || !sensor4 || !sensor5 || !time) {
        return res.status(400).json({ error: 'Missing required parameters' });
    }
    try {
        const newData = {
            R_N: R_N,
            sensor1: sensor1,
            sensor2: sensor2,
            sensor3: sensor3,
            sensor4: sensor4,
            sensor5: sensor5,
            time: time,
        };

        await DataModel.create(newData);
        res.status(200).json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const Limits_Data = async(req,res)=>{
    Data.findOne({},{},{sort:{_id:-1}}).then(data=>{
       if(data){
        res.status(200).json({inputValue:data.inputValue,
        });
       }else{
        res.status(400).json({error:"No Data found"});
       }
    })
    .catch(err =>res.status(500).json({error:err.message}))
}



export const LastData = async(req,res)=>{
    try {
        const data1 = await DataModel.find({ R_N: '01' }).sort({_id: -1}).limit(30);
        const data2 = await DataModel.find({ R_N: '02' }).sort({_id: -1}).limit(30);
        const data3 = await DataModel.find({ R_N: '03' }).sort({_id: -1}).limit(30);
        const data4 = await DataModel.find({ R_N: '04' }).sort({_id: -1}).limit(30);
        const data5 = await DataModel.find({ R_N: '05' }).sort({_id: -1}).limit(30);
        const data6 = await DataModel.find({ R_N: '06' }).sort({_id: -1}).limit(30);
        const data7 = await DataModel.find({ R_N: '07' }).sort({_id: -1}).limit(30);
        const data8 = await DataModel.find({ R_N: '08' }).sort({_id: -1}).limit(30);
        const data9 = await DataModel.find({ R_N: '09' }).sort({_id: -1}).limit(30);
        const data10 = await DataModel.find({ R_N: '10' }).sort({_id: -1}).limit(30);
        const data11 = await DataModel.find({ R_N: '11' }).sort({_id: -1}).limit(30);
        const data12 = await DataModel.find({ R_N: '12' }).sort({_id: -1}).limit(30);
        const data13 = await DataModel.find({ R_N: '13' }).sort({_id: -1}).limit(30);
        const data14 = await DataModel.find({ R_N: '14' }).sort({_id: -1}).limit(30);
        const data15 = await DataModel.find({ R_N: '15' }).sort({_id: -1}).limit(30);
        const data16 = await DataModel.find({ R_N: '16' }).sort({_id: -1}).limit(30);
        const data17 = await DataModel.find({ R_N: '17' }).sort({_id: -1}).limit(30);
        const data18 = await DataModel.find({ R_N: '18' }).sort({_id: -1}).limit(30);
        const data19 = await DataModel.find({ R_N: '19' }).sort({_id: -1}).limit(30);
        const data20 = await DataModel.find({ R_N: '20' }).sort({_id: -1}).limit(30);
        const data21 = await DataModel.find({ R_N: '21' }).sort({_id: -1}).limit(30);
        const data22 = await DataModel.find({ R_N: '22' }).sort({_id: -1}).limit(30);
        const data23 = await DataModel.find({ R_N: '23' }).sort({_id: -1}).limit(30);
        const data24 = await DataModel.find({ R_N: '24' }).sort({_id: -1}).limit(30);
        const data25 = await DataModel.find({ R_N: '25' }).sort({_id: -1}).limit(30);
        const data26 = await DataModel.find({ R_N: '26' }).sort({_id: -1}).limit(30);
        const data27 = await DataModel.find({ R_N: '27' }).sort({_id: -1}).limit(30);
        const data28 = await DataModel.find({ R_N: '28' }).sort({_id: -1}).limit(30);
        const data29 = await DataModel.find({ R_N: '29' }).sort({_id: -1}).limit(30);
        const data30 = await DataModel.find({ R_N: '30' }).sort({_id: -1}).limit(30);
        const data31 = await DataModel.find({ R_N: '31' }).sort({_id: -1}).limit(30);
        const data32 = await DataModel.find({ R_N: '32' }).sort({_id: -1}).limit(30);
        const data33 = await DataModel.find({ R_N: '33' }).sort({_id: -1}).limit(30);
        const data34 = await DataModel.find({ R_N: '34' }).sort({_id: -1}).limit(30);
        const data35 = await DataModel.find({ R_N: '35' }).sort({_id: -1}).limit(30);
        const data36 = await DataModel.find({ R_N: '36' }).sort({_id: -1}).limit(30);
        const data37 = await DataModel.find({ R_N: '37' }).sort({_id: -1}).limit(30);
        const data38 = await DataModel.find({ R_N: '38' }).sort({_id: -1}).limit(30);
        const data39 = await DataModel.find({ R_N: '39' }).sort({_id: -1}).limit(30);
        const data40 = await DataModel.find({ R_N: '40' }).sort({_id: -1}).limit(30);
        const data41 = await DataModel.find({ R_N: '41' }).sort({_id: -1}).limit(30);
        const data42 = await DataModel.find({ R_N: '42' }).sort({_id: -1}).limit(30);
        const data43 = await DataModel.find({ R_N: '43' }).sort({_id: -1}).limit(30);
        const data44 = await DataModel.find({ R_N: '44' }).sort({_id: -1}).limit(30);
        const data45 = await DataModel.find({ R_N: '45' }).sort({_id: -1}).limit(30);
        const data46 = await DataModel.find({ R_N: '46' }).sort({_id: -1}).limit(30);
        const data47 = await DataModel.find({ R_N: '47' }).sort({_id: -1}).limit(30);
        const data48 = await DataModel.find({ R_N: '48' }).sort({_id: -1}).limit(30);
        const data49 = await DataModel.find({ R_N: '49' }).sort({_id: -1}).limit(30);
        const data50 = await DataModel.find({ R_N: '50' }).sort({_id: -1}).limit(30);
        const data51 = await DataModel.find({ R_N: '51' }).sort({_id: -1}).limit(30);
        const data52 = await DataModel.find({ R_N: '52' }).sort({_id: -1}).limit(30);
        const data53 = await DataModel.find({ R_N: '53' }).sort({_id: -1}).limit(30);
        const data54 = await DataModel.find({ R_N: '54' }).sort({_id: -1}).limit(30);
        const data55 = await DataModel.find({ R_N: '55' }).sort({_id: -1}).limit(30);
        const data56 = await DataModel.find({ R_N: '56' }).sort({_id: -1}).limit(30);
        const data57 = await DataModel.find({ R_N: '57' }).sort({_id: -1}).limit(30);
        const data58 = await DataModel.find({ R_N: '58' }).sort({_id: -1}).limit(30);
        const data59 = await DataModel.find({ R_N: '59' }).sort({_id: -1}).limit(30);
        const data60 = await DataModel.find({ R_N: '60' }).sort({_id: -1}).limit(30);


        const formatData = (data) => {
            return data.map(item => ({
                R_N: item.R_N,
                sensor1: item.sensor1,
                sensor2: item.sensor2,
                sensor3: item.sensor3,
                sensor4: item.sensor4,
                sensor5: item.sensor5,
                time: item.time,
            }));
        };

        const formattedData1 = formatData(data1);
        const formattedData2 = formatData(data2);
        const formattedData3 = formatData(data3);
        const formattedData4 = formatData(data4);
        const formattedData5 = formatData(data5);
        const formattedData6 = formatData(data6);
        const formattedData7 = formatData(data7);
        const formattedData8 = formatData(data8);
        const formattedData9 = formatData(data9);
        const formattedData10 = formatData(data10);
        const formattedData11 = formatData(data11);
        const formattedData12 = formatData(data12);
        const formattedData13 = formatData(data13);
        const formattedData14 = formatData(data14);
        const formattedData15 = formatData(data15);
        const formattedData16 = formatData(data16);
        const formattedData17 = formatData(data17);
        const formattedData18 = formatData(data18);
        const formattedData19 = formatData(data19);
        const formattedData20 = formatData(data20);
        const formattedData21 = formatData(data21);
        const formattedData22 = formatData(data22);
        const formattedData23 = formatData(data23);
        const formattedData24 = formatData(data24);
        const formattedData25 = formatData(data25);
        const formattedData26 = formatData(data26);
        const formattedData27 = formatData(data27);
        const formattedData28 = formatData(data28);
        const formattedData29 = formatData(data29);
        const formattedData30 = formatData(data30);
        const formattedData31 = formatData(data31);
        const formattedData32 = formatData(data32);
        const formattedData33 = formatData(data33);
        const formattedData34 = formatData(data34);
        const formattedData35 = formatData(data35);
        const formattedData36 = formatData(data36);
        const formattedData37 = formatData(data37);
        const formattedData38 = formatData(data38);
        const formattedData39 = formatData(data39);
        const formattedData40 = formatData(data40);
        const formattedData41 = formatData(data41);
        const formattedData42 = formatData(data42);
        const formattedData43 = formatData(data43);
        const formattedData44 = formatData(data44);
        const formattedData45 = formatData(data45);
        const formattedData46 = formatData(data46);
        const formattedData47 = formatData(data47);
        const formattedData48 = formatData(data48);
        const formattedData49 = formatData(data49);
        const formattedData50 = formatData(data50);
        const formattedData51 = formatData(data51);
        const formattedData52 = formatData(data52);
        const formattedData53 = formatData(data53);
        const formattedData54 = formatData(data54);
        const formattedData55 = formatData(data55);
        const formattedData56 = formatData(data56);
        const formattedData57 = formatData(data57);
        const formattedData58 = formatData(data58);
        const formattedData59 = formatData(data59);
        const formattedData60 = formatData(data60);

        if (formattedData1.length === 0 || 
            formattedData2.length === 0 || 
            formattedData3.length === 0 || 
            formattedData4.length === 0 || 
            formattedData5.length === 0|| 
            formattedData6.length === 0|| 
            formattedData7.length === 0|| 
            formattedData8.length === 0|| 
            formattedData9.length === 0|| 
            formattedData10.length === 0|| 
            formattedData11.length === 0|| 
            formattedData12.length === 0|| 
            formattedData13.length === 0|| 
            formattedData14.length === 0|| 
            formattedData15.length === 0|| 
            formattedData16.length === 0|| 
            formattedData17.length === 0|| 
            formattedData18.length === 0|| 
            formattedData19.length === 0|| 
            formattedData20.length === 0|| 
            formattedData21.length === 0|| 
            formattedData22.length === 0|| 
            formattedData23.length === 0|| 
            formattedData24.length === 0|| 
            formattedData25.length === 0|| 
            formattedData26.length === 0|| 
            formattedData27.length === 0|| 
            formattedData28.length === 0|| 
            formattedData29.length === 0|| 
            formattedData30.length === 0||  
            formattedData31.length === 0|| 
            formattedData32.length === 0|| 
            formattedData33.length === 0|| 
            formattedData34.length === 0|| 
            formattedData35.length === 0|| 
            formattedData36.length === 0|| 
            formattedData37.length === 0|| 
            formattedData38.length === 0|| 
            formattedData39.length === 0|| 
            formattedData40.length === 0||
            formattedData41.length === 0|| 
            formattedData42.length === 0|| 
            formattedData43.length === 0|| 
            formattedData44.length === 0|| 
            formattedData45.length === 0|| 
            formattedData46.length === 0|| 
            formattedData47.length === 0|| 
            formattedData48.length === 0|| 
            formattedData49.length === 0|| 
            formattedData50.length === 0||  
            formattedData51.length === 0|| 
            formattedData52.length === 0|| 
            formattedData53.length === 0|| 
            formattedData54.length === 0|| 
            formattedData55.length === 0|| 
            formattedData56.length === 0|| 
            formattedData57.length === 0|| 
            formattedData58.length === 0|| 
            formattedData59.length === 0|| 
            formattedData60.length === 0           
            ) 
            {
            const placeholderData = {
                R_N: '-',
                sensor1: '-',
                sensor2: '-',
                sensor3: '-',
                sensor4: '-',
                sensor5: '-',
                time: '-',
            };
            res.status(200).json({
                sensor1: formattedData1.length > 0 ? formattedData1 : placeholderData,
                sensor2: formattedData2.length > 0 ? formattedData2 : placeholderData,
                sensor3: formattedData3.length > 0 ? formattedData3 : placeholderData,
                sensor4: formattedData4.length > 0 ? formattedData4 : placeholderData,
                sensor5: formattedData5.length > 0 ? formattedData5 : placeholderData,
                sensor6: formattedData6.length > 0 ? formattedData6 : placeholderData,
                sensor7: formattedData7.length > 0 ? formattedData7 : placeholderData,
                sensor8: formattedData8.length > 0 ? formattedData8 : placeholderData,
                sensor9: formattedData9.length > 0 ? formattedData9 : placeholderData,
                sensor10: formattedData10.length > 0 ? formattedData10 : placeholderData,
                sensor11: formattedData11.length > 0 ? formattedData11 : placeholderData,
                sensor12: formattedData12.length > 0 ? formattedData12 : placeholderData,
                sensor13: formattedData13.length > 0 ? formattedData13 : placeholderData,
                sensor14: formattedData14.length > 0 ? formattedData14 : placeholderData,
                sensor15: formattedData15.length > 0 ? formattedData15 : placeholderData,
                sensor16: formattedData16.length > 0 ? formattedData16 : placeholderData,
                sensor17: formattedData17.length > 0 ? formattedData17 : placeholderData,
                sensor18: formattedData18.length > 0 ? formattedData18 : placeholderData,
                sensor19: formattedData19.length > 0 ? formattedData19 : placeholderData,
                sensor20: formattedData20.length > 0 ? formattedData20 : placeholderData,
                sensor21: formattedData21.length > 0 ? formattedData21 : placeholderData,
                sensor22: formattedData22.length > 0 ? formattedData22 : placeholderData,
                sensor23: formattedData23.length > 0 ? formattedData23 : placeholderData,
                sensor24: formattedData24.length > 0 ? formattedData24 : placeholderData,
                sensor25: formattedData25.length > 0 ? formattedData25 : placeholderData,
                sensor26: formattedData26.length > 0 ? formattedData26 : placeholderData,
                sensor27: formattedData27.length > 0 ? formattedData27 : placeholderData,
                sensor28: formattedData28.length > 0 ? formattedData28 : placeholderData,
                sensor29: formattedData29.length > 0 ? formattedData29 : placeholderData,
                sensor30: formattedData30.length > 0 ? formattedData30 : placeholderData,
                sensor31: formattedData31.length > 0 ? formattedData31 : placeholderData,
                sensor32: formattedData32.length > 0 ? formattedData32 : placeholderData,
                sensor33: formattedData33.length > 0 ? formattedData33 : placeholderData,
                sensor34: formattedData34.length > 0 ? formattedData34 : placeholderData,
                sensor35: formattedData35.length > 0 ? formattedData35 : placeholderData,
                sensor36: formattedData36.length > 0 ? formattedData36 : placeholderData,
                sensor37: formattedData37.length > 0 ? formattedData37 : placeholderData,
                sensor38: formattedData38.length > 0 ? formattedData38 : placeholderData,
                sensor39: formattedData39.length > 0 ? formattedData39 : placeholderData,
                sensor40: formattedData40.length > 0 ? formattedData40 : placeholderData,
                sensor41: formattedData41.length > 0 ? formattedData41 : placeholderData,
                sensor42: formattedData42.length > 0 ? formattedData42 : placeholderData,
                sensor43: formattedData43.length > 0 ? formattedData43 : placeholderData,
                sensor44: formattedData44.length > 0 ? formattedData44 : placeholderData,
                sensor45: formattedData45.length > 0 ? formattedData45 : placeholderData,
                sensor46: formattedData46.length > 0 ? formattedData46 : placeholderData,
                sensor47: formattedData47.length > 0 ? formattedData47 : placeholderData,
                sensor48: formattedData48.length > 0 ? formattedData48 : placeholderData,
                sensor49: formattedData49.length > 0 ? formattedData49 : placeholderData,
                sensor50: formattedData50.length > 0 ? formattedData50 : placeholderData,
                sensor51: formattedData51.length > 0 ? formattedData51 : placeholderData,
                sensor52: formattedData52.length > 0 ? formattedData52 : placeholderData,
                sensor53: formattedData53.length > 0 ? formattedData53 : placeholderData,
                sensor54: formattedData54.length > 0 ? formattedData54 : placeholderData,
                sensor55: formattedData55.length > 0 ? formattedData55 : placeholderData,
                sensor56: formattedData56.length > 0 ? formattedData56 : placeholderData,
                sensor57: formattedData57.length > 0 ? formattedData57 : placeholderData,
                sensor58: formattedData58.length > 0 ? formattedData58 : placeholderData,
                sensor59: formattedData59.length > 0 ? formattedData59 : placeholderData,
                sensor60: formattedData60.length > 0 ? formattedData60 : placeholderData,

            });
        } else {
            res.status(200).json({
                sensor1: formattedData1,
                sensor2: formattedData2,
                sensor3: formattedData3,
                sensor4: formattedData4,
                sensor5: formattedData5,
                sensor6: formattedData6,
                sensor7: formattedData7,
                sensor8: formattedData8,
                sensor9: formattedData9,
                sensor10: formattedData10,
                sensor11: formattedData11,
                sensor12: formattedData12,
                sensor13: formattedData13,
                sensor14: formattedData14,
                sensor15: formattedData15,
                sensor16: formattedData16,
                sensor17: formattedData17,
                sensor18: formattedData18,
                sensor19: formattedData19,
                sensor20: formattedData20,
                sensor21: formattedData21,
                sensor22: formattedData22,
                sensor23: formattedData23,
                sensor24: formattedData24,
                sensor25: formattedData25,
                sensor26: formattedData26,
                sensor27: formattedData27,
                sensor28: formattedData28,
                sensor29: formattedData29,
                sensor30: formattedData30,
                sensor31: formattedData31,
                sensor32: formattedData32,
                sensor33: formattedData33,
                sensor34: formattedData34,
                sensor35: formattedData35,
                sensor36: formattedData36,
                sensor37: formattedData37,
                sensor38: formattedData38,
                sensor39: formattedData39,
                sensor40: formattedData40,
                sensor41: formattedData41,
                sensor42: formattedData42,
                sensor43: formattedData43,
                sensor44: formattedData44,
                sensor45: formattedData45,
                sensor46: formattedData46,
                sensor47: formattedData47,
                sensor48: formattedData48,
                sensor49: formattedData49,
                sensor50: formattedData50,
                sensor51: formattedData51,
                sensor52: formattedData52,
                sensor53: formattedData53,
                sensor54: formattedData54,
                sensor55: formattedData55,
                sensor56: formattedData56,
                sensor57: formattedData57,
                sensor58: formattedData58,
                sensor59: formattedData59,
                sensor60: formattedData60,
            });
        }
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: err.message });
    }
}