import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'duration', 'price'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Cryotherapy', value: 'cryotherapy' },
        { label: 'Sauna', value: 'sauna' },
        { label: 'Salt Therapy', value: 'salt-therapy' },
        { label: 'Compression', value: 'compression' },
        { label: 'Light Therapy', value: 'light-therapy' },
        { label: 'Massage', value: 'massage' },
        { label: 'Facial', value: 'facial' },
      ],
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      required: true,
    },
    {
      name: 'fullDescription',
      type: 'richText',
    },
    {
      name: 'benefits',
      type: 'array',
      fields: [
        {
          name: 'benefit',
          type: 'text',
        },
      ],
    },
    {
      name: 'duration',
      type: 'text',
      admin: {
        description: 'e.g., "30 minutes" or "45-60 minutes"',
      },
    },
    {
      name: 'price',
      type: 'number',
      admin: {
        description: 'Price in AUD',
      },
    },
    {
      name: 'priceNote',
      type: 'text',
      admin: {
        description: 'e.g., "per session" or "from"',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'icon',
      type: 'select',
      options: [
        { label: 'Snowflake', value: 'snowflake' },
        { label: 'Fire', value: 'fire' },
        { label: 'Salt', value: 'salt' },
        { label: 'Compression', value: 'compression' },
        { label: 'Light', value: 'light' },
        { label: 'Hands', value: 'hands' },
        { label: 'Face', value: 'face' },
      ],
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
