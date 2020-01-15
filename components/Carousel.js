import React, {Component} from 'react';
import {View,ScrollView,Image,StyleSheet,Dimensions } from 'react-native';

const {width} = Dimensions.get('window');
const height = width*0.8;

class Carousel extends Component {
    render (){
        const {images} = this.props;
        if(images && images.length){
             return (
                     <View style={this.props.containerStyle}>
                     <ScrollView
                 horizontal
                 pagingEnabled
                 showsHorizontalScrollIndicator={false}>
                     {images.map((image,i) =>( <Image style={styles.image} source={{uri: 'https://i.ytimg.com/vi/ZD2jfbYx0SQ/maxresdefault.jpg' }} key={i}/>))}
                 </ScrollView>
                     </View>
             );
        }
        console.log("please provide images");
        return null;
    }
 
}

const styles = StyleSheet.create({
    image:{
        width,
        height: 150,
        borderRadius: 5,
    },
});

export default Carousel;
