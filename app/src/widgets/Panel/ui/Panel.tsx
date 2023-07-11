import {FC, useCallback, useState} from "react";
import "./Panel.scss";
import { ClassNames } from "../../../shared/lib/ClassNames";
import Modal from "../../../shared/ui/Modal/Modal";
import Button from "../../../shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

interface PanelProps {
	classNames?: string,
}

const Panel: FC<PanelProps> = ({classNames}) => {
	const [open, setOpen] = useState<boolean>(false);
	const { t } = useTranslation();

	const onToggleModal = useCallback(() => {
		if(open) setOpen( p => !p );
	}, [open])

	return (
		<div data-testid="panel" className={ClassNames(classNames, 'panel')}>
			<div>Logo</div>
			<Modal isOpen={open} onClose={onToggleModal}>{"Modal"}</Modal>
			<Button onClick={() => setOpen(true)}>{t('sign_in')}</Button>
		</div>
	)
}

export default Panel;