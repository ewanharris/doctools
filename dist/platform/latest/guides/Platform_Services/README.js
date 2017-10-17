Ext.data.JsonP['Platform_Services']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Platform Services</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-43298675\" class=\"content\">\n                        <h1>Platform Services</h1>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Platform_Services-section-src-43298675_PlatformServices-Introduction\">Introduction</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Platform_Services-section-src-43298675_PlatformServices-EnableAppceleratorServices\">Enable Appcelerator Services</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Platform_Services-section-src-43298675_PlatformServices-tiapp.xml\">tiapp.xml</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Platform_Services-section-src-43298675_PlatformServices-AndroidPermissions\">Android Permissions</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Platform_Services-section-src-43298675_PlatformServices-BehaviorPriortoRelease3.3.0\">Behavior Prior to Release 3.3.0</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Platform_Services-section-src-43298675_PlatformServices-app.js\">app.js</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Platform_Services-section-src-43298675_safe-id-UGxhdGZvcm1TZXJ2aWNlcy1hcHAvYWxsb3kuanM\">app/alloy.js</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Platform_Services-section-src-43298675_safe-id-UGxhdGZvcm1TZXJ2aWNlcy1hcHAvY29udHJvbGxlcnMvaW5kZXguanM\">app/controllers/index.js</a>    </p>\n</li></ul></li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Platform_Services-section-src-43298675_PlatformServices-Troubleshooting\">Troubleshooting</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Platform_Services-section-src-43298675_PlatformServices-UnabletoenableAppceleratorServices\">Unable to enable Appcelerator Services</a>    </p>\n</li></ul></li></ul>    <div class=\"section section-2 \" id=\"src-43298675_PlatformServices-Introduction\">\n        <h2 class=\"heading \"><span>Introduction</span></h2>\n    <p>Appcelerator Services are a set of features that are enabled through Appcelerator Studio and tracked on the Appcelerator Dashboard. These features include:    </p>\n<ul class=\" \"><li class=\" \">    <p><strong class=\" \">API Builder</strong>: Mobile backend-as-a-service solution providing commonly used features, such as user management, push notification, integration with social networks and cloud storage provided by Mobile Backend Services. Using API Builder Cloud and Arrow Builder, developers can quickly and easily create mobile-optimized APIs that manage data from multiple data sources, such as SAP, Salesforce.com, Oracle, Sharepoint and others.  For more information, see the <a class=\"document-link \" href=\"#!/guide/Axway_API_Builder\">Axway API Builder</a>.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Appcelerator Test</strong>: Integrated automated functional testing for your application, powered by SOASTA services. Using Appcelerator Test, developers and testers collaborate to record tests directly on the mobile device, execute tests and analyze the results.  For more information, see <a class=\"document-link \" href=\"#!/guide/Appcelerator_Test\">Appcelerator Test</a>    </p>\n</li><li class=\" \">    <p><strong class=\" \">Appcelerator Performance</strong>: Monitors your application&apos;s health, crashes and overall performance, powered by our own <a class=\"document-link \" href=\"#!/guide/Platform_Services-section-src-43298675_PlatformServices-CrashServer\">crash server&#xA0;service</a>. Using Appcelerator Performance, developers are able to diagnose why applications crash and focus on specific issues based on user feedback.  For more information, see <a class=\"document-link \" href=\"#!/guide/Appcelerator_Performance_Management\">Appcelerator Performance Management</a>.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Appcelerator Analytics</strong>: Track your applications&apos; user adoption and engagement. Understand how your application is used, which features are not used and decide what will go in the next version of your application. For more information, see <a class=\"document-link \" href=\"#!/guide/Appcelerator_Analytics\">Appcelerator Analytics</a>.    </p>\n</li></ul>    <p>You can monitor and manage these services using the Appcelerator Dashboard:    </p>\n<ul class=\" \"><li class=\" \">    <p><i class=\" \"> <a class=\"external-link external-link\" href=\"https://platform.appcelerator.com\" target=\"_blank\">https://platform.appcelerator.com</a> </i>    </p>\n</li></ul>    <p>For information on using the dashboard, see <a class=\"external-link external-link\" href=\"#!/guide/Appcelerator_Dashboard\">Appcelerator Dashboard</a>.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-43298675_PlatformServices-EnableAppceleratorServices\">\n        <h2 class=\"heading \"><span>Enable Appcelerator Services</span></h2>\n    <p>To enable Appcelerator Services for a Titanium or Alloy project:    </p>\n<ul class=\" \"><li class=\" \">    <p>Make sure the Titanium SDK version in the <tt class=\" \">tiapp.xml</tt> file is set to 3.1.1 or later.    </p>\n</li><li class=\" \">    <p>When creating a new application in Appcelerator Studio, make sure the <strong class=\" \">Enable Appcelerator Services</strong> checkbox is enabled.    </p>\n</li><li class=\" \">    <p>For a previously created project, open your <tt class=\" \">tiapp.xml</tt> file, then click the <strong class=\" \">Enable Services</strong> button under the <i class=\" \">Appcelerator Service</i> section.    </p>\n</li></ul>    <p>Appcelerator Studio injects code in to the <tt class=\" \">tiapp.xml</tt> file to enable these services for your project.  See code examples below.  Do not modify these changes or else you will disable these services.    </p>\n    <div class=\"section section-3 \" id=\"src-43298675_PlatformServices-tiapp.xml\">\n        <h3 class=\"heading \"><span>tiapp.xml</span></h3>\n    <p>The following changes are made to the <tt class=\" \">tiapp.xml</tt> file to enable Appcelerator Services for both classic mobile and Alloy projects.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">tiapp.xml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"tiapp.xml\">\n<div class=\"line\"><code class=\"plain\">    &lt;!-- Crittercism Application ID </code><code class=\"keyword\">for</code><code class=\"plain\"> Appcelerator Performance service --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;property name=</code><code class=\"string\">&quot;com-apm-id&quot;</code><code class=\"plain\"> type=</code><code class=\"string\">&quot;string&quot;</code><code class=\"plain\">&gt;CRITTERCISM_APP_ID&lt;/property&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;!-- Set keys </code><code class=\"keyword\">for</code><code class=\"plain\"> the ArrowDB service --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;property name=</code><code class=\"string\">&quot;acs-api-key-production&quot;</code><code class=\"plain\"> type=</code><code class=\"string\">&quot;string&quot;</code><code class=\"plain\">&gt;API_KEY_PROD&lt;/property&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;property name=</code><code class=\"string\">&quot;acs-authbase-url&quot;</code><code class=\"plain\"> type=</code><code class=\"string\">&quot;string&quot;</code><code class=\"plain\">&gt;ACS_AUTH_URL&lt;/property&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;property name=</code><code class=\"string\">&quot;acs-base-url&quot;</code><code class=\"plain\"> type=</code><code class=\"string\">&quot;string&quot;</code><code class=\"plain\">&gt;ACS_BASE_URL&lt;/property&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;property name=</code><code class=\"string\">&quot;acs-api-key-development&quot;</code><code class=\"plain\"> type=</code><code class=\"string\">&quot;string&quot;</code><code class=\"plain\">&gt;API_KEY_DEV&lt;/property&gt;</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">    &lt;!-- Enable the Appcelerator Analytics service --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;analytics&gt;</code><code class=\"keyword\">true</code><code class=\"plain\">&lt;/analytics&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;!-- Android Manifest keys </code><code class=\"keyword\">for</code><code class=\"plain\"> the Appcelerator Test service --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;android xmlns:android=</code><code class=\"string\">&quot;http://schemas.android.com/apk/res/android&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;manifest&gt;\t</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;application&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;activity</code></div>\n<div class=\"line\"><code class=\"plain\">                    android:configChanges=</code><code class=\"string\">&quot;keyboardHidden|orientation&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">                    android:label=</code><code class=\"string\">&quot;&lt;AppName&gt;&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">                    android:name=</code><code class=\"string\">&quot;.&lt;Appname&gt;androidActivity&quot;</code><code class=\"plain\"> android:theme=</code><code class=\"string\">&quot;@style/Theme.Titanium&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;intent-filter&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;action android:name=</code><code class=\"string\">&quot;android.intent.action.MAIN&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;category android:name=</code><code class=\"string\">&quot;android.intent.category.LAUNCHER&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;/intent-filter&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;intent-filter&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;data android:scheme=</code><code class=\"string\">&quot;touchtest-&lt;GUID&gt;&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;action android:name=</code><code class=\"string\">&quot;android.intent.action.VIEW&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;category android:name=</code><code class=\"string\">&quot;android.intent.category.BROWSABLE&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;category android:name=</code><code class=\"string\">&quot;android.intent.category.DEFAULT&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;/intent-filter&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;/activity&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;service android:enabled=</code><code class=\"string\">&quot;true&quot;</code><code class=\"plain\"> android:exported=</code><code class=\"string\">&quot;false&quot;</code><code class=\"plain\"> android:name=</code><code class=\"string\">&quot;com.soasta.android.touchtest.TouchTestService&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;/application&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;!-- All services require the ACCESS_WIFI_STATE and INTERNET permissions --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;uses-permission android:name=</code><code class=\"string\">&quot;android.permission.ACCESS_WIFI_STATE&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;uses-permission android:name=</code><code class=\"string\">&quot;android.permission.INTERNET&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;!-- The Appcelerator Test service requires READ_PHONE_STATE, BLUETOOTH, and BLUETOOTH_ADMIN permissions --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;uses-permission android:name=</code><code class=\"string\">&quot;android.permission.READ_PHONE_STATE&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;uses-permission android:name=</code><code class=\"string\">&quot;android.permission.BLUETOOTH&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;uses-permission android:name=</code><code class=\"string\">&quot;android.permission.BLUETOOTH_ADMIN&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;!-- The Appcelerator Performance and Test services require the GET_TASKS permission --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;uses-permission android:name=</code><code class=\"string\">&quot;android.permission.GET_TASKS&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;/manifest&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/android&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;!-- Include modules </code><code class=\"keyword\">for</code><code class=\"plain\"> Appcelerator Performance, Cloud and Test services --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;modules&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;module platform=</code><code class=\"string\">&quot;commonjs&quot;</code><code class=\"plain\">&gt;ti.cloud&lt;/module&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;module platform=</code><code class=\"string\">&quot;android&quot;</code><code class=\"plain\">&gt;com.appcelerator.apm&lt;/module&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;module platform=</code><code class=\"string\">&quot;iphone&quot;</code><code class=\"plain\">&gt;com.appcelerator.apm&lt;/module&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;module deploy-type=</code><code class=\"string\">&quot;test&quot;</code><code class=\"plain\"> platform=</code><code class=\"string\">&quot;iphone&quot;</code><code class=\"plain\"> version=</code><code class=\"string\">&quot;1.0&quot;</code><code class=\"plain\">&gt;com.soasta.touchtest&lt;/module&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;module deploy-type=</code><code class=\"string\">&quot;development&quot;</code><code class=\"plain\"> platform=</code><code class=\"string\">&quot;iphone&quot;</code><code class=\"plain\"> version=</code><code class=\"string\">&quot;1.0&quot;</code><code class=\"plain\">&gt;com.soasta.touchtest&lt;/module&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;module deploy-type=</code><code class=\"string\">&quot;test&quot;</code><code class=\"plain\"> platform=</code><code class=\"string\">&quot;android&quot;</code><code class=\"plain\"> version=</code><code class=\"string\">&quot;1.0&quot;</code><code class=\"plain\">&gt;com.soasta.touchtest&lt;/module&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;module deploy-type=</code><code class=\"string\">&quot;development&quot;</code><code class=\"plain\"> platform=</code><code class=\"string\">&quot;android&quot;</code><code class=\"plain\"> version=</code><code class=\"string\">&quot;1.0&quot;</code><code class=\"plain\">&gt;com.soasta.touchtest&lt;/module&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/modules&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;!-- Configure Appcelerator Test settings --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;ios&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;plist&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;dict&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;key&gt;CFBundleURLTypes&lt;/key&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;array&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;dict&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;key&gt;CFBundleTypeRole&lt;/key&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;string&gt;Editor&lt;/string&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;key&gt;CFBundleURLName&lt;/key&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;string&gt;PACKAGE&lt;/string&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;key&gt;CFBundleURLSchemes&lt;/key&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;array&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                            &lt;string&gt;touchtest-&lt;GUID&gt;&lt;/string&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;/array&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;/dict&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;/array&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;/dict&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;/plist&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/ios&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;plugins&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;plugin&gt;com.soasta.touchtest.android&lt;/plugin&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/plugins&gt;</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">    &lt;property name=</code><code class=\"string\">&quot;com-soasta-touchtest-version&quot;</code><code class=\"plain\"> type=</code><code class=\"string\">&quot;string&quot;</code><code class=\"plain\">&gt;VERSION&lt;/property&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;property name=</code><code class=\"string\">&quot;com-soasta-touchtest-ios-appId&quot;</code><code class=\"plain\"> type=</code><code class=\"string\">&quot;string&quot;</code><code class=\"plain\">&gt;TEST_APP_ID&lt;/property&gt;</code></div>\n</div>\n    </div>\n    <div class=\"section section-4 \" id=\"src-43298675_PlatformServices-AndroidPermissions\">\n        <h4 class=\"heading \"><span>Android Permissions</span></h4>\n    <p>The application requires the following Android permissions to use AMPLIFY(<sup class=\" \">TM</sup>) Appcelerator Services for Titanium and Alloy applications.    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Permission    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Required By    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n    <pre class=\" \">ACCESS_WIFI_STATE</pre>            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>All services to access the Wi-Fi state of the device.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n    <pre class=\" \">BLUETOOTH</pre>            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>The Test service to uniquely identify the device.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n    <pre class=\" \">BLUETOOTH_ADMIN</pre>            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>The Test service to uniquely identify the device.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n    <pre class=\" \">GET_TASKS</pre>            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n    <ul class=\" \"><li class=\" \">    <p>The Performance service to accurately log which activity caused a crash or error    </p>\n</li><li class=\" \">    <p>The Test service to detect UI changes, UI interactions and playback changes.    </p>\n</li></ul>            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n    <pre class=\" \">INTERNET</pre>            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>All services to access the Appcelerator Platform servers.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n    <pre class=\" \">READ_PHONE_STATE</pre>            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>The Test service to uniquely identify the device.    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43298675_PlatformServices-BehaviorPriortoRelease3.3.0\">\n        <h3 class=\"heading \"><span>Behavior Prior to Release 3.3.0</span></h3>\n    <p>Prior to Release 3.3.0, Appcelerator Studio injected code in    <span style=\"color: #484848;\">\nto the     </span>\n <tt class=\" \">app.js</tt>     <span style=\"color: #484848;\">\n file for classic mobile projects, and     </span>\n <tt class=\" \">alloy.js</tt>     <span style=\"color: #484848;\">\n and     </span>\n <tt class=\" \">index.js</tt>     <span style=\"color: #484848;\">\n files for Alloy projects to enable Appcelerator Performance and Test Services as shown in the code snippets below.    </span>\n    </p>\n    <p>    <span style=\"color: #484848;\">\nTo enable the Performance and Test services for Release 3.3.0 and later:    </span>\n    </p>\n<ul class=\" \"><li class=\" \">    <p>    <span style=\"color: #484848;\">\nFor the Performance service, the module and plugin are auto-loaded and provide basic crash monitoring services.  For advanced features, the application needs to load and initialize the Performance module, then make module API calls (see     </span>\n <a class=\"document-link \" href=\"#!/guide/Performance\">Performance</a>     <span style=\"color: #484848;\">\n for more details).    </span>\n    </p>\n</li><li class=\" \">    <p>    <span style=\"color: #484848;\">\nFor the Test service, the module is auto-loaded and does not require any code to start it.    </span>\n    </p>\n</li></ul>    <div class=\"section section-4 \" id=\"src-43298675_PlatformServices-app.js\">\n        <h4 class=\"heading \"><span>app.js</span></h4>\n    <p>The following changes are made to the <tt class=\" \">app.js</tt> file to enable Appcelerator Services for a classic mobile projects.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app.js\">\n<div class=\"line\"><code class=\"comments\">// Loads and initializes the Appcelerator Performance module</code></div>\n<div class=\"line\"><code class=\"comments\">// Appended to the beginning of the file</code></div>\n<div class=\"line\"><code class=\"plain\">var apm = undefined;</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"keyword\">try</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\">    apm = require(</code><code class=\"string\">&quot;com.appcelerator.apm&quot;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"keyword\">catch</code><code class=\"plain\"> (e) {</code></div>\n<div class=\"line\"><code class=\"plain\">    Ti.API.info(</code><code class=\"string\">&quot;com.appcelerator.apm module is not available&quot;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">apm &amp;&amp; apm.init();</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"plain\">...</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"comments\">// Loads the Appcelerator iOS Test module to use the Test service for iOS</code></div>\n<div class=\"line\"><code class=\"comments\">// Appended to the end of the file</code></div>\n<div class=\"line\"><code class=\"keyword\">if</code><code class=\"plain\"> (Ti.Platform.osname === </code><code class=\"string\">&apos;iphone&apos;</code><code class=\"plain\"> || Ti.Platform.osname === </code><code class=\"string\">&apos;ipad&apos;</code><code class=\"plain\">)</code></div>\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">    var touchTestModule = undefined;</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">try</code></div>\n<div class=\"line\"><code class=\"plain\">    {</code></div>\n<div class=\"line\"><code class=\"plain\">        touchTestModule = require(</code><code class=\"string\">&quot;com.soasta.touchtest&quot;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">catch</code><code class=\"plain\"> (tt_exception)</code></div>\n<div class=\"line\"><code class=\"plain\">    {</code></div>\n<div class=\"line\"><code class=\"plain\">        Ti.API.error(</code><code class=\"string\">&quot;com.soasta.touchest module is required&quot;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">    var cloudTestURL = Ti.App.getArguments().url;</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">if</code><code class=\"plain\"> (cloudTestURL != </code><code class=\"keyword\">null</code><code class=\"plain\">)</code></div>\n<div class=\"line\"><code class=\"plain\">    {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"comments\">// The URL will be null if we don&apos;t launch through TouchTest.</code></div>\n<div class=\"line\"><code class=\"plain\">        touchTestModule &amp;&amp; touchTestModule.initTouchTest(cloudTestURL);</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">    Ti.App.addEventListener(</code><code class=\"string\">&apos;resumed&apos;</code><code class=\"plain\">,function(e)</code></div>\n<div class=\"line\"><code class=\"plain\">    {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"comments\">// Hook the resumed from background</code></div>\n<div class=\"line\"><code class=\"plain\">        var cloudTestURL = Ti.App.getArguments().url;</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"keyword\">if</code><code class=\"plain\"> (cloudTestURL != </code><code class=\"keyword\">null</code><code class=\"plain\">)</code></div>\n<div class=\"line\"><code class=\"plain\">        {</code></div>\n<div class=\"line\"><code class=\"plain\">            touchTestModule &amp;&amp; touchTestModule.initTouchTest(cloudTestURL);</code></div>\n<div class=\"line\"><code class=\"plain\">        }</code></div>\n<div class=\"line\"><code class=\"plain\">    });</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    <p>    </p>\n    </div>\n    <div class=\"section section-4 \" id=\"src-43298675_safe-id-UGxhdGZvcm1TZXJ2aWNlcy1hcHAvYWxsb3kuanM\">\n        <h4 class=\"heading \"><span>app/alloy.js</span></h4>\n    <p>The following changes are made to the <tt class=\" \">alloy.js</tt> file to enable Appcelerator Service for Alloy projects.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"comments\">// Loads and initializes the Appcelerator Performance module</code></div>\n<div class=\"line\"><code class=\"comments\">// Appended to the beginning of the file</code></div>\n<div class=\"line\"><code class=\"plain\">Alloy.Globals.apm = undefined;</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"keyword\">try</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\">    Alloy.Globals.apm = require(</code><code class=\"string\">&quot;com.appcelerator.apm&quot;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"keyword\">catch</code><code class=\"plain\"> (e) {</code></div>\n<div class=\"line\"><code class=\"plain\">    Ti.API.info(</code><code class=\"string\">&quot;com.appcelerator.apm module is not available&quot;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">Alloy.Globals.apm &amp;&amp; Alloy.Globals.apm.init();</code></div>\n</div>\n    </div>\n    <p>    </p>\n    </div>\n    <div class=\"section section-4 \" id=\"src-43298675_safe-id-UGxhdGZvcm1TZXJ2aWNlcy1hcHAvY29udHJvbGxlcnMvaW5kZXguanM\">\n        <h4 class=\"heading \"><span>app/controllers/index.js</span></h4>\n    <p>The following changes are made to the <tt class=\" \">index.js</tt> file to enable Appcelerator Services for Alloy projects.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"comments\">// Loads the Appcelerator iOS Test module to use the Test service for iOS</code></div>\n<div class=\"line\"><code class=\"comments\">// Appended to the end of the file</code></div>\n<div class=\"line\"><code class=\"keyword\">if</code><code class=\"plain\"> (Ti.Platform.osname === </code><code class=\"string\">&apos;iphone&apos;</code><code class=\"plain\"> || Ti.Platform.osname === </code><code class=\"string\">&apos;ipad&apos;</code><code class=\"plain\">)</code></div>\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">    var touchTestModule = undefined;</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">try</code></div>\n<div class=\"line\"><code class=\"plain\">    {</code></div>\n<div class=\"line\"><code class=\"plain\">        touchTestModule = require(</code><code class=\"string\">&quot;com.soasta.touchtest&quot;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">catch</code><code class=\"plain\"> (tt_exception)</code></div>\n<div class=\"line\"><code class=\"plain\">    {</code></div>\n<div class=\"line\"><code class=\"plain\">        Ti.API.error(</code><code class=\"string\">&quot;com.soasta.touchest module is required&quot;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">    var cloudTestURL = Ti.App.getArguments().url;</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">if</code><code class=\"plain\"> (cloudTestURL != </code><code class=\"keyword\">null</code><code class=\"plain\">)</code></div>\n<div class=\"line\"><code class=\"plain\">    {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"comments\">// The URL will be null if we don&apos;t launch through TouchTest.</code></div>\n<div class=\"line\"><code class=\"plain\">        touchTestModule &amp;&amp; touchTestModule.initTouchTest(cloudTestURL);</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">    Ti.App.addEventListener(</code><code class=\"string\">&apos;resumed&apos;</code><code class=\"plain\">,function(e)</code></div>\n<div class=\"line\"><code class=\"plain\">    {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"comments\">// Hook the resumed from background</code></div>\n<div class=\"line\"><code class=\"plain\">        var cloudTestURL = Ti.App.getArguments().url;</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"keyword\">if</code><code class=\"plain\"> (cloudTestURL != </code><code class=\"keyword\">null</code><code class=\"plain\">)</code></div>\n<div class=\"line\"><code class=\"plain\">        {</code></div>\n<div class=\"line\"><code class=\"plain\">            touchTestModule &amp;&amp; touchTestModule.initTouchTest(cloudTestURL);</code></div>\n<div class=\"line\"><code class=\"plain\">        }</code></div>\n<div class=\"line\"><code class=\"plain\">    });</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    </div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-43298675_PlatformServices-Troubleshooting\">\n        <h2 class=\"heading \"><span>Troubleshooting</span></h2>\n    <div class=\"section section-3 \" id=\"src-43298675_PlatformServices-UnabletoenableAppceleratorServices\">\n        <h3 class=\"heading \"><span>Unable to enable Appcelerator Services</span></h3>\n    <p>If more than one person is working on the same project and you try to enable Appcelerator Services after it has already been enabled once, the enablement process may freeze. To resolve this issue, copy the <tt class=\" \">tiapp.xml</tt> from the user who first enabled Appcelerator Services.    </p>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=43298675\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Platform Services"});