YUI.add("pogo-view-hostlog",function(a){a.namespace("Pogo.View").HostLog=new a.Base.create("pogo-view-hostlog",a.View,[],{initializer:function(){this.after("logURLChange",this.render,this);},template:'<h2>Log</h2><div class="log"><iframe class="logIframe" src="{log}"></iframe></div>',render:function(){var b=this.get("container");b.setContent(a.Lang.sub(this.template,{log:this.get("logURL")||"about:blank"}));return this;}},{ATTRS:{logURL:{value:"about:blank"}}});},"@VERSION@",{requires:["base","view"]});