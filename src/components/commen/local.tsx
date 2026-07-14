import { useTranslation } from "react-i18next";
import Button from "../ui/Button";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
const lang = localStorage.getItem("language") || "en";

  const changeLanguage = (lang: "en" | "fa") => {
    i18n.changeLanguage(lang);
      localStorage.setItem("language", lang);
        document.documentElement.lang = lang;
  document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  };


  return (
    <div>
      <Button onClick={() => changeLanguage("en")}>
                English
      </Button>
      <Button onClick={() => changeLanguage("fa")}>
                فارسی
      </Button>
    </div>
  );
}

export default LanguageSwitcher;