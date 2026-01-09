import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schema'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  name: 'default',
  title: '鍼灸院ブログ',

  projectId: projectId,
  dataset: dataset,

  plugins: [structureTool(), visionTool()],

  basePath: '/studio',

  schema: {
    types: schemaTypes,
  },
})
