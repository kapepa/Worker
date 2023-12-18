import {FC, HTMLAttributes, memo, useLayoutEffect, useMemo, useState} from "react";
import "./PreLoaderAvatar.scss";
import {ClassNames} from "../../../shared/lib/ClassNames";
import {UsersTypes} from "../../../entities/Users";
import {Avatar} from "../../../shared/ui/Avatar/Avatar";
import {Skeleton} from "../../../shared/ui/Skeleton/Skeleton";
import {SkeletonShape} from "../../../shared/const/SkeletonShape";
import IcoImg, {IcoImgColor} from "../../../shared/ui/IcoImg/IcoImg";
import {Text, TextAlign, TextTheme} from "../../../shared/ui/Text/Text";
import {useTranslation} from "react-i18next";
import config from "../../../config";

interface PreLoaderAvatarProps extends HTMLAttributes<HTMLDivElement>{
  className?: string,
  url: UsersTypes['avatar'],
  api?: boolean | undefined,
  classImage?: string,
  size: number,
  alt: string | undefined,
  symbol: string | undefined,
}

export enum StateLoader {
  Default = "Default",
  Loading = "Loading",
  Error = "Error",
  Success = "Success",
}

type LoaderType = StateLoader.Default | StateLoader.Loading | StateLoader.Error | StateLoader.Success;

const PreLoaderAvatar: FC<PreLoaderAvatarProps> = memo((props) => {
  const {
    className,
    symbol,
    alt,
    api,
    size,
    url,
    ...otherProps
  } = props;
  const {t} = useTranslation()
  const [avatar, setAvatar] = useState<string | undefined>(undefined);
  const [loader, setLoader] = useState<LoaderType>(StateLoader.Default);

  useLayoutEffect(() => {
    if(url && typeof url === "string") {
      const image = new Image();
      const fullUrl = api ? `${config.api}/${url}` : url;
      setLoader(StateLoader.Loading);
      image.src = fullUrl;
      image.onload = () => {
        setLoader(StateLoader.Success);
        setAvatar(fullUrl);
      };
      image.onabort =  () => console.log("onabort")
      image.onerror = () => {
        setLoader(StateLoader.Error);
      }
    }
  }, [url, api])

  const haveAvatar = useMemo(() => {
    return <Avatar size={size} src={avatar} alt={alt} api={api} symbol={symbol} {...otherProps}/>
  }, [avatar, alt, api, otherProps, size, symbol])

  const isLoading = useMemo(() => {
    return (
      <Skeleton
        className={"pre-loader-avatar__circle"}
        shape={SkeletonShape.Circle}
      />
    )
  }, [])

  const isDefault = useMemo(() => {
    return (
      <IcoImg
        className={"pre-loader-avatar__circle"}
        color={IcoImgColor.PRIMARY_COLOR} ico={"UserIco"}
      />
    )
  }, [])

  const isError = useMemo(() => {
    return (
      <Text
        className={"pre-loader-avatar__circle"}
        theme={TextTheme.ERROR}
        title={t("error.avatar-loading")}
        align={TextAlign.CENTER}
      />
    )
  }, [t])

  const AvatarCondition = useMemo(() => {
    switch (loader) {
      case StateLoader.Default: return isDefault;
      case StateLoader.Error: return isError;
      case StateLoader.Success: return haveAvatar;
      case StateLoader.Loading: return isLoading;
    }
  }, [loader, isDefault, isError, haveAvatar, isLoading])

  return (
    <div className={ClassNames("pre-loader-avatar", className)}>
      {AvatarCondition}
    </div>
  )
});

export {PreLoaderAvatar};