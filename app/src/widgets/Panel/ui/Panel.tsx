import {FC, useCallback, useEffect, useState} from "react";
import "./Panel.scss";
import { ClassNames } from "../../../shared/lib/ClassNames";
import Button from "../../../shared/ui/Button/Button";
import {useTranslation} from "react-i18next";
import {LoginModal} from "../../../features/AuthByUsername";

interface PanelProps {
	classNames?: string,
}

const Panel: FC<PanelProps> = ({classNames}) => {
	const [open, setOpen] = useState<boolean>(false);
	const { t } = useTranslation();

	const onCloseModal = useCallback(() => {
		if(open) setOpen( false );
	}, [open])

	const onOpenModal = useCallback(() => {
		if(!open) setOpen( true );
	},[open])

	useEffect(() => {setTimeout(() => {setOpen(true)}, 0)}, [])

	return (
		<div data-testid="panel" className={ClassNames(classNames, 'panel')}>
			<div>{"Logo"}</div>
			<Button onClick={onOpenModal}>{t('sign_in')}</Button>
			<LoginModal isOpen={open} onClose={onCloseModal}/>
		</div>
	)
}

export default Panel;