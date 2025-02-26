import { LANG_ES_AR, LANG_PT_BR } from '@/constants/languages'
import { ConditionsType } from '../models/IItemDetail'

type Language = typeof LANG_PT_BR | typeof LANG_ES_AR

export const formatCurrency = (
  value: number,
  currency: 'BRL' | 'ARS',
): string => {
  const locales = {
    BRL: LANG_PT_BR,
    ARS: LANG_ES_AR,
  }
  return value.toLocaleString(locales[currency], {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

export const translateCondition = (
  condition: ConditionsType,
  language: Language,
) => {
  const conditions = {
    [LANG_PT_BR]: {
      new: 'Novo',
    },
    [LANG_ES_AR]: {
      new: 'Núevo',
    },
  }
  return conditions[language][condition]
}
