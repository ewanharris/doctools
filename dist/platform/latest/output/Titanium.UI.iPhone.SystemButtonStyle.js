Ext.data.JsonP['Titanium_UI_iPhone_SystemButtonStyle']({"tagname":"class","name":"Titanium.UI.iPhone.SystemButtonStyle","extends":"Titanium.Proxy","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["iphone 0.8","ipad 0.8"],"editurl":"https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/iPhone/SystemButtonStyle.yml","deprecated":{"version":"5.4.0","text":"Use <Titanium.UI.iOS.SystemButtonStyle> instead."},"description":["<p>These constants represent standard iOS system button styles that affect the \n{@link Titanium.UI.Button Button}, {@link Titanium.UI.ButtonBar ButtonBar}, and \n{@link Titanium.UI.iOS.TabbedBar TabbedBar} UI elements.</p>\n\n<p>The different styles are used in different places. For normal buttons which are <strong>not</strong> \ncontained in a nav bar, toolbar, button bar or tabbed bar, the following styles apply:</p>\n\n<ul>\n<li><code>BORDERED</code>. Simple button style with a rounded border and a white background. \n        The default style for normal buttons.</li>\n<li><code>DONE</code>. Like the bordered button, but with a blue background. Button style for a button \n    that indicates completion, such as OK, Save, or Go. </li>\n<li><code>PLAIN</code> Button style for an undecorated button. </li>\n</ul>\n\n<p>Note that if you specify the <code>PLAIN</code> style, you must style the button using the other button \nproperties. For example, there is no indication that the button has been pressed unless you set \nother properties for the selected state, such as <code>backgroundSelectedImage</code> and <code>selectedColor</code>.</p>\n\n<p>When you add a button to a {@link Titanium.UI.iOS.Toolbar Toolbar}, the styles have a slightly \ndifferent effect:</p>\n\n<ul>\n<li><code>PLAIN</code> Button style for an undecorated button with large text and a <em>glow</em> effect when the \nbutton is pressed. Default style for buttons in toolbars.</li>\n<li><code>BORDERED</code>. Simple button style with a rounded border and a light blue background. </li>\n<li><code>DONE</code>. Like the bordered button, but with a dark blue background. </li>\n</ul>\n\n<p>For <code>TabbedBar</code> and <code>ButtonBar</code> controls, styles have the following meaning:</p>\n\n<ul>\n<li><code>PLAIN</code>. Default style for <code>ButtonBar</code> and <code>TabbedBar</code>.</li>\n<li><code>BORDERED</code>. Creates a bar like the <code>PLAIN</code> bar, but with a heavier border.</li>\n<li><code>BAR</code>. Used on <code>ButtonBar</code> and <code>TabbedBar</code> controls to produce a more compact bar with \ntranslucent buttons that allow the bar's background color to show through.</li>\n</ul>"]},"private":null,"id":"class-Titanium.UI.iPhone.SystemButtonStyle","members":{"cfg":[],"property":[{"name":"BAR","tagname":"property","owner":"Titanium.UI.iPhone.SystemButtonStyle","meta":{"readonly":true,"removed":{"version":"3.6.0","text":""},"description":["<p>To use a background color or gradient on a <code>ButtonBar</code> or <code>TabbedBar</code> control, you must use \nthe <code>BAR</code> style. This style creates translucent buttons that allow the bar's background \ncolor to show through.</p>"]},"id":"property-BAR"},{"name":"BORDERED","tagname":"property","owner":"Titanium.UI.iPhone.SystemButtonStyle","meta":{"readonly":true},"id":"property-BORDERED"},{"name":"DONE","tagname":"property","owner":"Titanium.UI.iPhone.SystemButtonStyle","meta":{"readonly":true,"description":["<p>Used in toolbars and navigation bars.</p>"]},"id":"property-DONE"},{"name":"PLAIN","tagname":"property","owner":"Titanium.UI.iPhone.SystemButtonStyle","meta":{"readonly":true,"description":["<p>In toolbars, this specifies an undecorated button with large text. A glow effect is used when \ntapped.</p>\n\n<p>In button bars and tabbed bars, specifies a button with large text that is highlighted when \ntapped.</p>\n\n<p>When used on a normal button (that is, outside of a navigation bar, toolbar, button bar or \ntabbed bar), <code>PLAIN</code> specifies a button with no built-in decoration except its title text. \nThis is the style you should choose if you want to supply your own background images, \nbackground gradient, and so on.</p>\n\n<p>Note that for tabbed bar or button bars, the {@link Titanium.UI.iPhone.SystemButtonStyle#property-BAR BAR} \nstyle is used to allow the bar's background color or gradient to show through.</p>"]},"id":"property-PLAIN"},{"name":"apiName","tagname":"property","owner":"Titanium.Proxy","meta":{"readonly":true,"description":["<p>The value of this property is the fully qualified name of the API. For example, {@link Titanium.UI.Button Button}\nreturns <code>Ti.UI.Button</code>.</p>"],"platform":["android 3.2.0","iphone 3.2.0","ipad 3.2.0","windowsphone 4.1.0"]},"id":"property-apiName"},{"name":"bubbleParent","tagname":"property","owner":"Titanium.Proxy","meta":{"description":["<p>Some proxies (most commonly views) have a relationship to other proxies, often\nestablished by the add() method. For example, for a button added to a window, a\nclick event on the button would bubble up to the window. Other common parents are\ntable sections to their rows, table views to their sections, and scrollable views\nto their views. Set this property to false to disable the bubbling to the proxy's parent.</p>"],"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","windowsphone 4.1.0"]},"id":"property-bubbleParent"},{"name":"lifecycleContainer","tagname":"property","owner":"Titanium.Proxy","meta":{"description":["<p>If this property is set to a Window or TabGroup, then the corresponding Activity lifecycle event callbacks\nwill also be called on the proxy. Proxies that require the activity lifecycle will need this property set\nto the appropriate containing Window or TabGroup.</p>"],"platform":["android 3.6.0","windowsphone 4.1.0"]},"id":"property-lifecycleContainer"}],"method":[{"name":"addEventListener","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-addEventListener"},{"name":"applyProperties","tagname":"method","owner":"Titanium.Proxy","meta":{"description":["<p>Properties are supplied as a dictionary. Each key-value pair in the object is applied to the proxy such that\nmyproxy[key] = value.</p>"],"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","windowsphone 4.1.0"]},"id":"method-applyProperties"},{"name":"fireEvent","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-fireEvent"},{"name":"getApiName","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.2.0","iphone 3.2.0","ipad 3.2.0","windowsphone 4.1.0"]},"id":"method-getApiName"},{"name":"getBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","windowsphone 4.1.0"]},"id":"method-getBubbleParent"},{"name":"getLifecycleContainer","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.6.0","windowsphone 4.1.0"]},"id":"method-getLifecycleContainer"},{"name":"removeEventListener","tagname":"method","owner":"Titanium.Proxy","meta":{"description":["<p>Multiple listeners can be registered for the same event, so the\n<code>callback</code> parameter is used to determine which listener to remove.</p>\n\n<p>When adding a listener, you must save a reference to the callback function\nin order to remove the listener later:</p>\n\n<pre><code>var listener = function() { Ti.API.info(\"Event listener called.\"); }\nwindow.addEventListener('click', listener);\n</code></pre>\n\n<p>To remove the listener, pass in a reference to the callback function:</p>\n\n<pre><code>window.removeEventListener('click', listener);\n</code></pre>"]},"id":"method-removeEventListener"},{"name":"setBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","windowsphone 4.1.0"]},"id":"method-setBubbleParent"},{"name":"setLifecycleContainer","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.6.0","windowsphone 4.1.0"]},"id":"method-setLifecycleContainer"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":245549,"files":[{"filename":"titanium.js","href":"titanium.html#Titanium-UI-iPhone-SystemButtonStyle"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>0.8</li><li class='platform-ipad'\n        title='iPad'>0.8</li></ul>","editurl":null,"deprecated":"        <div class='signature-box deprecated'>\n        <p><strong>deprecated</strong> since 5.4.0 <p>Use &lt;<a href=\"#!/api/Titanium.UI.iOS.SystemButtonStyle\" rel=\"Titanium.UI.iOS.SystemButtonStyle\" class=\"docClass\">Titanium.UI.iOS.SystemButtonStyle</a>> instead.</p>\n</p>\n        </div>\n","description":"<p><p>These constants represent standard iOS system button styles that affect the \n<a href=\"#!/api/Titanium.UI.Button\" rel=\"Titanium.UI.Button\" class=\"docClass\">Button</a>, <a href=\"#!/api/Titanium.UI.ButtonBar\" rel=\"Titanium.UI.ButtonBar\" class=\"docClass\">ButtonBar</a>, and \n<a href=\"#!/api/Titanium.UI.iOS.TabbedBar\" rel=\"Titanium.UI.iOS.TabbedBar\" class=\"docClass\">TabbedBar</a> UI elements.</p>\n\n\n\n\n<p>The different styles are used in different places. For normal buttons which are <strong>not</strong> \ncontained in a nav bar, toolbar, button bar or tabbed bar, the following styles apply:</p>\n\n\n\n\n<ul>\n<li><code>BORDERED</code>. Simple button style with a rounded border and a white background. \n        The default style for normal buttons.</li>\n<li><code>DONE</code>. Like the bordered button, but with a blue background. Button style for a button \n    that indicates completion, such as OK, Save, or Go. </li>\n<li><code>PLAIN</code> Button style for an undecorated button. </li>\n</ul>\n\n\n\n\n<p>Note that if you specify the <code>PLAIN</code> style, you must style the button using the other button \nproperties. For example, there is no indication that the button has been pressed unless you set \nother properties for the selected state, such as <code>backgroundSelectedImage</code> and <code>selectedColor</code>.</p>\n\n\n\n\n<p>When you add a button to a <a href=\"#!/api/Titanium.UI.iOS.Toolbar\" rel=\"Titanium.UI.iOS.Toolbar\" class=\"docClass\">Toolbar</a>, the styles have a slightly \ndifferent effect:</p>\n\n\n\n\n<ul>\n<li><code>PLAIN</code> Button style for an undecorated button with large text and a <em>glow</em> effect when the \nbutton is pressed. Default style for buttons in toolbars.</li>\n<li><code>BORDERED</code>. Simple button style with a rounded border and a light blue background. </li>\n<li><code>DONE</code>. Like the bordered button, but with a dark blue background. </li>\n</ul>\n\n\n\n\n<p>For <code>TabbedBar</code> and <code>ButtonBar</code> controls, styles have the following meaning:</p>\n\n\n\n\n<ul>\n<li><code>PLAIN</code>. Default style for <code>ButtonBar</code> and <code>TabbedBar</code>.</li>\n<li><code>BORDERED</code>. Creates a bar like the <code>PLAIN</code> bar, but with a heavier border.</li>\n<li><code>BAR</code>. Used on <code>ButtonBar</code> and <code>TabbedBar</code> controls to produce a more compact bar with \ntranslucent buttons that allow the bar's background color to show through.</li>\n</ul>\n\n</p>"},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Titanium.Proxy","Titanium.UI.iPhone.SystemButtonStyle"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-iphone' title='iPhone since Titanium SDK 0.8'>iPhone 0.8</li><li class='platform-ipad' title='iPad since Titanium SDK 0.8'>iPad 0.8</li></ul></div><div class='hierarchy'><div class='classes'><div class='subclass'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='docClass'>Titanium.Proxy</a></div><div class='subclass'> &gt; <strong>Titanium.UI.iPhone.SystemButtonStyle</strong></div></div></div><div class='doc-contents'><p>A set of constants for the system button styles that can be used for the button <code>style</code> property.</p>\n\n        <div class='signature-box deprecated'>\n        <p><strong>deprecated</strong> since 5.4.0 <p>Use &lt;<a href=\"#!/api/Titanium.UI.iOS.SystemButtonStyle\" rel=\"Titanium.UI.iOS.SystemButtonStyle\" class=\"docClass\">Titanium.UI.iOS.SystemButtonStyle</a>> instead.</p>\n</p>\n        </div>\n<p><p>These constants represent standard iOS system button styles that affect the \n<a href=\"#!/api/Titanium.UI.Button\" rel=\"Titanium.UI.Button\" class=\"docClass\">Button</a>, <a href=\"#!/api/Titanium.UI.ButtonBar\" rel=\"Titanium.UI.ButtonBar\" class=\"docClass\">ButtonBar</a>, and \n<a href=\"#!/api/Titanium.UI.iOS.TabbedBar\" rel=\"Titanium.UI.iOS.TabbedBar\" class=\"docClass\">TabbedBar</a> UI elements.</p>\n\n\n\n\n<p>The different styles are used in different places. For normal buttons which are <strong>not</strong> \ncontained in a nav bar, toolbar, button bar or tabbed bar, the following styles apply:</p>\n\n\n\n\n<ul>\n<li><code>BORDERED</code>. Simple button style with a rounded border and a white background. \n        The default style for normal buttons.</li>\n<li><code>DONE</code>. Like the bordered button, but with a blue background. Button style for a button \n    that indicates completion, such as OK, Save, or Go. </li>\n<li><code>PLAIN</code> Button style for an undecorated button. </li>\n</ul>\n\n\n\n\n<p>Note that if you specify the <code>PLAIN</code> style, you must style the button using the other button \nproperties. For example, there is no indication that the button has been pressed unless you set \nother properties for the selected state, such as <code>backgroundSelectedImage</code> and <code>selectedColor</code>.</p>\n\n\n\n\n<p>When you add a button to a <a href=\"#!/api/Titanium.UI.iOS.Toolbar\" rel=\"Titanium.UI.iOS.Toolbar\" class=\"docClass\">Toolbar</a>, the styles have a slightly \ndifferent effect:</p>\n\n\n\n\n<ul>\n<li><code>PLAIN</code> Button style for an undecorated button with large text and a <em>glow</em> effect when the \nbutton is pressed. Default style for buttons in toolbars.</li>\n<li><code>BORDERED</code>. Simple button style with a rounded border and a light blue background. </li>\n<li><code>DONE</code>. Like the bordered button, but with a dark blue background. </li>\n</ul>\n\n\n\n\n<p>For <code>TabbedBar</code> and <code>ButtonBar</code> controls, styles have the following meaning:</p>\n\n\n\n\n<ul>\n<li><code>PLAIN</code>. Default style for <code>ButtonBar</code> and <code>TabbedBar</code>.</li>\n<li><code>BORDERED</code>. Creates a bar like the <code>PLAIN</code> bar, but with a heavier border.</li>\n<li><code>BAR</code>. Used on <code>ButtonBar</code> and <code>TabbedBar</code> controls to produce a more compact bar with \ntranslucent buttons that allow the bar's background color to show through.</li>\n</ul>\n\n</p><ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>0.8</li><li class='platform-ipad'\n        title='iPad'>0.8</li></ul></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-BAR' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.UI.iPhone.SystemButtonStyle'>Titanium.UI.iPhone.SystemButtonStyle</span></div><a href='#!/api/Titanium.UI.iPhone.SystemButtonStyle-property-BAR' class='name not-expandable'>BAR</a><span> : Number</span><strong class='readonly signature' >readonly</strong><strong class='removed signature' >removed</strong></div><div class='description'><div class='short'><p>Used with <a href=\"#!/api/Titanium.UI.ButtonBar\" rel=\"Titanium.UI.ButtonBar\" class=\"docClass\">ButtonBar</a> or <a href=\"#!/api/Titanium.UI.iOS.TabbedBar\" rel=\"Titanium.UI.iOS.TabbedBar\" class=\"docClass\">TabbedBar</a> only, \nto use the more condensed style used in nav bars and tool bars.</p>\n\n</div><div class='long'><p>Used with <a href=\"#!/api/Titanium.UI.ButtonBar\" rel=\"Titanium.UI.ButtonBar\" class=\"docClass\">ButtonBar</a> or <a href=\"#!/api/Titanium.UI.iOS.TabbedBar\" rel=\"Titanium.UI.iOS.TabbedBar\" class=\"docClass\">TabbedBar</a> only, \nto use the more condensed style used in nav bars and tool bars.</p>\n\n        <div class='signature-box removed'>\n        <p>This property has been <strong>removed</strong> since 3.6.0</p>\n        \n\n        </div>\n<p><p>To use a background color or gradient on a <code>ButtonBar</code> or <code>TabbedBar</code> control, you must use \nthe <code>BAR</code> style. This style creates translucent buttons that allow the bar's background \ncolor to show through.</p>\n\n</p></div></div></div><div id='property-BORDERED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.UI.iPhone.SystemButtonStyle'>Titanium.UI.iPhone.SystemButtonStyle</span></div><a href='#!/api/Titanium.UI.iPhone.SystemButtonStyle-property-BORDERED' class='name not-expandable'>BORDERED</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>A simple button style with a border.</p>\n\n</div><div class='long'><p>A simple button style with a border.</p>\n\n</div></div></div><div id='property-DONE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.UI.iPhone.SystemButtonStyle'>Titanium.UI.iPhone.SystemButtonStyle</span></div><a href='#!/api/Titanium.UI.iPhone.SystemButtonStyle-property-DONE' class='name not-expandable'>DONE</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The style for a <strong>Done</strong> button--for example, a button that completes some task and returns \nto the previous view.</p>\n\n</div><div class='long'><p>The style for a <strong>Done</strong> button--for example, a button that completes some task and returns \nto the previous view.</p>\n\n<p><p>Used in toolbars and navigation bars.</p>\n\n</p></div></div></div><div id='property-PLAIN' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.UI.iPhone.SystemButtonStyle'>Titanium.UI.iPhone.SystemButtonStyle</span></div><a href='#!/api/Titanium.UI.iPhone.SystemButtonStyle-property-PLAIN' class='name not-expandable'>PLAIN</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>Specifies a borderless button, the default style for toolbars, button bars, and tabbed bars.</p>\n\n</div><div class='long'><p>Specifies a borderless button, the default style for toolbars, button bars, and tabbed bars.</p>\n\n<p><p>In toolbars, this specifies an undecorated button with large text. A glow effect is used when \ntapped.</p>\n\n\n\n\n<p>In button bars and tabbed bars, specifies a button with large text that is highlighted when \ntapped.</p>\n\n\n\n\n<p>When used on a normal button (that is, outside of a navigation bar, toolbar, button bar or \ntabbed bar), <code>PLAIN</code> specifies a button with no built-in decoration except its title text. \nThis is the style you should choose if you want to supply your own background images, \nbackground gradient, and so on.</p>\n\n\n\n\n<p>Note that for tabbed bar or button bars, the <a href=\"#!/api/Titanium.UI.iPhone.SystemButtonStyle-property-BAR\" rel=\"Titanium.UI.iPhone.SystemButtonStyle-property-BAR\" class=\"docClass\">BAR</a> \nstyle is used to allow the bar's background color or gradient to show through.</p>\n\n</p></div></div></div><div id='property-apiName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-apiName' class='name not-expandable'>apiName</a><span> : String</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The name of the API that this proxy corresponds to.</p>\n\n</div><div class='long'><p>The name of the API that this proxy corresponds to.</p>\n\n<p><p>The value of this property is the fully qualified name of the API. For example, <a href=\"#!/api/Titanium.UI.Button\" rel=\"Titanium.UI.Button\" class=\"docClass\">Button</a>\nreturns <code>Ti.UI.Button</code>.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.0</li><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul></div></div></div><div id='property-bubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-bubbleParent' class='name expandable'>bubbleParent</a><span> : Boolean</span></div><div class='description'><div class='short'>Indicates if the proxy will bubble an event to its parent. ...</div><div class='long'><p>Indicates if the proxy will bubble an event to its parent.</p>\n\n<p><p>Some proxies (most commonly views) have a relationship to other proxies, often\nestablished by the add() method. For example, for a button added to a window, a\nclick event on the button would bubble up to the window. Other common parents are\ntable sections to their rows, table views to their sections, and scrollable views\nto their views. Set this property to false to disable the bubbling to the proxy's parent.</p>\n\n</p><p>Default: true</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul></div></div></div><div id='property-lifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-lifecycleContainer' class='name not-expandable'>lifecycleContainer</a><span> : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></span></div><div class='description'><div class='short'><p>The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.</p>\n\n</div><div class='long'><p>The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.</p>\n\n<p><p>If this property is set to a Window or TabGroup, then the corresponding Activity lifecycle event callbacks\nwill also be called on the proxy. Proxies that require the activity lifecycle will need this property set\nto the appropriate containing Window or TabGroup.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addEventListener' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-addEventListener' class='name expandable'>addEventListener</a>( <span class='pre'>name, callback</span> )</div><div class='description'><div class='short'>Adds the specified callback as an event listener for the named event. ...</div><div class='long'><p>Adds the specified callback as an event listener for the named event.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;Object&gt;<div class='sub-desc'><p>Callback function to invoke when the event is fired.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-applyProperties' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-applyProperties' class='name expandable'>applyProperties</a>( <span class='pre'>props</span> )</div><div class='description'><div class='short'>Applies the properties to the proxy. ...</div><div class='long'><p>Applies the properties to the proxy.</p>\n\n<p><p>Properties are supplied as a dictionary. Each key-value pair in the object is applied to the proxy such that\nmyproxy[key] = value.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>props</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of properties to apply.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-fireEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-fireEvent' class='name expandable'>fireEvent</a>( <span class='pre'>name, event</span> )</div><div class='description'><div class='short'>Fires a synthesized event to any registered listeners. ...</div><div class='long'><p>Fires a synthesized event to any registered listeners.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>event</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of keys and values to add to the <a href=\"#!/api/Titanium.Event\" rel=\"Titanium.Event\" class=\"docClass\">Titanium.Event</a> object sent to the listeners.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-getApiName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getApiName' class='name expandable'>getApiName</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Gets the value of the apiName property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-apiName\" rel=\"Titanium.Proxy-property-apiName\" class=\"docClass\">apiName</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.0</li><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getBubbleParent' class='name expandable'>getBubbleParent</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Gets the value of the bubbleParent property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getLifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getLifecycleContainer' class='name expandable'>getLifecycleContainer</a>( <span class='pre'></span> ) : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></div><div class='description'><div class='short'>Gets the value of the lifecycleContainer property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-lifecycleContainer\" rel=\"Titanium.Proxy-property-lifecycleContainer\" class=\"docClass\">lifecycleContainer</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-removeEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-removeEventListener' class='name expandable'>removeEventListener</a>( <span class='pre'>name, callback</span> )</div><div class='description'><div class='short'>Removes the specified callback as an event listener for the named event. ...</div><div class='long'><p>Removes the specified callback as an event listener for the named event.</p>\n\n<p><p>Multiple listeners can be registered for the same event, so the\n<code>callback</code> parameter is used to determine which listener to remove.</p>\n\n\n\n\n<p>When adding a listener, you must save a reference to the callback function\nin order to remove the listener later:</p>\n\n\n\n\n<pre><code>var listener = function() { Ti.API.info(\"Event listener called.\"); }\nwindow.addEventListener('click', listener);\n</code></pre>\n\n\n\n\n<p>To remove the listener, pass in a reference to the callback function:</p>\n\n\n\n\n<pre><code>window.removeEventListener('click', listener);\n</code></pre>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;Object&gt;<div class='sub-desc'><p>Callback function to remove. Must be the same function passed to <code>addEventListener</code>.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-setBubbleParent' class='name expandable'>setBubbleParent</a>( <span class='pre'>bubbleParent</span> )</div><div class='description'><div class='short'>Sets the value of the bubbleParent property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>bubbleParent</span> : Boolean<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setLifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-setLifecycleContainer' class='name expandable'>setLifecycleContainer</a>( <span class='pre'>lifecycleContainer</span> )</div><div class='description'><div class='short'>Sets the value of the lifecycleContainer property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Proxy-property-lifecycleContainer\" rel=\"Titanium.Proxy-property-lifecycleContainer\" class=\"docClass\">lifecycleContainer</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>lifecycleContainer</span> : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a><div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div></div></div></div></div>"});