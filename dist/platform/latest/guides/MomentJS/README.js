Ext.data.JsonP['MomentJS']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>MomentJS</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-41845667\" class=\"content\">\n                        <h1>MomentJS</h1>\n    <p>Demonstrates how to use the built-in <a class=\"external-link external-link\" href=\"http://momentjs.com/\" target=\"_blank\">Moment.js</a> library in your Alloy application to format a date for different locales. Moment.js is a full featured date library for parsing, validating, manipulating, and formatting dates.    </p>\n    <p>    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro\">\n            <div class=\"title\">App folder location</div>\n            <p><i class=\" \">alloy</i>/test/apps/<strong class=\" \">advanced/momentjs</strong>    </p>\n    </div>\n        <p>    <img src=\"images/download/attachments/41845667/moment.png\" alt=\"images/download/attachments/41845667/moment.png\" class=\"confluence-embedded-image\" width=\"500\">\n    </img></p>\n    <p>By default, the English locale library is included with the main Moment.js library. Other locale libraries can be included implicitly either according to the languages specified by your Titanium project&apos;s i18n folder, or by explicitly requiring them in your code. These approaches are both demonstrated by the sample app, and discussed below.    </p>\n    <p>To properly run the sample, in addition to importing the provided sample code, you will also need to create a localized strings.xml file, in this case for Spanish (language code &quot;es&quot;).    </p>\n    <p><strong class=\" \">To create the localized strings:</strong>    </p>\n<ol class=\" \"><li class=\" \">    <p>In the root application folder, create a folder named <strong class=\" \">i18n </strong>and a subfolder named <strong class=\" \">es</strong>.    </p>\n</li><li class=\" \">    <p>Create a file named strings.xml and save it to the i18n/es, as shown below. This folder must be in the root of the Titanium project folder, not the Alloy project&apos;s app/ folder. For the purposes of this demonstration, the strings.xml file can be left empty, but it must exist.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">momentjs</code></div>\n<div class=\"line\"><code class=\"plain\">&#x251C;&#x2500;&#x2500; Resources</code></div>\n<div class=\"line\"><code class=\"plain\">&#x251C;&#x2500;&#x2500; app</code></div>\n<div class=\"line\"><code class=\"plain\">&#x251C;&#x2500;&#x2500; i18n</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2502;   &#x2514;&#x2500;&#x2500; es</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2502;       &#x2514;&#x2500;&#x2500; strings.xml</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2514;&#x2500;&#x2500; tiapp.xml</code></div>\n</div>\n    </div>\n</li><li class=\" \">    <p>Build and run the application for device or emulator/simulator. Click anywhere in the application window to change the format of the displayed time and date.    </p>\n</li></ol>    <p>The only view in the application just contains three Label elements. Clicking anywhere on the Window invokes the <tt class=\" \">changeLanguage()</tt> function, defined by the view-controller.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/views/index.xml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/views/index.xml\">\n<div class=\"line\"><code class=\"plain\">&lt;</code><code class=\"keyword\">Alloy</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;</code><code class=\"keyword\">Window</code><code class=\"plain\"> </code><code class=\"color1\">onClick</code><code class=\"plain\">=</code><code class=\"string\">&quot;changeLanguage&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;</code><code class=\"keyword\">Label</code><code class=\"plain\"> </code><code class=\"color1\">id</code><code class=\"plain\">=</code><code class=\"string\">&quot;info&quot;</code><code class=\"plain\">&gt;click anywhere to change language&lt;/</code><code class=\"keyword\">Label</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;</code><code class=\"keyword\">Label</code><code class=\"plain\"> </code><code class=\"color1\">id</code><code class=\"plain\">=</code><code class=\"string\">&quot;theDate&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;</code><code class=\"keyword\">Label</code><code class=\"plain\"> </code><code class=\"color1\">id</code><code class=\"plain\">=</code><code class=\"string\">&quot;language&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/</code><code class=\"keyword\">Window</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/</code><code class=\"keyword\">Alloy</code><code class=\"plain\">&gt;</code></div>\n</div>\n    </div>\n    <p>The main view-controller requires the Moment.js library (<tt class=\" \">require(&apos;alloy/moment&apos;)</tt>) and assigns it to the variable <tt class=\" \">moment</tt>. It creates an array of supported languages using the language codes as the array keys. Because the project&apos;s i18n/ folder defines an &quot;es&quot; locale, the Spanish locale library is automatically required in the application. The German and French locale libraries are manually required, since they are not represented in the i18n/ folder.    </p>\n    <p>To change the locale globally, the application calls the <tt class=\" \">moment.lang()</tt> function, passing it the new language code.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/controllers/index.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/controllers/index.js\">\n<div class=\"line\"><code class=\"keyword\">var</code><code class=\"plain\"> moment = require(</code><code class=\"string\">&apos;alloy/moment&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"keyword\">var</code><code class=\"plain\"> langs = [</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&apos;en&apos;</code><code class=\"plain\">, </code><code class=\"comments\">// default</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&apos;es&apos;</code><code class=\"plain\">, </code><code class=\"comments\">// added automatically since it&apos;s in the &quot;i18n&quot; project folder</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&apos;de&apos;</code><code class=\"plain\">, </code><code class=\"comments\">// added via require() below</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&apos;fr&apos;</code><code class=\"plain\">  </code><code class=\"comments\">// added via require() below</code></div>\n<div class=\"line\"><code class=\"plain\">];</code></div>\n<div class=\"line\"><code class=\"keyword\">var</code><code class=\"plain\"> langIndex = 0;</code></div>\n<div class=\"line\"><code class=\"comments\">// Manaully inlude German and French locales</code></div>\n<div class=\"line\"><code class=\"plain\">require(</code><code class=\"string\">&apos;alloy/moment/lang/de&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">require(</code><code class=\"string\">&apos;alloy/moment/lang/fr&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"keyword\">function</code><code class=\"plain\"> changeLanguage() {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">var</code><code class=\"plain\"> lang = langs[langIndex++];</code></div>\n<div class=\"line\"><code class=\"plain\">    moment.lang(lang);</code></div>\n<div class=\"line\"><code class=\"plain\">    $.language.text = </code><code class=\"string\">&apos;language: &apos;</code><code class=\"plain\"> + lang;</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">if</code><code class=\"plain\"> (langIndex &gt;= langs.length) { langIndex = 0; }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"keyword\">function</code><code class=\"plain\"> updateDate() {</code></div>\n<div class=\"line\"><code class=\"plain\">    $.theDate.text = moment().format(</code><code class=\"string\">&apos;MMMM Do YYYY, h:mm:ss a&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"comments\">// Set the initial formatted date and update (about) every half second to</code></div>\n<div class=\"line\"><code class=\"comments\">// account for the inconsistency of javascript&apos;s timing.</code></div>\n<div class=\"line\"><code class=\"plain\">changeLanguage();</code></div>\n<div class=\"line\"><code class=\"plain\">updateDate();</code></div>\n<div class=\"line\"><code class=\"plain\">setInterval(updateDate, 500);</code></div>\n<div class=\"line\"><code class=\"plain\">$.index.open();</code></div>\n</div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-41845667_MomentJS-SeeAlso\">\n        <h2 class=\"heading \"><span>See Also</span></h2>\n<ul class=\" \"><li class=\" \">    <p>    <span style=\"color: #545454;\">\n<a class=\"external-link external-link\" href=\"http://momentjs.com/\" target=\"_blank\">Moment.js documentation</a> (external)    </span>\n    </p>\n</li></ul>    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=41845667\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"MomentJS"});