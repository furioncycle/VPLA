import React, {useContext,useState,useEffect} from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';
import {LocContext} from './fetchEvent';
import {Image} from 'react-native';

MapboxGL.setAccessToken('pk.eyJ1IjoidHRlY2hvIiwiYSI6ImNrMHZ6a3pxMTE0am0zaWxhZXhqcHhxYnkifQ.gpVs9eHAGjrFrfhLTCpLqw');

const theAvenue = [-119.298964, 34.286623]
export const Map = () => {
    const {currentEvents, setCurrentlySelectedEvent,setModalVisibility,modalVisibility} = useContext(LocContext);

    const togglePoint = (index) => {
        console.log(currentEvents[index]);
       // setModalVisibility(!modalVisibility);
    }

    return (
            <MapboxGL.MapView
        style={{flex: 1}}
        styleURL={MapboxGL.StyleURL.Streets}
            >
            <MapboxGL.Camera
        defaultSettings={{
            zoomLevel: 13,
            centerCoordinate: theAvenue,
        }}/>{currentEvents.map((item,index)=>{ 
                const id = `point${index}`;
                const title = `title`;
                return (<MapboxGL.PointAnnotation key={id} id={id} title={title} coordinate={item.coordinates}>
                    <Image key={id} source={require('./../assets/marker.png')} style={{flex:1, resizeMode: 'cover', width: 25, height: 25}}/>
                </MapboxGL.PointAnnotation>);
        })}
                </MapboxGL.MapView>)
}

//TODO
//render multiple amount
//on click to hover and change marker
//Change to not use PointAnnotation
