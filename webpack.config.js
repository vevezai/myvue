var path = require('path')

module.exports = {

    entry: "./src/main.js", //要打包的入口文件

    output:{ //  输出文件  你要把源文件打包成什么文件
        path:path.join(__dirname,'dist'), //  打包后放在哪个文件目录下  
        // dist文件夹一般就是指项目中需要使用到的静态资源文件其他资源文件 这个文件目录需要基于根目录
        
        publicPath:'/dist', // 静态资源在服务器上运行时的访问路径，可以直接http://localhost:8080/dist/main.js 访问到服务器中的main.js 文件
                          // 因为webpack-dev-server会自动的创建服务器，将源文件打包转换为目标文件存储在服务器的指定目录下供用户请求
        filename:'app.js' // 目标文件的文件名称
    },
    module:{
        rules:[
            {
                test: /\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.css$/, //用正则匹配当前访问的文件的后缀名是 .css
                use:['style-loader','css-loader']//webpack底层调用这些包的顺序是从右到左
          },
          {
            test:/\.less$/,
            use:[{
                loader:'style-loader'
            },{
                loader:'css-loader'
            },{
                loader:'less-loader'
            }]
        },
        
        //添加解析 scss 的配置：
        {
            test:'/\.scss$/',
            use:[{
                loader:'style-loader'
            },{
                loader:'css-loader'
            },{
                loader:'sass-loader'
            }]
        },
        {
            test:/\.js$/,
            include:[path.resolve(__dirname,'src')],  // webpack2建议尽量避免exclude, 更倾向于 include
                                                      // exclude: /(node_modules)/     node_modules下面的js文件会被排除
            use:{
                loader:'babel-loader',    
                options:{
                    presets:['env']
                }
            }
        }
        
        ]
    },
    plugins:[
        new HtmlWebackPlugin({
            filename: 'index.html', // 目标文件，意味着template.html自动引入js 文件之后，会自动的生成index.html文件，
                                    // 并且这个文件在服务器响应的时候会自动打开
            template:'template.html' // 模板文件---源文件： 你想自动引入js 的源html文件（想在哪个文件引入js）
        })
    ]
}