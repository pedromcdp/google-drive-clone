import React from 'react'
import '../../styles/Sidebar.css'
import NewFile from './NewFile'
import SidebarItem from './SidebarItem'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import StorageIcon from '@material-ui/icons/Storage';

const index = () => {
    return (
        <div className="sideBar">
            <NewFile/>
            <div className="sideBar__itemsContainer">
                 <SidebarItem arrow icon={(<InsertDriveFileIcon/>)} label={'Meu Drive'}/>
                 <SidebarItem arrow icon={(<ImportantDevicesIcon/>)} label={'Computadores'}/>
                 <SidebarItem icon={(<PeopleAltIcon/>)} label={'Compartilhados comigo'}/>
                 <SidebarItem icon={(<QueryBuilderIcon/>)} label={'Recentes'}/>
                 <SidebarItem icon={(<StarBorderIcon/>)} label={'Com estrelas'}/>
                 <SidebarItem icon={(<DeleteOutlineIcon/>)} label={'Lixeira'}/>
                 <hr/>
                 <SidebarItem icon={(<StorageIcon/>)} label={'Armazenamento'}/>
            </div>
        </div>
    )
}

export default index
