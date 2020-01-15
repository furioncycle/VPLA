import React ,{useContext} from 'react';
import {View, Text, StyleSheet,Dimensions} from 'react-native';
import Carousel from './../components/Carousel.js';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {GlobalContext,ResetContext} from './../components/fetchEvent';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const height = deviceWidth * 0.8;



export const EventCard = ({time,description,event,nav,expanded}) => {
    const {setCurrentlySelectedEvent,setModalVisibility} = useContext(GlobalContext);
    const showMap = (event) => { nav.navigate('Home'); setCurrentlySelectedEvent(event); setModalVisibility(true);}

    const _renderCarousel = () => {
        const images = [
            1,2,3,4,
        ]
        return(
            <Carousel images={images} containerStyle={styles.scrollcontainers}/>
        );
    }

    const renderCard = (time,description,event) => {
        if(event.type == 'Murals'){
            const description = 'Mural by '+event.artist+' for '+event.org;
            return (
                    <View style={styles.card}> 
                    {_renderCarousel()}
                    <Text style={[styles.fonts,{fontSize: 18, marginTop: 55, position:'absolute', top:100, left: 20}]}>{description}</Text>
                    <View style={{position: 'absolute', bottom: 10, left: 10}}>
                        <Text style={[styles.fontBold,{fontSize: 18}]}>{time}</Text></View>
                    <View style={{position:'absolute', bottom: 5, right: 10}}>
                        <Icon.Button name='map' backgroundColor='#2ccbe0' onPress={() => showMap(event)}>
                            <Text style={[styles.fonts,{fontSize: 15, color:'white'}]}>Map</Text>
                        </Icon.Button></View>
                    <View style={{position:'absolute', bottom: 5, left: 10}}>
                        <Icon.Button name='camera' backgroundColor='#2ccbe0' onPress={() => console.log('TO DO AR')}>
                            <Text style={[styles.fonts,{fontSize: 15, color:'white'}]}>Augmented Reality</Text>
                        </Icon.Button></View>
                    </View>
                   )
        }else if(event.type == 'Food'){
            return (
                    <View style={[styles.card,]}>  
                    <Text style={[styles.fonts,{fontSize: 18, marginTop: 10, position:'absolute', top:10, left: 20}]}>{description}</Text>
                    <View style={{position: 'absolute', bottom: 10, left: 10}}>
                        <Text style={[styles.fontBold,{fontSize: 18}]}>{time}</Text></View><View style={{position:'absolute', bottom: 5, right: 10}}>
                            <Icon.Button name='map' backgroundColor='#2ccbe0' onPress={()=> showMap(event)}>
                                <Text style={[styles.fonts,{fontSize: 15, color:'white'}]}>Map</Text>
                            </Icon.Button></View>
                    </View>
            )
        }else{
            return (
                    <View style={[styles.card,]}> 
                    <Text style={[styles.fonts,{fontSize: 18, marginTop: 10, position:'absolute', top:10, left: 20}]}>{description}</Text>
                    <View style={{position: 'absolute', bottom: 10, left: 10}}>
                        <Text style={[styles.fontBold,{fontSize: 18}]}>{time}</Text></View><View style={{position:'absolute', bottom: 5, right: 10}}>
                            <Icon.Button name='map' backgroundColor='#2ccbe0' onPress={()=>showMap(event)}>
                            <Text style={[styles.fonts,{fontSize: 15, color:'white'}]}>Map</Text>
                            </Icon.Button></View>
                    </View>
            )
        }
    }
        if(expanded){
            return(<View>{renderCard(time,description,event)}</View>)
        }else{return null;}
}

const styles = StyleSheet.create({
    scrollcontainers:{
        height: 200,
        width: deviceWidth - 10,
        position: 'absolute',
        top: 0,
        left: 0,
    },
    card:{
        height: 300,
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
    fonts:{
        fontFamily: "OpenSans-Regular"
    },
    fontBold: {
        fontFamily: "Roboto-Bold"
    }
}); 
