import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  admin: {
    group: 'Settings',
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      required: true,
      defaultValue: 'Cryospa Clinics',
    },
    {
      name: 'tagline',
      type: 'text',
      defaultValue: 'Revitalise | Reenergise | Rejuvenate',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      type: 'group',
      name: 'contact',
      fields: [
        {
          name: 'address',
          type: 'text',
          defaultValue: '21 Falcon St, Crows Nest, NSW 2065, Australia',
        },
        {
          name: 'phone',
          type: 'text',
          defaultValue: '02 8964 7951',
        },
        {
          name: 'email',
          type: 'email',
          defaultValue: 'info@cryospaclinics.com',
        },
        {
          name: 'bookingUrl',
          type: 'text',
          defaultValue: 'https://www.fresha.com/a/cryospa-clinics-crows-nest-21-falcon-street-jkjitqzk/booking?menu=true',
        },
      ],
    },
    {
      type: 'group',
      name: 'openingHours',
      fields: [
        {
          name: 'weekdays',
          type: 'text',
          defaultValue: '9am – 1pm / 4pm – 8:30pm',
        },
        {
          name: 'saturday',
          type: 'text',
          defaultValue: '8am – 6pm',
        },
        {
          name: 'sunday',
          type: 'text',
          defaultValue: '8am – 3pm',
        },
      ],
    },
    {
      type: 'group',
      name: 'social',
      fields: [
        {
          name: 'facebook',
          type: 'text',
          defaultValue: 'https://facebook.com/cryospaclinics',
        },
        {
          name: 'instagram',
          type: 'text',
          defaultValue: 'https://www.instagram.com/cryospaclinics/',
        },
        {
          name: 'twitter',
          type: 'text',
          defaultValue: 'https://twitter.com/cryospaclinics',
        },
        {
          name: 'linkedin',
          type: 'text',
        },
      ],
    },
    {
      name: 'disclaimer',
      type: 'textarea',
      defaultValue: 'Cryospa Clinics offers alternative treatments. None of which are meant to cure disease. Please consult with your medical professional prior to our treatments.',
    },
  ],
}
