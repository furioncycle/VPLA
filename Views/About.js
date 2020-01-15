import React from 'react';
import {View, StyleSheet,Text, Image,Animated,Dimensions } from 'react-native';
import {createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

const {width, height} = Dimensions.get('window');

const Images = [
    {image: {uri: 'https://cakeheadloves.files.wordpress.com/2011/08/grey_cake_2.jpg'}, title: 'Va Por La Avienda'},
    {image: require('./../assets/VPLA-2019-3D-Logo-1000px.png'), title: 'Bell Arts'},
]

const bellArtsDescription = ["Established in 2006 in part by a gift from the Addison Family,  Bell Arts Factory is a non-profit, community-based organization that utilizes the arts as a means to deliver messages and encourage acts of greater good within our community.","The mural on our building commemorates a quote from Mahatma Gandhi, 'Be the change you wish to see in the world'.","Bell Arts Factory’s mission statement","To introduce, promote and benefit the arts as a vital element of community life. To accomplish this mission, the following goals will be pursued:","To provide opportunities and facilities for the creation and presentation of works of art;","To support multi-cultural arts education programs in collaboration with schools and other private agencies and individuals;"
,"To strengthen the arts as an essential part of the economy of Ventura, California;","To create arts and education programs that will heighten artistic awareness within the community and enrich the quality of life for all citizens of Ventura, California."];

const vplaDescriptions = ["Va Por La Avenida is series of free bilingual community events that celebrate the residents, artists, and businesses that make up Ventura Avenue. VPLA for short, these themed events are connected to the vibe of the neighborhood - creative, cultural, innovative, and sometimes quirky.","A typical Va Por La Avenida event will encourage walkable exploration of the community we call 'The Avenue'. Each event is tied to a theme and programming will be developed accordingly.","VPLA is designed to bring together the arts, business, and community in new and innovative ways.","An important part of the programming will be drawn directly from any who wishes to participate. More information on how to participate and submit proposal can be at the link for business (link) and artists (link).","Va Por La Avenida is a collaborative project between Bell Arts Factory and the Westside Community Development Corporation. It is funded in part through a Creative California Communities grant through the California Arts Council. It is also supported through Cultural Affairs grant funding by the City of Ventura."];

const IMAGE_HEIGHT = 200;

const renderDescription = (descriptions) => {
    const items = []; var i =0;
    descriptions.forEach((section) =>{
        items.push(
            <Text key={i} style={[styles.body]}>{section}</Text>);
        i = i + 1;
    });
    return items;
};

const Vpla = () => {
    scrollAnimatedValue = new Animated.Value(0);
    return (<View style={styles.MainContainer}><Animated.Image source={Images[1].image} style={[styles.image,{transform: [{translateY: scrollAnimatedValue.interpolate({ inputRange: [-IMAGE_HEIGHT, 0, IMAGE_HEIGHT], outputRange: [IMAGE_HEIGHT/2,0,-IMAGE_HEIGHT/2],extrapolateRight: 'clamp',})},{scale: scrollAnimatedValue.interpolate({inputRange:[-IMAGE_HEIGHT,0],outputRange:[2,1],extrapolateRight:'clamp',})},],}]}/>
    <Animated.ScrollView
        onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollAnimatedValue}}}],{useNativeDriver: true,},)}
        contentContainerStyle={styles.scrollViewContentContainer}
        scrollEventThrottle={8}>
        <View style={{height: (height*2.5+240),width: width-20, marginTop: 0, marginLeft: 10, marginRight: 10, backgroundColor: 'white'}}>
            {renderDescription(vplaDescriptions)}</View>
    </Animated.ScrollView>
    </View>);
}

const BellArts = () => {
    scrollAnimatedValue = new Animated.Value(0);
    return (<View style={styles.MainContainer}>
        <Animated.Image source={Images[1].image} style={[styles.image,{transform: [{translateY: scrollAnimatedValue.interpolate({ inputRange: [-IMAGE_HEIGHT, 0, IMAGE_HEIGHT], outputRange: [IMAGE_HEIGHT/2,0,-IMAGE_HEIGHT/2],extrapolateRight: 'clamp',})},{scale: scrollAnimatedValue.interpolate({inputRange:[-IMAGE_HEIGHT,0],outputRange:[2,1],extrapolateRight:'clamp',})},],}]}/>
        <Animated.ScrollView
            onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollAnimatedValue}}}],{useNativeDriver: true,},)}
            contentContainerStyle={styles.scrollViewContentContainer}
            scrollEventThrottle={8}>
            <View style={{height: (height*2.5+160), width: width-20,margin: 10, backgroundColor: 'white'}}>
                {renderDescription(bellArtsDescription)}</View>
        </Animated.ScrollView>
    </View>)
}

export const About = createAppContainer(createMaterialTopTabNavigator(
    {
        VPLA: {screen: Vpla},
        BELLARTS: {screen: BellArts},
    },
    { tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#2ccbe0',
            inactiveTintColor: 'black',
            style: {backgroundColor: 'white'},
            indicatorStyle: {borderBottomColor: 'magenta', borderBottomWidth: 2},
        },
    },
  )
);

const styles = StyleSheet.create({
    MainContainer: {
        flex:1,
    },
    title:{
        backgroundColor: 'transparent',
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        fontFamily: 'Roboto-Bold',
    },
    body:{
        fontFamily: 'OpenSans-Regular',
        textAlign: 'left',
        marginLeft: 15,
        marginTop: 10,
        fontSize: 25
    },
    image:{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: IMAGE_HEIGHT,
        alignSelf: 'center',
    },
    scrollViewContentContainer:{
        marginTop: IMAGE_HEIGHT,
        backgroundColor: '#2ccbe0',
        paddingTop: 10,
    }
});

