Ext.data.JsonP['iOS_UI_Components_and_Conventions']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>iOS UI Components and Conventions</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-29004928\" class=\"content\">\n                        <h1>iOS UI Components and Conventions</h1>\n    <div class=\"section section-2 \" id=\"src-29004928_iOSUIComponentsandConventions-Objective\">\n        <h2 class=\"heading \"><span>Objective</span></h2>\n    <p>In this section, you will learn some of the user interface and user experience components that are specific to iOS.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-29004928_iOSUIComponentsandConventions-Contents\">\n        <h2 class=\"heading \"><span>Contents</span></h2>\n    <p>We&apos;ve already covered many of the iOS UI conventions in the <a class=\"document-link \" href=\"#!/guide/iOS_Platform_Overview\">iOS Platform Overview</a> chapter. In this section, we&apos;ll dig just a bit deeper into some iOS specifics. These include iPad-only UI controls, app badges, and integration with the platform&apos;s Settings app.    </p>\n    <div class=\"section section-3 \" id=\"src-29004928_iOSUIComponentsandConventions-iPad-onlyUIAPIs\">\n        <h3 class=\"heading \"><span>iPad-only UI APIs</span></h3>\n    <p>The iPad includes two UI components that are not available with the iPhone. These are the <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.iPad.Popover\">Popover</a> and <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.iPad.SplitWindow\">SplitWindow</a>.    </p>\n    <div class=\"section section-4 \" id=\"src-29004928_iOSUIComponentsandConventions-Popovers\">\n        <h4 class=\"heading \"><span>Popovers</span></h4>\n    <p>You use popovers to present information temporarily, but in a way that does not take over the entire screen like a modal view does. The popover content is layered on top of your existing content in a special window. The popover remains visible until the user taps outside of the popover window or explicitly dismisses it. The Popover is created by the method <tt class=\" \">Titanium.UI.iPad.createPopover()</tt>.    </p>\n    <p>    <img src=\"images/download/attachments/29004928/ipadpopover.png\" alt=\"images/download/attachments/29004928/ipadpopover.png\" class=\"confluence-embedded-image\">\n        </img></p>\n    <p>Popovers provide a way for you to display additional information associated with a particular UI component. This is shown in the picture above, in which event repetition options are shown as a row in a table. Within the popover, you can display a view or other component.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var button = Ti.UI.createButton({</code></div>\n<div class=\"line\"><code class=\"plain\">\ttitle: </code><code class=\"string\">&apos;Show popover&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\twidth: </code><code class=\"value\">250</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\theight: </code><code class=\"value\">50</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\ttop: </code><code class=\"value\">30</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\tright: </code><code class=\"value\">5</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">var popover = Ti.UI.iPad.createPopover({</code></div>\n<div class=\"line\"><code class=\"plain\">\twidth: </code><code class=\"value\">300</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\theight: </code><code class=\"value\">250</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\ttitle: </code><code class=\"string\">&apos;I\\&apos;m a Popover&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\t\tarrowDirection: Ti.UI.iPad.POPOVER_ARROW_DIRECTION_RIGHT</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">button.addEventListener(</code><code class=\"string\">&apos;click&apos;</code><code class=\"plain\">, function(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">\tpopover.show({</code></div>\n<div class=\"line\"><code class=\"plain\">\t\tview: button,</code></div>\n<div class=\"line\"><code class=\"plain\">\t\tanimated: </code><code class=\"keyword\">true</code></div>\n<div class=\"line\"><code class=\"plain\">\t});</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">win.add(button);</code></div>\n</div>\n    </div>\n    <p>In the preceding code, line 16 creates the association between the button and the popover. It&apos;s this line that controls the placement of the popover. It will be placed automatically by iOS according to this association and the arrow direction. In this example, the arrow points to the right, which means the popover will be displayed to the left of the button. If you used POPOVER_ARROW_DIRECTION_UP, the popover would be shown below the button.    </p>\n    </div>\n    <div class=\"section section-4 \" id=\"src-29004928_iOSUIComponentsandConventions-SplitWindows\">\n        <h4 class=\"heading \"><span>SplitWindows</span></h4>\n    <p>A SplitWindow is a window that manages the presentation of two side-by-side view controllers. You use this class to implement a master-detail interface, in which the left-side view presents a list of items and the right-side presents details of the selected item. The SplitView is for use exclusively on iPad devices. The SplitWindow is created by the method <tt class=\" \">Titanium.UI.iPad.createSplitWindow()</tt>.    </p>\n    <p>    <img src=\"images/download/attachments/29004928/ipad_splitwindow.png\" alt=\"images/download/attachments/29004928/ipad_splitwindow.png\" class=\"confluence-embedded-image\">\n        </img></p>\n    <p>You cannot control the width of either of the view controllers, and the user cannot resize those &quot;panes.&quot; A SplitWindow is a top-level container, which means you don&apos;t add it to a Ti.UI.Window. The SplitWindow inherits from the Window object.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"comments\">// Window shown in narrower, left &quot;pane&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">var masterWin = Ti.UI.createWindow({</code></div>\n<div class=\"line\"><code class=\"plain\">\tbackgroundColor: </code><code class=\"string\">&apos;#fff&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">masterWin.add(Ti.UI.createLabel({</code></div>\n<div class=\"line\"><code class=\"plain\">\ttext: </code><code class=\"string\">&apos;Master View&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\ttop: </code><code class=\"value\">10</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\theight: </code><code class=\"string\">&apos;Ti.UI.SIZE&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\tfont: {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\ttextAlign: </code><code class=\"string\">&apos;center&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\t\tfontWeight: </code><code class=\"string\">&apos;bold&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">\t}</code></div>\n<div class=\"line\"><code class=\"plain\">}));</code></div>\n<div class=\"line\"><code class=\"comments\">// Window shown in wider, right &quot;pane&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">var detailWin = Ti.UI.createWindow({</code></div>\n<div class=\"line\"><code class=\"plain\">\tbackgroundColor: </code><code class=\"string\">&apos;#dfdfdf&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">detailWin.add(Ti.UI.createLabel({</code></div>\n<div class=\"line\"><code class=\"plain\">\ttext: </code><code class=\"string\">&apos;Detail View&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\ttop: </code><code class=\"value\">10</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\theight: </code><code class=\"string\">&apos;Ti.UI.SIZE&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\tfont: {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\ttextAlign: </code><code class=\"string\">&apos;center&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\t\tfontWeight: </code><code class=\"string\">&apos;bold&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">\t}</code></div>\n<div class=\"line\"><code class=\"plain\">}));</code></div>\n<div class=\"line\"><code class=\"comments\">// the split window</code></div>\n<div class=\"line\"><code class=\"plain\">var splitwin = Ti.UI.iPad.createSplitWindow({</code></div>\n<div class=\"line\"><code class=\"plain\">    detailView: detailWin,</code></div>\n<div class=\"line\"><code class=\"plain\">    masterView: masterWin,</code></div>\n<div class=\"line\"><code class=\"plain\">    orientationModes: [ Titanium.UI.LANDSCAPE_LEFT,Titanium.UI.LANDSCAPE_RIGHT ]</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">splitwin.open();</code></div>\n</div>\n    </div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004928_iOSUIComponentsandConventions-Badges\">\n        <h3 class=\"heading \"><span>Badges</span></h3>\n    <p>    <img src=\"images/download/attachments/29004928/app_badge.png\" alt=\"images/download/attachments/29004928/app_badge.png\" class=\"confluence-embedded-image\">\n        </img></p>\n    <p>    <img src=\"images/download/attachments/29004928/tab_badge.png\" alt=\"images/download/attachments/29004928/tab_badge.png\" class=\"confluence-embedded-image confluence-content-image-border\">\n        </img></p>\n    <p>Tab and app badges are indicators of updates, new messages, and so forth. You can apply these badges, with a numeric value, to your app and to tabs within your app. Doing so is quite simple. For tabs, simply set the <tt class=\" \">yourTab.badge</tt> property equal to some number to show the tab badge icon. For your app, set the <tt class=\" \">Ti.UI.iPhone.appBadge</tt> property equal to a number to show the app badge icon. You might do so when your app initializes or shuts down. You could also use a <a class=\"external-link external-link\" href=\"#!/api/Titanium.App.iOS.BackgroundService\">background service</a> to set your app&apos;s badge as needed.    </p>\n    <p>To remove either a tab or app badge, set the corresponding property to <tt class=\" \">null</tt>. Setting it to 0 would still display the badge, but with the number zero displayed.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"comments\">// Sets the app&apos;s icon badge to 23</code></div>\n<div class=\"line\"><code class=\"plain\">Ti.UI.iPhone.appBadge = </code><code class=\"value\">23</code><code class=\"plain\">;</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">var tabGroup = Titanium.UI.createTabGroup();</code></div>\n<div class=\"line\"><code class=\"plain\">var win1 = Titanium.UI.createWindow({</code></div>\n<div class=\"line\"><code class=\"plain\">    title: </code><code class=\"string\">&apos;Window 1&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    backgroundColor: </code><code class=\"string\">&apos;#fff&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"comments\">// Set the badge for this tab to 10</code></div>\n<div class=\"line\"><code class=\"plain\">var tab1 = Titanium.UI.createTab({</code></div>\n<div class=\"line\"><code class=\"plain\">    icon: </code><code class=\"string\">&apos;KS_nav_views.png&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    title: </code><code class=\"string\">&apos;Tab 1&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    window: win1,</code></div>\n<div class=\"line\"><code class=\"plain\">    badge: </code><code class=\"value\">10</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004928_iOSUIComponentsandConventions-Settingsintegration\">\n        <h3 class=\"heading \"><span>Settings integration</span></h3>\n    <p>Apple&apos;s guidelines specify that app settings should be configurable through the native Settings app rather than through in-app controls. Apple&apos;s own apps generally follow this recommendation. For example, you configure Safari&apos;s options via Settings rather than within the app. Titanium provides a mechanism for configuration options via the Settings app via a native module.    </p>\n    <p>    <img src=\"images/download/attachments/29004928/settings_bundle.png\" alt=\"images/download/attachments/29004928/settings_bundle.png\" class=\"confluence-embedded-image\" width=\"300\">\n        </img></p>\n    <p>With 1.8, the location of the Settings.bundle was changed. Platform-specific resources are supposed to be in the platform-specific directories. That was not the case before, but that&apos;s fixed now.    </p>\n    <p>If you&apos;re running SDK 1.8+    </p>\n<ol class=\" \"><li class=\" \">    <p>Download a recent copy of the <a class=\"external-link external-link\" href=\"https://github.com/appcelerator/KitchenSink\" target=\"_blank\">KitchenSink app</a>    </p>\n</li><li class=\" \">    <p>Copy <strong class=\" \">Settings.bundle</strong> from <strong class=\" \">platform/iphone</strong> folder to your project&apos;s <strong class=\" \">Resources/platform/iphone</strong> directory (you might need to create those directories).    </p>\n</li><li class=\" \">    <p>In Studio, expand platform/iphone/Settings.bundle and double-click Root.plist to open the Xcode Property List editor.    </p>\n</li><li class=\" \">    <p>Edit the settings, as described below.    </p>\n</li><li class=\" \">    <p>Clean your project, then build for either the Simulator or device.    </p>\n</li></ol>    <p>If you&apos;re running SDK &lt;1.8    </p>\n<ol class=\" \"><li class=\" \">    <p>Download a copy of the <a class=\"external-link external-link\" href=\"https://github.com/appcelerator/KitchenSink\" target=\"_blank\">KitchenSink app</a>    </p>\n</li><li class=\" \">    <p>Copy <strong class=\" \">Settings.bundle</strong> from <strong class=\" \">modules/iphone</strong> folder to your project&apos;s <strong class=\" \">Resources/modules/iphone</strong> directory (you might need to create those directories).    </p>\n</li><li class=\" \">    <p>In Studio, expand modules/iphone/Settings.bundle and double-click Root.plist to open the Xcode Property List editor.    </p>\n</li><li class=\" \">    <p>Edit the settings, as described below.    </p>\n</li><li class=\" \">    <p>Clean your project, then build for either the Simulator or device.    </p>\n</li></ol>    <p>In the Xcode Property List editor, you&apos;ll see the app&apos;s name defined in Item 0. The three preferences defined by KitchenSink appear under Items 1, 2, and 3. You can modify these to suit your needs or add new properties items following the pattern set out in these items.    </p>\n    <p>In your app, you can access the values of these app preferences by using Titanium&apos;s <tt class=\" \">App Properties module</tt> with one minor tweak. The name of the app property you retrieve must match the value you set in the Identifier field in the Property List editor. You&apos;ll note that all the KitchenSink examples include the &quot;_preference&quot; suffix, which you should also include with your identifiers.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">Ti.API.info(Ti.App.Properties.getString(</code><code class=\"string\">&apos;name_preference&apos;</code><code class=\"plain\">)); </code><code class=\"comments\">// logs the name pref value from KitchenSink example</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004928_iOSUIComponentsandConventions-Hands-onPractice\">\n        <h3 class=\"heading \"><span>Hands-on Practice</span></h3>\n    <div class=\"section section-4 \" id=\"src-29004928_iOSUIComponentsandConventions-Goal\">\n        <h4 class=\"heading \"><span>Goal</span></h4>\n    <p>In this activity, you will enable Settings-integration for a simple iOS app and use the preferences configured by the user within the app.    </p>\n    </div>\n    <div class=\"section section-4 \" id=\"src-29004928_iOSUIComponentsandConventions-Resources\">\n        <h4 class=\"heading \"><span>Resources</span></h4>\n    <p>To complete this activity, you will need an Intel-based Mac with the iOS development tools (Xcode) installed.    </p>\n    </div>\n    <div class=\"section section-4 \" id=\"src-29004928_iOSUIComponentsandConventions-Steps\">\n        <h4 class=\"heading \"><span>Steps</span></h4>\n<ol class=\" \"><li class=\" \">    <p>Create a new Titanium Mobile project named AppSettings that targets the iPhone and iPad.    </p>\n</li><li class=\" \">    <p>If you have not done so already, download a copy of the KitchenSink project from <a class=\"external-link external-link\" href=\"https://github.com/appcelerator/KitchenSink\" target=\"_blank\">https://github.com/appcelerator/KitchenSink</a>. Copy the modules folder to your project&apos;s directory.    </p>\n</li><li class=\" \">    <p>In Studio, expand modules/iphone/Settings.bundle and double-click Root.plist    </p>\n</li><li class=\" \">    <p>Edit the name of the app in the plist file to match your app&apos;s name. You can leave the other settings options as-is. Save your changes and close Xcode.    </p>\n</li><li class=\" \">    <p>Change <tt class=\" \">label1</tt> to display the name the user enters in the Settings app for the Name preference. If no value is set, display the text &quot;Set Name in Settings&quot; in the label.    </p>\n</li><li class=\" \">    <p>If the &quot;Enabled&quot; switch is set to Yes (on) , display an ImageView that contains the KS_nav_ui.png graphic. If it&apos;s set to No (off) , don&apos;t display the image. You can use the <tt class=\" \">Ti.App.Properties.getBool()</tt> method for this purpose.    </p>\n</li><li class=\" \">    <p>Build and test your app. After it&apos;s installed and run the first time, open the Settings app and configure your name and Enabled value.    </p>\n</li><li class=\" \">    <p>Because the app remains running (iOS doesn&apos;t fully close an app when you return to the Springboard), you&apos;ll need to close and relaunch the simulator or use the Fast App Switcher to kill the app. If using the simulator launched by Studio, using the Fast App Switcher might crash the simulator.    </p>\n<ol class=\" \"><li class=\" \">    <p>Close the AppSettings app, if necessary    </p>\n</li><li class=\" \">    <p>Double-click the Home button to display the Fast App Switcher tray.    </p>\n</li><li class=\" \">    <p>Press and hold on the AppSetting icon in the tray until it begins to shake. Tap its red minus-sign button to kill the app.    </p>\n</li><li class=\" \">    <p>Press Home to leave &quot;edit mode&quot; then press Home again to return to the Springboard.    </p>\n</li><li class=\" \">    <p>You can now re-open the app to see the new settings in place.    </p>\n</li></ol></li></ol>    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004928_iOSUIComponentsandConventions-ReferencesandFurtherReading\">\n        <h3 class=\"heading \"><span>References and Further Reading</span></h3>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"http://assets.appcelerator.com.s3.amazonaws.com/app_u/ebook/AppSettings.zip\" target=\"_blank\">Finished code</a>    </p>\n</li><li class=\" \">    <p>Apple&apos;s <a class=\"external-link external-link\" href=\"http://developer.apple.com/iphone/library/documentation/General/Conceptual/iPadHIG/Introduction/Introduction.html\" target=\"_blank\">iPad Human Interface Guidelines</a>    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"http://developer.apple.com/library/ios/#documentation/Cocoa/Conceptual/PropertyLists/Introduction/Introduction.html\" target=\"_blank\">Apple&apos;s Introduction to Property Lists</a>    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"http://developer.apple.com/library/ios/#samplecode/AppPrefs/Introduction/Intro.html\" target=\"_blank\">Sample code for create app preferences</a> (Settings)    </p>\n</li></ul>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-29004928_iOSUIComponentsandConventions-Summary\">\n        <h2 class=\"heading \"><span>Summary</span></h2>\n    <p>In this chapter, you learned that iOS offers a handful of UI components that are not available on other platforms. You learned how to implement iPad-specific controls and how to create and save app preferences in the Settings app.    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=29004928\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"iOS UI Components and Conventions"});