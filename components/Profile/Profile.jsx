import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatusThunk={props.updateStatusThunk}
                paramsUserId={props.paramsUserId}
                setEditMode={props.setEditMode}
                profileDataEditMode={props.profileDataEditMode}
                setSuccess={props.setSuccess}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;