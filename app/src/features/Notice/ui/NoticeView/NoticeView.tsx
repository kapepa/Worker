import {FC, memo, useCallback, useMemo} from "react";
import "./NoticeView.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {PopoverBox} from "../../../../widgets/PopoverBox";
import IcoImg, {IcoImgColor} from "../../../../shared/ui/IcoImg/IcoImg";
import {NoticeCell} from "../../../../widgets/NoticeCell";
import {useDispatch, useSelector} from "react-redux";
import {GetNotice} from "../../selectors/GetNotice/GetNotice";
import {AppDispatch} from "../../../../app/providers/Store/config/store";
import {FetchNotices} from "../../model/services/FetchNotices/FetchNotices";
import {Text, TextTheme} from "../../../../shared/ui/Text/Text";
import {useTranslation} from "react-i18next";
// import {useGetNotificationsQuery} from "../../../../shared/api/notice.api";

interface NoticeViewProps {
  className?: string,
  classBtn?: string,
}

const NoticeView: FC<NoticeViewProps> = memo((props) => {
  const dispatch = useDispatch<AppDispatch>();
  const {t} = useTranslation("notice");
  const {ids, loading, entities, error} = useSelector(GetNotice);
  const {className, classBtn} = props;
  // const {data} = useGetNotificationsQuery(null, {pollingInterval: 5000});

  const fetchNotices = useCallback(() => {
    dispatch(FetchNotices());
  }, [dispatch]);

  const isError = useMemo(() => {
    return <Text theme={TextTheme.ERROR} title={t(`error.${error}`)}/>
  }, [t, error]);

  const isEmpty = useMemo(() => {
    return <Text theme={TextTheme.PRIMARY} title={t("list-empty")}/>
  },[t]);

  const listSkeleton = useMemo(() => {
    return Array(3).fill("").map((_: string, index: number) => {
      return <NoticeCell key={`notice-skeleton-${index}`} skeleton={true}/>
    })
  }, []);

  const listNotice = useMemo(() => {
    return ids.map((id: string, index: number) =>
      <NoticeCell key={`${id}-${index}`} cell={entities[id]}/>
    )
  }, [ids, entities]);

  const currentView = useMemo(() => {
    if(!!error) return isError;
    if(loading) return listSkeleton;
    if(!ids.length) return isEmpty;
    return listNotice;
  },[ids.length, loading, error, isError, isEmpty, listSkeleton, listNotice]);

  return (
    <div className={ClassNames("notice-view", className)}>
      <PopoverBox
        onOpen={fetchNotices}
        classBtn={ClassNames(classBtn, "notice-view__btn")}
        innerBtn={
          <IcoImg className={"notice-view__ico"} ico="NotificationIco" color={IcoImgColor.PRIMARY_COLOR_INVERTED}/>
        }
        children={ currentView }
      />
    </div>
  )
});

export { NoticeView };