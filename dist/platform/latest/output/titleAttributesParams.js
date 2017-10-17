Ext.data.JsonP['titleAttributesParams']({"tagname":"class","name":"titleAttributesParams","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["iphone 3.2.0","ipad 3.2.0"],"pseudo":[null],"editurl":"https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/Window.yml"},"private":null,"id":"class-titleAttributesParams","members":{"cfg":[],"property":[{"name":"color","tagname":"property","owner":"titleAttributesParams","meta":{"description":["<p>For information about color values, see the \"Colors\" section of {@link Titanium.UI}.</p>"]},"id":"property-color"},{"name":"font","tagname":"property","owner":"titleAttributesParams","meta":{},"id":"property-font"},{"name":"shadow","tagname":"property","owner":"titleAttributesParams","meta":{},"id":"property-shadow"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":218265,"files":[{"filename":"titanium.js","href":"titanium.html#titleAttributesParams"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li></ul>","pseudo":["<p class='private'><strong>NOTE</strong> ","This is an abstract type. Any object meeting this description can be used ","where this type is used.</p>"],"editurl":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-iphone' title='iPhone since Titanium SDK 3.2.0'>iPhone 3.2.0</li><li class='platform-ipad' title='iPad since Titanium SDK 3.2.0'>iPad 3.2.0</li></ul></div><div class='hierarchy'></div><div class='doc-contents'><p>Dictionary of options for the <a href=\"#!/api/Titanium.UI.Window-property-titleAttributes\" rel=\"Titanium.UI.Window-property-titleAttributes\" class=\"docClass\">Titanium.UI.Window.titleAttributes</a> property.</p>\n\n\n\n\n<h3>Examples</h3>\n\n\n<h4>Simple Example</h4>\n\n\n<pre><code>var win = <a href=\"#!/api/Titanium.UI-method-createWindow\" rel=\"Titanium.UI-method-createWindow\" class=\"docClass\">Titanium.UI.createWindow</a>({\n    title: 'Title',\n    barColor: 'yellow',\n    titleAttributes:  {\n        color:'blue',\n        font: {fontFamily:'Snell Roundhand', fontSize:36},\n        shadow:{color:'gray', offset:{width:1,height:1}}\n    }\n});\nvar nav = <a href=\"#!/api/Titanium.UI.iOS-method-createNavigationWindow\" rel=\"Titanium.UI.iOS-method-createNavigationWindow\" class=\"docClass\">Titanium.UI.iOS.createNavigationWindow</a>({window: win});\nnav.open();</code></pre>\n\n<ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li></ul><p class='private'><strong>NOTE</strong> This is an abstract type. Any object meeting this description can be used where this type is used.</p></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-color' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='titleAttributesParams'>titleAttributesParams</span></div><a href='#!/api/titleAttributesParams-property-color' class='name not-expandable'>color</a><span> : String</span></div><div class='description'><div class='short'><p>Color of the window title, as a color name or hex triplet.</p>\n\n</div><div class='long'><p>Color of the window title, as a color name or hex triplet.</p>\n\n<p><p>For information about color values, see the \"Colors\" section of <a href=\"#!/api/Titanium.UI\" rel=\"Titanium.UI\" class=\"docClass\">Titanium.UI</a>.</p>\n\n</p></div></div></div><div id='property-font' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='titleAttributesParams'>titleAttributesParams</span></div><a href='#!/api/titleAttributesParams-property-font' class='name not-expandable'>font</a><span> : <a href=\"#!/api/Font\" rel=\"Font\" class=\"docClass\">Font</a></span></div><div class='description'><div class='short'><p>Font to use for the window title.</p>\n\n</div><div class='long'><p>Font to use for the window title.</p>\n\n</div></div></div><div id='property-shadow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='titleAttributesParams'>titleAttributesParams</span></div><a href='#!/api/titleAttributesParams-property-shadow' class='name not-expandable'>shadow</a><span> : <a href=\"#!/api/shadowDict\" rel=\"shadowDict\" class=\"docClass\">shadowDict</a></span></div><div class='description'><div class='short'><p>Shadow color and offset for the window title.</p>\n\n</div><div class='long'><p>Shadow color and offset for the window title.</p>\n\n</div></div></div></div></div></div></div>"});