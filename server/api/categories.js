import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: {
        en: 'Web Development',
        vi: 'Phát triển Web',
      },
    },
    {
      id: 2,
      title: {
        en: 'Application',
        vi: 'Ứng dụng',
      },
    },
    {
      id: 3,
      title: {
        en: 'Web Design',
        vi: 'Thiết kế Web',
      },
    },
  ]
})
