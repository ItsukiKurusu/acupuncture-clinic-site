import { defineType, defineArrayMember } from 'sanity'

// ブログ記事のスキーマ
export const post = defineType({
  name: 'post',
  title: 'ブログ記事',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'タイトル',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'スラッグ',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'author',
      title: '著者',
      type: 'string',
    },
    {
      name: 'coverImage',
      title: 'カバー画像',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'excerpt',
      title: '抜粋',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: '本文',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            { title: '通常', value: 'normal' },
            { title: '見出し1', value: 'h1' },
            { title: '見出し2', value: 'h2' },
            { title: '見出し3', value: 'h3' },
            { title: '見出し4', value: 'h4' },
            { title: '引用', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: '太字', value: 'strong' },
              { title: '斜体', value: 'em' },
              { title: '下線', value: 'underline' },
              { title: '取り消し線', value: 'strike-through' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'リンク',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                ],
              },
            ],
          },
        }),
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
        }),
      ],
    },
    {
      name: 'tags',
      title: 'タグ',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'publishedAt',
      title: '公開日',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'coverImage',
      publishedAt: 'publishedAt',
    },
    prepare(selection) {
      const { author, publishedAt } = selection
      return {
        ...selection,
        subtitle: `${author ? `${author} · ` : ''}${
          publishedAt ? new Date(publishedAt).toLocaleDateString('ja-JP') : ''
        }`,
      }
    },
  },
})

export const schemaTypes = [post]
