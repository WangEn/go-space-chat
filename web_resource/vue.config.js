module.exports = {
    publicPath: "/",
    filenameHashing: true,
    chainWebpack: config => {
        config.plugin('html').tap(args => {
            args[0].title = "It's love time";
            return args;
        });
    },
    devServer: {
        hot: true
    }
};