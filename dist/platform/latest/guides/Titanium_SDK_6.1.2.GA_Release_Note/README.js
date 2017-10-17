Ext.data.JsonP['Titanium_SDK_6.1.2.GA_Release_Note']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Titanium SDK 6.1.2.GA -  3 August 2017</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-50725867\" class=\"content\">\n                        <h1>Titanium SDK 6.1.2.GA -  3 August 2017</h1>\n    <div class=\"section section-2 \" id=\"src-50725867_TitaniumSDK6.1.2.GAReleaseNote-Contents\">\n        <h2 class=\"heading \"><span>Contents</span></h2>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Titanium_SDK_6.1.2.GA_Release_Note-section-src-50725867_TitaniumSDK6.1.2.GAReleaseNote-Aboutthisrelease\">About this release</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Titanium_SDK_6.1.2.GA_Release_Note-section-src-50725867_TitaniumSDK6.1.2.GAReleaseNote-Fixedissues\">Fixed issues</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Titanium_SDK_6.1.2.GA_Release_Note-section-src-50725867_TitaniumSDK6.1.2.GAReleaseNote-Improvements\">Improvements</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Titanium_SDK_6.1.2.GA_Release_Note-section-src-50725867_TitaniumSDK6.1.2.GAReleaseNote-APIchanges\">API changes</a>    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-50725867_TitaniumSDK6.1.2.GAReleaseNote-Aboutthisrelease\">\n        <h2 class=\"heading \"><span>About this release</span></h2>\n    <p>Titanium SDK 6.1.2.GA is a patch release of the SDK, addressing high-priority issues from previous releases.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-50725867_TitaniumSDK6.1.2.GAReleaseNote-Fixedissues\">\n        <h2 class=\"heading \"><span>Fixed issues</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TIMOB-24710\" target=\"_blank\">TIMOB-24710</a> - Android: V8 crashes on Android N    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TIMOB-24814\" target=\"_blank\">TIMOB-24814</a> - Windows: Label&apos;s width/height doesn&apos;t recalculate right when it contained in View with set width/height    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TIMOB-24819\" target=\"_blank\">TIMOB-24819</a> - Windows: Uncaught Error: undefined when a label is wrapped in a view that has a fixed width    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TIMOB-24830\" target=\"_blank\">TIMOB-24830</a> - IOS: Cache module after the first require() call (regression to 5.x)    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TIMOB-24840\" target=\"_blank\">TIMOB-24840</a> - Windows: Calling setData on a tableview that already has data errors out    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TIMOB-24868\" target=\"_blank\">TIMOB-24868</a> - Android: Duplicate build steps during module builds    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TIMOB-24872\" target=\"_blank\">TIMOB-24872</a> - [Android] Unable to destroy activity when exiting application has a TableView    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TIMOB-24906\" target=\"_blank\">TIMOB-24906</a> - Windows: Get an &quot;Error device not found&quot; error now and again when building to an Android emulator    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TIMOB-24911\" target=\"_blank\">TIMOB-24911 </a> - Android: Filtering R. files when building Android modules does not work on Windows    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TIMOB-24926\" target=\"_blank\">TIMOB-24926</a> - Android: Prevent fireEvent when proxy has been released    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TIMOB-24932\" target=\"_blank\">TIMOB-24932</a> - Android Hybrid modules: cannot instantiate a proxy in a js file that is packaged in the same module    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TIMOB-24960\" target=\"_blank\">TIMOB-24960</a> - Android: TiHTTPClient credentials encoding issue    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TIMOB-24966\" target=\"_blank\">TIMOB-24966 </a> - Windows: Ti.UI.SearchBar&apos;s showCancel=false is ignored    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TIMOB-24987\" target=\"_blank\">TIMOB-24987</a> - Android: TextField and TextView elements in SDK 6.1.1.GA do not fire focus events / trigger keyboard when using custom theme    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TIMOB-25004\" target=\"_blank\">TIMOB-25004</a> - Build: ioslib is getting removed in the 6_1_X build process    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-50725867_TitaniumSDK6.1.2.GAReleaseNote-Improvements\">\n        <h2 class=\"heading \"><span>Improvements</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TIMOB-24174\" target=\"_blank\">TIMOB-24174</a> - Android: Update TableView/ListView accessory images, fix spacing    </p>\n<ul class=\" \"><li class=\" \">    <p>Added <tt class=\" \">xxxhigh</tt> images and revised the size for the other icons. The revised sizes are as follows:    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Icon    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Size    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>low    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>36px    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>medium    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>48px    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>high    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>72px    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>xhigh    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>96px    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>xxhigh    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>144px    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>xxxhigh    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>192px    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n</li></ul></li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-50725867_TitaniumSDK6.1.2.GAReleaseNote-APIchanges\">\n        <h2 class=\"heading \"><span>API changes</span></h2>\n    <p>There were no API changes in this release.    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=50725867\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Titanium SDK 6.1.2.GA Release Note"});