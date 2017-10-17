Ext.data.JsonP['Nodes_-_Model_Find_All']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Nodes - Model Find All</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-49158442\" class=\"content\">\n                        <h1>Nodes - Model Find All</h1>\n    <p>This document describes the model find all and provides instance configuration and parameters information.    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Name    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Description    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>ModelFindAll    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>A Model specific node. Invokes the Find All API on a specified model and returns the response.    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <div class=\"section section-2 \" id=\"src-49158442_Nodes-ModelFindAll-Instanceconfiguration\">\n        <h2 class=\"heading \"><span>Instance configuration</span></h2>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Property    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Description    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Required    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Type    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>model    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>The name of the model of which to invoke the Find All API.    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>yes    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>number    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-49158442_Nodes-ModelFindAll-Instanceparameters\">\n        <h2 class=\"heading \"><span>Instance parameters</span></h2>\n    <p>These are all specified by the chosen model.    </p>\n    <div class=\"section section-3 \" id=\"src-49158442_Nodes-ModelFindAll-Example\">\n        <h3 class=\"heading \"><span>Example</span></h3>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"string\">&quot;model.findAll&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"string\">&quot;type&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;ModelFindAll&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"string\">&quot;config&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">   </code><code class=\"string\">&quot;model&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;appc.arrowdb/acl&quot;</code></div>\n<div class=\"line\"><code class=\"plain\"> },</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"string\">&quot;parameters&quot;</code><code class=\"plain\">: [],</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"string\">&quot;response&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">   </code><code class=\"string\">&quot;context&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">     </code><code class=\"string\">&quot;$|0&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;models&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">   },</code></div>\n<div class=\"line\"><code class=\"plain\">   </code><code class=\"string\">&quot;routes&quot;</code><code class=\"plain\">: [</code></div>\n<div class=\"line\"><code class=\"plain\">     {</code></div>\n<div class=\"line\"><code class=\"plain\">       </code><code class=\"string\">&quot;next&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;response.success&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">     }</code></div>\n<div class=\"line\"><code class=\"plain\">   ]</code></div>\n<div class=\"line\"><code class=\"plain\"> }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=49158442\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Nodes - Model Find All"});