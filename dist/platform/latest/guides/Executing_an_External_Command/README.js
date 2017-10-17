Ext.data.JsonP['Executing_an_External_Command']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Executing an External Command</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-30083223\" class=\"content\">\n                        <h1>Executing an External Command</h1>\n    <div class=\"section section-2 \" id=\"src-30083223_ExecutinganExternalCommand-Contents\">\n        <h2 class=\"heading \"><span>Contents</span></h2>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Executing_an_External_Command-section-src-30083223_ExecutinganExternalCommand-Overview\">Overview</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Executing_an_External_Command-section-src-30083223_ExecutinganExternalCommand-Callinganexternalapplicationanddisplayingtheresults\">Calling an external application and displaying the results</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Executing_an_External_Command-section-src-30083223_ExecutinganExternalCommand-Single-lineapproach\">Single-line approach</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Executing_an_External_Command-section-src-30083223_ExecutinganExternalCommand-Blocks\">Blocks</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Executing_an_External_Command-section-src-30083223_ExecutinganExternalCommand-Passingthecurrentcontentsoftheeditortoanexternalapplication\">Passing the current contents of the editor to an external application</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Executing_an_External_Command-section-src-30083223_ExecutinganExternalCommand-Usingtheselectionintheexecutedcommand\">Using the selection in the executed command</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Executing_an_External_Command-section-src-30083223_ExecutinganExternalCommand-ReferencingSTDIN\">Referencing STDIN</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Executing_an_External_Command-section-src-30083223_ExecutinganExternalCommand-RunningdifferentcommandsperOS\">Running different commands per OS</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Executing_an_External_Command-section-src-30083223_ExecutinganExternalCommand-Runningabashscript\">Running a bash script</a>    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-30083223_ExecutinganExternalCommand-Overview\">\n        <h2 class=\"heading \"><span>Overview</span></h2>\n    <p>In this recipe we show how a Ruble command can call an external tool.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083223_ExecutinganExternalCommand-Callinganexternalapplicationanddisplayingtheresults\">\n        <h2 class=\"heading \"><span>Calling an external application and displaying the results</span></h2>\n    <p>In this simplest example, we execute the &quot;ls&quot; application in the &quot;\\Users\\username&quot; directory and print the results to the console. We may execute this two different ways, which we discuss here:    </p>\n    <div class=\"section section-3 \" id=\"src-30083223_ExecutinganExternalCommand-Single-lineapproach\">\n        <h3 class=\"heading \"><span>Single-line approach</span></h3>\n    <p>The approach below is useful if just executing a simple command and not adding additional information or performing manipulation on the results    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">require </code><code class=\"string\">&apos;ruble&apos;</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">command </code><code class=\"string\">&apos;List Files&apos;</code><code class=\"plain\"> </code><code class=\"keyword\">do</code><code class=\"plain\"> |cmd|</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.output = :output_to_console</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.working_directory = </code><code class=\"string\">&quot;\\Users\\username&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.invoke = </code><code class=\"string\">&quot;ls&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">end</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-30083223_ExecutinganExternalCommand-Blocks\">\n        <h3 class=\"heading \"><span>Blocks</span></h3>\n    <p>Executing the command invocation in a block allows us to do more complicated manipulation of the input and output. Also note that we use Ruby backticks (`) to run the ls application in this context (as if we are passing the command direct to the shell), but that the working directory option used above does not work in this situation...it needs to be part of the command itself.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">require </code><code class=\"string\">&apos;ruble&apos;</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">command </code><code class=\"string\">&apos;List Files&apos;</code><code class=\"plain\"> </code><code class=\"keyword\">do</code><code class=\"plain\"> |cmd|</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.output = :output_to_console</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.invoke </code><code class=\"keyword\">do</code><code class=\"plain\"> |context|</code></div>\n<div class=\"line\"><code class=\"plain\">    `ls /Users/username`</code></div>\n<div class=\"line\"><code class=\"plain\">  end</code></div>\n<div class=\"line\"><code class=\"plain\">end</code></div>\n</div>\n    </div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083223_ExecutinganExternalCommand-Passingthecurrentcontentsoftheeditortoanexternalapplication\">\n        <h2 class=\"heading \"><span>Passing the current contents of the editor to an external application</span></h2>\n    <p>Often it is useful to select something in the editor and call an external tool based on that value. <strong class=\" \">cmd.output</strong> can take a variety of options. Some of the most common are:    </p>\n    <div class=\"confbox panel panel\">\n    <ul class=\" \"><li class=\" \">    <p><strong class=\" \">:selection:</strong> selected text in the editor    </p>\n</li><li class=\" \">    <p><strong class=\" \">:line:</strong> the line containing the caret    </p>\n</li><li class=\" \">    <p><strong class=\" \">:document:</strong> the entire current document    </p>\n</li><li class=\" \">    <p><strong class=\" \">:clipboard:</strong> the contents of the clipboard    </p>\n</li></ul>    </div>\n    <div class=\"section section-3 \" id=\"src-30083223_ExecutinganExternalCommand-Usingtheselectionintheexecutedcommand\">\n        <h3 class=\"heading \"><span>Using the selection in the executed command</span></h3>\n    <p>Here we take the current selection in the editor and echo it to the console.    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <p>    </p>\n    <p>When using backticks, you need to assign the value of a environment variable to a temporary variable, and use that in the command    </p>\n    </div>\n        <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">require </code><code class=\"string\">&apos;ruble&apos;</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">command </code><code class=\"string\">&apos;List Files&apos;</code><code class=\"plain\"> </code><code class=\"keyword\">do</code><code class=\"plain\"> |cmd|</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.output = :output_to_console</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.input = :selection</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.invoke </code><code class=\"keyword\">do</code><code class=\"plain\"> |context|</code></div>\n<div class=\"line\"><code class=\"plain\">    selection = ENV[</code><code class=\"string\">&apos;TM_SELECTED_TEXT&apos;</code><code class=\"plain\">]</code></div>\n<div class=\"line\"><code class=\"plain\">    `echo </code><code class=\"string\">&quot;#{selection}&quot;</code><code class=\"plain\">`</code></div>\n<div class=\"line\"><code class=\"plain\">  end</code></div>\n<div class=\"line\"><code class=\"plain\">end</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-30083223_ExecutinganExternalCommand-ReferencingSTDIN\">\n        <h3 class=\"heading \"><span>Referencing STDIN</span></h3>\n    <p>Here, we take the current selection in the editor and pipe it to the standard command &quot;cat&quot;, printing the results to the console:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">require </code><code class=\"string\">&apos;ruble&apos;</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">command </code><code class=\"string\">&apos;Output input&apos;</code><code class=\"plain\"> </code><code class=\"keyword\">do</code><code class=\"plain\"> |cmd|</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.output = :output_to_console</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.input = :selection</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.invoke </code><code class=\"keyword\">do</code><code class=\"plain\"> |context|</code></div>\n<div class=\"line\"><code class=\"plain\">    cmd_line = </code><code class=\"string\">&quot;cat&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">    IO.popen(cmd_line, </code><code class=\"string\">&apos;r+&apos;</code><code class=\"plain\">) </code><code class=\"keyword\">do</code><code class=\"plain\"> |io|</code></div>\n<div class=\"line\"><code class=\"plain\">      io &lt;&lt; ENV[</code><code class=\"string\">&apos;TM_SELECTED_TEXT&apos;</code><code class=\"plain\">]</code></div>\n<div class=\"line\"><code class=\"plain\">      io.close_write</code></div>\n<div class=\"line\"><code class=\"plain\">      io.read</code></div>\n<div class=\"line\"><code class=\"plain\">    end</code></div>\n<div class=\"line\"><code class=\"plain\">  end</code></div>\n<div class=\"line\"><code class=\"plain\">end</code></div>\n</div>\n    </div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083223_ExecutinganExternalCommand-RunningdifferentcommandsperOS\">\n        <h2 class=\"heading \"><span>Running different commands per OS</span></h2>\n    <p>We can specify different commands to be run per-platform, and also mix the single-line and block methods for command invocation:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\"># general form, used </code><code class=\"keyword\">if</code><code class=\"plain\"> no platform specific form is provided</code></div>\n<div class=\"line\"><code class=\"plain\">command.invoke = </code><code class=\"string\">&quot;ls&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">command.invoke.windows = </code><code class=\"string\">&quot;dir /s&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">command.invoke.linux </code><code class=\"keyword\">do</code><code class=\"plain\"> |context|</code></div>\n<div class=\"line\"><code class=\"plain\"> `ls`</code></div>\n<div class=\"line\"><code class=\"plain\">end</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083223_ExecutinganExternalCommand-Runningabashscript\">\n        <h2 class=\"heading \"><span>Running a bash script</span></h2>\n    <p>For advanced usage, you can even include an entire bash script as part of a command.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">require </code><code class=\"string\">&apos;ruble&apos;</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">command </code><code class=\"string\">&apos;Echo selection&apos;</code><code class=\"plain\"> </code><code class=\"keyword\">do</code><code class=\"plain\"> |cmd|</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.output = :output_to_console</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.input = :selection</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.invoke =&lt;&lt;-EOF</code></div>\n<div class=\"line\"><code class=\"plain\">#!/bin/bash</code></div>\n<div class=\"line\"><code class=\"plain\">selection=${TM_SELECTED_TEXT}</code></div>\n<div class=\"line\"><code class=\"plain\">echo </code><code class=\"string\">&quot;$selection&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">EOF</code></div>\n<div class=\"line\"><code class=\"plain\">end</code></div>\n</div>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083223\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Executing an External Command"});