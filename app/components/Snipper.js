
import { View, Text } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

function Snipper() {
    return (
      <View style={{ alignItems: 'center' , display:'flex' , justifyContent : "center"  }}>
      <Svg height="100%" width="100%">
        <Circle
          cx="10"
          cy="10"
          r="8"
          stroke="white"
          strokeWidth="2"
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray="90 60" // You can adjust the animation
          strokeDashoffset="0"
        />
      </Svg>
    </View>
    )
}

export default Snipper  