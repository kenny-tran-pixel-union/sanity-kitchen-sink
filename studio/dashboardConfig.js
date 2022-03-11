export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '622b96b5f32b6e20e0061cb3',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ym9ikuwd',
                  apiId: '829e1231-7746-4736-ae41-0724b89c6771'
                },
                {
                  buildHookId: '622b96b595371a22ab0853ea',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-sc98n4zj',
                  apiId: '8578ed36-2095-4a48-83dc-01982bdc715a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kenny-tran-pixel-union/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-sc98n4zj.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
