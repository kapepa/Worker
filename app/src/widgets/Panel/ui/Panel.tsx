import {FC, useCallback, useState} from "react";
import "./Panel.scss";
import { ClassNames } from "../../../shared/lib/ClassNames";
import Button from "../../../shared/ui/Button/Button";
import {useTranslation} from "react-i18next";
import {LoginModal} from "../../../features/AuthByUsername";
import {UseToken} from "../../../app/contexts/Token";
import {useSelector} from "react-redux";
import {GetUsersMyself} from "../../../entities/Users";

interface PanelProps {
	classNames?: string,
}

const Panel: FC<PanelProps> = ({classNames}) => {
	const { logout } = UseToken();
	const userMyself = useSelector(GetUsersMyself);
	const [open, setOpen] = useState<boolean>(false);
	const { t } = useTranslation();

	const onCloseModal = useCallback(() => {
		if(open) setOpen( false );
	}, [open])

	const onOpenModal = useCallback(() => {
		if(!open) setOpen( true );
	},[open])

	return (
		<div data-testid="panel" className={ClassNames(classNames, 'panel')}>
			<div>{"Logo"}</div>
			{!!userMyself ? <Button onClick={logout}>{t('logout')}</Button> : <Button onClick={onOpenModal}>{t('sign_in')}</Button>}
			<LoginModal isOpen={open} onClose={onCloseModal}/>
		</div>
	)
}

export default Panel;