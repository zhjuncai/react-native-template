import React from 'react';
import { StackNavigator } from 'react-navigation';
import MyNavScreen from '../common/MyNavScreen';

const CaldendarScreen = ({ navigation }) => (
  <MyNavScreen banner="All Calendars" navigation = {navigation}/>
);

const CalendarTab = StackNavigator({
  Calendar: {
    screen: CaldendarScreen,
    path: '/calendar',
    navigationOptions: () => ({
      title: 'Calendar'
    })
  }
});

export default CalendarTab;
