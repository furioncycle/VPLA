import React,{useState, createContext} from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator,DrawerActions} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import {Home} from './Views/Home';
import {About} from './Views/About';
import {Events} from './Views/Events';
import {useFetchEvents,EventsContext, GlobalContext} from './components/fetchEvent';
import {SplashScreen} from './Views/SplashScreen';
import 'react-native-gesture-handler';
import {TouchableOpacity,Image} from 'react-native';
class customNav extends React.Component {
    toggleDrawer = () => {
        this.props.navigationProps.toggleDrawer();
    }

    render(){}
}


const myNavigator = createDrawerNavigator({
    Home: {screen: Home, navigationOptions: ({navigation}) => ({
        title: 'Home',
        drawerLabel: 'Home',
    })},
    About: {screen: About, navigationOptions: ({navigation}) => ({
        title: 'About', 
        drawerLabel: 'About',
    }),},
    Events: {screen: Events, navigationOptions: ({navigation}) => ({
        title: 'Events',
        drawerLabel: 'Events',
    }),},
})

const Navigation =  createStackNavigator({
    myNavigator: {screen: myNavigator,navigationOptions: ({ navigation }) => {
        const { state } = navigation;
        return {
            title: 'Va Por La Avienda',
            headerTitleStyle: {marginLeft: 50, color:'yellow', fontFamily: 'Pacifico-Regular' },
            headerStyle: {  
                backgroundColor: '#2ccbe0',
            },
            headerTintColor: 'white',
            headerLeft: ({titleStyle}) => (
                <TouchableOpacity onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer());}}>
                    <Image source={require('./assets/VPLA-2019-3D-Logo-1000px.png')} style={{width: 45, height: 45, marginLeft: 25}} />
                </TouchableOpacity>
            )
        }
    }
    }
});

const AppContext = createContext();
const AppContainer = createAppContainer(Navigation);

const App = () => {
    const [isLoading, setLoading] = useState(true);
    const {events,food,murals} = useFetchEvents(setLoading);
    const [modalVisibility, setModalVisibility] = useState(false);
    const [currentlySelectedEvent, setCurrentlySelectedEvent] = useState({});
    return (
        <EventsContext.Provider value={{events,food,murals}}>
        <GlobalContext.Provider value={{modalVisibility,setModalVisibility,currentlySelectedEvent,setCurrentlySelectedEvent}}>
            {isLoading && <SplashScreen/>}
        {!isLoading && <AppContainer/>}
        </GlobalContext.Provider>
            </EventsContext.Provider>
  );
};

export default App;
