import {FC, memo, useCallback, useEffect} from "react";
import "./SwitchView.scss";
import {ClassNames} from "../../../shared/lib/ClassNames";
import IcoImg from "../../../shared/ui/IcoImg/IcoImg";
import {useDispatch, useSelector} from "react-redux";
import {ArticlesActions, GetArticlesView} from "../../../entities/Article";
import {ArticlesView} from "../../../shared/const/ArticlesView";
import {AppDispatch} from "../../../app/providers/Store/config/store";
import {LOCAL_VIEW_KEY} from "../var/LocalViewKey";

interface SwitchViewProps {
  className?: string
}

const GetTokenStorage = window.localStorage.getItem(LOCAL_VIEW_KEY);

const SwitchView: FC<SwitchViewProps> = memo(({className}) => {
  const { changeView } = ArticlesActions;
  const dispatch = useDispatch<AppDispatch>();
  const getView = useSelector(GetArticlesView);

  const onChangeView = useCallback((view: ArticlesView) => {
    dispatch(changeView(view));
    window.localStorage.setItem(LOCAL_VIEW_KEY, view);
  },[changeView, dispatch]);

  const preLoaderView = useCallback(() => {
    switch (GetTokenStorage) {
      case ArticlesView.Block: onChangeView(ArticlesView.Block); break;
      case ArticlesView.Square: onChangeView(ArticlesView.Square); break;
      default: onChangeView(ArticlesView.Block); break;
    }
  }, [onChangeView])

  useEffect(() => {
    preLoaderView();
  }, [preLoaderView]);

  return (
    <div className={ClassNames("switch-view", className)} data-testid="switch-view">
      <button className="switch-view__btn" onClick={() => onChangeView(ArticlesView.Block)} title={ArticlesView.Block}>
        <IcoImg className={ClassNames("switch-view__ico", {"switch-view__ico--active": getView === ArticlesView.Block})} ico="ListIco"/>
      </button>
      <button className="switch-view__btn" onClick={() => onChangeView(ArticlesView.Square)} title={ArticlesView.Square}>
        <IcoImg className={ClassNames("switch-view__ico", {"switch-view__ico--active": getView === ArticlesView.Square})} ico="TiledIco"/>
      </button>
    </div>
  )
});

export { SwitchView };