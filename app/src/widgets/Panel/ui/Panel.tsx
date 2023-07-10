import {FC} from "react";
import "./Panel.scss";
import { ClassNames } from "../../../shared/lib/ClassNames";

interface PanelProps {
	classNames?: string,
}

const Panel: FC<PanelProps> = ({classNames}) => {
	return (
		<div data-testid="panel" className={ClassNames(classNames, 'panel')}>
			<div>Logo</div>
			<div>login</div>
		</div>
	)
}

export default Panel;