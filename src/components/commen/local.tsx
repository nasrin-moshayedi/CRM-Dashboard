import { useTranslation } from "react-i18next";

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
      <button onClick={() => changeLanguage("en")}>
        English
      </button>

      <button onClick={() => changeLanguage("fa")}>
        فارسی
      </button>
    </div>
  );
}

export default LanguageSwitcher;