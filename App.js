import { StatusBar } from 'expo-status-bar';
import {} from 'react-native';
import WelcomeScrean from './app/screen/WelcomeScreen';
import Search from './app/search/Search';
import Wallpapers from './app/wallpapers/Wallpapers';

export default function App() {

  return (
    <WelcomeScrean />,
    <Wallpapers />
  );
}
 