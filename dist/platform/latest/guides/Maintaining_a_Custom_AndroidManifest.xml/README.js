Ext.data.JsonP['Maintaining_a_Custom_AndroidManifest.xml']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Maintaining a Custom AndroidManifest.xml</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-29004815\" class=\"content\">\n                        <h1>Maintaining a Custom AndroidManifest.xml</h1>\n    <div class=\"section section-2 \" id=\"src-29004815_MaintainingaCustomAndroidManifest.xml-Contents\">\n        <h2 class=\"heading \"><span>Contents</span></h2>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Maintaining_a_Custom_AndroidManifest.xml-section-src-29004815_MaintainingaCustomAndroidManifest.xml-Overview\">Overview</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Maintaining_a_Custom_AndroidManifest.xml-section-src-29004815_MaintainingaCustomAndroidManifest.xml-Howitworks\">How it works</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Maintaining_a_Custom_AndroidManifest.xml-section-src-29004815_MaintainingaCustomAndroidManifest.xml-CustomManifestEntriesintiapp.xml\">Custom Manifest Entries in tiapp.xml</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Maintaining_a_Custom_AndroidManifest.xml-section-src-29004815_MaintainingaCustomAndroidManifest.xml-UsingaCustomManifest\">Using a Custom Manifest</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Maintaining_a_Custom_AndroidManifest.xml-section-src-29004815_MaintainingaCustomAndroidManifest.xml-EnsuringAndroidShutsDownAppsCleanly\">Ensuring Android Shuts Down Apps Cleanly</a>    </p>\n</li></ul></li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-29004815_MaintainingaCustomAndroidManifest.xml-Overview\">\n        <h2 class=\"heading \"><span>Overview</span></h2>\n    <p>For the most part, if you have to add properties to the <tt class=\" \">AndroidManifest.xml</tt> file, you can simply add them to the application&apos;s <tt class=\" \">tiapp.xml</tt> file. If you encounter a setting that you can&apos;t override in <tt class=\" \">tiapp.xml</tt>, you can create a custom <tt class=\" \">AndroidManifest.xml</tt> file.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-29004815_MaintainingaCustomAndroidManifest.xml-Howitworks\">\n        <h2 class=\"heading \"><span>How it works</span></h2>\n    <p>When you create a new mobile application, you will now see an &quot;android&quot; section inside <tt class=\" \">tiapp.xml</tt>. When empty, it just looks like this:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">&lt;android xmlns:android=</code><code class=\"string\">&quot;http://schemas.android.com/apk/res/android&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/android&gt;</code></div>\n</div>\n    </div>\n    <p>Note we&apos;ve included the official Android namespace qualifier, and the reason for that is because we wanted the ability to take things out of this section and plop them right into the <tt class=\" \">AndroidManifest.xml</tt> for you. To that end, things that you put inside of a &quot;manifest&quot; sub-element will be put into your android manifest for you at build time. See <a class=\"document-link \" href=\"#!/guide/tiapp.xml_and_timodule.xml_Reference\">tiapp.xml and timodule.xml Reference</a> for details on elements that you can put in the <tt class=\" \">tiapp.xml</tt> file.    </p>\n    <div class=\"section section-3 \" id=\"src-29004815_MaintainingaCustomAndroidManifest.xml-CustomManifestEntriesintiapp.xml\">\n        <h3 class=\"heading \"><span>Custom Manifest Entries in tiapp.xml</span></h3>\n    <p>For the most part, if you add a manifest entry to the <tt class=\" \">tiapp.xml</tt> file, it replaces the entry in the generated file. Consider the following section of a tiapp.xml file:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">&lt;android xmlns:android=</code><code class=\"string\">&quot;http://schemas.android.com/apk/res/android&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;manifest&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;uses-sdk android:minSdkVersion=</code><code class=\"string\">&quot;14&quot;</code><code class=\"plain\"> /&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;supports-screens</code></div>\n<div class=\"line\"><code class=\"plain\">            android:smallScreens=</code><code class=\"string\">&quot;false&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">            android:normalScreens=</code><code class=\"string\">&quot;true&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">            android:largeScreens=</code><code class=\"string\">&quot;true&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">            android:xlargeScreens=</code><code class=\"string\">&quot;false&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">        /&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/manifest&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/android&gt;</code></div>\n</div>\n    </div>\n    <p>Most elements inside the <tt class=\" \">&lt;manifest&gt;</tt> will be added as children to the <tt class=\" \">&lt;manifest&gt;</tt> element inside of <tt class=\" \">AndroidManifest.xml</tt> at build time, with some intelligence built in. The <tt class=\" \">&lt;supports-screen&gt;</tt> tag in your tiapp.xml replaces the  default <tt class=\" \">&lt;supports-screen&gt;</tt> tag.    </p>\n    <p>The manifest&apos;s all-important <a class=\"external-link external-link\" href=\"http://developer.android.com/guide/topics/manifest/application-element.html\" target=\"_blank\">&lt;application&gt;</a> element is handled differently. Your elements are applied additively, rather than replacing the <strong class=\" \">whole</strong> <tt class=\" \">&lt;application&gt;</tt> element.    </p>\n    <p>For example, let&apos;s say you want the <tt class=\" \">debuggable</tt> attribute of <tt class=\" \">&lt;application&gt;</tt> to be set to <tt class=\" \">true</tt> (it&apos;s false in the default manifest template), you can do this:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">&lt;android xmlns:android=</code><code class=\"string\">&quot;http://schemas.android.com/apk/res/android&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;manifest&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;application android:debuggable=</code><code class=\"string\">&quot;true&quot;</code><code class=\"plain\"> /&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/manifest&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/android&gt;</code></div>\n</div>\n    </div>\n    <p>The official <a class=\"external-link external-link\" href=\"http://developer.android.com/guide/topics/manifest/manifest-intro.html\" target=\"_blank\">Android Developers</a> website describes all the other elements that are supported, such as <tt class=\" \">&lt;service&gt;</tt>, <tt class=\" \">&lt;uses-permission&gt;</tt> and <tt class=\" \">&lt;activity&gt;</tt> for instance, and these will be added using the same logic.    </p>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-29004815_MaintainingaCustomAndroidManifest.xml-UsingaCustomManifest\">\n        <h2 class=\"heading \"><span>Using a Custom Manifest</span></h2>\n    <p>In rare circumstances, you may still need to create a custom <tt class=\" \">AndroidManifest.xml</tt>. If this is the case, be aware of the following advice:    </p>\n<ul class=\" \"><li class=\" \">    <p>Name the custom manifest  file <tt class=\" \">AndroidManifest.xml</tt>, and put it in the directory <tt class=\" \">platform/android</tt> beneath your application&apos;s root project directory.<br><br>Create the platform directory if you need to, ensuring that the directory is a sibling of the &quot;Resources&quot; directory, (right below your project root).    </br></br></p>\n    <img src=\"images/download/attachments/29004815/proj.png\" alt=\"images/download/attachments/29004815/proj.png\" class=\"confluence-embedded-image confluence-content-image-border\">\n        <p>    </p>\n</img></li><li class=\" \">    <p>If you do have a custom manifest, generates a file named <tt class=\" \">AndroidManifest.xml.gen</tt> in the <tt class=\" \">build/android</tt> directory during each build. You can use this to see the <tt class=\" \">AndroidManifest.xml</tt> that would be generated by default.    </p>\n</li></ul>    <div class=\"section section-3 \" id=\"src-29004815_MaintainingaCustomAndroidManifest.xml-EnsuringAndroidShutsDownAppsCleanly\">\n        <h3 class=\"heading \"><span>Ensuring Android Shuts Down Apps Cleanly</span></h3>\n    <p>The are times when an application needs to be shut down by the platform outside of the application context, such as when the user changes fundamental system settings or lets the app sleep for long periods. Unfortunately, Android&apos;s primitive kill process <i class=\" \">sometimes</i> leads to a known problem where the app is only partially shut down. The solution for Titanium apps is to set the <tt class=\" \">alwaysRetainTaskState</tt> parameter in the <tt class=\" \">AndroidManifest.xml</tt> file, as follows (this one is taken from the KitchenSink):    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">&lt;activity android:configChanges=</code><code class=\"string\">&quot;keyboardHidden|orientation&quot;</code><code class=\"plain\"> android:label=</code><code class=\"string\">&quot;KitchenSink&quot;</code><code class=\"plain\"> android:name=</code><code class=\"string\">&quot;.KitchensinkActivity&quot;</code><code class=\"plain\"> android:alwaysRetainTaskState=</code><code class=\"string\">&quot;true&quot;</code><code class=\"plain\"> android:theme=</code><code class=\"string\">&quot;@style/Theme.Titanium&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">  &lt;intent-filter&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;action android:name=</code><code class=\"string\">&quot;android.intent.action.MAIN&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;category android:name=</code><code class=\"string\">&quot;android.intent.category.LAUNCHER&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">  &lt;/intent-filter&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/activity&gt;</code></div>\n</div>\n    </div>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <p>Be aware that this setting increases memory usage, so only enable it where your app is experiencing the problem.    </p>\n    </div>\n        </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=29004815\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Maintaining a Custom AndroidManifest.xml"});