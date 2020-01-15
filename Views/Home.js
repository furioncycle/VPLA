import React, {useContext, useState,useEffect} from 'react';
import ButtonGrp from './../components/ButtonGroup';
import {Map} from './../components/Map';
import {EventCard} from './../components/Modal';
import {View} from 'react-native';
import {EventsContext,LocContext} from './../components/fetchEvent';
import {Map_s} from './../components/Map_s.js';
export const Home = () => {
    const {events,food,murals} = useContext(EventsContext);
    const [currentEvents, setEventsType] = useState([]);
    const [currentLocationType, setLocationType ] = useState('Events');

    useEffect(()=>{
        if(currentLocationType == 'Events'){
            setEventsType([...events]);
        }else if(currentLocationType == 'Murals'){
            setEventsType([...murals]);
        }else{
            setEventsType([...food]);
        }
    },[currentLocationType]);

    return(
           <LocContext.Provider value={{currentLocationType,setLocationType,currentEvents,setEventsType}}>
           <View style={{flex: 1}}>
           <Map_s/>
           <ButtonGrp setEventType={setLocationType}/>
           <EventCard/></View></LocContext.Provider>);
};

//TODO


