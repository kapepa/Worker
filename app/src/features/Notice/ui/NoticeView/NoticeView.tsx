import {FC, memo} from "react";
import {ClassNames} from "../../../../shared/lib/ClassNames";

interface NoticeViewProps {
  className?: string,
}

const NoticeView: FC<NoticeViewProps> = memo((props) => {
  const {className} = props;

  return (
    <div className={ClassNames("notice-view", className)}>
      NoticeView
    </div>
  )
});

export { NoticeView };