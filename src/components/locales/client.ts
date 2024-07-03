"use client";

import { createI18nClient } from "next-international/client";

export const {
  useI18n,
  useScopedI18n,
  I18nProviderClient,
  useChangeLocale,
  useCurrentLocale,
} = createI18nClient({
  en: () => import("./en"),
  zh: () => import("./zh"),
  jp: () => import("./jp"),
  // Add more locales here
  // es: () => import('./es'),
  // fr: () => import('./fr'),
});
