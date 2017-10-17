Ext.data.JsonP['Built-ins']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Built-ins</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-41845681\" class=\"content\">\n                        <h1>Built-ins</h1>\n    <p>Demonstrates use of several built-in libraries included with Alloy     <span style=\"color: #484848;\">\nthat simplify certain functions, such as animations, string manipulation and display unit conversion.     </span>\n    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro\">\n            <div class=\"title\">App Folder Location</div>\n            <p>alloy/test/apps/<strong class=\" \">basics/builtins</strong>    </p>\n    </div>\n        <p>    <span style=\"color: #484848;\">\n<br>    </br></span>\n    <span style=\"color: #484848;\">\nAlloy includes several <a class=\"external-link external-link\" href=\"#!/api/Alloy.builtins\">built-in libraries</a>. To use these libraries in your project, you simply use the global <tt class=\" \">require()</tt> function to include them. The sample demonstrates the <a class=\"external-link external-link\" href=\"#!/api/Alloy.builtins.animation\">animation</a> built-in&apos;s shake, flash, and flip features, and the <a class=\"external-link external-link\" href=\"#!/api/Alloy.builtins.string\">string</a> built-in&apos;s <tt class=\" \">trim()</tt> function.    </span>\n    </p>\n    <p>    <img src=\"images/download/attachments/41845681/ios.png\" alt=\"images/download/attachments/41845681/ios.png\" class=\"confluence-embedded-image\" width=\"250\">\n        </img></p>\n    <p>The index.xml file defines the views to animate and assigns event handlers to their <tt class=\" \">onClick</tt> handlers, which are defined in index.js.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/views/index.xml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/views/index.xml\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">  &lt;Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;View id=</code><code class=\"string\">&quot;mover&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">      &lt;Label id=</code><code class=\"string\">&quot;label&quot;</code><code class=\"plain\">&gt;     Trimmable String     &lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/View&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Button id=</code><code class=\"string\">&quot;shake&quot;</code><code class=\"plain\"> onClick=</code><code class=\"string\">&quot;shake&quot;</code><code class=\"plain\">&gt;Shake&lt;/Button&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Button id=</code><code class=\"string\">&quot;flash&quot;</code><code class=\"plain\"> onClick=</code><code class=\"string\">&quot;flash&quot;</code><code class=\"plain\">&gt;Flash&lt;/Button&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;Button id=</code><code class=\"string\">&quot;trim&quot;</code><code class=\"plain\"> onClick=</code><code class=\"string\">&quot;trim&quot;</code><code class=\"plain\">&gt;Trim&lt;/Button&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;View </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;flipper&quot;</code><code class=\"plain\"> platform=</code><code class=\"string\">&quot;ios&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">      &lt;Label id=</code><code class=\"string\">&quot;back&quot;</code><code class=\"plain\"> onClick=</code><code class=\"string\">&quot;flip&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">      &lt;Label id=</code><code class=\"string\">&quot;front&quot;</code><code class=\"plain\"> onClick=</code><code class=\"string\">&quot;flip&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/View&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">  &lt;/Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n    </div>\n    <p>The view-controller assigns the animation library to a local variable named <tt class=\" \">animation</tt> and then calls its various function in response to user input.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/controllers/index.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/controllers/index.js\">\n<div class=\"line\"><code class=\"plain\">var animation = require(</code><code class=\"string\">&apos;alloy/animation&apos;</code><code class=\"plain\">),</code></div>\n<div class=\"line\"><code class=\"plain\">    string = require(</code><code class=\"string\">&apos;alloy/string&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">function shake(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">    animation.shake($.mover, </code><code class=\"value\">0</code><code class=\"plain\">, function (){</code></div>\n<div class=\"line\"><code class=\"plain\">      alert(</code><code class=\"string\">&quot;Shake ended.&quot;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">    });</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">function flash(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">    animation.flash($.mover);</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">function trim(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">  $.label.text = string.trim($.label.text);</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"keyword\">if</code><code class=\"plain\"> (OS_IOS) {</code></div>\n<div class=\"line\"><code class=\"plain\">  function flip(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">    var front, back;</code></div>\n<div class=\"line\"><code class=\"plain\">    e.bubbleParent = </code><code class=\"keyword\">false</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">if</code><code class=\"plain\"> (e.source === $.back) {</code></div>\n<div class=\"line\"><code class=\"plain\">      front = $.back;</code></div>\n<div class=\"line\"><code class=\"plain\">      back = $.front;</code></div>\n<div class=\"line\"><code class=\"plain\">    } </code><code class=\"keyword\">else</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\">      front = $.front;</code></div>\n<div class=\"line\"><code class=\"plain\">      back = $.back;</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">    animation.flipHorizontal(front, back, </code><code class=\"value\">500</code><code class=\"plain\">, function(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">      Ti.API.info(</code><code class=\"string\">&apos;flipped&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">    });</code></div>\n<div class=\"line\"><code class=\"plain\">  }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    <p>    <span style=\"color: #484848;\">\n     </span>\n    </p>\n    <p>    <span style=\"color: #484848;\">\n<br>    </br></span>\n    </p>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=41845681\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Built-ins"});