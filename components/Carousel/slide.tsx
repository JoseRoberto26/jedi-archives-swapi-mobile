import React from 'react';
import { Dimensions, Image, Text, View } from 'react-native';

interface ISlideProps { 
    data: string;
}

const Slide = ( {data}: ISlideProps) => { 
    const { width: windowWidth } = Dimensions.get("window");
    return ( 
        <View
            style={{
            width: windowWidth,
            justifyContent: "center",
            alignItems: "center",
            }}
        >
      <Image
        source={{ uri: data }}
        style={{ width: windowWidth * 0.8, 
          height: 269, 
          resizeMode: 'stretch', 
          borderWidth: 2, 
          borderColor: '#ecfcfd',
          borderRadius: 10}}
      ></Image>
    </View>
    )
}

export default Slide;