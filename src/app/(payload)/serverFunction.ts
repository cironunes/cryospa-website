'use server'

import config from '@payload-config'
import { handleServerFunctions } from '@payloadcms/next/layouts'
import { importMap } from './admin/importMap'

const configPromise = Promise.resolve(config)

export async function payloadServerFunction(args: {
  name: string
  args: Record<string, unknown>
}) {
  return handleServerFunctions({
    ...args,
    config: configPromise,
    importMap,
  })
}
