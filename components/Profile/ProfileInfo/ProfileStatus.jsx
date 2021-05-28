import React from 'react';
import s from './ProfileInfo.module.css';
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";

class ProfileStatus extends React.Component {

    userId = this.props.match.params.userId
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode =()=> {
        this.setState({
            editMode: true
        })

    }
    deactivateEditMode =()=> {
        this.setState({
            editMode: false
        })
        this.props.updateStatusThunk(this.state.status)

    }
    onStatusChange = (e) => {
        this.setState({
            status: e.target.value
        })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    render() {
       return ( <div>
           {!this.state.editMode && <span className={s.status} onClick={this.userId ? "" : this.activateEditMode}>{this.props.status || "нет статуса"}<br/></span>}
           {this.state.editMode && <div ><TextField variant="outlined" fullWidth={true} className={s.statusEdit}  onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/></div>}
        <br/>
       </div>
       )}
}


export default compose(withRouter) (ProfileStatus)