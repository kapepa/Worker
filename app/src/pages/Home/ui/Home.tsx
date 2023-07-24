import "./Home.scss";
import Panel from "../../../widgets/Panel";
import Sidebar from "../../../widgets/Sidebar";
import {useTranslation} from "react-i18next";
// import {Counter} from "../../../entities/Counter";

function Home() {
  const { t } = useTranslation("home");

  return (
    <div className="home" data-testid="home">
      <Panel/>
      <div className="content-page">
        <Sidebar className=""/>
        <main className="content-main home__main">
          {t("home page")}
          {/*<Counter/>*/}
        </main>
      </div>
    </div>
  )
}

export default Home;