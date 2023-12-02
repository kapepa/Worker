import {FC, memo, ReactNode} from "react";
import "./BasicRating.scss";
import {ClassNames} from "../../../../shared/lib/ClassNames";
import {Flex} from "../../../../shared/ui/Flex/Flex";
import Loader from "../../../../shared/ui/Loader/Loader";
import {Text, TextTheme} from "../../../../shared/ui/Text/Text";

interface BasicRatingProps {
  className?: string,
  loading: boolean,
  error?: string,
  children: ReactNode,
}
const BasicRating: FC<BasicRatingProps> = memo((props) => {
  const {className, loading, error, children} = props;

  if(loading) return (
    <Flex justifyContent="center" alignItems="center">
      <Loader/>
    </Flex>
  )

  if(!!error) return (
    <Flex justifyContent="center" alignItems="center">
      <Text theme={TextTheme.ERROR} title={error}/>
    </Flex>
  )

  return (
    <div className={ClassNames("basic-rating", className)}>
      {children}
    </div>
  )
})

export {BasicRating}