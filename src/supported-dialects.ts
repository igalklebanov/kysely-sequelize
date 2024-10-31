import type {Dialect} from 'sequelize'

export const SUPPORTED_DIALECTS = ['mssql', 'mysql', 'postgres', 'sqlite', 'mock'] as const satisfies Dialect[]

export type SupportedDialect = (typeof SUPPORTED_DIALECTS)[number]

function isDialectSupported(dialect: string): dialect is SupportedDialect {
  return SUPPORTED_DIALECTS.includes(dialect as any)
}

export function assertSupportedDialect(dialect: string) {
  if (!isDialectSupported(dialect)) {
    throw new Error(`Unsupported dialect: ${dialect}!`)
  }
}
