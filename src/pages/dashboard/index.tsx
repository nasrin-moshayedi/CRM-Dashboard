import Typography from "../../components/ui/Typography";
import { useTranslation } from 'react-i18next'
import Card from "../../components/ui/card";
import "./index.scss"
import Header from "../../layouts/Header";

type DashboardProps = {
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  menu: boolean;
};

const Dashboard = ({setMenu, menu}: DashboardProps) => { 
    const { t } = useTranslation();

    return(
        <>
        <Header menu={menu} setMenu={setMenu} />
       </>
    )
}

export default Dashboard;
