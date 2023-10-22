import {FC, memo, useMemo} from "react";
import "./ArticleHeader.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import Button, {ThemeButtonEnum} from "../../../../shared/ui/Button/Button";
import AppLink from "../../../../shared/ui/AppLink/AppLink";
import {RouterPath} from "../../../../shared/const/Routers";
import {useSelector} from "react-redux";
import {GetUsersProfile} from "../../../Users";
import {GetArticleDetailsData} from "../../selectors/GetArticleDetailsData/GetArticleDetailsData";
import {useTranslation} from "react-i18next";

interface ArticleHeaderProps {
  className?: string,
  toBack: () => void;
}

const ArticleHeader: FC<ArticleHeaderProps> = memo(({className, toBack}) => {
  const { t } = useTranslation("details")
  const profile = useSelector(GetUsersProfile);
  const data = useSelector(GetArticleDetailsData);

  const isEdit: boolean = useMemo<boolean>(() => {
    return profile?.id === data?.users?.id;
  }, [profile?.id, data?.users?.id]);

  return (
    <div className={ClassNames("article-header", className)}>
      <Button onClick={toBack} theme={ThemeButtonEnum.OUTLINE}>{t("back-to-list")}</Button>
      {
        isEdit &&
        <AppLink to={`${RouterPath.ARTICLE_EDIT}/${data?.id}`}>
          <Button theme={ThemeButtonEnum.OUTLINE}>{t("edit")}</Button>
        </AppLink>
      }
    </div>
  )
})

export {ArticleHeader}