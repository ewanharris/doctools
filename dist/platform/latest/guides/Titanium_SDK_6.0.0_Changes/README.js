Ext.data.JsonP['Titanium_SDK_6.0.0_Changes']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Titanium SDK 6.0.0 Changes</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-48431315\" class=\"content\">\n                        <h1>Titanium SDK 6.0.0 Changes</h1>\n    <p>With the release of Titanium SDK 6.0.0, we introduced many great features and improvements. However, some of these changes broke features in previous releases. This document lists all the breaking changes as well as how to handle them.    </p>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Titanium_SDK_6.0.0_Changes-section-src-48431315_TitaniumSDK6.0.0Changes-RebuildingAndroidModules\">Rebuilding Android Modules</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Titanium_SDK_6.0.0_Changes-section-src-48431315_TitaniumSDK6.0.0Changes-Node.js\">Node.js</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Titanium_SDK_6.0.0_Changes-section-src-48431315_TitaniumSDK6.0.0Changes-Xcode\">Xcode</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Titanium_SDK_6.0.0_Changes-section-src-48431315_TitaniumSDK6.0.0Changes-DeprecatedAPIs\">Deprecated APIs</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Titanium_SDK_6.0.0_Changes-section-src-48431315_TitaniumSDK6.0.0Changes-watchOS1\">watchOS 1</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Titanium_SDK_6.0.0_Changes-section-src-48431315_TitaniumSDK6.0.0Changes-Listentoandroidback\">Listen to androidback</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Titanium_SDK_6.0.0_Changes-section-src-48431315_TitaniumSDK6.0.0Changes-ModuleguidesuseCLIinsteadofbuild.py\">Module guides use CLI instead of build.py</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Titanium_SDK_6.0.0_Changes-section-src-48431315_TitaniumSDK6.0.0Changes-Studio4.8.0\">Studio 4.8.0</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Titanium_SDK_6.0.0_Changes-section-src-48431315_TitaniumSDK6.0.0Changes-RemovalofTi.include\">Removal of Ti.include</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"src-48431315_TitaniumSDK6.0.0Changes-RebuildingAndroidModules\">\n        <h2 class=\"heading \"><span>Rebuilding Android Modules</span></h2>\n    <p>For this release of Titanium SDK 6.0.0, V8 has been updated to the latest LTS release (<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TIMOB-19790\" target=\"_blank\">TIMOB-19790</a>). Any projects built on previous versions of the SDK will need to rebuild all of the Android modules.    </p>\n    <p>If you have Android titanium modules, you have to rebuild them with this V8 in order for it to be supported on Titanium SDK 6.0.0.    </p>\n    <p>You will need to update the android/manifest by:    </p>\n<ol class=\" \"><li class=\" \">    <p>Bump apiversion from 2 to 3.    </p>\n</li><li class=\" \">    <p>Remove &quot;armeabi&quot; ABI from listing (keep &quot;armeabi-v7a&quot;).    </p>\n</li><li class=\" \">    <p>Bump their module version (typically bump the major number since this is a backwards-incompatible change).    </p>\n</li><li class=\" \">    <p>Update minsdk to 6.0.0.    </p>\n</li><li class=\" \">    <p>Then rebuild the module.    </p>\n</li></ol>    <p>Note, you may also need to edit the Java code to remove references to deprecate classes that have been removed in 6.0.0 (such as TiContext).    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-48431315_TitaniumSDK6.0.0Changes-Node.js\">\n        <h2 class=\"heading \"><span>Node.js</span></h2>\n    <p>Node 4.2.0 is the new minimum supported version and 4.6.x is the maximum supported version. Please install or update Node.js accordingly.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-48431315_TitaniumSDK6.0.0Changes-Xcode\">\n        <h2 class=\"heading \"><span>Xcode</span></h2>\n    <p>Xcode 8 in the minimum supported version. Please install or update Xcode accordingly.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-48431315_TitaniumSDK6.0.0Changes-DeprecatedAPIs\">\n        <h2 class=\"heading \"><span>Deprecated APIs</span></h2>\n    <p>For this release, we removed 176+ APIs across iOS and Android. Please review this table to see how it would affect your projects.    </p>\n    <p>&lt;insert table here after it has been generated from <a class=\"external-link \" href=\"https://wiki.appcelerator.org/display/~bimmel/Generate+API+Change+Report+Script\">Generate API Change Report Script</a>&gt;    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-48431315_TitaniumSDK6.0.0Changes-watchOS1\">\n        <h2 class=\"heading \"><span>watchOS 1</span></h2>\n    <p>As of SDK 6.0.0, the watchOS 1 template and all related code are no longer supported. See <a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TIMOB-20083\" target=\"_blank\">TIMOB-20083</a> for details.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-48431315_TitaniumSDK6.0.0Changes-Listentoandroidback\">\n        <h2 class=\"heading \"><span>Listen to androidback</span></h2>\n    <p>With SDK 6.0.0+, we changed how the override of a default behavior for the back button on Android works. This change requires apps using this version to override the back button to update their code when using calls like this: <tt class=\" \">win.addEventListener(&apos;androidback&apos;, onBack);</tt>    </p>\n    <p>See <a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TIMOB-19919\" target=\"_blank\">TIMOB-19919</a> for more details.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-48431315_TitaniumSDK6.0.0Changes-ModuleguidesuseCLIinsteadofbuild.py\">\n        <h2 class=\"heading \"><span>Module guides use CLI instead of build.py</span></h2>\n    <p>As of SDK 6.0.0, we have removed all Python scripts that are normally used to in the app build process. Users can use the CLI equivalent (<tt class=\" \">ti build</tt>) and it should be backwards compatible on all your projects. As of SDK 5.2.1, all new projects warn users that the <tt class=\" \">build.py</tt> script will be deprecated.    </p>\n    <p>To build an iOS or Android module, use the ti build command from the CLI:    </p>\n<ul class=\" \"><li class=\" \">    <p>iOS: <tt class=\" \">ti build -p ios --build-only</tt>    </p>\n</li><li class=\" \">    <p>Android: <tt class=\" \">ti build -p android --build-only</tt>    </p>\n</li></ul>    <p>If you omit the <tt class=\" \">--build-only</tt> flag, it will run <tt class=\" \">ti create</tt> and <tt class=\" \">ti build</tt> with the example code in the module.    </p>\n    <p><strong class=\" \">Note</strong>: The <tt class=\" \">--project-dir </tt>flag must point to the platform-specific subdirectory in the module directory.    </p>\n    <p>For those who use the Unified CLI and are confused if you should use either <tt class=\" \">appc run</tt> or <tt class=\" \">appc ti</tt> build, you should change directories into<tt class=\" \">&lt;module-dir&gt;/iphone</tt> and <tt class=\" \">run appc run -p ios --build-only</tt> command.    </p>\n    <p>To upgrade your module to stop using the <tt class=\" \">build.py</tt> script, follow these steps:    </p>\n<ol class=\" \"><li class=\" \">    <p>Delete the <tt class=\" \">build.py</tt> file.    </p>\n</li><li class=\" \">    <p>Execute either one of these commands:    </p>\n<ul class=\" \"><li class=\" \">    <p><tt class=\" \">ti build -p &lt;platform&gt; --build-only</tt>    </p>\n</li><li class=\" \">    <p><tt class=\" \">appc run -p &lt;platform&gt; --build-only</tt>    </p>\n</li></ul></li></ol>    <p>There isn&apos;t anything else you need to change.    </p>\n    <p><strong class=\" \">Note for Android users</strong>: <tt class=\" \">ant</tt> is no longer required.    </p>\n    <p>For those iOS users who need to create customized storyboards or for users who copy content into the <tt class=\" \">../platform/iphone/ios</tt> directory, you can now create a directory called <tt class=\" \">Resources</tt> in each platform-specific directory and place all your files in there that you wish to be copied into your app.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-48431315_TitaniumSDK6.0.0Changes-Studio4.8.0\">\n        <h2 class=\"heading \"><span>Studio 4.8.0</span></h2>\n    <p><strong class=\" \">Recommendation:</strong> If you upgraded SDK to version 6.0.0, we strongly urge you to upgrade Studio to version 4.8.0 to avoid any backwards compatibility issues.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-48431315_TitaniumSDK6.0.0Changes-RemovalofTi.include\">\n        <h2 class=\"heading \"><span>Removal of Ti.include</span></h2>\n    <p>Ti.include has been deprecated since version 3.3.0. With the release of 6.0.0, we have completely removed it (<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TIMOB-23185\" target=\"_blank\">TIMOB-23185</a>). For those who are still using it, we urge you to replace usage with the necessary <strong class=\" \">require()</strong> calls. If you did not migrate until now, please follow <a class=\"external-link external-link\" href=\"#!/api/Global-method-require\">this guide</a> to do so.    </p>\n    <p>As a last resort, consider using this workaround:    </p>\n    <p><strong class=\" \">Ti.include workaround</strong>    </p>\n    <p>    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \"/><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\"js keyword \">function</tt> <tt class=\"js plain \">include(file) {</tt><tt class=\"js spaces \">    </tt><tt class=\"js keyword \">return</tt> <tt class=\"js plain \">eval(Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, file).read().text);</tt><tt class=\"js plain \">}</tt>    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <p>    </p>\n    <p>    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=48431315\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Titanium SDK 6.0.0 Changes"});