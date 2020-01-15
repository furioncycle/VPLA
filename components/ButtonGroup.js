import React,{Component, useEffect} from 'react';
import {ButtonGroup,Icon} from 'react-native-elements';
import {View,Text,Image} from 'react-native';
import {LocContext} from './fetchEvent';

const component1 = () => <View><Icon name='food' type='material-community' color='yellow'/><Text style={{fontFamily: 'Oswald-SemiBold', color: 'white'}}>Food</Text></View>


const component2 = () => <View><Icon name='palette' type='material-community' color='yellow'/><Text style={{fontFamily: 'Oswald-SemiBold', color: 'white'}}>Murals</Text></View>

const component3 = () => <View><Image style={{width: 30, height: 30,marginLeft: 6}} source={require('./../assets/VPLA-2019-3D-Logo-1000px.png')}/><Text style={{fontFamily: 'Oswald-SemiBold', color:'white'}}>Events</Text></View>

class ButtonGrp extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedIndex: 2,
        }
        this.updateIndex = this.updateIndex.bind(this);
    }

    updateIndex(selectedIndex) {
        this.setState({selectedIndex});
        if(selectedIndex == 1){
            this.props.setEventType('Murals');
        }else if(selectedIndex == 2){
            this.props.setEventType('Events');
        }else{
            this.props.setEventType('Food');
        }
    }
   
    render() {
        const buttons = [{element: component1},{element: component2},{element: component3}]
        const {selectedIndex} = this.state;
        return (
            <View style={{position:'absolute', bottom: -5, left: -10, width: '100%',}}>
                <ButtonGroup onPress={this.updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{height:55, width: '100%', backgroundColor: '#2ccbe0', borderColor: '#2ccbe0'}}
        selectedButtonStyle={{backgroundColor: '#db0082', borderColor: '#db0082'}}
        containerBorderRadius={0}/></View>
        );}
}

export default ButtonGrp;
