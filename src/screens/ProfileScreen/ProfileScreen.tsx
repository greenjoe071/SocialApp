import { Image, FlatList } from 'react-native'

import user from '../../assets/data/user.json'
import ProfileHeader from './ProfileHeader'
import FeedGrid from '../../components/FeedGrid/FeedGrid';


const ProfileScreen = () => {
    return (
        <FeedGrid 
        data ={user.posts}
        ListHeaderComponent={ProfileHeader}/>
    );
};
export default ProfileScreen