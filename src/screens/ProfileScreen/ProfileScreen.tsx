import { useRoute, useNavigation } from '@react-navigation/native';

import user from '../../assets/data/user.json'
import ProfileHeader from './ProfileHeader'
import FeedGrid from '../../components/FeedGrid/FeedGrid';

import { UserProfileNavigationProp, 
    UserProfileRouteProp,
    MyProfileNavigationProp,
    MyProfileRouteProp } from '../../Navigation/types';


const ProfileScreen = () => {
    const route = useRoute<UserProfileRouteProp | MyProfileRouteProp>()
    const navigation = useNavigation<
    UserProfileNavigationProp | MyProfileNavigationProp>()
    const userId = route.params?.userId
    
    
    return (
        <FeedGrid 
        data ={user.posts}
        ListHeaderComponent={ProfileHeader}/>
    );
};
export default ProfileScreen