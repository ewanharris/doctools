Ext.data.JsonP['Appcelerator_Performance_Management']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Appcelerator Performance Management</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-43298691\" class=\"content\">\n                        <h1>Appcelerator Performance Management</h1>\n    <p>    </p>\n    <div class=\"confbox admonition admonition-warning aui-message problem shadowed information-macro\">\n            <div class=\"title\">Enterprise Subscription Required!</div>\n            <p>This AMPLIFY(<sup class=\" \">TM</sup>) Appcelerator Services feature requires an Enterprise Subscription.    </p>\n    </div>\n        <p>    </p>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_Performance_Management-section-src-43298691_AppceleratorPerformanceManagement-Introduction\">Introduction</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_Performance_Management-section-src-43298691_AppceleratorPerformanceManagement-UsingAppceleratorPerformance\">Using Appcelerator Performance</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_Performance_Management-section-src-43298691_AppceleratorPerformanceManagement-SetupYourProject\">Setup Your Project</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_Performance_Management-section-src-43298691_AppceleratorPerformanceManagement-InitializetheModule\">Initialize the Module</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_Performance_Management-section-src-43298691_AppceleratorPerformanceManagement-CreateaBreadcrumbTrail\">Create a Breadcrumb Trail</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_Performance_Management-section-src-43298691_AppceleratorPerformanceManagement-AddUserMetadata\">Add User Metadata</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_Performance_Management-section-src-43298691_AppceleratorPerformanceManagement-LogAnError\">Log An Error</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_Performance_Management-section-src-43298691_AppceleratorPerformanceManagement-AllowtheUsertoOpt-Out\">Allow the User to Opt-Out</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_Performance_Management-section-src-43298691_AppceleratorPerformanceManagement-CheckforaCrash\">Check for a Crash</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_Performance_Management-section-src-43298691_AppceleratorPerformanceManagement-Android-SpecificFeatures\">Android-Specific Features</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_Performance_Management-section-src-43298691_AppceleratorPerformanceManagement-CaptureLogcatData\">Capture Logcat Data</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_Performance_Management-section-src-43298691_AppceleratorPerformanceManagement-SetaCustomNotificationTitle\">Set a Custom Notification Title</a>    </p>\n</li></ul></li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Appcelerator_Performance_Management-section-src-43298691_AppceleratorPerformanceManagement-FurtherReading\">Further Reading</a>    </p>\n</li></ul>    <p>This page describes how to use the Appcelerator Performance Management module API to help track crashes in your application.    </p>\n    <div class=\"section section-2 \" id=\"src-43298691_AppceleratorPerformanceManagement-Introduction\">\n        <h2 class=\"heading \"><span>Introduction</span></h2>\n    <p>The Appcelerator Performance service, powered by Apteligent, monitors your application&apos;s health, crashes and overall performance. Using Appcelerator Performance, developers are able to analyze crash reports to see why applications crashed and focus on the specific problems on user feedback.    </p>\n    <p>Currently, the Appcelerator Performance service only supports the Android and iOS platforms.    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <p>When you log into the Appcelerator Performance dashboard, you may encounter a gray navigation bar across the top, right below the AMPLIFY Appcelerator Services navigation bar, and an orange &quot;Contact us!&quot; pop-up when you navigate to certain areas of the dashboard. These items are for Apteligent customers using native SDKs and are invalid for Appcelerator mobile applications.    </p>\n    <p>For support with Appcelerator Performance, visit <a class=\"external-link external-link\" href=\"http://support.appcelerator.com\" target=\"_blank\">http://support.appcelerator.com</a>.    </p>\n    <p>For additional documentation, see the &quot;Further Reading&quot; section below.    </p>\n    </div>\n        </div>\n    <div class=\"section section-2 \" id=\"src-43298691_AppceleratorPerformanceManagement-UsingAppceleratorPerformance\">\n        <h2 class=\"heading \"><span>Using Appcelerator Performance</span></h2>\n    <p>To use the Appcelerator Performance service, enable Appcelerator Services for your project, then use the Appcelerator Performance module API to add breadcrumbs, user metadata and error handling code to log events leading up to a crash.  Login to the Appcelerator Dashboard and use the Appcelerator Performance dashboard to monitor application performance and analyze crash reports.    </p>\n    <p>    <img src=\"images/download/attachments/43298691/PerformanceDashboard.png\" alt=\"images/download/attachments/43298691/PerformanceDashboard.png\" class=\"confluence-embedded-image\">\n        </img></p>\n    <div class=\"section section-3 \" id=\"src-43298691_AppceleratorPerformanceManagement-SetupYourProject\">\n        <h3 class=\"heading \"><span>Setup Your Project</span></h3>\n    <p>When creating a new application in Appcelerator Studio, make sure the <strong class=\" \">Enable Appcelerator Services</strong> checkbox is enabled.    </p>\n    <p>For a previously created project, if Appcelerator Services were not previously enabled, open your <tt class=\" \">tiapp.xml</tt> file, then click the <strong class=\" \">Enable Services</strong> button under the <i class=\" \">Appcelerator Service</i> section.    </p>\n    <p>Appcelerator Studio injects code in to the <tt class=\" \">tiapp.xml</tt> file to setup the Appcelerator Performance Management module ( <tt class=\" \">com.appcelerator.apm</tt> ).   See <a class=\"document-link \" href=\"#!/guide/Platform_Services\">Platform Services</a> for the code modifications.  Do not modify these changes made by Appcelerator Studio or else you will disable the Appcelerator Performance service .    </p>\n    <p>    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43298691_AppceleratorPerformanceManagement-InitializetheModule\">\n        <h3 class=\"heading \"><span>Initialize the Module</span></h3>\n    <p>    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <p><strong class=\" \">Prior to Release 3.3.0,</strong> Appcelerator Studio would inject the code to load and initialize the module. The application could make API calls to module using the <tt class=\" \">apm</tt> object for classic mobile projects or <tt class=\" \">Alloy.Globals.apm</tt> for Alloy projects.    </p>\n    </div>\n        <p>Before making API calls to the Performance module, the application needs to load the module and initialize it.  Load the module using the <tt class=\" \">require()</tt> method and pass the name of the module ( <tt class=\" \">com.appcelerator.apm</tt> ) to the method, then initialize the module by call the <tt class=\" \">init()</tt> method.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var apm = require(</code><code class=\"string\">&quot;com.appcelerator.apm&quot;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">apm.init();</code></div>\n</div>\n    </div>\n    <p>For Alloy projects, you can keep a global reference to the module in the <tt class=\" \">Alloy.Globals</tt> namespace.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/alloy.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/alloy.js\">\n<div class=\"line\"><code class=\"plain\">Alloy.Globals.apm = require(</code><code class=\"string\">&quot;com.appcelerator.apm&quot;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">Alloy.Globals.apm.init();</code></div>\n</div>\n    </div>\n    <p>Make Performance Management module API calls using the  <tt class=\" \">apm</tt>  object.  For complete API information, see <a class=\"external-link external-link\" href=\"#!/api/Modules.Performance\">Performance Module API</a>.    </p>\n    <p>By default, the <tt class=\" \">init()</tt> method uses the value of the <tt class=\" \">com-appcelerator-apm-id</tt> key in the <tt class=\" \">tiapp.xml</tt> file to initialize the Performance service.  You can optionally pass a different ID by passing it as an argument to the  <tt class=\" \">init</tt>  method .  The app ID passed to the  <tt class=\" \">init</tt>  method takes precedence over the <tt class=\" \">com-appcelerator-apm-id</tt>   key.     </p>\n    <p class=\"diff-block-target diff-block-context\">To get your APM App ID either:    </p>\n<ul class=\"diff-block-target diff-block-context \"><li class=\" \">    <p>Open your <tt class=\" \">tiapp.xml</tt> file (in the Overview view) and click the <strong class=\" \">Show ID</strong> link next to the <strong class=\" \">Performance</strong> service or look for the <tt class=\" \">com-appcelerator-apm-id</tt> key in the raw view.    </p>\n</li><li class=\" \">    <p>Go to the <a class=\"external-link external-link\" href=\"https://platform.appcelerator.com/\" target=\"_blank\">Appcelerator Dashboard</a>, select your application, click <strong class=\" \">Performance</strong> and click <strong class=\" \">Settings</strong> in the left pane.  In the right pane, select the<strong class=\" \"> Basics</strong> tab and locate <strong class=\" \">Crittercism App ID</strong>.    </p>\n</li></ul>    </div>\n    <div class=\"section section-3 \" id=\"src-43298691_AppceleratorPerformanceManagement-CreateaBreadcrumbTrail\">\n        <h3 class=\"heading \"><span>Create a Breadcrumb Trail</span></h3>\n    <p>To make it easier to track the events leading up to a crash, use the <tt class=\" \">leaveBreadcrumb</tt> method to add breadcrumbs in your code.  Place breadcrumbs near events and application state changes to track problematic paths that can lead to an application crash.  Append variables to your breadcrumbs to track their state.  For example:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"comments\">// If Alloy project</code></div>\n<div class=\"line\"><code class=\"comments\">// var apm = Alloy.Globals.apm;</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">function alphaCB (args) {</code></div>\n<div class=\"line\"><code class=\"plain\">    apm.leaveBreadcrumb(</code><code class=\"string\">&apos;enter alphaCB:&apos;</code><code class=\"plain\"> + JSON.stringify(args));</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">//do some stuff...</code></div>\n<div class=\"line\"><code class=\"plain\">    apm.leaveBreadcrumb(</code><code class=\"string\">&apos;exit alphaCB:&apos;</code><code class=\"plain\"> + result);</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">return</code><code class=\"plain\"> result;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"plain\">function betaCB (args) {</code></div>\n<div class=\"line\"><code class=\"plain\">    apm.leaveBreadcrumb(</code><code class=\"string\">&apos;enter betaCB:&apos;</code><code class=\"plain\"> + JSON.stringify(args));</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// do some stuff...</code></div>\n<div class=\"line\"><code class=\"plain\">    apm.leaveBreadcrumb(</code><code class=\"string\">&apos;exit betaCB:&apos;</code><code class=\"plain\"> + result);</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">return</code><code class=\"plain\"> result;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"keyword\">switch</code><code class=\"plain\"> (state) {</code></div>\n<div class=\"line\"><code class=\"plain\">    apm.leaveBreadcrumb(</code><code class=\"string\">&apos;switch:&apos;</code><code class=\"plain\"> + state);</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">case</code><code class=\"plain\"> x : </code></div>\n<div class=\"line\"><code class=\"plain\">        alphaCB({foo: </code><code class=\"value\">1</code><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"keyword\">break</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">case</code><code class=\"plain\"> y :</code></div>\n<div class=\"line\"><code class=\"plain\">        alphaCB({foo: </code><code class=\"value\">2</code><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">        betaCB({foo: </code><code class=\"value\">1</code><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"keyword\">break</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">default</code><code class=\"plain\"> :</code></div>\n<div class=\"line\"><code class=\"plain\">        alphaCB({foobar: </code><code class=\"value\">0</code><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">        betaCB({foobar: </code><code class=\"value\">0</code><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    <p>These breadcrumbs are collected and passed to the Appcelerator Performance service.  To view the breadcrumbs, in the Appcelerator Performance dashboard, when viewing a specific application, click either <strong class=\" \">Crash Reports </strong>or <strong class=\" \">Handled Exceptions</strong>.  In the list of crashes or handled errors in the right pane, click on the crash or error to view its details.  Click the <strong class=\" \">Breadcrumbs</strong> tab to view the breadcrumb trails leading up to the crash or error.    </p>\n    <p>The most recent 100 breadcrumbs are displayed before the crash occurred.  A breadcrumb can be up to 140 characters.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43298691_AppceleratorPerformanceManagement-AddUserMetadata\">\n        <h3 class=\"heading \"><span>Add User Metadata</span></h3>\n    <p>Use the <tt class=\" \">setUsername</tt> and <tt class=\" \">setMetadata</tt> methods to differentiate users of your application when viewing reports on the Appcelerator Performance dashboard.  For example:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"comments\">// If Alloy project</code></div>\n<div class=\"line\"><code class=\"comments\">// var apm = Alloy.Globals.apm;</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"plain\">var status = login(username);</code></div>\n<div class=\"line\"><code class=\"keyword\">if</code><code class=\"plain\"> (status) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Sets the username</code></div>\n<div class=\"line\"><code class=\"plain\">    apm.setUsername(username);</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Sets some user state metadata for tracking errors</code></div>\n<div class=\"line\"><code class=\"plain\">    apm.setMetadata(</code><code class=\"string\">&apos;lastLogin&apos;</code><code class=\"plain\">, datetime);</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"comments\">// Track the user&apos;s state</code></div>\n<div class=\"line\"><code class=\"plain\">apm.setMetadata(</code><code class=\"string\">&apos;gameLevel&apos;</code><code class=\"plain\">, </code><code class=\"value\">0</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"comments\">// do some stuff...</code></div>\n<div class=\"line\"><code class=\"plain\">apm.setMetadata(</code><code class=\"string\">&apos;gameLevel&apos;</code><code class=\"plain\">, </code><code class=\"value\">1</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"comments\">// do some stuff...</code></div>\n<div class=\"line\"><code class=\"plain\">apm.setMetadata(</code><code class=\"string\">&apos;gameLevel&apos;</code><code class=\"plain\">, </code><code class=\"value\">2</code><code class=\"plain\">);</code></div>\n</div>\n    </div>\n    <p>By default, a guest profile is created to differentiate users if a username is not specified.  The username appears with the crash or error reports.    </p>\n    <p>To access the user metadata, either click on a username in a crash or error report to open a detailed view, or in the Appcelerator Peformance dashboard, when viewing a specific application, click <strong class=\" \">Search by User</strong> in the left pane then in the right pane, enter a user&apos;s name to find information about them.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43298691_AppceleratorPerformanceManagement-LogAnError\">\n        <h3 class=\"heading \"><span>Log An Error</span></h3>\n    <p>You can track handled errors in your application by passing a JavaScript Error object to the <tt class=\" \">logHandledException</tt> method, which can help identify and analyze potential errors and hot spots.  For example:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"comments\">// If Alloy project</code></div>\n<div class=\"line\"><code class=\"comments\">// var apm = Alloy.Globals.apm;</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"keyword\">try</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\">    var err = </code><code class=\"keyword\">new</code><code class=\"plain\"> Error(</code><code class=\"string\">&apos;FATAL ERROR: Value cannot be null or undefined!&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">if</code><code class=\"plain\"> (value === </code><code class=\"keyword\">null</code><code class=\"plain\"> || value === undefined) </code><code class=\"keyword\">throw</code><code class=\"plain\"> err;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"keyword\">catch</code><code class=\"plain\"> (err) {</code></div>\n<div class=\"line\"><code class=\"plain\">    apm.logHandledException(err);</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    <p>Error logs are useful for tracking crashes in third-party SDKs, code that syncs data between services, or detecting bad data that is returned from a server.    </p>\n    <p>To view handled errors, in the Appcelerator Peformance dashboard, when viewing a specific application, click <strong class=\" \">Handled Exceptions</strong> in the left pane.  A list of handled errors and statistics appears in the right pane.  Click an error to view it in more detail.    </p>\n    <p>Appcelerator Performance limits the logging of handled errors to one per minute. Up to five  errors are buffered and are subsequently sent after the one minute limit.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43298691_AppceleratorPerformanceManagement-AllowtheUsertoOpt-Out\">\n        <h3 class=\"heading \"><span>Allow the User to Opt-Out</span></h3>\n    <p>Use the <tt class=\" \">setOptOutStatus</tt> method to allow the user <u class=\" \">NOT</u> to send any information to the Appcelerator Performance service.  Passing <tt class=\" \">true</tt> to this method disables sending data to Appcelerator Performance.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"comments\">// If Alloy project</code></div>\n<div class=\"line\"><code class=\"comments\">// var apm = Alloy.Globals.apm;</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"comments\">// Disable sending data to Appcelerator Performance</code></div>\n<div class=\"line\"><code class=\"plain\">apm.setOptOutStatus(</code><code class=\"keyword\">true</code><code class=\"plain\">);</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43298691_AppceleratorPerformanceManagement-CheckforaCrash\">\n        <h3 class=\"heading \"><span>Check for a Crash</span></h3>\n    <p>Use the <tt class=\" \">didCrashOnLastAppLoad</tt> method to check if the application crashed in a previous session.  If the method returns <tt class=\" \">true</tt>, the application crashed on the last session.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"comments\">// If Alloy project</code></div>\n<div class=\"line\"><code class=\"comments\">// var apm = Alloy.Globals.apm;</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"keyword\">if</code><code class=\"plain\"> (apm.didCrashOnLastAppLoad()){</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Application crashed on the last load</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Do something...</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43298691_AppceleratorPerformanceManagement-Android-SpecificFeatures\">\n        <h3 class=\"heading \"><span>Android-Specific Features</span></h3>\n    <p>Most of the Android features below are specified by passing a dictionary object as the second parameter to the <tt class=\" \">init()</tt> method:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"comments\">// If Alloy project</code></div>\n<div class=\"line\"><code class=\"comments\">// var apm = Alloy.Globals.apm;</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"plain\">var params = {</code></div>\n<div class=\"line\"><code class=\"plain\">    shouldCollectLogcat: </code><code class=\"keyword\">true</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    notificationTitle: </code><code class=\"string\">&apos;customTitle&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n<div class=\"line\"><code class=\"plain\">apm.init(</code><code class=\"string\">&apos;YOUR_CRITTERCISM_APP_ID&apos;</code><code class=\"plain\">, params);</code></div>\n</div>\n    </div>\n    <p>See the topics below for a description of each dictionary key.    </p>\n    <div class=\"section section-4 \" id=\"src-43298691_AppceleratorPerformanceManagement-CaptureLogcatData\">\n        <h4 class=\"heading \"><span>Capture Logcat Data</span></h4>\n    <p>To include Android system log data with your crash reports, you must do the following:    </p>\n    <p><u class=\" \">For Google API Level 15 and earlier</u> , add the following line to the Android manifest section of your <tt class=\" \">tiapp.xml</tt> file:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">&lt;uses-permission android:name=</code><code class=\"string\">&quot;android.permission.READ_LOGS&quot;</code><code class=\"plain\">/&gt;</code></div>\n</div>\n    </div>\n    <p><u class=\" \">For Google API Level 16 and later</u>, when initializing the module, specify <tt class=\" \">{shouldCollectLogcat: true}</tt>   as a second parameter when calling the <tt class=\" \">init</tt> method:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">apm.init(</code><code class=\"string\">&apos;YOUR_CRITTERCISM_APP_ID&apos;</code><code class=\"plain\">, {shouldCollectLogcat: </code><code class=\"keyword\">true</code><code class=\"plain\">});</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-4 \" id=\"src-43298691_AppceleratorPerformanceManagement-SetaCustomNotificationTitle\">\n        <h4 class=\"heading \"><span>Set a Custom Notification Title</span></h4>\n    <p>To include a custom notification title for alerts, specify the <tt class=\" \">notificationTitle</tt> key as a second parameter when calling the <tt class=\" \">init</tt> method:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">apm.init(</code><code class=\"string\">&apos;YOUR_CRITTERCISM_APP_ID&apos;</code><code class=\"plain\">, {notificationTitle: </code><code class=\"string\">&apos;customTitle&apos;</code><code class=\"plain\">});</code></div>\n</div>\n    </div>\n    </div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-43298691_AppceleratorPerformanceManagement-FurtherReading\">\n        <h2 class=\"heading \"><span>Further Reading</span></h2>\n    <p>For complete API information, see <a class=\"external-link external-link\" href=\"#!/api/Modules.Performance\">Performance Module API</a>.    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=43298691\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Appcelerator Performance Management"});