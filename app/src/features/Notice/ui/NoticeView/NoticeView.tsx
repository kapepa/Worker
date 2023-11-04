import {FC, memo} from "react";
import "./NoticeView.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {PopoverBox} from "../../../../widgets/PopoverBox";
import IcoImg from "../../../../shared/ui/IcoImg/IcoImg";

interface NoticeViewProps {
  className?: string,
  classBtn?: string,
}

const NoticeView: FC<NoticeViewProps> = memo((props) => {
  const {className, classBtn} = props;

  return (
    <div className={ClassNames("notice-view", className)}>
      <PopoverBox
        classBtn=""
        innerBtn={<IcoImg className="panel__notification" ico="NotificationIco"/>}
      />
    </div>
  )
});

export { NoticeView };