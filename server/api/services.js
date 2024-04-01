import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'Laravel',
      description: {
        en: 'I build modern and advanced websites and applications with Laravel, the PHP framework.',
        vi: 'Tôi xây dựng các trang web và ứng dụng hiện đại và nâng cao bằng Laravel, khung PHP.',
      },
      icon: 'logo-laravel',
      image: null,
    },
    {
      id: 2,
      title: 'Vue JS',
      description: {
        en: 'I use VueJS, a modern JavaScript framework, while making dynamic and static websites and applications.',
        vi: 'Tôi sử dụng VueJS, một khung JavaScript hiện đại, đồng thời tạo các trang web và ứng dụng động và tĩnh.',
      },
      icon: 'logo-vue',
      image: null,
    },
  ]
})
