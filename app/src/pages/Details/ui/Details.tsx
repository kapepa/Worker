import {FC, memo, useCallback, useEffect} from "react";
import "./Details.scss";
import {RouterPath} from "../../../shared/const/Routers";
import {useDispatch, useSelector} from "react-redux";
import {GetUsers} from "../../../entities/Users";
import {useNavigate, useParams} from "react-router-dom";
import {ArticleDetails, FetchArticleById} from "../../../entities/Article";
import {AppDispatch} from "../../../app/providers/Store/config/store";
import {GetArticleDetails} from "../../../entities/Article/selectors/GetArticleDetails/GetArticleDetails";
import {Text, TextAlign, TextTheme} from "../../../shared/ui/Text/Text";
import {useTranslation} from "react-i18next";
import {Skeleton} from "../../../shared/ui/Skeleton/Skeleton";
import {SkeletonShape} from "../../../shared/const/SkeletonShape";
import {Scroll} from "../../../shared/ui/Scroll/Scroll";
import {FetchCommentsArtById} from "../../../entities/Comments";
import {FetchCommentsQuery} from "../../../entities/Comments/services/FetchCommentsArtById/FetchCommentsArtById";
import Button, {ThemeButtonEnum} from "../../../shared/ui/Button/Button";

const Details: FC = memo(() => {
  const { t } = useTranslation("details")
  const { profile } = useSelector(GetUsers);
  const { loading, error, data } = useSelector(GetArticleDetails);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const params = useParams();

  const toArticle = useCallback(() => {
    navigate(RouterPath.ARTICLE);
  },[navigate])

  useEffect(() => {
    if(!profile?.id && !loading) navigate(RouterPath.HOME);
  }, [profile, loading, navigate]);

  useEffect(() => {
    if(params.id) {
      dispatch(FetchArticleById(params.id));
      dispatch(FetchCommentsArtById({ artId: params.id, query: { take: FetchCommentsQuery.Take, skip: FetchCommentsQuery.Skip } }));
    }
  }, [dispatch, params])

  if(loading) {
    return (
      <Scroll>
        <div className="details--skeleton">
          <div>
            <Button onClick={toArticle} theme={ThemeButtonEnum.OUTLINE}>{t("back-to-list")}</Button>
          </div>
          <Skeleton className="details__avatar" shape={SkeletonShape.Circle}/>
          <Skeleton className="details__title" shape={SkeletonShape.Square}/>
          <Skeleton className="details__subtitle" shape={SkeletonShape.Square}/>
          <Skeleton className="details__content" shape={SkeletonShape.Square}/>
        </div>
      </Scroll>
    )
  }

  if(!!error) {
    return (
      <div className="details---error">
        <Text
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
          title={t("error-details")}
        />
      </div>
    )
  }

  return (
    <Scroll>
      <div className="details" data-testid="details">
        <Button onClick={toArticle} theme={ThemeButtonEnum.OUTLINE}>{t("back-to-list")}</Button>
        {!!data && <ArticleDetails date={data}/>}
      </div>
    </Scroll>
  )
})

export {Details};