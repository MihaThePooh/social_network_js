import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img className={s.avaWallpaper} src="#.jpg"/>*/}
            {/*</div>*/}
            <div className={s.discriptionBlock}>
                <img src={props.profile.photos.large} />
                <br></br>
                    <label>aboutMe: {props.profile.aboutMe}</label>
                <br></br>
                    <label>fullName: {props.profile.fullName}</label>
                <br></br>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo