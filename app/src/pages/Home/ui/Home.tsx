import "./Home.scss";
import {useTranslation} from "react-i18next";
import {Text, TextSize, TextTheme} from "../../../shared/ui/Text/Text";

function Home() {
  const { t } = useTranslation("home");

  return (
    <div className="home" data-testid="home">
      <Text theme={TextTheme.PRIMARY} headerTag="h1" title={t("home page")} size={TextSize.XL}/>
    </div>
  )
}

export default Home;