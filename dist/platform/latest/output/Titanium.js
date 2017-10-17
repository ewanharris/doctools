Ext.data.JsonP['Titanium']({"tagname":"class","name":"Titanium","extends":"Titanium.Module","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["android 0.8","iphone 0.8","ipad 0.8","windowsphone 4.1.0"],"editurl":"https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/Titanium.yml","description":["<p>The Titanium module provides the Titanium Mobile API, allowing developers to access native\nfeatures of each target environment. Currently, the Android and iOSenvironments are supported.</p>\n\n<h4>Titanium Namespace</h4>\n\n<p>The complete Titanium API is accessible from the <code>Titanium</code> namespace but, for convenience and\nbrevity, the alias <code>Ti</code> is also provided. As the <code>Titanium</code> namespace is functionally-identical\nto its <code>Ti</code> alias, it is always recommended to use <code>Ti</code> in your code.</p>\n\n<p>For example, the following pairs of Titanium calls behave exactly the same.</p>\n\n<pre><code>Titanium.API.info('Hello Titanium!');\nTi.API.info('Hello Titanium!');\n\nTitanium.Utils.sha256('Hello Titanium!');\nTi.Utils.sha256('Hello Titanium!');\n\nTitanium.App.Properties.setString('hello_msg','Hello Titanium!');\nTi.App.Properties.setString('hello_msg','Hello Titanium!');\n\nTitanium.Database.open('mydb');\nTi.Database.open('mydb');\n</code></pre>\n\n<h4>Global APIs</h4>\n\n<p>Titanium includes a number of built-in JavaScript objects that are not part of the Titanium\nnamespace, including JSON parsing, String formatting, timers, and the CommonJS <code>require</code> function.\nSee {@link Global Global APIs} for details.</p>"]},"private":null,"id":"class-Titanium","members":{"cfg":[],"property":[{"name":"apiName","tagname":"property","owner":"Titanium.Proxy","meta":{"readonly":true,"description":["<p>The value of this property is the fully qualified name of the API. For example, {@link Titanium.UI.Button Button}\nreturns <code>Ti.UI.Button</code>.</p>"],"platform":["android 3.2.0","iphone 3.2.0","ipad 3.2.0","windowsphone 4.1.0"]},"id":"property-apiName"},{"name":"bubbleParent","tagname":"property","owner":"Titanium.Proxy","meta":{"description":["<p>Some proxies (most commonly views) have a relationship to other proxies, often\nestablished by the add() method. For example, for a button added to a window, a\nclick event on the button would bubble up to the window. Other common parents are\ntable sections to their rows, table views to their sections, and scrollable views\nto their views. Set this property to false to disable the bubbling to the proxy's parent.</p>"],"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","windowsphone 4.1.0"]},"id":"property-bubbleParent"},{"name":"buildDate","tagname":"property","owner":"Titanium","meta":{"readonly":true},"id":"property-buildDate"},{"name":"buildHash","tagname":"property","owner":"Titanium","meta":{"readonly":true},"id":"property-buildHash"},{"name":"lifecycleContainer","tagname":"property","owner":"Titanium.Proxy","meta":{"description":["<p>If this property is set to a Window or TabGroup, then the corresponding Activity lifecycle event callbacks\nwill also be called on the proxy. Proxies that require the activity lifecycle will need this property set\nto the appropriate containing Window or TabGroup.</p>"],"platform":["android 3.6.0","windowsphone 4.1.0"]},"id":"property-lifecycleContainer"},{"name":"userAgent","tagname":"property","owner":"Titanium","meta":{},"id":"property-userAgent"},{"name":"version","tagname":"property","owner":"Titanium","meta":{"readonly":true},"id":"property-version"}],"method":[{"name":"addEventListener","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-addEventListener"},{"name":"applyProperties","tagname":"method","owner":"Titanium.Proxy","meta":{"description":["<p>Properties are supplied as a dictionary. Each key-value pair in the object is applied to the proxy such that\nmyproxy[key] = value.</p>"],"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","windowsphone 4.1.0"]},"id":"method-applyProperties"},{"name":"createBuffer","tagname":"method","owner":"Titanium","meta":{},"id":"method-createBuffer"},{"name":"createProxy","tagname":"method","owner":"Titanium","meta":{},"id":"method-createProxy"},{"name":"fireEvent","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-fireEvent"},{"name":"getApiName","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.2.0","iphone 3.2.0","ipad 3.2.0","windowsphone 4.1.0"]},"id":"method-getApiName"},{"name":"getBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","windowsphone 4.1.0"]},"id":"method-getBubbleParent"},{"name":"getBuildDate","tagname":"method","owner":"Titanium","meta":{},"id":"method-getBuildDate"},{"name":"getBuildHash","tagname":"method","owner":"Titanium","meta":{},"id":"method-getBuildHash"},{"name":"getLifecycleContainer","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.6.0","windowsphone 4.1.0"]},"id":"method-getLifecycleContainer"},{"name":"getUserAgent","tagname":"method","owner":"Titanium","meta":{},"id":"method-getUserAgent"},{"name":"getVersion","tagname":"method","owner":"Titanium","meta":{},"id":"method-getVersion"},{"name":"removeEventListener","tagname":"method","owner":"Titanium.Proxy","meta":{"description":["<p>Multiple listeners can be registered for the same event, so the\n<code>callback</code> parameter is used to determine which listener to remove.</p>\n\n<p>When adding a listener, you must save a reference to the callback function\nin order to remove the listener later:</p>\n\n<pre><code>var listener = function() { Ti.API.info(\"Event listener called.\"); }\nwindow.addEventListener('click', listener);\n</code></pre>\n\n<p>To remove the listener, pass in a reference to the callback function:</p>\n\n<pre><code>window.removeEventListener('click', listener);\n</code></pre>"]},"id":"method-removeEventListener"},{"name":"setBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","windowsphone 4.1.0"]},"id":"method-setBubbleParent"},{"name":"setLifecycleContainer","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.6.0","windowsphone 4.1.0"]},"id":"method-setLifecycleContainer"},{"name":"setUserAgent","tagname":"method","owner":"Titanium","meta":{},"id":"method-setUserAgent"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":120641,"files":[{"filename":"titanium.js","href":"titanium.html#Titanium"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-android'\n        title='Android'>0.8</li><li class='platform-iphone'\n        title='iPhone'>0.8</li><li class='platform-ipad'\n        title='iPad'>0.8</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul>","editurl":null,"description":"<p><p>The Titanium module provides the Titanium Mobile API, allowing developers to access native\nfeatures of each target environment. Currently, the Android and iOSenvironments are supported.</p>\n\n\n\n\n<h4>Titanium Namespace</h4>\n\n\n\n\n<p>The complete Titanium API is accessible from the <code>Titanium</code> namespace but, for convenience and\nbrevity, the alias <code>Ti</code> is also provided. As the <code>Titanium</code> namespace is functionally-identical\nto its <code>Ti</code> alias, it is always recommended to use <code>Ti</code> in your code.</p>\n\n\n\n\n<p>For example, the following pairs of Titanium calls behave exactly the same.</p>\n\n\n\n\n<pre><code><a href=\"#!/api/Titanium.API-method-info\" rel=\"Titanium.API-method-info\" class=\"docClass\">Titanium.API.info</a>('Hello Titanium!');\nTi.API.info('Hello Titanium!');\n\n<a href=\"#!/api/Titanium.Utils-method-sha256\" rel=\"Titanium.Utils-method-sha256\" class=\"docClass\">Titanium.Utils.sha256</a>('Hello Titanium!');\nTi.Utils.sha256('Hello Titanium!');\n\n<a href=\"#!/api/Titanium.App.Properties-method-setString\" rel=\"Titanium.App.Properties-method-setString\" class=\"docClass\">Titanium.App.Properties.setString</a>('hello_msg','Hello Titanium!');\nTi.App.Properties.setString('hello_msg','Hello Titanium!');\n\n<a href=\"#!/api/Titanium.Database-method-open\" rel=\"Titanium.Database-method-open\" class=\"docClass\">Titanium.Database.open</a>('mydb');\nTi.Database.open('mydb');\n</code></pre>\n\n\n\n\n<h4>Global APIs</h4>\n\n\n\n\n<p>Titanium includes a number of built-in JavaScript objects that are not part of the Titanium\nnamespace, including JSON parsing, String formatting, timers, and the CommonJS <code>require</code> function.\nSee <a href=\"#!/api/Global\" rel=\"Global\" class=\"docClass\">Global APIs</a> for details.</p>\n\n</p>"},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Titanium.Proxy","Titanium.Module","Titanium"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-android' title='Android since Titanium SDK 0.8'>Android 0.8</li><li class='platform-iphone' title='iPhone since Titanium SDK 0.8'>iPhone 0.8</li><li class='platform-ipad' title='iPad since Titanium SDK 0.8'>iPad 0.8</li><li class='platform-windowsphone' title='Windows Phone since Titanium SDK 4.1.0'>Windows Phone 4.1.0</li></ul></div><div class='hierarchy'><div class='classes'><div class='subclass'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='docClass'>Titanium.Proxy</a></div><div class='subclass'> &gt; <a href='#!/api/Titanium.Module' rel='Titanium.Module' class='docClass'>Titanium.Module</a></div><div class='subclass'> &gt; <strong>Titanium</strong></div></div></div><div class='doc-contents'><p>The top-level Titanium module.</p>\n\n<p><p>The Titanium module provides the Titanium Mobile API, allowing developers to access native\nfeatures of each target environment. Currently, the Android and iOSenvironments are supported.</p>\n\n\n\n\n<h4>Titanium Namespace</h4>\n\n\n\n\n<p>The complete Titanium API is accessible from the <code>Titanium</code> namespace but, for convenience and\nbrevity, the alias <code>Ti</code> is also provided. As the <code>Titanium</code> namespace is functionally-identical\nto its <code>Ti</code> alias, it is always recommended to use <code>Ti</code> in your code.</p>\n\n\n\n\n<p>For example, the following pairs of Titanium calls behave exactly the same.</p>\n\n\n\n\n<pre><code><a href=\"#!/api/Titanium.API-method-info\" rel=\"Titanium.API-method-info\" class=\"docClass\">Titanium.API.info</a>('Hello Titanium!');\nTi.API.info('Hello Titanium!');\n\n<a href=\"#!/api/Titanium.Utils-method-sha256\" rel=\"Titanium.Utils-method-sha256\" class=\"docClass\">Titanium.Utils.sha256</a>('Hello Titanium!');\nTi.Utils.sha256('Hello Titanium!');\n\n<a href=\"#!/api/Titanium.App.Properties-method-setString\" rel=\"Titanium.App.Properties-method-setString\" class=\"docClass\">Titanium.App.Properties.setString</a>('hello_msg','Hello Titanium!');\nTi.App.Properties.setString('hello_msg','Hello Titanium!');\n\n<a href=\"#!/api/Titanium.Database-method-open\" rel=\"Titanium.Database-method-open\" class=\"docClass\">Titanium.Database.open</a>('mydb');\nTi.Database.open('mydb');\n</code></pre>\n\n\n\n\n<h4>Global APIs</h4>\n\n\n\n\n<p>Titanium includes a number of built-in JavaScript objects that are not part of the Titanium\nnamespace, including JSON parsing, String formatting, timers, and the CommonJS <code>require</code> function.\nSee <a href=\"#!/api/Global\" rel=\"Global\" class=\"docClass\">Global APIs</a> for details.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>0.8</li><li class='platform-iphone'\n        title='iPhone'>0.8</li><li class='platform-ipad'\n        title='iPad'>0.8</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-apiName' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-apiName' class='name not-expandable'>apiName</a><span> : String</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The name of the API that this proxy corresponds to.</p>\n\n</div><div class='long'><p>The name of the API that this proxy corresponds to.</p>\n\n<p><p>The value of this property is the fully qualified name of the API. For example, <a href=\"#!/api/Titanium.UI.Button\" rel=\"Titanium.UI.Button\" class=\"docClass\">Button</a>\nreturns <code>Ti.UI.Button</code>.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.0</li><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul></div></div></div><div id='property-bubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-bubbleParent' class='name expandable'>bubbleParent</a><span> : Boolean</span></div><div class='description'><div class='short'>Indicates if the proxy will bubble an event to its parent. ...</div><div class='long'><p>Indicates if the proxy will bubble an event to its parent.</p>\n\n<p><p>Some proxies (most commonly views) have a relationship to other proxies, often\nestablished by the add() method. For example, for a button added to a window, a\nclick event on the button would bubble up to the window. Other common parents are\ntable sections to their rows, table views to their sections, and scrollable views\nto their views. Set this property to false to disable the bubbling to the proxy's parent.</p>\n\n</p><p>Default: true</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul></div></div></div><div id='property-buildDate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium'>Titanium</span></div><a href='#!/api/Titanium-property-buildDate' class='name not-expandable'>buildDate</a><span> : String</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>Date of the Titanium build.</p>\n\n</div><div class='long'><p>Date of the Titanium build.</p>\n\n</div></div></div><div id='property-buildHash' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium'>Titanium</span></div><a href='#!/api/Titanium-property-buildHash' class='name not-expandable'>buildHash</a><span> : String</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>Git hash of the Titanium build.</p>\n\n</div><div class='long'><p>Git hash of the Titanium build.</p>\n\n</div></div></div><div id='property-lifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-lifecycleContainer' class='name not-expandable'>lifecycleContainer</a><span> : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></span></div><div class='description'><div class='short'><p>The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.</p>\n\n</div><div class='long'><p>The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.</p>\n\n<p><p>If this property is set to a Window or TabGroup, then the corresponding Activity lifecycle event callbacks\nwill also be called on the proxy. Proxies that require the activity lifecycle will need this property set\nto the appropriate containing Window or TabGroup.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul></div></div></div><div id='property-userAgent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium'>Titanium</span></div><a href='#!/api/Titanium-property-userAgent' class='name not-expandable'>userAgent</a><span> : String</span></div><div class='description'><div class='short'><p>User-agent string used by Titanium.</p>\n\n</div><div class='long'><p>User-agent string used by Titanium.</p>\n\n</div></div></div><div id='property-version' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium'>Titanium</span></div><a href='#!/api/Titanium-property-version' class='name not-expandable'>version</a><span> : String</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>Version of Titanium that is executing.</p>\n\n</div><div class='long'><p>Version of Titanium that is executing.</p>\n\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addEventListener' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-addEventListener' class='name expandable'>addEventListener</a>( <span class='pre'>name, callback</span> )</div><div class='description'><div class='short'>Adds the specified callback as an event listener for the named event. ...</div><div class='long'><p>Adds the specified callback as an event listener for the named event.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;Object&gt;<div class='sub-desc'><p>Callback function to invoke when the event is fired.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-applyProperties' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-applyProperties' class='name expandable'>applyProperties</a>( <span class='pre'>props</span> )</div><div class='description'><div class='short'>Applies the properties to the proxy. ...</div><div class='long'><p>Applies the properties to the proxy.</p>\n\n<p><p>Properties are supplied as a dictionary. Each key-value pair in the object is applied to the proxy such that\nmyproxy[key] = value.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>props</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of properties to apply.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-createBuffer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium'>Titanium</span></div><a href='#!/api/Titanium-method-createBuffer' class='name expandable'>createBuffer</a>( <span class='pre'>params</span> ) : <a href=\"#!/api/Titanium.Buffer\" rel=\"Titanium.Buffer\" class=\"docClass\">Titanium.Buffer</a></div><div class='description'><div class='short'>Creates a new buffer based on the params. ...</div><div class='long'><p>Creates a new buffer based on the params.</p>\n\n\n\n\n<h3>Examples</h3>\n\n\n<h4>Create a buffer with 1K bytes</h4>\n\n\n<pre><code>var buffer = Ti.createBuffer({ length: 1024 });</code></pre>\n\n\n<h4>Create a buffer with string</h4>\n\n\n<p>Create a buffer with the string \"hello world\" encoded in UTF-8</p>\n\n\n\n\n<pre><code>var buffer = Ti.createBuffer({ value: \"hello world\" });\n</code></pre>\n\n\n<h4>Create a buffer with encoded float</h4>\n\n\n<p>Create a buffer with the encoded value of the double-precision floating point\nnumber 1.234567 in Big Endian (network) byte order</p>\n\n\n\n\n<pre><code>var buffer = Ti.createBuffer({ value: 1.234567, type: Ti.Codec.TYPE_DOUBLE, byteOrder: Ti.Codec.BIG_ENDIAN });\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>params</span> : <a href=\"#!/api/CreateBufferArgs\" rel=\"CreateBufferArgs\" class=\"docClass\">CreateBufferArgs</a><div class='sub-desc'><p>creation arguments</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Titanium.Buffer\" rel=\"Titanium.Buffer\" class=\"docClass\">Titanium.Buffer</a></span><div class='sub-desc'><p>The new buffer.</p>\n</div></li></ul></div></div></div><div id='method-createProxy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium'>Titanium</span></div><a href='#!/api/Titanium-method-createProxy' class='name expandable'>createProxy</a>( <span class='pre'>[parameters]</span> ) : <a href=\"#!/api/Titanium.Proxy\" rel=\"Titanium.Proxy\" class=\"docClass\">Titanium.Proxy</a></div><div class='description'><div class='short'>Creates and returns an instance of Titanium.Proxy. ...</div><div class='long'><p>Creates and returns an instance of <a href=\"#!/api/Titanium.Proxy\" rel=\"Titanium.Proxy\" class=\"docClass\">Titanium.Proxy</a>.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>parameters</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a>&lt;<a href=\"#!/api/Titanium.Proxy\" rel=\"Titanium.Proxy\" class=\"docClass\">Titanium.Proxy</a>&gt; (optional)<div class='sub-desc'><p>Properties to set on a new object, including any defined by <a href=\"#!/api/Titanium.Proxy\" rel=\"Titanium.Proxy\" class=\"docClass\">Titanium.Proxy</a> except those marked not-creation or read-only.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Titanium.Proxy\" rel=\"Titanium.Proxy\" class=\"docClass\">Titanium.Proxy</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-fireEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-fireEvent' class='name expandable'>fireEvent</a>( <span class='pre'>name, event</span> )</div><div class='description'><div class='short'>Fires a synthesized event to any registered listeners. ...</div><div class='long'><p>Fires a synthesized event to any registered listeners.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>event</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of keys and values to add to the <a href=\"#!/api/Titanium.Event\" rel=\"Titanium.Event\" class=\"docClass\">Titanium.Event</a> object sent to the listeners.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-getApiName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getApiName' class='name expandable'>getApiName</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Gets the value of the apiName property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-apiName\" rel=\"Titanium.Proxy-property-apiName\" class=\"docClass\">apiName</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.0</li><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getBubbleParent' class='name expandable'>getBubbleParent</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Gets the value of the bubbleParent property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getBuildDate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium'>Titanium</span></div><a href='#!/api/Titanium-method-getBuildDate' class='name expandable'>getBuildDate</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Gets the value of the buildDate property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium-property-buildDate\" rel=\"Titanium-property-buildDate\" class=\"docClass\">buildDate</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getBuildHash' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium'>Titanium</span></div><a href='#!/api/Titanium-method-getBuildHash' class='name expandable'>getBuildHash</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Gets the value of the buildHash property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium-property-buildHash\" rel=\"Titanium-property-buildHash\" class=\"docClass\">buildHash</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getLifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getLifecycleContainer' class='name expandable'>getLifecycleContainer</a>( <span class='pre'></span> ) : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></div><div class='description'><div class='short'>Gets the value of the lifecycleContainer property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-lifecycleContainer\" rel=\"Titanium.Proxy-property-lifecycleContainer\" class=\"docClass\">lifecycleContainer</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getUserAgent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium'>Titanium</span></div><a href='#!/api/Titanium-method-getUserAgent' class='name expandable'>getUserAgent</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Gets the value of the userAgent property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium-property-userAgent\" rel=\"Titanium-property-userAgent\" class=\"docClass\">userAgent</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getVersion' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium'>Titanium</span></div><a href='#!/api/Titanium-method-getVersion' class='name expandable'>getVersion</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Gets the value of the version property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium-property-version\" rel=\"Titanium-property-version\" class=\"docClass\">version</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-removeEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-removeEventListener' class='name expandable'>removeEventListener</a>( <span class='pre'>name, callback</span> )</div><div class='description'><div class='short'>Removes the specified callback as an event listener for the named event. ...</div><div class='long'><p>Removes the specified callback as an event listener for the named event.</p>\n\n<p><p>Multiple listeners can be registered for the same event, so the\n<code>callback</code> parameter is used to determine which listener to remove.</p>\n\n\n\n\n<p>When adding a listener, you must save a reference to the callback function\nin order to remove the listener later:</p>\n\n\n\n\n<pre><code>var listener = function() { Ti.API.info(\"Event listener called.\"); }\nwindow.addEventListener('click', listener);\n</code></pre>\n\n\n\n\n<p>To remove the listener, pass in a reference to the callback function:</p>\n\n\n\n\n<pre><code>window.removeEventListener('click', listener);\n</code></pre>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;Object&gt;<div class='sub-desc'><p>Callback function to remove. Must be the same function passed to <code>addEventListener</code>.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-setBubbleParent' class='name expandable'>setBubbleParent</a>( <span class='pre'>bubbleParent</span> )</div><div class='description'><div class='short'>Sets the value of the bubbleParent property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>bubbleParent</span> : Boolean<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setLifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-setLifecycleContainer' class='name expandable'>setLifecycleContainer</a>( <span class='pre'>lifecycleContainer</span> )</div><div class='description'><div class='short'>Sets the value of the lifecycleContainer property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Proxy-property-lifecycleContainer\" rel=\"Titanium.Proxy-property-lifecycleContainer\" class=\"docClass\">lifecycleContainer</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>lifecycleContainer</span> : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a><div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setUserAgent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium'>Titanium</span></div><a href='#!/api/Titanium-method-setUserAgent' class='name expandable'>setUserAgent</a>( <span class='pre'>userAgent</span> )</div><div class='description'><div class='short'>Sets the value of the userAgent property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium-property-userAgent\" rel=\"Titanium-property-userAgent\" class=\"docClass\">userAgent</a> property.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>userAgent</span> : String<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div></div></div></div></div>"});