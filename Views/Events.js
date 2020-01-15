import React,{useContext, useState} from 'react';
import {View, FlatList} from 'react-native';
import {EventsContext} from './../components/fetchEvent';
import {EventCatagories} from './../components/EventCatagories';
const renderListItem = (item,index,subMenuItem,nav) => {
    return (<EventCatagories title={item} data={subMenuItem} nav={nav}/>);
}

export const Events = ({navigation}) => {
    const [expanded, setExpanded] = useState(false);
    const {events,food,murals} = useContext(EventsContext);
    const subMenu = [food,murals,events]; 
    return (<View style={{flex: 1}}>
            <FlatList
            data={['Food','Murals','Events']}
            renderItem={({item,index}) => renderListItem(item,index,subMenu[index],navigation)}
            keyExtractor={(item,index) => index.toString()}/>
            </View>);
}



