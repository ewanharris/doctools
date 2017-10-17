Ext.data.JsonP['Arrow_API']({"tagname":"class","name":"Arrow.API","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Arrow.API","members":{"cfg":[],"property":[{"name":"action","tagname":"property","owner":"Arrow.API","meta":{},"id":"property-action"},{"name":"after","tagname":"property","owner":"Arrow.API","meta":{},"id":"property-after"},{"name":"app","tagname":"property","owner":"Arrow.API","meta":{"nonCreation":[null]},"id":"property-app"},{"name":"before","tagname":"property","owner":"Arrow.API","meta":{},"id":"property-before"},{"name":"config","tagname":"property","owner":"Arrow.API","meta":{"nonCreation":[null]},"id":"property-config"},{"name":"constructor","tagname":"property","owner":"Arrow.API","meta":{},"id":"property-constructor"},{"name":"description","tagname":"property","owner":"Arrow.API","meta":{},"id":"property-description"},{"name":"filename","tagname":"property","owner":"Arrow.API","meta":{"nonCreation":[null]},"id":"property-filename"},{"name":"group","tagname":"property","owner":"Arrow.API","meta":{},"id":"property-group"},{"name":"method","tagname":"property","owner":"Arrow.API","meta":{},"id":"property-method"},{"name":"model","tagname":"property","owner":"Arrow.API","meta":{},"id":"property-model"},{"name":"nickname","tagname":"property","owner":"Arrow.API","meta":{},"id":"property-nickname"},{"name":"parameters","tagname":"property","owner":"Arrow.API","meta":{},"id":"property-parameters"},{"name":"path","tagname":"property","owner":"Arrow.API","meta":{},"id":"property-path"},{"name":"plural","tagname":"property","owner":"Arrow.API","meta":{},"id":"property-plural"},{"name":"post","tagname":"property","owner":"Arrow.API","meta":{},"id":"property-post"},{"name":"pre","tagname":"property","owner":"Arrow.API","meta":{},"id":"property-pre"},{"name":"response","tagname":"property","owner":"Arrow.API","meta":{},"id":"property-response"},{"name":"route","tagname":"property","owner":"Arrow.API","meta":{"nonCreation":[null]},"id":"property-route"},{"name":"singular","tagname":"property","owner":"Arrow.API","meta":{},"id":"property-singular"},{"name":"timestamp","tagname":"property","owner":"Arrow.API","meta":{"nonCreation":[null]},"id":"property-timestamp"}],"method":[{"name":"constructor","tagname":"method","owner":"Arrow.API","meta":{},"id":"method-constructor"},{"name":"bind","tagname":"method","owner":"Arrow.API","meta":{},"id":"method-bind"},{"name":"execute","tagname":"method","owner":"Arrow.API","meta":{},"id":"method-execute"},{"name":"executeAfterEvent","tagname":"method","owner":"Arrow.API","meta":{},"id":"method-executeAfterEvent"},{"name":"executeBeforeEvent","tagname":"method","owner":"Arrow.API","meta":{},"id":"method-executeBeforeEvent"},{"name":"executeEventTransform","tagname":"method","owner":"Arrow.API","meta":{},"id":"method-executeEventTransform"},{"name":"extend","tagname":"method","owner":"Arrow.API","meta":{},"id":"method-extend"},{"name":"getRequestURL","tagname":"method","owner":"Arrow.API","meta":{},"id":"method-getRequestURL"},{"name":"reload","tagname":"method","owner":"Arrow.API","meta":{},"id":"method-reload"},{"name":"remove","tagname":"method","owner":"Arrow.API","meta":{},"id":"method-remove"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"api.js","href":"api.html#Arrow-API"},{"filename":"api.js","href":"api2.html#Arrow-API"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[{"name":"extend","tagname":"method","owner":"Arrow.API","meta":{"static":true},"id":"static-method-extend"},{"name":"getAPIsForPath","tagname":"method","owner":"Arrow.API","meta":{"static":true},"id":"static-method-getAPIsForPath"}],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'></div><div class='hierarchy'></div><div class='doc-contents'><p>An API provides a way for a client to access your application, execute custom logic and\ninternally access the application's models and APIs, then return data back to the client application.\nUse an API to perform a custom operation on model data that is not exposed as one of the\nstandardized methods.</p>\n\n<h3>Create an API Endpoint</h3>\n\n<p>To create an API, define a new API instance with the API constructor,\nthen add the instance to the server instance and bind the API instance to the\nArrow server's app instance.</p>\n\n<p>Pass an implementation object, Arrow configuration object and Arrow instance to the constructor.\nSet any API properties on the implementation object (except the ones marked non-creation),\nbut the following properties are required to be set: <a href=\"#!/api/Arrow.API-property-action\" rel=\"Arrow.API-property-action\" class=\"docClass\">action</a>, <a href=\"#!/api/Arrow.API-property-description\" rel=\"Arrow.API-property-description\" class=\"docClass\">description</a>,\n<a href=\"#!/api/Arrow.API-property-group\" rel=\"Arrow.API-property-group\" class=\"docClass\">group</a> and <a href=\"#!/api/Arrow.API-property-path\" rel=\"Arrow.API-property-path\" class=\"docClass\">path</a>.</p>\n\n<p>After creating the API instance, add the API instance to the Arrow instance by calling the Arrow\ninstance's <a href=\"#!/api/Arrow-method-addAPI\" rel=\"Arrow-method-addAPI\" class=\"docClass\">addAPI()</a> method, then call the API instance's <a href=\"#bind\">bind()</a> method\nand pass it an app instance.</p>\n\n<pre><code> var Arrow = require('arrow');\n var server = new Arrow();\n // since the API relies on a model,\n // need to wait for the model to be loaded before creating the API\n server.on('starting', function() {\n     var fooAPI = new <a href=\"#!/api/Arrow.API\" rel=\"Arrow.API\" class=\"docClass\">Arrow.API</a>({\n         group: 'foo',\n         path: '/api/foo/',\n         method: 'GET',\n         description: 'Get all the Foo objects',\n         model: 'foo',\n         action: function(request, response, next) {\n             request.model.findAll(function(err, results) {\n                 if (err) {\n                     next(err);\n                 } else {\n                     next(null, results);\n                 }\n             });\n         }\n     }, server.config, server);\n     server.add(fooAPI);\n     fooAPI.bind(server.app);\n }\n server.start();\n</code></pre>\n\n<p>Alternatively, you can create an API definition file that is automatically loaded by the Arrow Project.\nFor details, see the <a href=\"http://docs.appcelerator.com/platform/latest/#!/guide/Arrow_APIs\">Arrow APIs guide</a>.</p>\n\n<h3>Invoke an API Endpoint</h3>\n\n<p>To invoke an API endpoint within the application, use the Arrow instance's <a href=\"Arrow#getAPI\">getAPI()</a> method.\nAn API is identified by its path and method (HTTP verb), or its nickname if you defined one when\ncreating the API. After retrieving the API instance, call its <a href=\"#execute\">execute()</a> method.</p>\n\n<pre><code>server.getAPI('foo', 'GET').execute({}, function (err, results) {\n       if (err) {\n           server.logger.error(err);\n    } else {\n           // do something with results\n    }\n});\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-action' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Arrow.API'>Arrow.API</span></div><a href='#!/api/Arrow.API-property-action' class='name expandable'>action</a><span> : Function</span></div><div class='description'><div class='short'>Logic to execute when the endpoint is invoked by the client application. ...</div><div class='long'><p>Logic to execute when the endpoint is invoked by the client application.\nThe function is passed a request object, response object and next() function.\nYou should always make sure that the action function calls the next() function\nregardless if the result is a success or an error.</p>\n</div></div></div><div id='property-after' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Arrow.API'>Arrow.API</span></div><a href='#!/api/Arrow.API-property-after' class='name expandable'>after</a><span> : String/Array&lt;String&gt;</span></div><div class='description'><div class='short'>One or more Blocks to be executed after the request. ...</div><div class='long'><p>One or more Blocks to be executed after the request. Blocks are referenced by their\nname property. If you want to execute multiple blocks, you should specify them as an\narray of block names. If multiple blocks are specified, they are executed in the order specified.\nSpecify either <code>after</code> or <code>post</code> but not both.</p>\n</div></div></div><div id='property-app' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Arrow.API'>Arrow.API</span></div><a href='#!/api/Arrow.API-property-app' class='name not-expandable'>app</a><span> : Object</span><strong class='nonCreation signature' >Non-Creation</strong></div><div class='description'><div class='short'><p>Express app instance.</p>\n</div><div class='long'><p>Express app instance.</p>\n</div></div></div><div id='property-before' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Arrow.API'>Arrow.API</span></div><a href='#!/api/Arrow.API-property-before' class='name expandable'>before</a><span> : String/Array&lt;String&gt;</span></div><div class='description'><div class='short'>One or more Blocks to be executed before the request. ...</div><div class='long'><p>One or more Blocks to be executed before the request. Blocks are referenced by their\nname property. If you want to execute multiple blocks, you should specify them as an\narray of block names. If multiple blocks are specified, they are executed in the order specified.\nSpecify either <code>before</code> or <code>pre</code> but not both.</p>\n</div></div></div><div id='property-config' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Arrow.API'>Arrow.API</span></div><a href='#!/api/Arrow.API-property-config' class='name not-expandable'>config</a><span> : Object</span><strong class='nonCreation signature' >Non-Creation</strong></div><div class='description'><div class='short'><p>Configuration object used to initialize the API instance.</p>\n</div><div class='long'><p>Configuration object used to initialize the API instance.</p>\n</div></div></div><div id='property-constructor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Arrow.API'>Arrow.API</span></div><a href='#!/api/Arrow.API-property-constructor' class='name expandable'>constructor</a><span> : Function</span></div><div class='description'><div class='short'>Custom constructor to execute custom initialization logic. ...</div><div class='long'><p>Custom constructor to execute custom initialization logic. The new API instance is passed to\n<code>this</code> in the function.</p>\n</div></div></div><div id='property-description' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Arrow.API'>Arrow.API</span></div><a href='#!/api/Arrow.API-property-description' class='name not-expandable'>description</a><span> : String</span></div><div class='description'><div class='short'><p>Human-readable description of the API, which is used by the generated API documentation.</p>\n</div><div class='long'><p>Human-readable description of the API, which is used by the generated API documentation.</p>\n</div></div></div><div id='property-filename' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Arrow.API'>Arrow.API</span></div><a href='#!/api/Arrow.API-property-filename' class='name not-expandable'>filename</a><span> : String</span><strong class='nonCreation signature' >Non-Creation</strong></div><div class='description'><div class='short'><p>File used to load the API instance.</p>\n</div><div class='long'><p>File used to load the API instance.</p>\n</div></div></div><div id='property-group' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Arrow.API'>Arrow.API</span></div><a href='#!/api/Arrow.API-property-group' class='name not-expandable'>group</a><span> : String</span></div><div class='description'><div class='short'><p>Logical name for the API grouping.</p>\n</div><div class='long'><p>Logical name for the API grouping.</p>\n</div></div></div><div id='property-method' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Arrow.API'>Arrow.API</span></div><a href='#!/api/Arrow.API-property-method' class='name not-expandable'>method</a><span> : String</span></div><div class='description'><div class='short'><p>HTTP verb: <code>GET</code>, <code>PUT</code>, <code>POST</code> or <code>DELETE</code>.</p>\n</div><div class='long'><p>HTTP verb: <code>GET</code>, <code>PUT</code>, <code>POST</code> or <code>DELETE</code>.</p>\n</div></div></div><div id='property-model' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Arrow.API'>Arrow.API</span></div><a href='#!/api/Arrow.API-property-model' class='name expandable'>model</a><span> : <a href=\"#!/api/Arrow.Model\" rel=\"Arrow.Model\" class=\"docClass\">Arrow.Model</a></span></div><div class='description'><div class='short'>The model to use for the request. ...</div><div class='long'><p>The model to use for the request. Passed as the <code>model</code> property in the <code>request</code> and <code>response</code>\nobjects of the <a href=\"#!/api/Arrow.API-property-action\" rel=\"Arrow.API-property-action\" class=\"docClass\">action</a> function.</p>\n</div></div></div><div id='property-nickname' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Arrow.API'>Arrow.API</span></div><a href='#!/api/Arrow.API-property-nickname' class='name expandable'>nickname</a><span> : String</span></div><div class='description'><div class='short'>Alternative identifier for the API. ...</div><div class='long'><p>Alternative identifier for the API. By default, the API is identified by its path and HTTP verb.\nIf you do not specify a nickname, this property will be set to the path.</p>\n</div></div></div><div id='property-parameters' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Arrow.API'>Arrow.API</span></div><a href='#!/api/Arrow.API-property-parameters' class='name expandable'>parameters</a><span> : Object</span></div><div class='description'><div class='short'>Input parameters required to execute the API endpoint. ...</div><div class='long'><p>Input parameters required to execute the API endpoint. This is an object of key-value pairs,\nwhere the key is the name of the parameter and the value is an object with the following properties:</p>\n\n<ul>\n<li>optional (Boolean): Determines if the parameter is optional (<code>true</code>) or required (<code>false</code>).</li>\n<li>type (String): the type of input parameter: <code>path</code> or <code>query</code>.</li>\n<li>description (String): used for generating API documentation.</li>\n</ul>\n\n</div></div></div><div id='property-path' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Arrow.API'>Arrow.API</span></div><a href='#!/api/Arrow.API-property-path' class='name not-expandable'>path</a><span> : String</span></div><div class='description'><div class='short'><p>API endpoint.</p>\n</div><div class='long'><p>API endpoint.</p>\n</div></div></div><div id='property-plural' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Arrow.API'>Arrow.API</span></div><a href='#!/api/Arrow.API-property-plural' class='name expandable'>plural</a><span> : String</span></div><div class='description'><div class='short'>A string used as the property name when your API endpoint returns an array. ...</div><div class='long'><p>A string used as the property name when your API endpoint returns an array.\nBy default, the plural value is the plural of the model name.\nFor example, if your model is named car, the default plural would be cars.</p>\n</div></div></div><div id='property-post' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Arrow.API'>Arrow.API</span></div><a href='#!/api/Arrow.API-property-post' class='name expandable'>post</a><span> : String/Array&lt;String&gt;</span></div><div class='description'><div class='short'>One or more Blocks to be executed after the request. ...</div><div class='long'><p>One or more Blocks to be executed after the request. Blocks are referenced by their\nname property. If you want to execute multiple blocks, you should specify them as an\narray of block names. If multiple blocks are specified, they are executed in the order specified.\nSpecify either <code>after</code> or <code>post</code> but not both.</p>\n</div></div></div><div id='property-pre' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Arrow.API'>Arrow.API</span></div><a href='#!/api/Arrow.API-property-pre' class='name expandable'>pre</a><span> : String/Array&lt;String&gt;</span></div><div class='description'><div class='short'>One or more Blocks to be executed before the request. ...</div><div class='long'><p>One or more Blocks to be executed before the request. Blocks are referenced by their\nname property. If you want to execute multiple blocks, you should specify them as an\narray of block names. If multiple blocks are specified, they are executed in the order specified.\nSpecify either <code>before</code> or <code>pre</code> but not both.</p>\n</div></div></div><div id='property-response' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Arrow.API'>Arrow.API</span></div><a href='#!/api/Arrow.API-property-response' class='name expandable'>response</a><span> : <a href=\"#!/api/Arrow.Model\" rel=\"Arrow.Model\" class=\"docClass\">Arrow.Model</a></span></div><div class='description'><div class='short'>The model to use for the response. ...</div><div class='long'><p>The model to use for the response. Only use the property if your request and response models are\ndifferent. Passed as the <code>modelResponse</code> property in the <code>request</code> and <code>response</code>\nobjects of the <a href=\"#!/api/Arrow.API-property-action\" rel=\"Arrow.API-property-action\" class=\"docClass\">action</a> function.</p>\n</div></div></div><div id='property-route' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Arrow.API'>Arrow.API</span></div><a href='#!/api/Arrow.API-property-route' class='name not-expandable'>route</a><span> : Object</span><strong class='nonCreation signature' >Non-Creation</strong></div><div class='description'><div class='short'><p>Express route instance that binds the endpoint to the logic.</p>\n</div><div class='long'><p>Express route instance that binds the endpoint to the logic.</p>\n</div></div></div><div id='property-singular' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Arrow.API'>Arrow.API</span></div><a href='#!/api/Arrow.API-property-singular' class='name expandable'>singular</a><span> : String</span></div><div class='description'><div class='short'>A string used as the property name when your API endpoint returns a single record. ...</div><div class='long'><p>A string used as the property name when your API endpoint returns a single record.\nBy default, the singular value is the name of the model.</p>\n</div></div></div><div id='property-timestamp' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Arrow.API'>Arrow.API</span></div><a href='#!/api/Arrow.API-property-timestamp' class='name not-expandable'>timestamp</a><span> : String</span><strong class='nonCreation signature' >Non-Creation</strong></div><div class='description'><div class='short'><p>Datetime when the route was last synced.</p>\n</div><div class='long'><p>Datetime when the route was last synced.</p>\n</div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance Methods</h3><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Arrow.API'>Arrow.API</span></div><strong class='new-keyword'>new</strong><a href='#!/api/Arrow.API-method-constructor' class='name expandable'>Arrow.API</a>( <span class='pre'>impl, config, arrow</span> ) : <a href=\"#!/api/Arrow.API\" rel=\"Arrow.API\" class=\"docClass\">Arrow.API</a></div><div class='description'><div class='short'>Creates a new API instance. ...</div><div class='long'><p>Creates a new API instance.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>impl</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a>&lt;<a href=\"#!/api/Arrow.API\" rel=\"Arrow.API\" class=\"docClass\">Arrow.API</a>&gt;<div class='sub-desc'><p>Implementation object.\nSet any API properties on the object except the ones marked non-creation. The following\nproperties must be set: <a href=\"#!/api/Arrow.API-property-action\" rel=\"Arrow.API-property-action\" class=\"docClass\">action</a>, <a href=\"#!/api/Arrow.API-property-description\" rel=\"Arrow.API-property-description\" class=\"docClass\">description</a>, <a href=\"#!/api/Arrow.API-property-group\" rel=\"Arrow.API-property-group\" class=\"docClass\">group</a> and <a href=\"#!/api/Arrow.API-property-path\" rel=\"Arrow.API-property-path\" class=\"docClass\">path</a>.</p>\n</div></li><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>Arrow configuration object.</p>\n</div></li><li><span class='pre'>arrow</span> : <a href=\"#!/api/Arrow\" rel=\"Arrow\" class=\"docClass\">Arrow</a><div class='sub-desc'><p>Arrow instance.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Arrow.API\" rel=\"Arrow.API\" class=\"docClass\">Arrow.API</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-bind' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Arrow.API'>Arrow.API</span></div><a href='#!/api/Arrow.API-method-bind' class='name expandable'>bind</a>( <span class='pre'>app</span> )</div><div class='description'><div class='short'>Binds this API to the app instance ...</div><div class='long'><p>Binds this API to the app instance</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>app</span> : Object<div class='sub-desc'><p>App instance.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'><a href=\"#!/api/Error\" rel=\"Error\" class=\"docClass\">Error</a></span><div class='sub-desc'><p>Missing app instance.</p>\n</div></li></ul></div></div></div><div id='method-execute' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Arrow.API'>Arrow.API</span></div><a href='#!/api/Arrow.API-method-execute' class='name expandable'>execute</a>( <span class='pre'>params, callback</span> )</div><div class='description'><div class='short'>Executes this API with the specified parameters. ...</div><div class='long'><p>Executes this API with the specified parameters.\nResults are sent to to the callback.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>params</span> : Object<div class='sub-desc'><p>API parameters.</p>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>Callback passed an Error object (or null if successful) and the results.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-executeAfterEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Arrow.API'>Arrow.API</span></div><a href='#!/api/Arrow.API-method-executeAfterEvent' class='name expandable'>executeAfterEvent</a>( <span class='pre'>req, resp, callback</span> )</div><div class='description'><div class='short'>Handles sending pubsub event if afterEvent property is set on the API ...</div><div class='long'><p>Handles sending pubsub event if afterEvent property is set on the API</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>req</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>resp</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-executeBeforeEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Arrow.API'>Arrow.API</span></div><a href='#!/api/Arrow.API-method-executeBeforeEvent' class='name expandable'>executeBeforeEvent</a>( <span class='pre'>req, resp, callback</span> )</div><div class='description'><div class='short'>Handles sending pubsub event if beforeEvent property is set on the API ...</div><div class='long'><p>Handles sending pubsub event if beforeEvent property is set on the API</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>req</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>resp</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-executeEventTransform' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Arrow.API'>Arrow.API</span></div><a href='#!/api/Arrow.API-method-executeEventTransform' class='name expandable'>executeEventTransform</a>( <span class='pre'>when, name, data, req, resp, callback</span> )</div><div class='description'><div class='short'>Handles event transformation if a eventTransformer property is set on the API ...</div><div class='long'><p>Handles event transformation if a eventTransformer property is set on the API</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>when</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>name</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>req</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>resp</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-extend' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Arrow.API'>Arrow.API</span></div><a href='#!/api/Arrow.API-method-extend' class='name expandable'>extend</a>( <span class='pre'>impl</span> ) : Function</div><div class='description'><div class='short'>Returns a constructor function to generate a new API by extending this instance. ...</div><div class='long'><p>Returns a constructor function to generate a new API by extending this instance.\nPass the constructor an Arrow configuration object, Arrow instance, and optionally a filename.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>impl</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a>&lt;<a href=\"#!/api/Arrow.API\" rel=\"Arrow.API\" class=\"docClass\">Arrow.API</a>&gt;<div class='sub-desc'><p>Implementation object.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Function</span><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'><a href=\"#!/api/Error\" rel=\"Error\" class=\"docClass\">Error</a></span><div class='sub-desc'><p>Missing required parameter.</p>\n</div></li></ul></div></div></div><div id='method-getRequestURL' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Arrow.API'>Arrow.API</span></div><a href='#!/api/Arrow.API-method-getRequestURL' class='name expandable'>getRequestURL</a>( <span class='pre'>req</span> )</div><div class='description'><div class='short'>for a request, return a url ...</div><div class='long'><p>for a request, return a url</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>req</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-reload' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Arrow.API'>Arrow.API</span></div><a href='#!/api/Arrow.API-method-reload' class='name expandable'>reload</a>( <span class='pre'>arrow, [callback]</span> )</div><div class='description'><div class='short'>Reloads the API for the Arrow instance. ...</div><div class='long'><p>Reloads the API for the Arrow instance.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>arrow</span> : Object<div class='sub-desc'><p>Arrow instance.</p>\n</div></li><li><span class='pre'>callback</span> : Function (optional)<div class='sub-desc'><p>Callback passed an Error object (or null if successful) and the reloaded API.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-remove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Arrow.API'>Arrow.API</span></div><a href='#!/api/Arrow.API-method-remove' class='name expandable'>remove</a>( <span class='pre'>arrow, [callback]</span> )</div><div class='description'><div class='short'>Removes the API from the Arrow instance. ...</div><div class='long'><p>Removes the API from the Arrow instance.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>arrow</span> : Object<div class='sub-desc'><p>Arrow instance.</p>\n</div></li><li><span class='pre'>callback</span> : Function (optional)<div class='sub-desc'><p>Callback passed an Error object (or null if successful) and the removed API.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static Methods</h3><div id='static-method-extend' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Arrow.API'>Arrow.API</span></div><a href='#!/api/Arrow.API-static-method-extend' class='name expandable'>extend</a>( <span class='pre'>impl</span> ) : Function<strong class='static signature' >static</strong></div><div class='description'><div class='short'>Returns a constructor function to generate a new API endpoint. ...</div><div class='long'><p>Returns a constructor function to generate a new API endpoint.\nPass the constructor an Arrow configuration object, Arrow instance, and optionally a filename.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>impl</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a>&lt;<a href=\"#!/api/Arrow.API\" rel=\"Arrow.API\" class=\"docClass\">Arrow.API</a>&gt;<div class='sub-desc'><p>Implementation object.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Function</span><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'><a href=\"#!/api/Error\" rel=\"Error\" class=\"docClass\">Error</a></span><div class='sub-desc'><p>Missing required parameter.</p>\n</div></li></ul></div></div></div><div id='static-method-getAPIsForPath' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Arrow.API'>Arrow.API</span></div><a href='#!/api/Arrow.API-static-method-getAPIsForPath' class='name expandable'>getAPIsForPath</a>( <span class='pre'>path</span> ) : Array&lt;<a href=\"#!/api/Arrow.API\" rel=\"Arrow.API\" class=\"docClass\">Arrow.API</a>&gt;<strong class='static signature' >static</strong></div><div class='description'><div class='short'>Returns an API for the given path. ...</div><div class='long'><p>Returns an API for the given path.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>path</span> : String<div class='sub-desc'><p>API path.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array&lt;<a href=\"#!/api/Arrow.API\" rel=\"Arrow.API\" class=\"docClass\">Arrow.API</a>&gt;</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});