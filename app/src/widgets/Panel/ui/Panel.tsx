import {FC, memo, useCallback, useMemo, useState} from "react";
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
import {DropDown} from "../../DropDown";
import {DropDownInt} from "../../../shared/interface/DropDownInt";
import {Avatar} from "../../../shared/ui/Avatar/Avatar";

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
	},[open, setOpen])

	const isLogout = useCallback(() => {
		logout();
		navigate(RouterPath.HOME);
	}, [navigate, logout])

	const getAvatar = useMemo(() => {
		return (
			<Avatar
				size={35}
				alt={userProfile?.firstname}
				src={userProfile?.avatar}
				symbol={userProfile?.firstname?.charAt(1)}
				className="panel__avatar"
			/>
		)
	}, [userProfile?.firstname, userProfile?.avatar]);

	const navList: DropDownInt[] = useMemo(
		() => [
			{ label: t("drop_down.profile"), href: `${RouterPath.PROFILE}/${userProfile?.id}` },
			{ label: t("drop_down.logout"), callback: isLogout }
		],
		[t, userProfile?.id, isLogout]
		)

	return (
		<div data-testid="panel" className={ClassNames(classNames, 'panel')}>
			<AppLink className="panel__login" theme={AppLinkTheme.SECONDARY} to={RouterPath.HOME}>Login</AppLink>
			{
				!!userProfile ?
					<DropDown viewPrefix={getAvatar} navList={navList} /> :
					<Button onClick={onOpenModal}>{t('sign_in')}</Button>
			}
			<LoginModal isOpen={open} onClose={onCloseModal}/>
		</div>
	)
});

export default Panel;