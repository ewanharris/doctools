Ext.data.JsonP['Localizing_a_Ruble']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Localizing a Ruble</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-30083252\" class=\"content\">\n                        <h1>Localizing a Ruble</h1>\n    <div class=\"section section-2 \" id=\"src-30083252_LocalizingaRuble-Contents\">\n        <h2 class=\"heading \"><span>Contents</span></h2>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Localizing_a_Ruble-section-src-30083252_LocalizingaRuble-Overview\">Overview</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Localizing_a_Ruble-section-src-30083252_LocalizingaRuble-LocalesDirectories\">Locales Directories</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Localizing_a_Ruble-section-src-30083252_LocalizingaRuble-ExternalizingtheStrings\">Externalizing the Strings</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Localizing_a_Ruble-section-src-30083252_LocalizingaRuble-Stringswithvariablesinsidethem\">Strings with variables inside them</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Localizing_a_Ruble-section-src-30083252_LocalizingaRuble-Translationlookups\">Translation lookups</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Localizing_a_Ruble-section-src-30083252_LocalizingaRuble-Contributingatranslationpack\">Contributing a translation pack</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Localizing_a_Ruble-section-src-30083252_LocalizingaRuble-Forkingtheruble\">Forking the ruble</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Localizing_a_Ruble-section-src-30083252_LocalizingaRuble-Addinganewtranslation\">Adding a new translation</a>    </p>\n</li></ul></li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-30083252_LocalizingaRuble-Overview\">\n        <h2 class=\"heading \"><span>Overview</span></h2>\n    <p>In order to allow locale-specific translations of UI strings, rubles use a system that is very similar to that used by Rails applications.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083252_LocalizingaRuble-LocalesDirectories\">\n        <h2 class=\"heading \"><span>Locales Directories</span></h2>\n    <p>Any string that may need a translation is extracted out to a file in <strong class=\" \">&lt;ruble&gt;/config/locales/&lt;locale&gt;.yml</strong>    </p>\n    <p>Individual translations are stored in YML files in the <strong class=\" \">&lt;ruble&gt;/config/locales/</strong> directory. The filename does not need to match any language or locale, but it is helpful to do so. So a <strong class=\" \">en.yml</strong> file should hold the English translations of the UI strings, but it is not required.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083252_LocalizingaRuble-ExternalizingtheStrings\">\n        <h2 class=\"heading \"><span>Externalizing the Strings</span></h2>\n    <p>Inside the ruble code, to allow for translations we externalize the string. To do so we replace usage of the string with a call to the <strong class=\" \">t(key, variables = {})</strong> method.    </p>\n    <p>For example we have the following command defined:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">commands/example.rb</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"commands/example.rb\">\n<div class=\"line\"><code class=\"plain\">command </code><code class=\"string\">&quot;Example&quot;</code><code class=\"plain\"> </code><code class=\"keyword\">do</code><code class=\"plain\"> |c|</code></div>\n<div class=\"line\"><code class=\"plain\">  ...</code></div>\n<div class=\"line\"><code class=\"plain\">end</code></div>\n</div>\n    </div>\n    <p>We would replace the &quot;Example&quot; string with a new key representing the string, and a call to the <strong class=\" \">t</strong> translate method. That string gets moved into the English translation pack in <strong class=\" \">config/locales/en.yml</strong>, as a key-pair. The key is the symbol we chose to replace the string, and the value is the string we replaced.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">commands/example.rb</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"commands/example.rb\">\n<div class=\"line\"><code class=\"plain\">command t(:example) </code><code class=\"keyword\">do</code><code class=\"plain\"> |c|</code></div>\n<div class=\"line\"><code class=\"plain\">  ...</code></div>\n<div class=\"line\"><code class=\"plain\">end</code></div>\n</div>\n    </div>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">config/locales/en.yml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"config/locales/en.yml\">\n<div class=\"line\"><code class=\"plain\">en:</code></div>\n<div class=\"line\"><code class=\"plain\">  example: </code><code class=\"string\">&quot;Example&quot;</code></div>\n</div>\n    </div>\n    <p>A quick note here, the root &quot;en:&quot; key in the translation pack groups the indented key-value pairs as belonging to the <strong class=\" \">en</strong> (or English) language. Simply naming the file <strong class=\" \">en.yml</strong> will not associate the enclosed strings as being English.    </p>\n    <div class=\"section section-3 \" id=\"src-30083252_LocalizingaRuble-Stringswithvariablesinsidethem\">\n        <h3 class=\"heading \"><span>Strings with variables inside them</span></h3>\n    <p>If the string is not simply a static value, but inserts values inside, the full signature form of the <strong class=\" \">t(key, variables = {})</strong> method should be used.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">commands/variables.rb</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"commands/variables.rb\">\n<div class=\"line\"><code class=\"plain\">command </code><code class=\"string\">&quot;Power of #{number}&quot;</code><code class=\"plain\"> </code><code class=\"keyword\">do</code><code class=\"plain\"> |c|</code></div>\n<div class=\"line\"><code class=\"plain\">  ...</code></div>\n<div class=\"line\"><code class=\"plain\">end</code></div>\n</div>\n    </div>\n    <p>We would replace the &quot;Power of #{number}&quot; string with a new key representing the string, and a call to the <strong class=\" \">t</strong> translate method. That string gets moved into the English translation pack in <strong class=\" \">config/locales/en.yml</strong>, as a key-pair. The key is the symbol we chose to replace the string, and the value is the string we replaced. Note that the string interpolation gets changed to a <strong class=\" \">{variable_name}</strong> syntax, and the key in the argument hash must match the <strong class=\" \">variable_name</strong>.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">commands/variables.rb</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"commands/variables.rb\">\n<div class=\"line\"><code class=\"plain\">command t(:complicated, :number =&gt; x) </code><code class=\"keyword\">do</code><code class=\"plain\"> |c|</code></div>\n<div class=\"line\"><code class=\"plain\">  ...</code></div>\n<div class=\"line\"><code class=\"plain\">end</code></div>\n</div>\n    </div>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">config/locales/en.yml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"config/locales/en.yml\">\n<div class=\"line\"><code class=\"plain\">en:</code></div>\n<div class=\"line\"><code class=\"plain\">  example: </code><code class=\"string\">&quot;Example&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">  complicated: </code><code class=\"string\">&quot;Power of {number}&quot;</code></div>\n</div>\n    </div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083252_LocalizingaRuble-Translationlookups\">\n        <h2 class=\"heading \"><span>Translation lookups</span></h2>\n    <p>When looking up translations, we take the current locale and attempt to match the full <strong class=\" \">&lt;language&gt;-&lt;country&gt;</strong> locale strings first, then <strong class=\" \">&lt;locale&gt;</strong>, and finally falling back to the <strong class=\" \">en</strong> locale.    </p>\n    <p>So if our locale is <strong class=\" \">en_US</strong>, we will try to find <strong class=\" \">en-US</strong>, then <strong class=\" \">en</strong> strings.    </p>\n    <p>If our locale is <strong class=\" \">es_ES</strong>, we&apos;ll try <strong class=\" \">es-ES</strong>, then <strong class=\" \">es</strong>, then <strong class=\" \">en</strong>.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083252_LocalizingaRuble-Contributingatranslationpack\">\n        <h2 class=\"heading \"><span>Contributing a translation pack</span></h2>\n    <p>If you would like to contribute a set of translations, there are a couple different ways to do so.    </p>\n    <div class=\"section section-3 \" id=\"src-30083252_LocalizingaRuble-Forkingtheruble\">\n        <h3 class=\"heading \"><span>Forking the ruble</span></h3>\n    <p>Ideally, the first step to take is to fork the ruble you&apos;re contributing to.    </p>\n    <p>The majority of the rubles can be found at <a class=\"external-link external-link\" href=\"https://github.com/aptana\" target=\"_blank\">https://github.com/aptana</a>    </p>\n    <p>We&apos;ll use the Zen Coding ruble as an example. It is found at <a class=\"external-link external-link\" href=\"https://github.com/aptana/zen-coding.ruble\" target=\"_blank\">https://github.com/aptana/zen-coding.ruble</a>    </p>\n    <p>On that page, click the Fork button in the upper right and you&apos;ll be able to clone a fork of the ruble for your modifications. You can now grab the clone to work with and once you&apos;re satisfied with your changes, you can then issue a pull request to us to incorporate your changes.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-30083252_LocalizingaRuble-Addinganewtranslation\">\n        <h3 class=\"heading \"><span>Adding a new translation</span></h3>\n    <p>Inside the ruble, you&apos;ll want to add a file to hold your translations (assuming that the language is not yet supported). We&apos;ll use Spanish as an example. We&apos;d add a file at <strong class=\" \">zen-coding.ruble/config/locales/es.yml</strong>    </p>\n    <p>If there&apos;s already an English file, the easiest way to start is to simply copy the <strong class=\" \">zen-coding.ruble/config/locales/en.yml</strong> to <strong class=\" \">zen-coding.ruble/config/locales/es.yml</strong>    </p>\n    <p>Then we&apos;ll change the root <strong class=\" \">en</strong> key in the file to <strong class=\" \">es</strong>. After that it&apos;s simply a matter of changing the string values (the right hand value of the indented pairs) to their Spanish equivalents.    </p>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083252\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Localizing a Ruble"});