import { StatusBar } from 'expo-status-bar';
import Navigation from './navigation/index';
import useCachedResources from './hooks/useCachedResources';

export default function App() {

  const isLoaded= useCachedResources();

  if(isLoaded) {
    return (
      <>
       <Navigation />
      </>
     );
  } else {
    return null;
  }
}
