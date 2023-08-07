import {FC, memo, useCallback, useState} from "react";
import "./Panel.scss";
import { ClassNames } from "../../../shared/lib/ClassNames";
import Button from "../../../shared/ui/Button/Button";
import {useTranslation} from "react-i18next";
import {LoginModal} from "../../../features/AuthByUsername";
import {UseToken} from "../../../app/contexts/Token";
import {useSelector} from "react-redux";
import {GetUsersProfile} from "../../../entities/Users";
import AppLink, {AppLinkTheme} from "../../../shared/ui/AppLink/AppLink";
import {RouterPath} from "../../../shared/const/Routers";
import {useNavigate} from "react-router-dom";

interface PanelProps {
	classNames?: string,
}

const Panel: FC<PanelProps> = memo(({classNames}) => {
	const { logout } = UseToken();
	const navigate = useNavigate();
	const userProfile = useSelector(GetUsersProfile);
	const [open, setOpen] = useState<boolean>(false);
	const { t } = useTranslation();

	const onCloseModal = useCallback(() => {
		if(open) setOpen( false );
	}, [open])

	const onOpenModal = useCallback(() => {
		if(!open) setOpen( true );
	},[open])

	const isLogout = () => {
		logout();
		navigate(RouterPath.HOME);
	}

	return (
		<div data-testid="panel" className={ClassNames(classNames, 'panel')}>
			<AppLink className="panel__login" theme={AppLinkTheme.SECONDARY} to={RouterPath.HOME}>Login</AppLink>
			{!!userProfile ? <Button onClick={isLogout}>{t('logout')}</Button> : <Button onClick={onOpenModal}>{t('sign_in')}</Button>}
			<LoginModal isOpen={open} onClose={onCloseModal}/>
		</div>
	)
})

export default Panel;