Ext.data.JsonP['Studio_4.5.0_Release_Note']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Studio Release Notes</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-46244805\" class=\"content\">\n                        <h1>Studio Release Notes</h1>\n    <p>Studio 4.5.0 is a minor release that includes new features, improvements and bug fixes. See the <a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-7991?filter=17280\" target=\"_blank\">full list of issues address in Release 4.5.0</a>.    </p>\n    <div class=\"section section-2 \" id=\"src-46244805_Studio4.5.0ReleaseNote-NewFeatures\">\n        <h2 class=\"heading \"><span>New Features</span></h2>\n<ul class=\" \"><li class=\" \">    <p class=\"p1\">Studio allows drag-and-drop CLI created projects (native, Arrow, and Module) into Appcelerator Studio Project Explorer.    </p>\n</li><li class=\" \">    <p>Studio now has a defined range of compatible CLI versions. If the CLI or Studio  doesn&apos;t fall within the defined range of one another, the user will be prompted to update either Studio or the CLI accordingly.    </p>\n</li><li class=\" \">    <p class=\"p1\">When a user logs in or out of Studio, the user will be reminded that they are in trial period. This is shown only for Developer Trial/free Plans.    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-46244805_Studio4.5.0ReleaseNote-Improvements\">\n        <h2 class=\"heading \"><span>Improvements</span></h2>\n<ul class=\" \"><li class=\" \">    <p>Studio now creates swift based watchOS2 projects with SDK 5.2 and higher.    </p>\n</li><li class=\" \">    <p>Improved startup performance by loading organizations in the background    </p>\n</li><li class=\" \">    <p>During Studio updates, Studio will verify the minimum required Node.js version is set to at least 0.12.7. If the minimum version is not found, a wizard will launch and help you to install the necessary version.    </p>\n</li><li class=\" \">    <p>When creating a new Alloy project, only the <tt class=\" \">appc new</tt> call happens instead of calling that command plus <tt class=\" \">appc alloy new</tt>    </p>\n</li><li class=\" \">    <p>For new workspaces, the console&apos;s output is no longer limited to 200,000 characters. Existing workspaces can set a new limit by clicking on <strong class=\" \">Window</strong> &gt; <strong class=\" \">Preferences</strong> &gt; <strong class=\" \">Run/Debug</strong> &gt; <strong class=\" \">Console</strong>. There will a checkbox called &quot;<strong class=\" \">Limit console output</strong>&quot; and a textfield where you can enter the buffer size (up to 1,000,000 characters).    </p>\n</li><li class=\" \">    <p>You can now abort Appcelerator CLI installs or upgrades via an alert window    </p>\n</li><li class=\" \">    <p class=\"p1\">As Appc studio doesn&apos;t support JDK 1.8, during the installation phase if studio couldn&apos;t find JDK 1.7 in the system, it will install JDK 1.7 even though it has JDK 1.8.    </p>\n</li><li class=\" \">    <p>Instead of failing a Windows build, the user is now prompted for a GUID    </p>\n</li><li class=\" \">    <p>Previously bad installs of Appcelerator CLI no longer prevents future updates from failing    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-46244805_Studio4.5.0ReleaseNote-FixedIssues\">\n        <h2 class=\"heading \"><span>Fixed Issues</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-7991\" target=\"_blank\">TISTUD-7991</a> - Creating an Arrow project with invalid characters in studio does not show any warning message    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-7982\" target=\"_blank\">TISTUD-7982</a> - Windows: Studio should validate the value for Windows Publisher ID before accepting it    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-7974\" target=\"_blank\">TISTUD-7974</a> - Org name is hidden below the users email    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-7971\" target=\"_blank\">TISTUD-7971</a> - Unable to publish arrow app    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-7961\" target=\"_blank\">TISTUD-7961</a> - Avoid force update if studio doesn&apos;t find required cli information in the sdk-info.json file    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-7956\" target=\"_blank\">TISTUD-7956</a> - Studio does not recognise orgs with CLI 5.2.0    <span style=\"color: #2b4771;\">\n<br>    </br></span>\n    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-7916\" target=\"_blank\">TISTUD-7916</a> - Can&apos;t login to Jira via Appcelerator Studio if username has space    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-7911\" target=\"_blank\">TISTUD-7911</a> - Remove multiple wizard pages for configuring provisioning profiles<del class=\" \"><br/></del>    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-7900\" target=\"_blank\">TISTUD-7900</a> - Invalid proxyServer set after launching Studio    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-7899\" target=\"_blank\">TISTUD-7899</a> -  Remove hardcoded node version 4.2.1 from studio    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-7883\" target=\"_blank\">TISTUD-7883</a> - Install Titanium SDK - List of SDK&apos;s empty    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-7879\" target=\"_blank\">TISTUD-7879</a> - JIRA ticket creation will fail from studio if we select the severity to &apos;None&apos;    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-7871\" target=\"_blank\">TISTUD-7871</a> - When you update Studio, the admin dialog to enter admin password appears    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-7822\" target=\"_blank\">TISTUD-7822</a> - Studio freezes for a while when we open a tiapp.xml file where the project org does not belong to the current logged in user    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-7783\" target=\"_blank\">TISTUD-7783</a> - When you create new project, the App Id field and URL field are in the reverse order    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-7769\" target=\"_blank\">TISTUD-7769</a> - On Login splash screen &quot;Remember my Email Address&quot; label foreground color looks black on windows and white on mac os    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-7741\" target=\"_blank\">TISTUD-7741</a> - Add prominent display of &quot;what you like/what can be better&quot; to solicit feedback    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-7740\" target=\"_blank\">TISTUD-7740</a> - Unable to submit a JIRA ticket via Studio as &quot;versions&quot; is not defined    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-7715\" target=\"_blank\">TISTUD-7715</a> - TiApp Editor doesn&apos;t update when you change &lt;extensions&gt;    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-7713\" target=\"_blank\">TISTUD-7713</a> - TiApp: Using the &lt;windows&gt; tag in tiapp.xml shows an invalid content error    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-7639\" target=\"_blank\">TISTUD-7639</a> - Clicking on the &quot;Arrow Builder&quot; link in the release notes take you to http://www.appcelerator.com/product/    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-7637\" target=\"_blank\">TISTUD-7637</a> - Liveview: --liveview flag is not passed to the CLI when building for Windows Platform    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-7604\" target=\"_blank\">TISTUD-7604</a> - Missing Windows Store Certificate in Preferences dialog    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-7552\" target=\"_blank\">TISTUD-7552</a> - Importing an existing Alloy (non-Studio) project does not add Alloy nature    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-7538\" target=\"_blank\">TISTUD-7538</a> - Default URL for tiapp.xml valid in wizard but invalid in editor    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-7508\" target=\"_blank\">TISTUD-7508</a> - When unpublishing an Arrow application, the toast notification displays the app name prefixed with &apos;P/&apos;    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-7484\" target=\"_blank\">TISTUD-7484</a> - Dashboard in offline mode:Clicking refresh button from dashboard launches another browser with name&quot;Web Browser&quot;    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-7149\" target=\"_blank\">TISTUD-7149</a> - Windows: Cryptic error message in tiapp.xml editor that needs to be reworded    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-6755\" target=\"_blank\">TISTUD-6755</a> - Appcelerator Studio: Run configurations display incorrectly    </p>\n</li></ul>    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=46244805\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Studio 4.5.0 Release Note"});