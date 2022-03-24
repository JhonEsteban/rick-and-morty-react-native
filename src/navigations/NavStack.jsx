import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Characters from '../screens/Characters';
import CharacterDetails from '../screens/CharacterDetails';

const Stack = createNativeStackNavigator();

const NavStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Characters'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='Characters' component={Characters} />
      <Stack.Screen name='CharacterDetails' component={CharacterDetails} />
    </Stack.Navigator>
  );
};

export default NavStack;
