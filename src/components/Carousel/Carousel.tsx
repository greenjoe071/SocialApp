import { View, 
  FlatList, 
  Image, 
  useWindowDimensions, 
  StyleSheet, Text, ViewabilityConfig, ViewToken } from 'react-native'
import { useState, useRef } from 'react';
import colors from '../../theme/colors';
import DoubleTap from '../doubleTap';

interface ICarousel {
    images: string[],
    onDoubleTap?: () => void;
}

const Carousel = ({images, onDoubleTap =()=>{}}: ICarousel) => {
    const {width} = useWindowDimensions()
    const [activeImageIndex, setActiveImageIndex] = useState(0)

    const viewabilityConfig: ViewabilityConfig = {
      itemVisiblePercentThreshold: 51
    }

    const onViewableItemsChanged = useRef(
      ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
        if (viewableItems.length > 0) {
          setActiveImageIndex(viewableItems[0].index || 0)
        }
      }
    )

    return (
        <View>
            <FlatList
                onViewableItemsChanged={onViewableItemsChanged.current}
                viewabilityConfig={viewabilityConfig}
                snapToInterval={width}
                decelerationRate="fast"
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                data={images}
                renderItem={({ item }) => (
                    <DoubleTap onDoubleTap={onDoubleTap}>
                        <Image source={{ uri: item }} style={[styles.image, { width }]} />
                    </DoubleTap>
                )} />
                
                <View style={{flexDirection: 'row',
                width: '100%', 
                justifyContent: 'center', 
                position: 'absolute', 
                bottom: 1}}>
                 {images.map((_, index) => ( 
                 <View 
                 key={index}
                 style={{width: 6, 
                    aspectRatio: 1, 
                    borderRadius: 5,  
                    backgroundColor: activeImageIndex === index ? colors.blue : colors.white,
                    margin: 4}} />
                    ))}
                  <View />
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    image: {
      borderRadius: 14,
      aspectRatio: 1,
      borderColor: "grey",
      borderWidth: 2,
    },
    dots: {
      flexDirection: 'row',
      justifyContent: 'center',
  
      position: 'absolute',
      bottom: 0,
  
      width: '100%',
    },
    dot: {
      width: 5,
      height: 5,
      borderRadius: 5,
      backgroundColor: 'white',
      marginHorizontal: 3,
      margin: 10,
    },
  });

export default Carousel