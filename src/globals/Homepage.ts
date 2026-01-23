import type { GlobalConfig } from 'payload'

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  admin: {
    group: 'Pages',
  },
  fields: [
    {
      type: 'group',
      name: 'hero',
      fields: [
        {
          name: 'headline',
          type: 'text',
          defaultValue: 'Revitalise · Re-energise · Rejuvenate',
        },
        {
          name: 'subheadline',
          type: 'text',
          defaultValue: "Sydney's Premier Health & Wellness Centre",
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue: 'Experience the ultimate in wellness treatments. From whole-body cryotherapy to infrared saunas, discover how Cryospa can transform your health and wellbeing.',
        },
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'ctaText',
          type: 'text',
          defaultValue: 'Book Your Experience',
        },
        {
          name: 'ctaLink',
          type: 'text',
          defaultValue: '/contact',
        },
      ],
    },
    {
      type: 'group',
      name: 'intro',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: "Sydney's Premier Health & Wellness Centre",
        },
        {
          name: 'content',
          type: 'richText',
        },
      ],
    },
    {
      type: 'group',
      name: 'servicesSection',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: "Here's How We Can Help You",
        },
        {
          name: 'subtitle',
          type: 'text',
          defaultValue: 'Cryospa is like your own little oasis – a space for you to relax, reflect and repair your body and mind through a number of specialised treatment options.',
        },
      ],
    },
    {
      type: 'group',
      name: 'testimonialsSection',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: "What Our Clients Say",
        },
        {
          name: 'subtitle',
          type: 'text',
          defaultValue: 'Real experiences from our valued customers',
        },
      ],
    },
    {
      type: 'group',
      name: 'whyChooseUs',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: 'Why Choose Cryospa?',
        },
        {
          name: 'content',
          type: 'richText',
        },
        {
          name: 'features',
          type: 'array',
          fields: [
            {
              name: 'title',
              type: 'text',
            },
            {
              name: 'description',
              type: 'textarea',
            },
            {
              name: 'icon',
              type: 'select',
              options: [
                { label: 'Private Rooms', value: 'private' },
                { label: 'Expert Staff', value: 'expert' },
                { label: 'Premium Equipment', value: 'premium' },
                { label: 'Convenient Location', value: 'location' },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'group',
      name: 'newsletter',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: 'Be the First to Know',
        },
        {
          name: 'description',
          type: 'text',
          defaultValue: 'Join our mailing list to receive the latest offers and wellness tips.',
        },
      ],
    },
    {
      type: 'group',
      name: 'blogSection',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: 'The Latest from Our Blog',
        },
        {
          name: 'subtitle',
          type: 'text',
          defaultValue: 'News, tips, and wellness insights',
        },
      ],
    },
  ],
}
