import React, {useContext, useState,useEffect} from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';
import {Image} from 'react-native';
import {LocContext} from './fetchEvent';

const render = (currentEvents) => {
    currentEvents.map((item,index) =>{
        const id = `point${index}`;
        const title = `title`;
        return (<MapboxGL.PointAnnotation key={id} id={id} title={title} coordinate={item.coordinates}>
                <Image key={id} source={require('./../assets/marker.png')} style={{flex:1, resizeMode: 'cover', width: 25, height: 25}}/>
                </MapboxGL.PointAnnotation>);
    })
}

export const Points = () => {
    const {currentEvents} = useContext(LocContext);

    return (
            <>{render(currentEvents)}</>
    );
}
