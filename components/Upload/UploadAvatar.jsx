import React from "react";
import {profileAPI} from "../../api/api";
import s from "./UploadAvatar.module.css";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {setPhoto, updatePhotoThunk} from "../../redux/profile-reducer";
import Button from "@material-ui/core/Button";
import {Input} from "@material-ui/core";



class UploadAvatar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {file: '',imagePreviewUrl: ''};
    }

    _handleSubmit(e) {
        e.preventDefault();
        this.props.updatePhotoThunk(this.state.file)
        console.log('handle uploading-', this.state.file);
        if (this.state.file) {
            this.props.history.push("/profile")

        }

    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }
    render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} />);
        } else {
            $imagePreview = (<div>Пожалуйста выберете фотографию, которую хотите загрузить</div>);
        }

        return (
            <div className={s.previewComponent}>
                <div className={s.imgPreview}>
                    {$imagePreview}
                </div>
                <form onSubmit={(e)=>this._handleSubmit(e)}>
                    <Input variant="outlined"
                           type="file"
                           onChange={(e)=>this._handleImageChange(e)} />

                    <div><Button variant='contained'
                            type="submit"
                            onClick={(e)=>this._handleSubmit(e)}>Загрузить фотографию</Button></div>
                </form>

            </div>
        )
    }
}

export default compose(
    withAuthRedirect, withRouter,
    connect(null,{updatePhotoThunk}))(UploadAvatar);