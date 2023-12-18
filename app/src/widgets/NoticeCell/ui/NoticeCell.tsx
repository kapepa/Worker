import {FC, memo, useMemo} from "react";
import "./NoticeCell.scss"
import {ClassNames} from "../../../shared/lib/ClassNames";
import {NoticeTypes} from "../../../features/Notice";
import {Flex} from "../../../shared/ui/Flex/Flex";
import {Text, TextAlign, TextSize, TextTheme} from "../../../shared/ui/Text/Text";
import AppLink from "../../../shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";
import {Skeleton} from "../../../shared/ui/Skeleton/Skeleton";
import {SkeletonShape} from "../../../shared/const/SkeletonShape";

interface NoticeCellProps{
  className?: string,
  skeleton?: boolean,
  cell?: NoticeTypes,
}

const NoticeCell: FC<NoticeCellProps> = memo((props) => {
  const { t } = useTranslation();
  const { className, skeleton, cell } = props;

  const innerView = useMemo(() => {
    if(skeleton || !cell) {
      return (
        <>
          <Skeleton className="notice-skeleton__title" shape={SkeletonShape.Square}/>
          <Skeleton className="notice-skeleton__text" shape={SkeletonShape.Square}/>
          <Skeleton className="notice-skeleton__link" shape={SkeletonShape.Square}/>
        </>
      )
    }

    return (
      <>
        <Text title={cell?.title} theme={TextTheme.PRIMARY} size={TextSize.M} align={TextAlign.CENTER} />
        <Text text={cell?.description} theme={TextTheme.PRIMARY} size={TextSize.S}/>
        {!!cell?.href && <AppLink className="notice-cell__link" to={cell.href}>{t("read-more")}</AppLink>}
      </>
    )
  }, [t, skeleton, cell])

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      gap={8}
      className={ClassNames("notice-cell", className)}
    >
      {innerView}
    </Flex>
  )
})

export {NoticeCell}