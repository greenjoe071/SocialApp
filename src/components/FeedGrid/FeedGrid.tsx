import { View, Text, Image, FlatList } from 'react-native'
import { IPost } from '../../types/models'
import FeedGridItem from './FeedGridItem'


interface IFeedGrid {
    data: IPost[]
    ListHeaderComponent?: React.ComponentType<any> | React.ReactElement | null | undefined 
}

const FeedGrid = ({data, ListHeaderComponent}: IFeedGrid) => {
    return (
        <FlatList
            data={data}
            renderItem={ ({ item }) => <FeedGridItem post={item} /> }
            showsVerticalScrollIndicator={false}
            numColumns={3}
            ListHeaderComponent={ListHeaderComponent}
            style={{marginHorizontal: -1, }}
        />
    )
}

export default FeedGrid