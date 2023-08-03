import {FlatList, ViewabilityConfig, ViewToken } from 'react-native';
import { useState, useRef } from 'react';
import FeedPost from '../../components/FeedPost/FeedPost';
import posts from '../../assets/data/posts.json'

const HomeScreen = () => {

  const [activePostID, setActivePostID] = useState<string | null>(null)

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51
  }

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems.length > 0) {
        setActivePostID(viewableItems[0].item.id)
      }
    }
  )

  return (
      <FlatList
        data={posts}
        renderItem={({ item }) => <FeedPost post={item} isVisible={activePostID === item.id}/>}
        showsVerticalScrollIndicator={false}
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={onViewableItemsChanged.current}
      />
  );
};

export default HomeScreen ;
