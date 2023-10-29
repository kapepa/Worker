import "./Home.scss";
import {useTranslation} from "react-i18next";
import {Text, TextSize, TextTheme} from "../../../shared/ui/Text/Text";
import {ListBox} from "../../../widgets/ListBox";
import {ListBoxInt} from "../../../shared/interface/ListBoxInt";
import {useCallback} from "react";

function Home() {
  const { t } = useTranslation("home");
  const people: ListBoxInt[] = [
    { name: 'Durward Reynolds', unavailable: false },
    { name: 'Kenton Towne', unavailable: false },
    { name: 'Therese Wunsch', unavailable: false },
    { name: 'Benedict Kessler', unavailable: false },
    { name: 'Katelyn Rohan', unavailable: false },
  ];

  const changeListBox = useCallback((box: ListBoxInt) => {
    console.log(box)
  }, [])

  return (
    <div className="home" data-testid="home">
      <Text theme={TextTheme.PRIMARY} headerTag="h1" title={t("home page")} size={TextSize.XL}/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <ListBox list={people} defaultValue={people[0]} callback={changeListBox}/>
    </div>
  )
}

export default Home;