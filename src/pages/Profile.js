import SideBar from '../components/sideBar'
import SectionHeader from '../components/SectionHeader'
import  EditProfile from '../components/EditProfile'
import  Achievements from '../components/achievements/'

export default function Profile(props) {
    return(
        // <SideBar className='profile' style={{maxWidth: '100%'}}>
            <div className='userProfile'>
                <SectionHeader title='User Profile' subtitle='Hi John, welcome yo tour profile'></SectionHeader>
                <div className='main'>
                    <EditProfile></EditProfile>
                    <Achievements></Achievements>
                </div>
            </div>
        // </SideBar>
    )
}