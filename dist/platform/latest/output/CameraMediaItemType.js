Ext.data.JsonP['CameraMediaItemType']({"tagname":"class","name":"CameraMediaItemType","extends":"SuccessResponse","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["android 0.8","iphone 0.8","ipad 0.8"],"pseudo":[null],"editurl":"https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/Media/Media.yml"},"private":null,"id":"class-CameraMediaItemType","members":{"cfg":[],"property":[{"name":"code","tagname":"property","owner":"CameraMediaItemType","meta":{"description":["<p>Error code will be 0.</p>"],"platform":["android 3.1.0","iphone 3.1.0","ipad 3.1.0"]},"id":"property-code"},{"name":"cropRect","tagname":"property","owner":"CameraMediaItemType","meta":{},"id":"property-cropRect"},{"name":"error","tagname":"property","owner":"CameraMediaItemType","meta":{"description":["<p>Will be undefined.</p>"],"platform":["android 3.1.0","iphone 3.1.0","ipad 3.1.0"]},"id":"property-error"},{"name":"livePhoto","tagname":"property","owner":"CameraMediaItemType","meta":{"platform":["android 5.2.0","iphone 5.2.0","ipad 5.2.0"]},"id":"property-livePhoto"},{"name":"media","tagname":"property","owner":"CameraMediaItemType","meta":{},"id":"property-media"},{"name":"mediaType","tagname":"property","owner":"CameraMediaItemType","meta":{},"id":"property-mediaType"},{"name":"previewRect","tagname":"property","owner":"CameraMediaItemType","meta":{"platform":["android 0.8"]},"id":"property-previewRect"},{"name":"success","tagname":"property","owner":"CameraMediaItemType","meta":{"description":["<p>Returns <code>true</code>.</p>"],"platform":["android 3.1.0","iphone 3.1.0","ipad 3.1.0"]},"id":"property-success"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":107859,"files":[{"filename":"titanium.js","href":"titanium.html#CameraMediaItemType"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-android'\n        title='Android'>0.8</li><li class='platform-iphone'\n        title='iPhone'>0.8</li><li class='platform-ipad'\n        title='iPad'>0.8</li></ul>","pseudo":["<p class='private'><strong>NOTE</strong> ","This is an abstract type. Any object meeting this description can be used ","where this type is used.</p>"],"editurl":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["ErrorResponse","SuccessResponse","CameraMediaItemType"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-android' title='Android since Titanium SDK 0.8'>Android 0.8</li><li class='platform-iphone' title='iPhone since Titanium SDK 0.8'>iPhone 0.8</li><li class='platform-ipad' title='iPad since Titanium SDK 0.8'>iPad 0.8</li></ul></div><div class='hierarchy'><div class='classes'><div class='subclass'><a href='#!/api/ErrorResponse' rel='ErrorResponse' class='docClass'>ErrorResponse</a></div><div class='subclass'> &gt; <a href='#!/api/SuccessResponse' rel='SuccessResponse' class='docClass'>SuccessResponse</a></div><div class='subclass'> &gt; <strong>CameraMediaItemType</strong></div></div></div><div class='doc-contents'><p>A media object from the camera or photo gallery.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>0.8</li><li class='platform-iphone'\n        title='iPhone'>0.8</li><li class='platform-ipad'\n        title='iPad'>0.8</li></ul><p class='private'><strong>NOTE</strong> This is an abstract type. Any object meeting this description can be used where this type is used.</p></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-code' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CameraMediaItemType'>CameraMediaItemType</span></div><a href='#!/api/CameraMediaItemType-property-code' class='name expandable'>code</a><span> : Number</span></div><div class='description'><div class='short'>Error code. ...</div><div class='long'><p>Error code. Returns 0.</p>\n\n<p><p>Error code will be 0.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.1.0</li><li class='platform-iphone'\n        title='iPhone'>3.1.0</li><li class='platform-ipad'\n        title='iPad'>3.1.0</li></ul><p>Overrides: <a href='#!/api/SuccessResponse-property-code' rel='SuccessResponse-property-code' class='docClass'>SuccessResponse.code</a></p></div></div></div><div id='property-cropRect' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CameraMediaItemType'>CameraMediaItemType</span></div><a href='#!/api/CameraMediaItemType-property-cropRect' class='name not-expandable'>cropRect</a><span> : <a href=\"#!/api/CropRectType\" rel=\"CropRectType\" class=\"docClass\">CropRectType</a></span></div><div class='description'><div class='short'><p>Simple object defining the user's selected crop rectangle, or <code>null</code> if the user has not edited the photo.</p>\n\n</div><div class='long'><p>Simple object defining the user's selected crop rectangle, or <code>null</code> if the user has not edited the photo.</p>\n\n</div></div></div><div id='property-error' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CameraMediaItemType'>CameraMediaItemType</span></div><a href='#!/api/CameraMediaItemType-property-error' class='name not-expandable'>error</a><span> : String</span></div><div class='description'><div class='short'><p>Error message, if any returned.</p>\n\n</div><div class='long'><p>Error message, if any returned.</p>\n\n<p><p>Will be undefined.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.1.0</li><li class='platform-iphone'\n        title='iPhone'>3.1.0</li><li class='platform-ipad'\n        title='iPad'>3.1.0</li></ul><p>Overrides: <a href='#!/api/SuccessResponse-property-error' rel='SuccessResponse-property-error' class='docClass'>SuccessResponse.error</a></p></div></div></div><div id='property-livePhoto' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CameraMediaItemType'>CameraMediaItemType</span></div><a href='#!/api/CameraMediaItemType-property-livePhoto' class='name expandable'>livePhoto</a><span> : <a href=\"#!/api/Titanium.UI.iOS.LivePhoto\" rel=\"Titanium.UI.iOS.LivePhoto\" class=\"docClass\">Titanium.UI.iOS.LivePhoto</a></span></div><div class='description'><div class='short'>The live photo object, as a Titanium.UI.iOS.LivePhoto and\nundefined if no live photo is selected. ...</div><div class='long'><p>The live photo object, as a <a href=\"#!/api/Titanium.UI.iOS.LivePhoto\" rel=\"Titanium.UI.iOS.LivePhoto\" class=\"docClass\">Titanium.UI.iOS.LivePhoto</a> and\n<code>undefined</code> if no live photo is selected.</p>\n\n\n\n\n<p> <b>Requires:</b> \niOS 9.1 and later \n</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>5.2.0</li><li class='platform-iphone'\n        title='iPhone'>5.2.0</li><li class='platform-ipad'\n        title='iPad'>5.2.0</li></ul></div></div></div><div id='property-media' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CameraMediaItemType'>CameraMediaItemType</span></div><a href='#!/api/CameraMediaItemType-property-media' class='name not-expandable'>media</a><span> : <a href=\"#!/api/Titanium.Blob\" rel=\"Titanium.Blob\" class=\"docClass\">Titanium.Blob</a></span></div><div class='description'><div class='short'><p>The media object, as a <a href=\"#!/api/Titanium.Blob\" rel=\"Titanium.Blob\" class=\"docClass\">Blob</a>.</p>\n\n</div><div class='long'><p>The media object, as a <a href=\"#!/api/Titanium.Blob\" rel=\"Titanium.Blob\" class=\"docClass\">Blob</a>.</p>\n\n</div></div></div><div id='property-mediaType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CameraMediaItemType'>CameraMediaItemType</span></div><a href='#!/api/CameraMediaItemType-property-mediaType' class='name not-expandable'>mediaType</a><span> : String</span></div><div class='description'><div class='short'><p>The type of media, either <code>MEDIA_TYPE_PHOTO</code>, <code>MEDIA_TYPE_LIVEPHOTO</code> or <code>MEDIA_TYPE_VIDEO</code> defined in <a href=\"#!/api/Titanium.Media\" rel=\"Titanium.Media\" class=\"docClass\">Titanium.Media</a>.</p>\n\n</div><div class='long'><p>The type of media, either <code>MEDIA_TYPE_PHOTO</code>, <code>MEDIA_TYPE_LIVEPHOTO</code> or <code>MEDIA_TYPE_VIDEO</code> defined in <a href=\"#!/api/Titanium.Media\" rel=\"Titanium.Media\" class=\"docClass\">Titanium.Media</a>.</p>\n\n</div></div></div><div id='property-previewRect' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CameraMediaItemType'>CameraMediaItemType</span></div><a href='#!/api/CameraMediaItemType-property-previewRect' class='name not-expandable'>previewRect</a><span> : <a href=\"#!/api/PreviewRectType\" rel=\"PreviewRectType\" class=\"docClass\">PreviewRectType</a></span></div><div class='description'><div class='short'><p>Simple object defining the preview image size.</p>\n\n</div><div class='long'><p>Simple object defining the preview image size.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>0.8</li></ul></div></div></div><div id='property-success' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CameraMediaItemType'>CameraMediaItemType</span></div><a href='#!/api/CameraMediaItemType-property-success' class='name expandable'>success</a><span> : Boolean</span></div><div class='description'><div class='short'>Indicates if the operation succeeded. ...</div><div class='long'><p>Indicates if the operation succeeded. Returns <code>true</code>.</p>\n\n<p><p>Returns <code>true</code>.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.1.0</li><li class='platform-iphone'\n        title='iPhone'>3.1.0</li><li class='platform-ipad'\n        title='iPad'>3.1.0</li></ul><p>Overrides: <a href='#!/api/SuccessResponse-property-success' rel='SuccessResponse-property-success' class='docClass'>SuccessResponse.success</a></p></div></div></div></div></div></div></div>"});