Ext.data.JsonP['Nodes_-_Model_Find_and_Modify']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Nodes - Model Find and Modify</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-49158444\" class=\"content\">\n                        <h1>Nodes - Model Find and Modify</h1>\n    <p>This document describes the model find and modify and provides instance configuration and parameters information.    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Name    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Description    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>ModelFindAndModify    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>A Model specific node. Invokes the Find and Modify API on a specified model and returns the response.    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <div class=\"section section-2 \" id=\"src-49158444_Nodes-ModelFindandModify-Instanceconfiguration\">\n        <h2 class=\"heading \"><span>Instance configuration</span></h2>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Property    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Description    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Required    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Type    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>model    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>The name of the model of which to invoke the Find and Modify API.    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>yes    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>string    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-49158444_Nodes-ModelFindandModify-Instanceparameters\">\n        <h2 class=\"heading \"><span>Instance parameters</span></h2>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Property    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Description    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Type    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Default    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>limit    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>The number of records to fetch. The value must be greater than 0, and no greater than 1000.    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>number    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>10    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>skip    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>The number of records to skip. The value must not be less than 0.    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>number    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>&#xA0;    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>where    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Constrains values for fields. The value should be encoded JSON.    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>string    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>&#xA0;    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>order    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>A dictionary of one or more fields specifying sorting of results. In general, you can sort based on any predefined field that you can query using the where operator, as well as on custom fields. The value should be encoded JSON.    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>string    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>&#xA0;    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>sel    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Selects which fields to return from the query. Others are excluded. The value should be encoded JSON.    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>string    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>&#xA0;    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>unsel    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Selects which fields to not return from the query. Others are included. The value should be encoded JSON.    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>string    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>&#xA0;    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>page    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Request page number starting from 1.    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>number    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>1    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>per_page    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Number of results per page.    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>number    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>10    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <div class=\"section section-3 \" id=\"src-49158444_Nodes-ModelFindandModify-Example\">\n        <h3 class=\"heading \"><span>Example</span></h3>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"string\">&quot;model.findAndModify&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"string\">&quot;type&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;ModelFindAndModify&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"string\">&quot;config&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">   </code><code class=\"string\">&quot;model&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;appc.arrowdb/acl&quot;</code></div>\n<div class=\"line\"><code class=\"plain\"> },</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"string\">&quot;parameters&quot;</code><code class=\"plain\">: [</code></div>\n<div class=\"line\"><code class=\"plain\">   {</code></div>\n<div class=\"line\"><code class=\"plain\">     </code><code class=\"string\">&quot;name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;limit&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">     </code><code class=\"string\">&quot;value&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;$.params.limit|0&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">   },</code></div>\n<div class=\"line\"><code class=\"plain\">   {</code></div>\n<div class=\"line\"><code class=\"plain\">     </code><code class=\"string\">&quot;name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;skip&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">     </code><code class=\"string\">&quot;value&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;$.params.skip|0&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">   },</code></div>\n<div class=\"line\"><code class=\"plain\">   {</code></div>\n<div class=\"line\"><code class=\"plain\">     </code><code class=\"string\">&quot;name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;where&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">     </code><code class=\"string\">&quot;value&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;$.params.where|0&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">   },</code></div>\n<div class=\"line\"><code class=\"plain\">   {</code></div>\n<div class=\"line\"><code class=\"plain\">     </code><code class=\"string\">&quot;name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;order&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">     </code><code class=\"string\">&quot;value&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;$.params.order|0&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">   },</code></div>\n<div class=\"line\"><code class=\"plain\">   {</code></div>\n<div class=\"line\"><code class=\"plain\">     </code><code class=\"string\">&quot;name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;sel&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">     </code><code class=\"string\">&quot;value&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;$.params.sel|0&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">   },</code></div>\n<div class=\"line\"><code class=\"plain\">   {</code></div>\n<div class=\"line\"><code class=\"plain\">     </code><code class=\"string\">&quot;name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;unsel&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">     </code><code class=\"string\">&quot;value&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;$.params.unsel|0&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">   },</code></div>\n<div class=\"line\"><code class=\"plain\">   {</code></div>\n<div class=\"line\"><code class=\"plain\">     </code><code class=\"string\">&quot;name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;page&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">     </code><code class=\"string\">&quot;value&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;$.params.page|0&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">   },</code></div>\n<div class=\"line\"><code class=\"plain\">   {</code></div>\n<div class=\"line\"><code class=\"plain\">     </code><code class=\"string\">&quot;name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;per_page&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">     </code><code class=\"string\">&quot;value&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;$.params.per_page|0&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">   },</code></div>\n<div class=\"line\"><code class=\"plain\">   {</code></div>\n<div class=\"line\"><code class=\"plain\">     </code><code class=\"string\">&quot;name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;name&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">     </code><code class=\"string\">&quot;value&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;$.params[\\&quot;appc.arrowdb/acl\\&quot;].name|0&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">   },</code></div>\n<div class=\"line\"><code class=\"plain\">   {</code></div>\n<div class=\"line\"><code class=\"plain\">     </code><code class=\"string\">&quot;name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;readers&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">     </code><code class=\"string\">&quot;value&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;$.params[\\&quot;appc.arrowdb/acl\\&quot;].readers|0&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">   },</code></div>\n<div class=\"line\"><code class=\"plain\">   {</code></div>\n<div class=\"line\"><code class=\"plain\">     </code><code class=\"string\">&quot;name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;writers&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">     </code><code class=\"string\">&quot;value&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;$.params[\\&quot;appc.arrowdb/acl\\&quot;].writers|0&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">   },</code></div>\n<div class=\"line\"><code class=\"plain\">   {</code></div>\n<div class=\"line\"><code class=\"plain\">     </code><code class=\"string\">&quot;name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;public_read&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">     </code><code class=\"string\">&quot;value&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;$.params[\\&quot;appc.arrowdb/acl\\&quot;].public_read|0&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">   },</code></div>\n<div class=\"line\"><code class=\"plain\">   {</code></div>\n<div class=\"line\"><code class=\"plain\">     </code><code class=\"string\">&quot;name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;public_write&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">     </code><code class=\"string\">&quot;value&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;$.params[\\&quot;appc.arrowdb/acl\\&quot;].public_write|0&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">   },</code></div>\n<div class=\"line\"><code class=\"plain\">   {</code></div>\n<div class=\"line\"><code class=\"plain\">     </code><code class=\"string\">&quot;name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;user&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">     </code><code class=\"string\">&quot;value&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;$.params[\\&quot;appc.arrowdb/acl\\&quot;].user|0&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">   },</code></div>\n<div class=\"line\"><code class=\"plain\">   {</code></div>\n<div class=\"line\"><code class=\"plain\">     </code><code class=\"string\">&quot;name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;created_at&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">     </code><code class=\"string\">&quot;value&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;$.params[\\&quot;appc.arrowdb/acl\\&quot;].created_at|0&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">   },</code></div>\n<div class=\"line\"><code class=\"plain\">   {</code></div>\n<div class=\"line\"><code class=\"plain\">     </code><code class=\"string\">&quot;name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;updated_at&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">     </code><code class=\"string\">&quot;value&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;$.params[\\&quot;appc.arrowdb/acl\\&quot;].updated_at|0&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">   },</code></div>\n<div class=\"line\"><code class=\"plain\">   {</code></div>\n<div class=\"line\"><code class=\"plain\">     </code><code class=\"string\">&quot;name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;pretty_json&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">     </code><code class=\"string\">&quot;value&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;$.params[\\&quot;appc.arrowdb/acl\\&quot;].pretty_json|0&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">   },</code></div>\n<div class=\"line\"><code class=\"plain\">   {</code></div>\n<div class=\"line\"><code class=\"plain\">     </code><code class=\"string\">&quot;name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;custom_fields&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">     </code><code class=\"string\">&quot;value&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;$.params[\\&quot;appc.arrowdb/acl\\&quot;].custom_fields|0&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">   },</code></div>\n<div class=\"line\"><code class=\"plain\">   {</code></div>\n<div class=\"line\"><code class=\"plain\">     </code><code class=\"string\">&quot;name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;user_id&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">     </code><code class=\"string\">&quot;value&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;$.params[\\&quot;appc.arrowdb/acl\\&quot;].user_id|0&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">   }</code></div>\n<div class=\"line\"><code class=\"plain\"> ],</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"string\">&quot;response&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">   </code><code class=\"string\">&quot;context&quot;</code><code class=\"plain\">: {},</code></div>\n<div class=\"line\"><code class=\"plain\">   </code><code class=\"string\">&quot;routes&quot;</code><code class=\"plain\">: [</code></div>\n<div class=\"line\"><code class=\"plain\">     {</code></div>\n<div class=\"line\"><code class=\"plain\">       </code><code class=\"string\">&quot;conditions&quot;</code><code class=\"plain\">: [</code></div>\n<div class=\"line\"><code class=\"plain\">         {</code></div>\n<div class=\"line\"><code class=\"plain\">           </code><code class=\"string\">&quot;key&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;$|0&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">           </code><code class=\"string\">&quot;exists&quot;</code><code class=\"plain\">: </code><code class=\"keyword\">false</code></div>\n<div class=\"line\"><code class=\"plain\">         }</code></div>\n<div class=\"line\"><code class=\"plain\">       ],</code></div>\n<div class=\"line\"><code class=\"plain\">       </code><code class=\"string\">&quot;next&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;response.error.notfound&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">     },</code></div>\n<div class=\"line\"><code class=\"plain\">     {</code></div>\n<div class=\"line\"><code class=\"plain\">       </code><code class=\"string\">&quot;next&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;response.success&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">     }</code></div>\n<div class=\"line\"><code class=\"plain\">   ]</code></div>\n<div class=\"line\"><code class=\"plain\"> }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=49158444\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Nodes - Model Find and Modify"});