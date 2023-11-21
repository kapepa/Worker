import {ChangeEvent, FC, memo, useCallback, useMemo, useState} from "react";
import "./RatingCard.scss";
import {RatingStars} from "../../../../widgets/RatingStars";
import {Flex} from "../../../../shared/ui/Flex/Flex";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {Text, TextAlign, TextTheme} from "../../../../shared/ui/Text/Text";
import Modal from "../../../../shared/ui/Modal/Modal";
import {useTranslation} from "react-i18next";
import {Textarea} from "../../../../shared/ui/Textarea/Textarea";
import {BgEnum} from "../../../../shared/const/BgEnum";
import Button, {ThemeButtonEnum} from "../../../../shared/ui/Button/Button";
import {BrowserView, MobileView} from "react-device-detect";
import {Drawer} from "../../../../widgets/Drawer";

export type RatingType = {stars?: number, text?: string}

interface RatingCardProps {
  className?: string,
  title?: string,
  isFill?: number,
  callback?: (data: RatingType) => void;
}

const RatingCard: FC<RatingCardProps> = memo((props) => {
  const {className, title, isFill, callback} = props;
  const {t} = useTranslation("rating");
  const [rating, setRating] = useState<RatingType>({});
  const [openModal, setOpenModal] = useState<boolean>(false);

  const hasTitle = useMemo(
    () => <Text
      theme={TextTheme.PRIMARY}
      title={title}
    />,
    [title]
  )

  const onChangeStars = useCallback((stars: number) => {
    setRating(prev => ({...prev, stars}));
    setOpenModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setOpenModal(false);
  }, []);

  const onChangeText = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const target = e.currentTarget;
    setRating({...rating, text: target.value});
  }, [rating]);

  const onSendRating = useCallback(() => {
    if(callback) callback(rating);
    onCloseModal();
  },[rating, callback, onCloseModal])

  const onCancelRating = useCallback(() => {
    setRating(prev => ({...prev, stars: isFill}));
    onCloseModal();
  }, [isFill, onCloseModal])

  const currentFillStars = useMemo(() => {
    return rating.stars ?? isFill;
  }, [isFill, rating.stars])

  const modalRating = useMemo(() => {
    return (
      <Flex
        flexDirection="column"
        gap={16}
      >
        <Text
          theme={TextTheme.INVERTED}
          title={t("title")}
          align={TextAlign.CENTER}
          className="rating-card__modal-title"
        />
        <Textarea
          theme={BgEnum.BG_COLOR_INVERTED}
          placeholder={t("placeholder")}
          onChange={onChangeText}
        />
        <Flex
          justifyContent="flex-end"
          alignItems="stretch"
          gap={16}
        >
          <Button
            className="rating-card__modal-btn"
            theme={ThemeButtonEnum.OUTLINE_RED}
            children={t("cancel")}
            onClick={onCancelRating}
          />
          <Button
            className="rating-card__modal-btn"
            theme={ThemeButtonEnum.OUTLINE_INVERTED}
            children={t("send")}
            onClick={onSendRating}
          />
        </Flex>
      </Flex>
    )
  }, [t, onChangeText, onSendRating, onCancelRating])

  return (
    <>
      <Flex
        className={ClassNames("rating-card", className)}
        flexDirection="column"
        alignItems="center"
        gap={16}
      >
        {title && hasTitle}
        <RatingStars
          isFill={currentFillStars}
          countStars={onChangeStars}
        />
      </Flex>
      <BrowserView>
        <Modal
          isOpen={openModal}
          onClose={onCloseModal}
          children={modalRating}
        />
      </BrowserView>
      <MobileView>
        <Drawer
          direction={"column"}
          isOpen={openModal}
          onClose={onCancelRating}
          children={modalRating}
        />
      </MobileView>
    </>
  )
})

export {RatingCard};