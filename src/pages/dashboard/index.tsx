import Typography from "../../components/ui/Typography";
import LanguageSwitcher from "../../components/commen/local";
import Button from "../../components/ui/Button";
import { useTranslation } from 'react-i18next'
import { useTheme } from "../../theme/ThemeProvider";
import Card from "../../components/ui/card";
import "./index.scss"
const Dashboard = () => {
      const { theme, toggleTheme } = useTheme();
      const { t } = useTranslation();
    return(
        <>
        <div className="topbar">
            <Card className="cardTop">
                Search
            </Card>
            <div>
            <Card>
                n
            </Card>
            <Card>
                ?
            </Card>
            
            <Card>
                <Button onClick={toggleTheme} >
                   {theme === "light" ? "🌙" : "☀️"}
                </Button>  
            </Card>
            <Card>
                <LanguageSwitcher />
            </Card>
            <Card>
                A
            </Card>
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
