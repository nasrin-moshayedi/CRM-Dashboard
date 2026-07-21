import Typography from "../../components/ui/Typography";
import LanguageSwitcher from "../../components/commen/local";
import Button from "../../components/ui/Button";
import { useTranslation } from 'react-i18next'
import { useTheme } from "../../theme/ThemeProvider";
import Card from "../../components/ui/card";
import "./index.scss"
import Input from "../../components/ui/Input";
import { Bell, HelpCircle, Moon, Sun, TextAlignJustify } from 'lucide-react';
import Avator from "../../components/ui/Avator";

type DashboardProps = {
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  menu: boolean;
};

const Dashboard = ({setMenu, menu}: DashboardProps) => {
    
    const { theme, toggleTheme } = useTheme();
    const { t } = useTranslation();
    const lng = localStorage.getItem("language") || "en";
    const classCrad = () => {
        if(lng === "fa") {
            return "left"
        } else {
            return "right";
        }
    }
    const showCard = menu ? "not-show" : "show";
console.log(menu, "show")
    return(
        <>
        <div className="topbar">
            <div className={"hamberger-menu " + showCard}>
                <Typography className="h1">
                    N.
                </Typography>
                <TextAlignJustify onClick={() => setMenu((prev) => !prev)}/>
            </div>  
           <Input className={"searchInput " + classCrad}>
                Search
            </Input>
              
            <div>
            <Card>
                <Bell />
            </Card>
            <Card>
                <HelpCircle/>
            </Card>
            
            <Card>
                <Button onClick={toggleTheme} >
                   {theme === "light" ? <Moon/> : <Sun/>}
                </Button>  
            </Card>
            <Card>
                <LanguageSwitcher />
            </Card>
            <Avator >NM</Avator>
            </div>
        </div>
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
