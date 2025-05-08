import React, { useState } from "react";
import classes from "./ProfileInfo.module.css";
import Loader from "../../Loader/Loader";
import userPhoto from "../../../img/ava-empty.jpg";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import backgroundImage from "../../../img/React.jpg";

const ProfileInfo = (props) => {
    const [isImageModalOpen, setIsImageModalOpen] = useState(false); // Стан для відкриття/закриття модалки
    const [currentImage, setCurrentImage] = useState(null); // Для збереження поточного зображення

    const openImageModal = (image) => {
        setCurrentImage(image);
        setIsImageModalOpen(true);
    };

    const closeImageModal = () => {
        setIsImageModalOpen(false);
        setCurrentImage(null);
    };

    if (!props.profile) {
        return <Loader />;
    }

    return (
        <div className={classes.content}>

            <div>
                <img
                    className={classes.headerImage}
                    src={backgroundImage}
                    alt="Header"
                />
            </div>

            <div className={classes.descriptionBlock}>
                <div
                    className={classes.avatarContainer}
                    onClick={() => openImageModal(props.profile.photos?.large || userPhoto)}
                >
                    <img
                        src={props.profile.photos?.large || userPhoto}
                        alt="Profile"
                        className={classes.avatar}
                    />
                </div>

                <div className={classes.userName}>
                    {props.profile.fullName || "User Name"}
                </div>
                <div className={classes.userDescription}>
                    <ProfileStatus
                        isOwner={props.isOwner}
                        status={props.status}
                        updateStatus={props.updateStatus}
                    />

                </div>
            </div>

            {isImageModalOpen && (
                <div className={classes.modal} onClick={closeImageModal}>
                    <img
                        src={currentImage}
                        alt="Profile"
                        className={classes.modalImage}
                    />
                </div>
            )}
        </div>
    );
};

export default ProfileInfo;
