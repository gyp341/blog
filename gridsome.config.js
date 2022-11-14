// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',              // 网站名称
  siteDescription: '大前端',          // 网站描述。用于SEO
  pathPrefix: '',                    // 路径前缀。如果最后部署网站不在root而是子目录例如/myapp，则要写成/myapp
  titleTemplate: '%s - <siteName>',  // 默认格式是 pageName - siteName
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',   // 抓取本地文件数据，生成到GraphQL中
        path: './content/blog/**/*.md'   // 具体抓取文件的路径。支持自定义
      }
    },
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        queryLimit: 1000,   // 默认100，最多查多少数据
        contentTypes: ['post', 'tag'],  // 数据类型
        singleTypes: ['general'],    // 单个节点
        // 有些数据需要登录的才能访问
        loginData: {
          identifier: '',
          password: ''
        }
      }
    }
  ],                       // 项目中用到的插件
  templates: {    // 根据内容类型，创造模板
    StrapiPost: [   // 集合的名字。只由默认的typeName即Strapi+contentTypes即post组合而成
      {
        path: '/post/:id',   // 详情页路径
        component: './src/templates/Post.vue'  // 对应的组件
      }
    ],
    StrapiTag: [ 
      {
        path: '/tag/:id',   // 详情页路径
        component: './src/templates/Tag.vue'  // 对应的组件
      }
    ],
  },                     // 定义路由和模板集合
  // metadata: {},                      // 添加全局 metadata 到 GraphQL schema 中，和数据有关
  // icon: './src/favicon.png',         // 网站图标
  // configureWebpack: {                // 自定义 webpack 打包配置。Gridsome是用 webpack 打包构建

  // },
  // configureServer: '',                // 配置开发服务器
  // permalinks:{                        // 永久链接
  //   trailingSlash: false              // 默认true。在链接后面有"/"，表示目录，加载里面的资源。例如<g-link to="/about-us/">About us<g-link>。但如果是动态路由，不希望最后有"/"，而是"/about-us"，要配置为false
  // },
  // host: 'localhost',                  // 默认localhost
  // port: 8080,                         // 默认8080
  // outputDir: 'dist'                   // 默认dist
}
