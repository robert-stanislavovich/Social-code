import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (

            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatusThunk={props.updateStatusThunk}
                paramsUserId={props.paramsUserId}
                setEditMode={props.setEditMode}
                profileDataEditMode={props.profileDataEditMode}
                setSuccess={props.setSuccess}
                editMode={props.editMode}
            />

    )
}

export default Profile;