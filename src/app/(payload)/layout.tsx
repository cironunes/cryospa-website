/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* eslint-disable */
// @ts-nocheck
import React from 'react'

import config from '@payload-config'
import { RootLayout } from '@payloadcms/next/layouts'
import { importMap } from './admin/importMap'
import { payloadServerFunction } from './serverFunction'
import '@payloadcms/next/css'

type Args = {
  children: React.ReactNode
}

const configPromise = Promise.resolve(config)

async function Layout({ children }: Args) {
  return (
    <RootLayout
      config={configPromise}
      importMap={importMap}
      serverFunction={payloadServerFunction}
    >
      {children}
    </RootLayout>
  )
}

export default Layout
