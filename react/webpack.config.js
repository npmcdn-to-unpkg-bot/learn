module.exports = {
    entry:[
        './assets/js/entry.js'
    ],
    output: {
        path: __dirname + '/assets/',
        publicPath: "/assets/",
        filename: 'bundle.js'
    }
};