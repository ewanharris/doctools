Ext.data.JsonP['TableView_Binding']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>TableView Binding</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-41845715\" class=\"content\">\n                        <h1>TableView Binding</h1>\n    <p>Demonstrates binding a data collection to a TableView using global and local collection references.    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro has-no-icon\">\n            <div class=\"title\">App Folder Location</div>\n            <p>alloy/test/apps/<strong class=\" \">models/binding_tableview</strong>    </p>\n    </div>\n        <p>    <span style=\"color: #222222;\">\nThe <tt class=\" \">&lt;Collection/&gt;</tt> element can also be used to create a global, singleton instance of the collection data available to all controllers, or a an instance available to a single controller. By default, a &lt;Collection/&gt; element creates a global object.     </span>\n    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">Create a global, singleton Collection object</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"Create a global, singleton Collection object\">\n<div class=\"line\"><code class=\"plain\">&lt;Collection src=</code><code class=\"string\">&quot;myModel&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;TableView id=</code><code class=\"string\">&quot;table&quot;</code><code class=\"plain\"> dataCollection=</code><code class=\"string\">&quot;myModel&quot;</code><code class=\"plain\">&gt;</code></div>\n</div>\n    </div>\n    <p>    <span style=\"color: #222222;\">\nThe singleton Collection object is attached to the global <tt class=\" \">Alloy.Collections</tt> object, and so can be referenced as follows:    </span>\n    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var myModels = Alloy.Collections.myModel;</code></div>\n</div>\n    </div>\n    <p>    <span style=\"color: #222222;\">\nTo create a locally-scoped instance, set     </span>\n    <span style=\"color: #222222;\">\nthe     </span>\n<strong class=\" \">instance</strong>    <span style=\"color: #222222;\">\n attribute on the &lt;Collection/&gt; element to <strong class=\" \">true</strong>. You also assign the instance an ID so you can reference it from the view-controller.    </span>\n    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">&lt;Collection src=</code><code class=\"string\">&quot;myModel&quot;</code><code class=\"plain\"> id=</code><code class=\"string\">&quot;myModelId&quot;</code><code class=\"plain\"> instance=</code><code class=\"string\">&quot;true&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;TableView id=</code><code class=\"string\">&quot;table&quot;</code><code class=\"plain\"> dataCollection=</code><code class=\"string\">&quot;$.myModelId&quot;</code><code class=\"plain\">&gt;</code></div>\n</div>\n    </div>\n    <p>    <span style=\"color: #222222;\">\nYou reference the local Collection instance as a property of the <tt class=\" \">$</tt> object in the view-controller.     </span>\n    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var myModels = $.myModelId;</code></div>\n</div>\n    </div>\n    <p>    <span style=\"color: #222222;\">\nThe sample application contains four tabs that each contain a     </span>\n<tt class=\" \">&lt;TableView/&gt;</tt>    <span style=\"color: #222222;\">\n element. The first two reference the same global Collection instance, while the second two each reference their own, locally-scoped Collection objects. Consequently, any items added to the first tab appear on the second, and vice versa. In contrast, any items added to either the third or fourth tabs only appear on those tabs.       </span>\n    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/views/index.xml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/views/index.xml\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;TabGroup&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Require src=</code><code class=\"string\">&quot;tab_1&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Require src=</code><code class=\"string\">&quot;tab_2&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Require src=</code><code class=\"string\">&quot;tab_3&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Require src=</code><code class=\"string\">&quot;tab_4&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/TabGroup&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n    </div>\n    <p>The first tab, titled &quot;global/&lt;Require/&gt;&quot;, declares a &lt;Collection/&gt; element, which creates a global singleton instance of the &quot;myModel&quot; collection, or returns an existing singleton if it&apos;s already been created. The &lt;TableView/&gt; element&apos;s <tt class=\" \">dataCollection</tt> references the same global singleton object.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/views/tab_1.xml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/views/tab_1.xml\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;Collection src=</code><code class=\"string\">&quot;myModel&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;Tab title=</code><code class=\"string\">&quot;global/&lt;Require&gt;&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Window id=</code><code class=\"string\">&quot;window&quot;</code><code class=\"plain\"> title=</code><code class=\"string\">&quot;global/&lt;Require&gt;&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;!-- use the global reference to the dataCollection --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;TableView id=</code><code class=\"string\">&quot;table&quot;</code><code class=\"plain\"> dataCollection=</code><code class=\"string\">&quot;myModel&quot;</code><code class=\"plain\"> onClick=</code><code class=\"string\">&quot;removeItem&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;!-- use a &lt;Require&gt; </code><code class=\"keyword\">for</code><code class=\"plain\"> our repeated TableViewRow --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;Require src=</code><code class=\"string\">&quot;row&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;/TableView&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;!-- let&apos;s use a simple button or android --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;Button </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;addButton&quot;</code><code class=\"plain\"> onClick=</code><code class=\"string\">&quot;addItem&quot;</code><code class=\"plain\"> platform=</code><code class=\"string\">&quot;android&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;/Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/Tab&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n    </div>\n    <p>The view-controller for the tab_1.xml view reference the same global <tt class=\" \">myModel</tt> singleton on the <tt class=\" \">Alloy.Collections</tt> object, and adds to it a new item when the user clicks the Add button. When changes occur in the global collection reference, they will be reflected in tab_2.xml, which also references the same global collection.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/controllers/tab_1.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/controllers/tab_1.js\">\n<div class=\"line\"><code class=\"plain\">var myModels = Alloy.Collections.myModel;</code></div>\n<div class=\"line\"><code class=\"plain\">var common = require(</code><code class=\"string\">&apos;common&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">function addItem(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">    common.addItem(myModels);</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">function removeItem(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">    common.removeItem(myModels, e.index);</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"keyword\">if</code><code class=\"plain\"> (OS_IOS || OS_MOBILEWEB) {</code></div>\n<div class=\"line\"><code class=\"plain\">    common.prepNavBar($.window, addItem);</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">myModels.comparator = common.comparator;</code></div>\n<div class=\"line\"><code class=\"plain\">myModels.fetch();</code></div>\n</div>\n    </div>\n    <p>The XML and JavaScript for tab 2 is functionally identical to that of tab 1, except that tab 2 uses a &lt;Require/&gt; element to include each table row, rather than declaring it inline.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;Collection src=</code><code class=\"string\">&quot;myModel&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;Tab title=</code><code class=\"string\">&quot;global/inline&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Window id=</code><code class=\"string\">&quot;window&quot;</code><code class=\"plain\"> title=</code><code class=\"string\">&quot;global/inline&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;!-- use the global reference to the dataCollection --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;TableView id=</code><code class=\"string\">&quot;table&quot;</code><code class=\"plain\"> dataCollection=</code><code class=\"string\">&quot;myModel&quot;</code><code class=\"plain\"> onClick=</code><code class=\"string\">&quot;removeItem&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;!-- create the repeated TableViewRow inline --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;TableViewRow </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;row&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;Label </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;rowTitle&quot;</code><code class=\"plain\"> text=</code><code class=\"string\">&quot;{title}&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;ImageView </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;rowImage&quot;</code><code class=\"plain\"> image=</code><code class=\"string\">&quot;{image}&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;/TableViewRow&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;/TableView&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;!-- let&apos;s use a simple button or android --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;Button </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;addButton&quot;</code><code class=\"plain\"> onClick=</code><code class=\"string\">&quot;addItem&quot;</code><code class=\"plain\"> platform=</code><code class=\"string\">&quot;android&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;/Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/Tab&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n    </div>\n    <p>The tab_3.xml view    </p>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=41845715\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"TableView Binding"});