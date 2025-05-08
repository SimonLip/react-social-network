import React, { useState, useEffect } from "react";

const ProfileStatus = ({ status: propStatus, updateStatus, isOwner }) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(propStatus);

    useEffect(() => {
        setStatus(propStatus);
    }, [propStatus]);

    const activateEditMode = () => {
        if (isOwner) {
            setEditMode(true);
        }
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        updateStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            deactivateEditMode();
        }
    };

    return (
        <div>
            {!editMode ? (
                <div>
                    <span onDoubleClick={activateEditMode}>
                        {status || "No status"}
                    </span>
                </div>
            ) : (
                <div>
                    <input
                        autoFocus
                        onBlur={deactivateEditMode}
                        onChange={onStatusChange}
                        value={status}
                        onKeyDown={handleKeyPress}
                    />
                </div>
            )}
        </div>
    );
};

export default ProfileStatus;
