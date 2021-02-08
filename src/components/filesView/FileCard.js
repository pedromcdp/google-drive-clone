import React from 'react'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import '../../styles/FileCard.css'

const FileCard = ({name, fileUrl}) => {
    return (
        <div className="fileCard">
            <a href={fileUrl} target="_blank" download>
                <div className="fileCard--top">
                    <InsertDriveFileIcon style={{fontSize: 130}}/>
                </div>
                <div className="fileCard--bottom">
                    <p>{name}</p>
                </div>
            </a>
        </div>
    )
}

export default FileCard
