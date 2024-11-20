import { type SchemaTypeDefinition } from 'sanity'
import { author } from './author'
import { blogs } from './blogs'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author,blogs],
}
