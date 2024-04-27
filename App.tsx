import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/navigations/TabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
