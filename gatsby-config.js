module.exports = {
  siteMetadata: {
    title: 'IBM DataPower Operator Documentation',
    description: 'Official documentation for IBM DataPower Operator',
    keywords: 'ibm,datapower,gateway,integration,operator',
  },
  pathPrefix: `/datapower-operator-doc`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'IBM DataPower Operator Documentation',
        short_name: 'IBM DataPower Operator Documentation',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#0062ff',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        repository: {
          baseUrl: 'https://github.com/IBM/datapower-operator-doc',
          subDirectory: '',
        },
      },
    },
  ],
};
