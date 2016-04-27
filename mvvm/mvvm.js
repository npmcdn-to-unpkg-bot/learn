function Mvvm(params){

    this.domId = params.el; // 容器ID
    this.data = {}; // 数据存储
    this.listenerMap = {};

    this.bindEvent();
    this.init(params.data); // 初始化数据
}

Mvvm.prototype.set = function(name, value){
    this.listenerMap[name].forEach(function(fn){
        fn.call(null, value);
    });
    this.data[name] = value;
}

// 双向绑定
Mvvm.prototype.bindEvent = function(){
    var baseDomId = this.domId;

    var doms = document.querySelectorAll(baseDomId + " > [v-model]");
    doms = Array.prototype.slice.call(doms);

    // 遍历 v-model 元素，实现双向绑定
    doms.forEach((function(dom){

        // v-model 模型名称
        var domModelName = dom.getAttribute('v-model');

        // m -> v
        var listeners = this.listenerMap[domModelName] || [];
        this.listenerMap[domModelName] = listeners;
        listeners.push((function(value){
            var modelDataValue = this.data[domModelName];
            if(modelDataValue === value){
                return;
            }else {
                dom.value = value;
            }
        }).bind(this));

        // v -> m
        var eventName = dom.type === 'text' ? 'keyup' : 'change';
        dom.addEventListener(eventName, (function(e){
            var target = e.target;
            var value = e.target.value;
            var valueName = target.getAttribute('v-model');
            this.set(valueName, value);
        }).bind(this));
    }).bind(this));

    var doms = document.querySelectorAll(baseDomId + " > [v-disp]");
    doms = Array.prototype.slice.call(doms);
    doms.forEach((function(dom){
        var domModelName = dom.getAttribute('v-disp');
        var listeners = this.listenerMap[domModelName] || [];
        this.listenerMap[domModelName] = listeners;
        listeners.push((function(value){
            var modelDataValue = this.data[domModelName];
            if(modelDataValue === value){
                return;
            } else {
                dom.innerHTML = value;
            }
        }).bind(this));
    }).bind(this));
}

Mvvm.prototype.init = function(data){
    for(var key in data){
        this.set(key, data[key]);
    }
}

