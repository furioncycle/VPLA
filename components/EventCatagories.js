import React, {useState} from 'react';
import {View,TouchableOpacity,Text,ImageBackground,StyleSheet, Dimensions, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Accordian} from './../components/Accordian';
import {ResetContext} from './../components/fetchEvent';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const renderAccordian = (eventList,nav) => {
    const items = [];
    eventList.map((item,index)=>{
        return(
            <Accordian
                title={item.title}
                data={item} nav={nav}/>
        );
    });
}
export const EventCatagories = ({title,data,nav}) => {
    const [expanded,setExpanded] = useState(false);
    const [reset,setReset] = useState(false);
    const toggleExpand =()=>{
        setExpanded(!expanded);
    }
    


    return (<>
            <TouchableOpacity onPress={toggleExpand}><ImageBackground
            source={{uri:'https://cakeheadloves.files.wordpress.com/2011/08/grey_cake_2.jpg'}}                style={{width: '99%', height: deviceHeight/3 - 32, marginTop: 5}} imageStyle={{marginLeft:5 ,borderRadius:5,borderWidth:1}}>
            <Text style={styles.title}>{title}</Text>
            </ImageBackground></TouchableOpacity>
            <View style={styles.parentHr}/>
            {expanded && renderAccordian(data,nav)}
            </>);
}
const styles = StyleSheet.create({
    title:{
        fontSize: 28,
        color: 'yellow',
        textAlign: 'center',
        margin: '20%',
        fontFamily: 'OpenSans-Bold'
    },
    parentHr:{
        height:1,
        color: 'white',
        width:'100%',
    },
    child:{
        backgroundColor: 'gray',
        padding:16,
    },
    image: {
        marginLeft: 5,
        borderWidth: 1,
        borderRadius: 5,
    },
    imageback:{
        width: '99%',
        height: deviceHeight/3 - 32,
        marginTop: 5,
    }
});
