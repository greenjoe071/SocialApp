import { useRoute, useNavigation } from '@react-navigation/native';

import user from '../../assets/data/user.json'
import ProfileHeader from './ProfileHeader'
import FeedGrid from '../../components/FeedGrid/FeedGrid';


const ProfileScreen = () => {
    const route = useRoute()
    const navigation = useNavigation()
    const userId = route.params?.userId
    
    
    return (
        <FeedGrid 
        data ={user.posts}
        ListHeaderComponent={ProfileHeader}/>
    );
};
export default ProfileScreen