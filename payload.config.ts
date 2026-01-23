import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

// Collections
import { Services } from './src/collections/Services'
import { Testimonials } from './src/collections/Testimonials'
import { BlogPosts } from './src/collections/BlogPosts'
import { TeamMembers } from './src/collections/TeamMembers'
import { Media } from './src/collections/Media'
import { Users } from './src/collections/Users'

// Globals
import { SiteSettings } from './src/globals/SiteSettings'
import { Homepage } from './src/globals/Homepage'
import { Navigation } from './src/globals/Navigation'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Services,
    Testimonials,
    BlogPosts,
    TeamMembers,
    Media,
  ],
  globals: [
    SiteSettings,
    Homepage,
    Navigation,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'cryospa-secret-key-change-in-production',
  typescript: {
    outputFile: path.resolve(dirname, 'src/payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || 'file:./payload.db',
    },
  }),
})
