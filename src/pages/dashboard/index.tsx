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
        <div className="flex w-100 gap-16 dahsboad-content">
            <div className="flex w-100 gap-16 direction-column">
                <div className="flex gap-16 w-100">
                    <Card className="w-60">chart</Card>
                    <Card className="w-40">AI suggestion</Card>
                </div>
                <div className="flex gap-16 w-100">
                    <Card className="w-25">create</Card>
                    <Card className="w-25">add</Card>
                    <Card className="w-25">new</Card>
                    <Card className="w-25">report</Card>
                </div>
                
            </div>
            <div className="flex gap-16 w-45 direction-column">
                <Card>overview</Card>
                <Card>status</Card>
            </div>
        </div>
        <div className="grid grid-3 gap-16 w-100 dahsboad-content">
            <Card className="w-100">create</Card>
            <Card className="w-100">add</Card>
            <Card className="ww-100">new</Card>
        </div>
        <div className="grid grid-4 gap-16 w-100 dahsboad-content">
            <Card className="w-100">create</Card>
            <Card className="w-100">add</Card>
            <Card className="ww-100">new</Card>
            <Card className="ww-100">new</Card>
        </div>
        
       </>
    )
}

export default Dashboard;
