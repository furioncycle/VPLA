import React, {useContext,useState,useEffect,useRef} from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';
import {LocContext,GlobalContext} from './fetchEvent';
import {Image} from 'react-native';
import exampleIcon from './../assets/marker.png';

MapboxGL.setAccessToken('pk.eyJ1IjoidHRlY2hvIiwiYSI6ImNrMHZ6a3pxMTE0am0zaWxhZXhqcHhxYnkifQ.gpVs9eHAGjrFrfhLTCpLqw');
const styles = {
    icon: {
        iconImage: ['get', 'icon'],
        iconRotationAlignment: 'map',
        iconAllowOverlap: true,
        iconSize: 0.05
    },
};
const theAvenue = [-119.298964, 34.286623]

export const Map_s = () => {
    const { setCurrentlySelectedEvent,setModalVisibility,modalVisibility} = useContext(GlobalContext);
    const {currentEvents} = useContext(LocContext);
    const [featureCollection, setFeatureCollection] = useState({type: 'FeatureCollection',features:[],});
    var Camera;

    useEffect(()=>{
        var f = [];
        f = currentEvents.map((item,index) => {
            return ( { type: 'Feature',
                       id: item.title,
                       properties: {icon: 'example', event: item},
                       geometry: {
                         type: 'Point',
                         coordinates: item.coordinates,
                       },
                     })
        });
        setFeatureCollection({type: 'FeatureCollection',features:f,});
    },[currentEvents]);

    const _onMarkerPress = (event) => {
        const selEvent = event.nativeEvent.payload.properties.event;
        setCurrentlySelectedEvent(selEvent);
        setModalVisibility(true);
        flyTo(selEvent.coordinates);
    }

    const flyTo = (location) => {
        console.log(Camera.current);
        Camera.moveTo([location[0]+0.0001,location[1]-0.003]);
        //Camera.current.ZoomTo(15;
    }

    const zoomOut = () => {
        Camera.current.setCamera({
            centerCoordinate: theAvenue,
            zoomLevel: 13,
            animationDuration: 500,
        });
    }

        return (
            <MapboxGL.MapView style={{flex: 1}}
                ><MapboxGL.Camera
                  ref={(c)=> Camera = c}
                     defaultSettings={{
                         zoomLevel: 13,
                         centerCoordinate: theAvenue,
                     }}
                  />
        <MapboxGL.Images images={{example: exampleIcon, assets: ['pin']}}  />
        <MapboxGL.ShapeSource
            id="eventSource"
            onPress={event=> _onMarkerPress(event)}
            shape={featureCollection}
        >
        <MapboxGL.SymbolLayer id="eventIcons" style={styles.icon} />
        </MapboxGL.ShapeSource>
                </MapboxGL.MapView>
        )
    }
