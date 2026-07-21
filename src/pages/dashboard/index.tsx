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
        <div className="hero">
          <Typography className={"h1"} > {t("hi-nasrin")}  {t("dashboard")}</Typography>
          <Typography className={"h2"} > hi h2</Typography>
          <Typography className={"body"} > hi body</Typography>
          <Typography className={"caption"} > hi caption</Typography>
        </div>
        <div>          
        </div>
        <Card >
          Hi cardS
        </Card>
        </>
    )
}

export default Dashboard;
