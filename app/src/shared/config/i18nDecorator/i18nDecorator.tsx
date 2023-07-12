import React, { Suspense } from "react";
import { Decorator } from "@storybook/react";
import { I18nextProvider } from "react-i18next";
import i18n from  "../../../i18n";

const I18nDecorator: Decorator = (Story) => (
	<Suspense fallback="Loading localization…">
		<I18nextProvider i18n={i18n}>
			<Story />
			<div id="modals-container"/>
		</I18nextProvider>
	</Suspense>
  );

export default I18nDecorator;