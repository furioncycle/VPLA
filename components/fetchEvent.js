import React, {useEffect, useState,createContext} from 'react';
import axios from 'axios';

const initialState = {
    food: [],
    events: [],
    murals: [],
}

export const EventsContext = createContext();
export const LocContext = createContext();
export const GlobalContext = createContext();
const ResetContext = createContext();
export const useFetchEvents = (setLoading) => {
    const mbxgeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
    const geocoder= mbxgeocoding({accessToken: 'pk.eyJ1IjoidHRlY2hvIiwiYSI6ImNrMHZ6a3pxMTE0am0zaWxhZXhqcHhxYnkifQ.gpVs9eHAGjrFrfhLTCpLqw'});
     const gcalendarApi = 'https://www.googleapis.com/calendar/v3/calendars/fn6u6kvjcr9fan3bufbk33sbts@group.calendar.google.com/events?key=AIzaSyAqzF3QVl4EEZk2u9A3H2tgHRpinJSvFio'
    const [food,setFood] = useState([])
    const [events,setEvents] = useState([])
    const [murals,setMurals] = useState([])
    const locations = ["197 Dubbers Street, VENTURA, CA 93001",
                       "693 N VENTURA AVE, VENTURA, CA 93001"];
    const theAvenue = [-119.298964, 34.286623]
    const testMount = async () => {
        let e = [];
        let fo = [];
        let mu = [];
        var v = 0;
        locations.map((item,index) =>{
          /*  let sent = geocoder.forwardGeocode({
                query:location, autocomplete: false, limit: 1
            }).send();
             sent.then(response => { */if(index ==1){
                 v = theAvenue[1]+0.001;
             }
            else{ v = theAvenue[1]+ 0.002;}
                      let f = {};
            f['address'] = item;
                f['coordinates'] = [-119.298964, v]//response.body.features[0].center;
               f['type'] = 'Food';
               f['title'] = "Food place";
               f['description'] = 'placeholder for place description';
               fo.push(f);
               let m = {};
               m['address'] = item;
                m['coordinates'] = [-119.298964, (v+0.003)]//response.body.features[0].center;
                m['type'] = 'Murals';
                m['title'] = "Mural Event";
                m['artist'] = "SOme artist";
                m['org'] = "Some Org";
                mu.push(m);
                let ev = {};
                ev['address'] = item;
                ev['coordinates'] = [-119.298964, (v+0.002)]//response.body.features[0].center;
                ev['type'] = 'Event';
                ev['title'] = 'Event Title';
                 ev['description'] = "Some description";
               ev['org'] = "Some ORG";
                ev['startDate'] = new Date();
            ev['endDate'] =  new Date();
            e.push(ev);
            // });
        });
        setEvents(events.concat(e));
        setFood(food.concat(fo));
        setMurals(murals.concat(mu));
    }

   /* const onMount = async () => {
        const request = axios.get(gcalendarApi);
        request.then(response => {
            const uniqueEventLocations = [... new Set(response.data.items.map(data=>data.location))]; 
            uniqueEventLocations.forEach((location) => {
                if(location != undefined || location != []){
                console.log(location);
                var filteredEvents = response.data.items.filter(event => event.location == location);
                  let sent = geocoder.forwardGeocode({
                         query: location, autocomplete: false, limit: 1
                  }).send();
                  sent.then( response =>{
                      filteredEvents.forEach((entry) => {
                    var eventType = entry.summary.split('-');
                      if(eventType[0] == 'Food'){
                        let sfood = [...food];
                        ev = {};
                        ev['address'] = location;
                        ev['coordinates'] = response.body.features[0].center;
                        ev['type'] = eventType[0];
                        ev['title'] = eventType[1];
                        ev['description'] = 'placeholder for place description';
                        sfood.push(ev);
                        setFood(sfood);
                    }else if(eventType[0] == 'Murals'){
                        let smurals = [...murals];
                        ev = {};
                        ev['address'] = location;
                        ev['coordinates'] = response.body.features[0].center;
                        ev['type'] = eventType[0];
                        ev['title'] = eventType[1];
                        ev['artist'] = entry.description.split('by')[1];
                        ev['org'] = entry.description.split('by')[0];
                        smurals.push(ev);
                        setMurals(smurals);
                    }else{
                        let sevents = [...events];
                        ev = {};
                        ev['address'] = location;
                        ev['coordinates'] = response.body.features[0].center;
                        ev['type'] = 'Event';
                        ev['title'] = eventType[1];
                        ev['description'] = entry.description;
                        ev['org'] = entry.organizer;
                        ev['startDate'] = entry.start.dateTime;
                        ev['endDate'] =  entry.end.dateTime;
                        sevents.push(ev);
                        setEvents(sevents);
                    }
                  });
                  });
                }
         });
      });
    }*/

    useEffect( () => {testMount(); console.log(events); setLoading(false) },[]);
    return {events,food,murals};
};

