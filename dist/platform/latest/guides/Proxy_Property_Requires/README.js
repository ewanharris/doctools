Ext.data.JsonP['Proxy_Property_Requires']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Proxy Property Requires</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-41845673\" class=\"content\">\n                        <h1>Proxy Property Requires</h1>\n    <p>Demonstrates using Require and Widget elements to create Titanium proxy properties.    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro\">\n            <div class=\"title\">App folder location</div>\n            <p><i class=\" \">alloy</i>/test/apps/<strong class=\" \">advanced/proxy_property_requires</strong>    </p>\n    </div>\n        <p>For example, as shown below, your main Alloy application can define a &lt;Window/&gt; element that uses a &lt;Require/&gt; element to include an external file that defines the Window element&apos;s <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.Window-property-rightNavButton\">leftNavButton</a> and <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.Window-property-rightNavButton\">rightNavButton</a> views.    </p>\n    <p>    <img src=\"images/download/attachments/41845673/proxy_properties_1.png\" alt=\"images/download/attachments/41845673/proxy_properties_1.png\" class=\"confluence-embedded-image\" width=\"250\">\n        </img></p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/views/index.xmml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/views/index.xmml\">\n<div class=\"line\"><code class=\"plain\">&lt;Window id=</code><code class=\"string\">&quot;windowWindow&quot;</code><code class=\"plain\"> title=</code><code class=\"string\">&quot;window&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;Require src=</code><code class=\"string\">&quot;window&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;Label&gt;This is a window&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Window&gt;</code></div>\n</div>\n    </div>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/views/window.xml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/views/window.xml\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;LeftNavButton&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Button id=</code><code class=\"string\">&quot;leftButton&quot;</code><code class=\"plain\"> title=</code><code class=\"string\">&quot;left&quot;</code><code class=\"plain\"> onClick=</code><code class=\"string\">&quot;showAlert&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/LeftNavButton&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;RightNavButton&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Button id=</code><code class=\"string\">&quot;rightButton&quot;</code><code class=\"plain\"> title=</code><code class=\"string\">&quot;right&quot;</code><code class=\"plain\"> onClick=</code><code class=\"string\">&quot;showAlert&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/RightNavButton&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n    </div>\n    <p>Similarly, you can use a &lt;Widget/&gt; element to add TableViewSection and TableViewRow objects to a TableView, as shown below.    </p>\n    <p>    <img src=\"images/download/attachments/41845673/proxy_properties_2.png\" alt=\"images/download/attachments/41845673/proxy_properties_2.png\" class=\"confluence-embedded-image\" width=\"250\">\n        </img></p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/views/index.xml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/views/index.xml\">\n<div class=\"line\"><code class=\"plain\">&lt;Window id=</code><code class=\"string\">&quot;staticWindow&quot;</code><code class=\"plain\"> title=</code><code class=\"string\">&quot;static&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;TableView id=</code><code class=\"string\">&quot;staticTable&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;TableViewRow id=</code><code class=\"string\">&quot;staticRow1&quot;</code><code class=\"plain\"> title=</code><code class=\"string\">&quot;1&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;TableViewRow id=</code><code class=\"string\">&quot;staticRow2&quot;</code><code class=\"plain\"> title=</code><code class=\"string\">&quot;2&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Widget id=</code><code class=\"string\">&quot;staticWidgetSection&quot;</code><code class=\"plain\"> src=</code><code class=\"string\">&quot;com.foo.widget&quot;</code><code class=\"plain\"> name=</code><code class=\"string\">&quot;section&quot;</code><code class=\"plain\"> /&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Widget id=</code><code class=\"string\">&quot;staticWidgetRow1&quot;</code><code class=\"plain\"> src=</code><code class=\"string\">&quot;com.foo.widget&quot;</code><code class=\"plain\"> name=</code><code class=\"string\">&quot;row&quot;</code><code class=\"plain\"> /&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Widget id=</code><code class=\"string\">&quot;staticWidgetRow2&quot;</code><code class=\"plain\"> src=</code><code class=\"string\">&quot;com.foo.widget&quot;</code><code class=\"plain\"> name=</code><code class=\"string\">&quot;row&quot;</code><code class=\"plain\"> /&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Widget id=</code><code class=\"string\">&quot;staticWidgetRow3&quot;</code><code class=\"plain\"> src=</code><code class=\"string\">&quot;com.foo.widget&quot;</code><code class=\"plain\"> name=</code><code class=\"string\">&quot;row&quot;</code><code class=\"plain\"> /&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;TableViewRow id=</code><code class=\"string\">&quot;staticRow3&quot;</code><code class=\"plain\"> title=</code><code class=\"string\">&quot;3&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/TableView&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Window&gt;</code></div>\n</div>\n    </div>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/views/com.foo.widget/section.xml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/views/com.foo.widget/section.xml\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;TableViewSection platform=</code><code class=\"string\">&quot;android&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;HeaderView&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;Label&gt;Test&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;/HeaderView&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;TableViewRow title=</code><code class=\"string\">&quot;android row&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;TableViewRow title=</code><code class=\"string\">&quot;android row&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;TableViewRow title=</code><code class=\"string\">&quot;android row&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/TableViewSection&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;TableViewSection platform=</code><code class=\"string\">&quot;ios,mobileweb&quot;</code><code class=\"plain\"> headerTitle=</code><code class=\"string\">&quot;Test&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;TableViewRow title=</code><code class=\"string\">&quot;table row&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;TableViewRow title=</code><code class=\"string\">&quot;table row&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;TableViewRow title=</code><code class=\"string\">&quot;table row&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/TableViewSection&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n    </div>\n    <p>Note that a <tt class=\" \">&lt;Widget/&gt;</tt> element is equivalent to a <tt class=\" \">&lt;Require/&gt;</tt> element with its <strong class=\" \">type</strong> attribute set to &quot;widget&quot;. For example, the following lines are equivalent:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">&lt;Widget id=</code><code class=\"string\">&quot;staticWidgetSection&quot;</code><code class=\"plain\"> src=</code><code class=\"string\">&quot;com.foo.widget&quot;</code><code class=\"plain\"> name=</code><code class=\"string\">&quot;section&quot;</code><code class=\"plain\"> /&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;Require type=</code><code class=\"string\">&quot;widget&quot;</code><code class=\"plain\"> id=</code><code class=\"string\">&quot;staticWidgetSection&quot;</code><code class=\"plain\"> src=</code><code class=\"string\">&quot;com.foo.widget&quot;</code><code class=\"plain\"> name=</code><code class=\"string\">&quot;section&quot;</code><code class=\"plain\"> /&gt;</code></div>\n</div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-41845673_ProxyPropertyRequires-SeeAlso\">\n        <h2 class=\"heading \"><span>See Also</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"document-link unresolved\" href=\"#!/guide/Proxy_Property_Requires-section-src-41845673\">Proxy Properties</a>    </p>\n</li></ul>    <p>    </p>\n    <p>    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=41845673\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Proxy Property Requires"});