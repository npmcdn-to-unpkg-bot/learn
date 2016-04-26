var Router = {
    routes: [],
    mode: null,
    root: '/',
    config: function(options) {

        // 创建时的模式选项
        // 当参数配置为history并且当前浏览器支持history时url调整都采用 history的API，否则使用locatin替换hash
        this.mode = options && options.mode && options.mode == 'history' && !!(history.pushState) ? 'history' : 'hash';
        // url的根路径
        // 当模式是history时才有作用
        this.root = options && options.root ? '/' + this.clearSlashes(options.root) + '/' : '/';

        return this;
    },

    // 获取url片段
    getFragment: function() {
        var fragment = '';

        if(this.mode === 'history') {

            // pathname 是 hash值和 search值前的值
            fragment = this.clearSlashes(decodeURI(location.pathname + location.search));

            // 去掉查询参数
            fragment = fragment.replace(/\?(.*)$/, '');

            // 如果url 的根路径不是默认值，则需要去除掉
            fragment = this.root != '/' ? fragment.replace(this.root, '') : fragment;
        } else {

            // 对于hash 模式，直接获取hash值即可
            var match = window.location.href.match(/#(.*)$/);
            fragment = match ? match[1] : '';
        }
        return this.clearSlashes(fragment);
    },

    // 去除url首尾的斜杠
    clearSlashes: function(path) {
        return path.toString().replace(/\/$/, '').replace(/^\//, '');
    },

    // 添加路由规则
    add: function(re, handler) {
        if(typeof re == 'function') {
            handler = re;
            re = '';
        }
        this.routes.push({ re: re, handler: handler});
        return this;
    },

    // 移除路由规则
    remove: function(param) {
        for(var i=0, r; i<this.routes.length, r = this.routes[i]; i++) {
            if(r.handler === param || r.re === param) {
                this.routes.splice(i, 1);
                return this;
            }
        }
        return this;
    },

    // 重置
    flush: function() {
        this.routes = [];
        this.mode = null;
        this.root = '/';
        return this;
    },

    // 比较url
    check: function(f) {
        var fragment = f || this.getFragment();

        // 循环检测当前的url与用户添加的路由监听规则是否匹配
        for(var i=0; i<this.routes.length; i++) {
            var match = fragment.match(this.routes[i].re);
            if(match) {
                match.shift();
                this.routes[i].handler.apply({}, match);
                return this;
            }
        }
        return this;
    },

    // 监听url变化
    listen: function() {
        var self = this;
        var current = self.getFragment();
        var fn = function() {
            if(current !== self.getFragment()) {
                current = self.getFragment();
                self.check(current);
            }
        }
        clearInterval(this.interval);
        this.interval = setInterval(fn, 50);
        return this;
    },

    // 跳转到指定的url
    navigate: function(path) {
        path = path ? path : '';
        if(this.mode === 'history') {
            history.pushState(null, null, this.root + this.clearSlashes(path));
        } else {
            window.location.href.match(/#(.*)$/);
            window.location.href = window.location.href.replace(/#(.*)$/, '') + '#' + path;
        }
        return this;
    }
}
