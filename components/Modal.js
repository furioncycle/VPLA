import React,{useContext} from 'react';
import {View, StyleSheet,Text,TouchableOpacity,Dimensions} from 'react-native';
import Modal from 'react-native-modal';
import {GlobalContext} from './../components/fetchEvent';
import Carousel from './../components/Carousel';

const {height} = Dimensions.get('window');
const width = 0.8 * height;

const createStringTime = (date) => {
        var hour = date.getHours();
        var minute = date.getMinutes();
        var strTime = '' + ((hour>12) ? hour -12 : hour);
        if(hour == 0)
            strTime = '12';
        strTime += ((minute <10) ? ':0' : ':')+ minute;
        strTime += (hour >= 12) ? ' p.m.' : ' a.m.';
        return strTime;
    }
const images = [
    1,2,3,4,
] //Dummy values since no images yet

const renderCarousel = (eventType) => {
    if(eventType != 'Murals'){
        return null;
    }
    return (
        <Carousel images={images} containerStyle={styles.scrollcontainers}/>);
}

export const EventCard = () => {
    const {currentlySelectedEvent,modalVisibility,setModalVisibility} = useContext(GlobalContext);

    const renderModalContent = () => {
        return(
            <View style={styles.modalContent}>
                <TouchableOpacity onPress={()=>{setModalVisibility(!modalVisibility)}}>
                    <Text style={{fontSize:18, fontFamily: 'Roboto-Bold'}}>{currentlySelectedEvent.title}</Text>
                    <Text style={[styles.text,{fontFamily: 'OpenSans-Regular'}]}>{currentlySelectedEvent.address}</Text>{currentlySelectedEvent.type == 'Event' &&
                    <Text style={[styles.text,{fontFamily:'Roboto-Bold'}]}>{createStringTime(new Date(currentlySelectedEvent.startDate)) + '-' + createStringTime(new Date(currentlySelectedEvent.endDate))}</Text>}
                    <Text style={[styles.text,{fontFamily:'OpenSans-Regular'}]}>{currentlySelectedEvent.description}</Text></TouchableOpacity>
                {renderCarousel(currentlySelectedEvent.type)}
            </View>)
    };

    return (
        <View style={styles.bottomView}>
            <Modal
                visible={modalVisibility}
                style={styles.bottomView}
                onRequestClose={()=> console.log('closing')}>
                {renderModalContent()}</Modal>
        </View>);
} 

const styles = StyleSheet.create({
    bottomView: {
        justifyContent: 'flex-end',
        margin: 0,

    },
    modalContent: {
        height: '50%',
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    text:{
        fontSize: 18,
        marginTop: 2,
    },
    scrollcontainers:{
        height: 150,
        width,
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
});
