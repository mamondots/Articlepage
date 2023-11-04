
import { Outlet } from 'react-router-dom';
import DashBoardHead from '../DashBoard/DashBoardHead/DashBoardHead';

const DashBoardLayout = () => {
    return (
        <div>
            <DashBoardHead></DashBoardHead>
            <Outlet></Outlet>
        </div>
    );
};

export default DashBoardLayout;