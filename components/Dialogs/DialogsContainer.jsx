import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import s from './Dialogs.module.css';
import {profileAPI} from "../../api/api";
import UploadAvatar from "../Upload/UploadAvatar";





let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}
class DialogsContainer extends React.Component {
    render () {
        return <>

            <Dialogs dialogsPage={this.props.dialogsPage} />

        </>
    }
}
export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps))(DialogsContainer);

