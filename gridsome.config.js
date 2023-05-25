// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Mads Opheim',
  siteDescription: 'Java. TDD, DDD, Modern agile.',
  siteUrl: 'http://madsopheim.com',

  templates: {
    Post: '/:title'
  },

  plugins: [
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
      }
    },
    {
      use: 'gridsome-plugin-feed',
      options: {
        contentTypes: ['Post'],
        feedOptions: {
          title: 'Mads Opheim',
          description: 'Feed from the blog of Mads Opheim'
        },
        rss: {
          enabled: true,
          output: '/feed.xml'
        },
        maxItems: 25,
        filterNodes: node => true,
        nodeToFeedItem: node => ({
          title: node.title,
          date: node.date || node.fields.date,
          content: node.content.substring(0, 400)
        })
      }
    }
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
}
