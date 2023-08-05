import "./Home.scss";
import {useTranslation} from "react-i18next";

function Home() {
  const { t } = useTranslation("home");

  return (
    <div className="home" data-testid="home">
      {t("home page")}
    </div>
  )
}

export default Home;