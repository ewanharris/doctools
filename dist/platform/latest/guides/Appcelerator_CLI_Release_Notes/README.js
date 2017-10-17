Ext.data.JsonP['Appcelerator_CLI_Release_Notes']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Appcelerator CLI Release Notes</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-43299503\" class=\"content\">\n                        <h1>Appcelerator CLI Release Notes</h1>\n    <div class=\"section section-2 \" id=\"src-43299503_AppceleratorCLIReleaseNotes-AppceleratorCLI6.2.4.GA-13September2017\">\n        <h2 class=\"heading \"><span>Appcelerator CLI 6.2.4.GA - 13 September 2017</span></h2>\n    <p>Appcelerator CLI 6.2.4.GA is a patch release that includes new features, improvements and bug fixes.    </p>\n    <div class=\"section section-3 \" id=\"src-43299503_AppceleratorCLIReleaseNotes-Componentversions\">\n        <h3 class=\"heading \"><span>Component versions</span></h3>\n    <p>The following components are shipped with CLI 6.2.4.GA:    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \"/><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Alloy    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>1.9.14    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Arrow Builder    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>2.0.2    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Arrow Cloud CLI    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>2.0.5    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Titanium CLI    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>5.0.14    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43299503_AppceleratorCLIReleaseNotes-Improvements\">\n        <h3 class=\"heading \"><span>Improvements</span></h3>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-785\" target=\"_blank\">CLI-785</a> - Prompts/Options for creating WatchOS2 project are confusing when not ran in project dir    </p>\n<ul class=\" \"><li class=\" \">    <p>When creating an Watch project, the <tt class=\" \">appc new -t applewatch</tt> command now asked where the Titanium project directory is and what the WatchOS project name if    <span style=\"color: #ffcc00;\">\n     </span>\nthis command is executed outside the project directory    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-791\" target=\"_blank\">CLI-791</a> - If login is needed it should end with a message before continuing with original command    </p>\n<ul class=\" \"><li class=\" \">    <p>When logging in via the CLI, it now displays a message that you have successfully logged in    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-1229\" target=\"_blank\">CLI-1229</a> - Rename appc new options    </p>\n<ul class=\" \"><li class=\" \">    <p>Renamed several <tt class=\" \">appc new</tt> options as part of our product rebranding effort    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Old option    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>New option    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">Native app (app)</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">Titanium App</tt>    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">Arrow app (arrow)</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>API Builder Ap    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">Titanium Module (timodule)</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">Titanium Module</tt>    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Apple Watch&#x2122; App    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">Apple Watch&#x2122; App</tt>    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n</li></ul></li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-1230\" target=\"_blank\">CLI-1230</a> - Update create arrow app command    </p>\n<ul class=\" \"><li class=\" \">    <p>Replaced the &quot;Arrow&quot; name with the <tt class=\" \">appc new -t</tt> command as part of our product rebranding effort    </p>\n</li><li class=\" \">    <p>Old usage: <tt class=\" \">appc new -t arrow</tt>    </p>\n</li><li class=\" \">    <p>New usage: <tt class=\" \">appc new -t api</tt>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/ALOY-1578\" target=\"_blank\">ALOY-1578</a> - Move Ti.UI.iOS.Toolbar to Ti.UI.Toolbar    </p>\n<ul class=\" \"><li class=\" \">    <p>    <span style=\"color: #24292e;\">\nRemoved implicit iOS namespace for Toolbar    </span>\n    </p>\n</li><li class=\" \">    <p>    <span style=\"color: #24292e;\">\nAdded Android Alloy parser for Toolbar    </span>\n    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/ALOY-1579\" target=\"_blank\">ALOY-1579</a> - Support Ti.UI.Android.DrawerLayout    </p>\n<ul class=\" \"><li class=\" \">    <p>Added support for <tt class=\" \">Ti.UI.Android.DrawerLayout</tt>    </p>\n</li></ul></li></ul>    </div>\n    <div class=\"section section-3 \" id=\"src-43299503_AppceleratorCLIReleaseNotes-Fixedissues\">\n        <h3 class=\"heading \"><span>Fixed issues</span></h3>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-839\" target=\"_blank\">CLI-839</a> - Switch org: Error thrown when logging into org that user is currently logged in to    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-1021\" target=\"_blank\">CLI-1021</a> - &quot;appc user remove&quot; returns &quot;invalid action&quot; error    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-1058\" target=\"_blank\">CLI-1058</a> - --port command line option for Arrow not shown in help screen    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-1241\" target=\"_blank\">CLI-1241</a> - appc login --host option is not recognized    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-1249\" target=\"_blank\">CLI-1249</a> - Windows CLI: Hyperloop not added during project creation    </p>\n</li></ul>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-43299503_AppceleratorCLIReleaseNotes-RecentReleases\">\n        <h2 class=\"heading \"><span>Recent Releases</span></h2>\n<ul class=\"childpages-macro \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_CLI_6.2.4.RC_Release_Note\">Appcelerator CLI 6.2.4.RC Release Note</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_CLI_6.2.4.GA_Release_Note\">Appcelerator CLI 6.2.4.GA Release Note</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_CLI_6.2.3.RC_Release_Note\">Appcelerator CLI 6.2.3.RC Release Note</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_CLI_6.2.3.GA_Release_Note\">Appcelerator CLI 6.2.3.GA Release Note</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_CLI_6.2.2.GA_Release_Note\">Appcelerator CLI 6.2.2.GA Release Note</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_CLI_6.2.1.GA_Release_Note\">Appcelerator CLI 6.2.1.GA Release Note</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_CLI_6.2.0.GA_Release_Note\">Appcelerator CLI 6.2.0.GA Release Note</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_CLI_6.1.0_Release_Note\">Appcelerator CLI 6.1.0 Release Note</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_CLI_6.0.0.RC_Release_Note\">Appcelerator CLI 6.0.0.RC Release Note</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_CLI_6.0.0.GA_Release_Note\">Appcelerator CLI 6.0.0.GA Release Note</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_CLI_6.0.0.Beta_Release_Note\">Appcelerator CLI 6.0.0.Beta Release Note</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_CLI_5.5.1.GA_Release_Note\">Appcelerator CLI 5.5.1.GA Release Note</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_CLI_5.5.0.RC_Release_Note\">Appcelerator CLI 5.5.0.RC Release Note</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_CLI_5.5.0.GA_Release_Note\">Appcelerator CLI 5.5.0.GA Release Note</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_CLI_5.5.0.Beta_Release_Note\">Appcelerator CLI 5.5.0.Beta Release Note</a>    </p>\n</li></ul>    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=43299503\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Appcelerator CLI Release Notes"});