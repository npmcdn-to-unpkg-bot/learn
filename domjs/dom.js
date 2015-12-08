;(function(win){
    var global = win,
        doc = win.document,
        dom,
        GetOrMakeDom,
        regXContainsTag = /^\s*<(\w+|!)[^>]*>/;

    dom = function(params,context){
        return new GetOrMakeDom(params,context);
    };

    GetOrMakeDom = function(params,context){
        var currentContext = doc,
            divElm,
            docFrag,
            queryDiv,
            numberOfChildren,
            z,
            nodes,
            nodeLength,
            i;

        if(context){
            if(context.nodeType){
                currentContext = context;
            }else{
                currentContext = doc.querySelector(context);
            }
        }

        if(!params || params === '' ||
                typeof params === 'string' && params.trim() === ''){
            this.length = 0;
            return this;
        }

        if(typeof params === 'string' && regXContainsTag.test(params)){
            divElm = currentContext.createElement('div');
            divElm.className = 'hippo-doc-frag-wrapper';
            docFrag = currentContext.createDocumentFragment();
            docFrag.appendChild(divElm);
            queryDiv = docFrag.querySelector('div');
            queryDiv.innerHTML = params;
            numberOfChildren = queryDiv.children.length;

            for(z = 0; z < numberOfChildren; z++){
                this[z] = queryDiv.children[z];
            }

            this.length = numberOfChildren;

            return this;
        }

        if(typeof params === 'object' && params.nodeName){
            this.length = 1;
            this[0] = params;
            return this;
        }

        if(typeof params !== "string"){
            nodes = params;
        }else{
            nodes = currentContext.querySelectorAll(params.trim());
        }

        nodeLength = nodes.length;

        for(i = 0; i < nodeLength; i++){
            this[i] = nodes[i];
        }

        this.length = nodeLength;

        return this;

    };

    global.dom = dom;

    dom.fn = GetOrMakeDom.prototype;

})(window);

dom.fn.each = function(callback){
    var len = this.length,
        i;

    for(i = 0; i<len ; i++){
        callback.call(this[i],i,this[i]);
    }

    return this;
}

dom.fn.html = function(htmlString){
    if(htmlString){
        return this.each(function(){
            this.innerHTML = htmlString;
        });
    }else{
        return this[0].innerHTML;
    }
}

dom.fn.text = function(textString){
    if(textString){
        return this.each(function(){
           this.textContent = textString;
        });
    }else{
        return this[0].textContent.trim();
    }
}

dom.fn.append = function(stringOrObject){
    return this.each(function(){
        var that = this;

        if(typeof stringOrObject === 'string'){
            this.insertAdjacentHTML('beforeend',stringOrObject);
        }else{
            dom(stringOrObject).each(function(name,value){
                that.insertAdjacentHTML('beforeend',value.outerHTML);
            });
        }
    });
}