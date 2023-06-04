import { useEffect } from 'react';
import { View } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigation('home');
    }, 3000);
  }, []);

  return (
    <View
      style={{
        backgroundColor: '#FFC700',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{ color: '020202', fontSize: 32, fontFamily: 'Poppins-Medium' }}
      >
        HOTELSAVER
      </Text>
    </View>
  );
};

export default SplashScreen;
