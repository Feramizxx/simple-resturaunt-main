import {FcAbout} from 'react-icons/fc'

export default {
  name: 'about',
  title: 'About',
  type: 'document',
  icon: FcAbout,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'duty',
      title: 'Duty',
      type: 'string',
    },

    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
  ],
}
