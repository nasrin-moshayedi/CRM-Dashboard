
import './App.css'
import { useTheme } from "./theme/ThemeProvider";
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './components/commen/local'
import Typography from './components/ui/Typography'
import Button from './components/ui/Button'
import Card from './components/ui/card'
import SideBar from './layouts/sidebar';
function App() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <div className='flex'>
    <SideBar />
      <section id="center">
        <div className="hero">
          <Typography className={"h1"} > {t("hi-nasrin")}  {t("dashboard")}</Typography>
                    <Typography className={"h2"} > hi h2</Typography>
          <Typography className={"body"} > hi body</Typography>
          <Typography className={"caption"} > hi caption</Typography>
        </div>
        <div>
        
          <LanguageSwitcher />
          <Typography>
            <Button onClick={toggleTheme} >
              {theme === "light" ? "🌙" : "☀️"}
            </Button>
            
          </Typography>
        </div>
        <Card >
          Hi cardS
        </Card>
      </section>
      
    </div>
  )
}

export default App
