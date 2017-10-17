Ext.data.JsonP['ViewTemplate']({"tagname":"class","name":"ViewTemplate","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["android 3.1.0","iphone 3.1.0","ipad 3.1.0"],"pseudo":[null],"editurl":"https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/ListItem.yml","description":["<p>See {@link Titanium.UI.ListItem} for examples of using an item template.</p>"]},"private":null,"id":"class-ViewTemplate","members":{"cfg":[],"property":[{"name":"bindId","tagname":"property","owner":"ViewTemplate","meta":{},"id":"property-bindId"},{"name":"childTemplates","tagname":"property","owner":"ViewTemplate","meta":{},"id":"property-childTemplates"},{"name":"events","tagname":"property","owner":"ViewTemplate","meta":{"description":["<p>Array values are considered as multiple event listeners for that event.</p>"]},"id":"property-events"},{"name":"properties","tagname":"property","owner":"ViewTemplate","meta":{},"id":"property-properties"},{"name":"type","tagname":"property","owner":"ViewTemplate","meta":{"description":["<p>Only the following view classes are supported:</p>\n\n<ul>\n<li>{@link Titanium.UI.ActivityIndicator}</li>\n<li>{@link Titanium.UI.Button}</li>\n<li>{@link Titanium.UI.ButtonBar}</li>\n<li>{@link Titanium.UI.ImageView}</li>\n<li>{@link Titanium.UI.Label}</li>\n<li>{@link Titanium.UI.MaskedImage}</li>\n<li>{@link Titanium.UI.ProgressBar}</li>\n<li>{@link Titanium.UI.Picker}</li>\n<li>{@link Titanium.UI.ScrollableView}</li>\n<li>{@link Titanium.UI.Slider}</li>\n<li>{@link Titanium.UI.Switch}</li>\n<li>{@link Titanium.UI.TextArea}</li>\n<li>{@link Titanium.UI.TextField}</li>\n<li>{@link Titanium.UI.iOS.BlurView}</li>\n<li>{@link Titanium.UI.iOS.LivePhotoView}</li>\n<li>{@link Titanium.UI.iOS.Stepper}</li>\n<li>{@link Titanium.UI.iOS.TabbedBar}</li>\n</ul>"]},"id":"property-type"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":156110,"files":[{"filename":"titanium.js","href":"titanium.html#ViewTemplate"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-android'\n        title='Android'>3.1.0</li><li class='platform-iphone'\n        title='iPhone'>3.1.0</li><li class='platform-ipad'\n        title='iPad'>3.1.0</li></ul>","pseudo":["<p class='private'><strong>NOTE</strong> ","This is an abstract type. Any object meeting this description can be used ","where this type is used.</p>"],"editurl":null,"description":"<p><p>See <a href=\"#!/api/Titanium.UI.ListItem\" rel=\"Titanium.UI.ListItem\" class=\"docClass\">Titanium.UI.ListItem</a> for examples of using an item template.</p>\n\n</p>"},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-android' title='Android since Titanium SDK 3.1.0'>Android 3.1.0</li><li class='platform-iphone' title='iPhone since Titanium SDK 3.1.0'>iPhone 3.1.0</li><li class='platform-ipad' title='iPad since Titanium SDK 3.1.0'>iPad 3.1.0</li></ul></div><div class='hierarchy'></div><div class='doc-contents'><p>Template that represents a view subcomponent of an <a href=\"#!/api/ItemTemplate\" rel=\"ItemTemplate\" class=\"docClass\">ItemTemplate</a>.</p>\n\n<p><p>See <a href=\"#!/api/Titanium.UI.ListItem\" rel=\"Titanium.UI.ListItem\" class=\"docClass\">Titanium.UI.ListItem</a> for examples of using an item template.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.1.0</li><li class='platform-iphone'\n        title='iPhone'>3.1.0</li><li class='platform-ipad'\n        title='iPad'>3.1.0</li></ul><p class='private'><strong>NOTE</strong> This is an abstract type. Any object meeting this description can be used where this type is used.</p></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-bindId' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ViewTemplate'>ViewTemplate</span></div><a href='#!/api/ViewTemplate-property-bindId' class='name expandable'>bindId</a><span> : String</span></div><div class='description'><div class='short'>View's ID (or set of IDs) used for data binding. ...</div><div class='long'><p>View's ID (or set of IDs) used for data binding. This value must be unique.</p>\n\n</div></div></div><div id='property-childTemplates' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ViewTemplate'>ViewTemplate</span></div><a href='#!/api/ViewTemplate-property-childTemplates' class='name not-expandable'>childTemplates</a><span> : <a href=\"#!/api/ViewTemplate\" rel=\"ViewTemplate\" class=\"docClass\">ViewTemplate</a>[]</span></div><div class='description'><div class='short'><p>Contains an array of subview templates to be added (in order) as children to this view.</p>\n\n</div><div class='long'><p>Contains an array of subview templates to be added (in order) as children to this view.</p>\n\n</div></div></div><div id='property-events' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ViewTemplate'>ViewTemplate</span></div><a href='#!/api/ViewTemplate-property-events' class='name not-expandable'>events</a><span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a></span></div><div class='description'><div class='short'><p>Contains key-value pairs of view events and their listeners that are applied to this view component.</p>\n\n</div><div class='long'><p>Contains key-value pairs of view events and their listeners that are applied to this view component.</p>\n\n<p><p>Array values are considered as multiple event listeners for that event.</p>\n\n</p></div></div></div><div id='property-properties' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ViewTemplate'>ViewTemplate</span></div><a href='#!/api/ViewTemplate-property-properties' class='name not-expandable'>properties</a><span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a></span></div><div class='description'><div class='short'><p>Contains key-value pairs of view properties and their values that are applied to this view component.</p>\n\n</div><div class='long'><p>Contains key-value pairs of view properties and their values that are applied to this view component.</p>\n\n</div></div></div><div id='property-type' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ViewTemplate'>ViewTemplate</span></div><a href='#!/api/ViewTemplate-property-type' class='name not-expandable'>type</a><span> : String</span></div><div class='description'><div class='short'><p>View's class name, for example, <code>Ti.UI.Button</code>.</p>\n\n</div><div class='long'><p>View's class name, for example, <code>Ti.UI.Button</code>.</p>\n\n<p><p>Only the following view classes are supported:</p>\n\n\n\n\n<ul>\n<li><a href=\"#!/api/Titanium.UI.ActivityIndicator\" rel=\"Titanium.UI.ActivityIndicator\" class=\"docClass\">Titanium.UI.ActivityIndicator</a></li>\n<li><a href=\"#!/api/Titanium.UI.Button\" rel=\"Titanium.UI.Button\" class=\"docClass\">Titanium.UI.Button</a></li>\n<li><a href=\"#!/api/Titanium.UI.ButtonBar\" rel=\"Titanium.UI.ButtonBar\" class=\"docClass\">Titanium.UI.ButtonBar</a></li>\n<li><a href=\"#!/api/Titanium.UI.ImageView\" rel=\"Titanium.UI.ImageView\" class=\"docClass\">Titanium.UI.ImageView</a></li>\n<li><a href=\"#!/api/Titanium.UI.Label\" rel=\"Titanium.UI.Label\" class=\"docClass\">Titanium.UI.Label</a></li>\n<li><a href=\"#!/api/Titanium.UI.MaskedImage\" rel=\"Titanium.UI.MaskedImage\" class=\"docClass\">Titanium.UI.MaskedImage</a></li>\n<li><a href=\"#!/api/Titanium.UI.ProgressBar\" rel=\"Titanium.UI.ProgressBar\" class=\"docClass\">Titanium.UI.ProgressBar</a></li>\n<li><a href=\"#!/api/Titanium.UI.Picker\" rel=\"Titanium.UI.Picker\" class=\"docClass\">Titanium.UI.Picker</a></li>\n<li><a href=\"#!/api/Titanium.UI.ScrollableView\" rel=\"Titanium.UI.ScrollableView\" class=\"docClass\">Titanium.UI.ScrollableView</a></li>\n<li><a href=\"#!/api/Titanium.UI.Slider\" rel=\"Titanium.UI.Slider\" class=\"docClass\">Titanium.UI.Slider</a></li>\n<li><a href=\"#!/api/Titanium.UI.Switch\" rel=\"Titanium.UI.Switch\" class=\"docClass\">Titanium.UI.Switch</a></li>\n<li><a href=\"#!/api/Titanium.UI.TextArea\" rel=\"Titanium.UI.TextArea\" class=\"docClass\">Titanium.UI.TextArea</a></li>\n<li><a href=\"#!/api/Titanium.UI.TextField\" rel=\"Titanium.UI.TextField\" class=\"docClass\">Titanium.UI.TextField</a></li>\n<li><a href=\"#!/api/Titanium.UI.iOS.BlurView\" rel=\"Titanium.UI.iOS.BlurView\" class=\"docClass\">Titanium.UI.iOS.BlurView</a></li>\n<li><a href=\"#!/api/Titanium.UI.iOS.LivePhotoView\" rel=\"Titanium.UI.iOS.LivePhotoView\" class=\"docClass\">Titanium.UI.iOS.LivePhotoView</a></li>\n<li><a href=\"#!/api/Titanium.UI.iOS.Stepper\" rel=\"Titanium.UI.iOS.Stepper\" class=\"docClass\">Titanium.UI.iOS.Stepper</a></li>\n<li><a href=\"#!/api/Titanium.UI.iOS.TabbedBar\" rel=\"Titanium.UI.iOS.TabbedBar\" class=\"docClass\">Titanium.UI.iOS.TabbedBar</a></li>\n</ul>\n\n</p></div></div></div></div></div></div></div>"});