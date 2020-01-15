import React, {useState} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {EventCard} from './../components/EventCard';

const createTime = (startDate, endDate) => {
    var startTime = createStringTime(new Date(startDate));
    var endTime = createStringTime(new Date(endDate));
    if( startTime == 'NaN' || endTime == 'NaN'){
        return '';
    }
    else{
        return startTime+ '-'+endTime;
    }
}

const createStringTime = (date) => {
    if(isNaN(date.getHours())){
        return 'NaN';
    }
    var hour = date.getHours();
    var minute = date.getMinutes();
    var strTime = '' + ((hour>12) ? hour -12 : hour);
    if(hour == 0)
        strTime = '12';
    strTime += ((minute <10) ? ':0' : ':')+ minute;
    strTime += (hour >= 12) ? ' p.m.' : ' a.m.';
    return strTime;
}

const _renderCard = (data,nav) => {
    return (<EventCard time={createTime(data.startDate,data.endDate)} description={data.description} event={data} nav={nav}/>)
}

export const Accordian = ({title,data,nav}) => {
    const [expanded, setExpanded] = useState(false);
    const toggleExpand = () => {
        setExpanded(!expanded);
    }
  
    return (<View key={title}><ScrollView>
            <TouchableOpacity style={styles.row} onPress={toggleExpand}>
            <Text style={styles.title}>{title}</Text>
            <Icon name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color='white' style={{position:'absolute', top: 10, right: 0}}/>
            </TouchableOpacity>    
            </ScrollView>
            <View style={styles.parentHr}/>
            {expanded && _renderCard(data,nav)}</View>)
}

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        color: 'yellow',
        fontFamily: 'OpenSans-Bold',
        margin: 10
    },
    row: {
        flexDirection: 'column',
        justifyContent:'space-between',
        height:56,
        width:'98%',
        marginLeft: 5,
        marginBottom: 2,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',
        backgroundColor: '#2ccbe0',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#2ccbe0'
    },
    card:{
        height: 180,
        width:'98%',
        marginLeft: 5,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#e0e0e0'
    },
    parentHr:{
        flex: 1,
        height:1,
        color: 'white',
        width:'100%'
    },
    child:{
        backgroundColor: 'gray',
        padding:16,
    },
    bottomBar:{
        flex:1,
        flexDirection: 'row',

    }
});

