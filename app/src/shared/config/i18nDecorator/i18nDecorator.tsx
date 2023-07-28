import React, { Suspense } from "react";
import { Decorator } from "@storybook/react";
import { I18nextProvider } from "react-i18next";
import i18nForTests from "../i18n/i18nForTests";


const I18nDecorator: Decorator = (Story) => (
	<Suspense fallback="Loading localization…">
		<I18nextProvider i18n={i18nForTests}>
			<Story />
		</I18nextProvider>
	</Suspense>
  );

export default I18nDecorator;