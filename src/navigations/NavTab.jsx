import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import NavStack from './NavStack';
import Favorites from '../screens/Favorites';

const Tab = createBottomTabNavigator();

const NavTab = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name='Home'
        component={NavStack}
        options={{ title: 'Inicio' }}
      />

      <Tab.Screen
        name='Favorites'
        component={Favorites}
        options={{ title: 'Favoritos' }}
      />
    </Tab.Navigator>
  );
};

export default NavTab;
