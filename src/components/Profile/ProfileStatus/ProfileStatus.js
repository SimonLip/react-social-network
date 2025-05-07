import React, { useState } from "react";

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
    };

    const onStatusChange = (e) => {
        setStatus(e.target.value);
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
                    />
                </div>
            )}
        </div>
    );
};

export default ProfileStatus;
