Ext.data.JsonP['API_Builder_Console']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>API Builder Console</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-49153257\" class=\"content\">\n                        <h1>API Builder Console</h1>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/API_Builder_Console-section-src-49153257_APIBuilderConsole-Introduction\">Introduction</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/API_Builder_Console-section-src-49153257_APIBuilderConsole-Configuration\">Configuration</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/API_Builder_Console-section-src-49153257_APIBuilderConsole-APIBuildertabs\">API Builder tabs</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/API_Builder_Console-section-src-49153257_APIBuilderConsole-Summary\">Summary</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/API_Builder_Console-section-src-49153257_APIBuilderConsole-Connectors\">Connectors</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/API_Builder_Console-section-src-49153257_APIBuilderConsole-Models\">Models</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/API_Builder_Console-section-src-49153257_safe-id-QVBJQnVpbGRlckNvbnNvbGUtQVBJRG9jcyZUZXN0\">API Docs &amp; Test</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/API_Builder_Console-section-src-49153257_APIBuilderConsole-Configurations\">Configurations</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/API_Builder_Console-section-src-49153257_APIBuilderConsole-Logs\">Logs</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/API_Builder_Console-section-src-49153257_APIBuilderConsole-Filteringlogs\">Filtering logs</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/API_Builder_Console-section-src-49153257_APIBuilderConsole-Clearlog\">Clear log</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/API_Builder_Console-section-src-49153257_APIBuilderConsole-Logpagination\">Log pagination</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/API_Builder_Console-section-src-49153257_APIBuilderConsole-Informationandsearch\">Information and search</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/API_Builder_Console-section-src-49153257_APIBuilderConsole-APIBuilderandSwagger\">API Builder and Swagger</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/API_Builder_Console-section-src-49153257_APIBuilderConsole-APIBuilderprojectSwagger\">API Builder project Swagger</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/API_Builder_Console-section-src-49153257_APIBuilderConsole-IndividualAPIs\">Individual APIs</a>    </p>\n</li></ul></li></ul>    <div class=\"section section-2 \" id=\"src-49153257_APIBuilderConsole-Introduction\">\n        <h2 class=\"heading \"><span>Introduction</span></h2>\n    <p>The <strong class=\" \">Admin Console</strong> allows you to create your application and manage data in your application.    </p>\n    <p>By default, when you create a new project and run it locally, the <strong class=\" \">Admin Console</strong> is enabled and available using the <tt class=\" \">console</tt> path, that is, <tt class=\" \">http://localhost:8080/console</tt>. You should navigate to the Admin Console in your web browser to view what this UI has to offer.    </p>\n    <p>    <img src=\"images/download/attachments/49153257/summary.png\" alt=\"images/download/attachments/49153257/summary.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"500\" height=\"279\">\n        </img></p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-49153257_APIBuilderConsole-Configuration\">\n        <h2 class=\"heading \"><span>Configuration</span></h2>\n    <p>To configure access to the Admin Console, open the project&apos;s <tt class=\" \">./conf/default.js</tt> file and edit the <tt class=\" \">admin</tt> key.  The <tt class=\" \">admin</tt> key is a dictionary of key-value pairs that control the access to the Admin Console, such as restricting which users or organizations can access the Admin Console or the name of the Admin Console endpoint.    </p>\n    <p>The <tt class=\" \">admin</tt> dictionary can contain the following keys:    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Key    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Type    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Default    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Description    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>allowedHosts    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Array&lt;String&gt;    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>-    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>When the application is in production, restrict access to the Admin Console to the specified hosts    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>disableAPIDoc    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Boolean    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>false    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Set to <tt class=\" \">true</tt> to not display the generated API Docs. Changing the setting only works in production. Swagger is always available in dev mode.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>enabled    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Boolean    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>true    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Set to <tt class=\" \">true</tt> to enable the Admin Console.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p class=\"p1\">validEmails    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Array&lt;String&gt;    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>developer&apos;s e-mail address    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>When the application is in production, restrict access to the Admin Console to the specified accounts.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p class=\"p1\">validOrgs    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Array&lt;Number&gt;    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>developer&apos;s organization    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>When the application is in production, restrict access to the Admin Console to the specified organizations.    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <p><strong class=\" \">Example:</strong>    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">./conf/default.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"./conf/default.js\">\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">  admin: {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// control whether the admin website is available</code></div>\n<div class=\"line\"><code class=\"plain\">    enabled: </code><code class=\"keyword\">true</code><code class=\"plain\">,</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// if you set disableAPIDoc, your APIs docs will not show up (Only works in production. Swagger is always available in dev mode.)</code></div>\n<div class=\"line\"><code class=\"plain\">    disableAPIDoc: </code><code class=\"keyword\">false</code><code class=\"plain\">,</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// set the email addresses you want to enable while in production</code></div>\n<div class=\"line\"><code class=\"plain\">    validEmails: [</code><code class=\"string\">&quot;jsmith@foo.com&quot;</code><code class=\"plain\">],</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// set the organization ids you want to enable while in production</code></div>\n<div class=\"line\"><code class=\"plain\">    validOrgs: [</code><code class=\"value\">199546299</code><code class=\"plain\">]</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// set the list of IP addresses, IP ranges and hostnames from which connections to the admin interfaces </code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// will be accepted</code></div>\n<div class=\"line\"><code class=\"plain\">    allowedHosts: [</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&apos;127.0.0.1&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&apos;myhost.axawy.com&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&apos;10.1.1.1/24&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    ]</code></div>\n<div class=\"line\"><code class=\"plain\">  }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-49153257_APIBuilderConsole-APIBuildertabs\">\n        <h2 class=\"heading \"><span>API Builder tabs</span></h2>\n    <p>API Builder provides a list of tabs on the left-hand side that helps you get started building your applications. Click the different sections of the UI to hop between functions and features of API Builder.    </p>\n    <div class=\"section section-3 \" id=\"src-49153257_APIBuilderConsole-Summary\">\n        <h3 class=\"heading \"><span>Summary</span></h3>\n    <p>The Summary tab lists basic information about your app like app name, version, description, author, license, and API key.    </p>\n    <p>    <img src=\"images/download/attachments/49153257/summary.png\" alt=\"images/download/attachments/49153257/summary.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"500\" height=\"279\">\n        </img></p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-49153257_APIBuilderConsole-Connectors\">\n        <h3 class=\"heading \"><span>Connectors</span></h3>\n    <p>    <span style=\"color: #10181f;\">\nConnectors are responsible for reading and writing data to a specific data source (e.g., Salesforce, MySQL, MongoDB, Azure, MSSQL or your own backend system). Each model has one connector. There are a number of pre-built connectors in the    </span>\n <a class=\"external-link external-link\" href=\"https://software.appcelerator.com/\" target=\"_blank\">Platform Marketplace</a>     <span style=\"color: #10181f;\">\nyou can also create your own custom connectors.    </span>\n    </p>\n    <p>See <a class=\"document-link \" href=\"#!/guide/API_Builder_Connectors\">API Builder Connectors</a> for details on how to get started, adding connectors, and connector projects.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-49153257_APIBuilderConsole-Models\">\n        <h3 class=\"heading \"><span>Models</span></h3>\n    <p>    <span style=\"color: #10181f;\">\nA <strong class=\" \">Model</strong> is the data model, backed by a connector, and exposed as an API endpoint. A model can consist of other models or fields from other models. Once again, API Builder will generate API endpoints for your models by default. Changes to models require a restart.    </span>\n    </p>\n    <p>The <strong class=\" \">Models </strong>tab lets you create new models. The model build process involves the following steps:    </p>\n<ol class=\" \"><li class=\" \">    <p>Name your new model, select a connector, and add a description.    </p>\n</li><li class=\" \">    <p>Add fields to your new model.    </p>\n</li><li class=\" \">    <p>Select auto-generated API endpoints.    </p>\n</li></ol>    <p>    <img src=\"images/download/attachments/49153257/model_page.png\" alt=\"images/download/attachments/49153257/model_page.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"500\" height=\"278\">\n        </img></p>\n    <p>At the time of the 1.10.0 beta release, you may only build models when executing the project locally (in development). The build console will not work in production even if you enable the Admin Console in production.    </p>\n    <p>See the <i class=\" \">Create a new model</i> section of <a class=\"document-link \" href=\"#!/guide/API_Builder_Getting_Started_Guide\">API Builder Getting Started Guide</a> for instructions on how to create a new model.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-49153257_safe-id-QVBJQnVpbGRlckNvbnNvbGUtQVBJRG9jcyZUZXN0\">\n        <h3 class=\"heading \"><span>API Docs &amp; Test</span></h3>\n    <p>    <span style=\"color: #10181f;\">\nOn startup, API endpoints are automatically generated for all models as per their default configuration. An API provides a way for a client to access your application, such as <tt class=\" \">GET &lt;SERVER_ADDRESS&gt;/api/users/query</tt>, execute custom logic, internally access the application&apos;s models and APIs, and return data back to the client application.     </span>\n    </p>\n    <p>The <strong class=\" \">API Doc &amp; Test</strong> tab in the Admin Console contains generated docs of your application APIs including how to call the API, multiple examples and the ability to test the APIs.  The generated docs use the information in the <tt class=\" \">description</tt> fields of your JavaScript definition files to fill in some of the information.    </p>\n    <p>    <img src=\"images/download/attachments/49153257/API_Doc_n_Test.png\" alt=\"images/download/attachments/49153257/API_Doc_n_Test.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"500\" height=\"279\">\n        </img></p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-49153257_APIBuilderConsole-Configurations\">\n        <h3 class=\"heading \"><span>Configurations</span></h3>\n    <p>    <span style=\"color: #10181f;\">\nThe Configurations tab displays the list of configuration files on the API Builder instance. You can edit the configuration files here.    </span>\n    </p>\n    <p>    <span style=\"color: #10181f;\">\nNote: edits to these files will trigger a server restart once the files have been saved.    </span>\n    </p>\n    <p>    <span style=\"color: #10181f;\">\nSee <a class=\"document-link \" href=\"#!/guide/Console_Configuration\">Console Configuration</a> for an example and settings.    </span>\n    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-49153257_APIBuilderConsole-Logs\">\n        <h3 class=\"heading \"><span>Logs</span></h3>\n    <p>    <span style=\"color: #10181f;\">\nThe <strong class=\" \">Logs</strong> tab displays a searchable and filterable list of logs generated from API Builder. When you invoke your API, their logs will be recorded locally, allowing you to test and debug your API. You can drill into the log entries to get more detail about the event, such as response time and headers.    </span>\n    </p>\n    <p>Logs can be filtered by many methods that include by time, method type, status, and user input in the search bar. In addition to filtering, logs can be sorted by clicking on the column headers of Time, Method, URL, Status, and Duration (ms).    </p>\n    <p>    <img src=\"images/download/attachments/49153257/Logs.png\" alt=\"images/download/attachments/49153257/Logs.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"500\" height=\"279\">\n        </img></p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-49153257_APIBuilderConsole-Filteringlogs\">\n        <h3 class=\"heading \"><span>Filtering logs</span></h3>\n    <p>by time, methods, and status. With the time filter, it defaults to All Time. You can choose to filter log events by past 10 minutes, hour, 12 or 24 hours, 7, 30, 60, or 90 days, and 1 year. With the methods filter, you can list events by All Methods (default), GET, POST, PUT, DELETE, PATCH, OPTIONS, and HEAD. And with the status filter, you can list events by All Status (default), Only Errors, Only Success, 100s, 200s, 300s, 400s, and 500s.    </p>\n    <p>The Search bar will allow you to filter for specific events (e.g. specific URL hits, duration and date values, etc.).    </p>\n    <p>    <img src=\"images/download/attachments/49153257/search_bar.png\" alt=\"images/download/attachments/49153257/search_bar.png\" class=\"confluence-embedded-image\" width=\"500\">\n        </img></p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-49153257_APIBuilderConsole-Clearlog\">\n        <h3 class=\"heading \"><span>Clear log</span></h3>\n    <p>If desired, the log can be clear by clicking <strong class=\" \">Clear Logs</strong> in the upper right-hand corner. You will be given a warning that this action is permanent. All logs will be deleted, are irretrievable, and are not archived.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-49153257_APIBuilderConsole-Logpagination\">\n        <h3 class=\"heading \"><span>Log pagination</span></h3>\n    <p>The Logs tab lets you view the events by pagination (defaults to 10 items per page but it can be set to view 10, 20, 30, 40, 50, 80, or 100 items per page).    </p>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-49153257_APIBuilderConsole-Informationandsearch\">\n        <h2 class=\"heading \"><span>Information and search</span></h2>\n    <p>Most API Builder tabs include the title of the page followed by an information icon and a search bar. The information icon, when clicked, will display a short description of it&apos;s function and/or purpose.    </p>\n    <p>To locate a particular record, enter a search term in the search bar at the top to filter the table or click Advanced to restrict the search to a specific model field.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-49153257_APIBuilderConsole-APIBuilderandSwagger\">\n        <h2 class=\"heading \"><span>API Builder and Swagger</span></h2>\n    <p>API Builder contains a <a class=\"external-link external-link\" href=\"http://swagger.io/\" target=\"_blank\">Swagger</a> definition that can be used to programmatically import APIs using tools such as <a class=\"external-link external-link\" href=\"https://www.axway.com/en/enterprise-solutions/api-management#tablist1-tab1\" target=\"_blank\">Axway API Manager</a>.    </p>\n    <div class=\"section section-3 \" id=\"src-49153257_APIBuilderConsole-APIBuilderprojectSwagger\">\n        <h3 class=\"heading \"><span>API Builder project Swagger</span></h3>\n    <p>Your API Builder project Swagger file describes all of the APIs in the project that can be accessed via the following URL:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">https:</code><code class=\"comments\">//&lt;SUB_DOMAIN_TOKEN&gt;.cloudapp-enterprise.appcelerator.com/apidoc/swagger.json</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-49153257_APIBuilderConsole-IndividualAPIs\">\n        <h3 class=\"heading \"><span>Individual APIs</span></h3>\n    <p>Each API also has a separate Swagger definition associated with the API. This is convenient if you only need access to one API and not expose the entire API set by your API project.    </p>\n    <p>For example, if you have a model and associated APIs for <i class=\" \">account</i> as follows:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"keyword\">var</code><code class=\"plain\"> Arrow = require(</code><code class=\"string\">&apos;arrow&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"keyword\">var</code><code class=\"plain\"> Model = Arrow.Model.reduce(</code><code class=\"string\">&apos;appc.salesforce/Account&apos;</code><code class=\"plain\">, </code><code class=\"string\">&apos;Account&apos;</code><code class=\"plain\">, {</code></div>\n<div class=\"line\"><code class=\"plain\">    fields: {</code></div>\n<div class=\"line\"><code class=\"plain\">        Name: {</code></div>\n<div class=\"line\"><code class=\"plain\">            type: String,</code></div>\n<div class=\"line\"><code class=\"plain\">            description: </code><code class=\"string\">&apos;Account Name&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            maxlength: 255,</code></div>\n<div class=\"line\"><code class=\"plain\">            required: </code><code class=\"keyword\">true</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            optional: </code><code class=\"keyword\">false</code></div>\n<div class=\"line\"><code class=\"plain\">        },</code></div>\n<div class=\"line\"><code class=\"plain\">        Type: {</code></div>\n<div class=\"line\"><code class=\"plain\">            type: String,</code></div>\n<div class=\"line\"><code class=\"plain\">            description: </code><code class=\"string\">&apos;Account Type&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            maxlength: 40</code></div>\n<div class=\"line\"><code class=\"plain\">        },</code></div>\n<div class=\"line\"><code class=\"plain\">        Phone: {</code></div>\n<div class=\"line\"><code class=\"plain\">            type: String,</code></div>\n<div class=\"line\"><code class=\"plain\">            description: </code><code class=\"string\">&apos;Account Phone&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            maxlength: 40</code></div>\n<div class=\"line\"><code class=\"plain\">        }</code></div>\n<div class=\"line\"><code class=\"plain\">    },</code></div>\n<div class=\"line\"><code class=\"plain\">    actions: [</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&apos;create&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&apos;read&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&apos;update&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&apos;delete&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&apos;deleteAll&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">    ]</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">module.exports = Model;</code></div>\n</div>\n    </div>\n    <p>The API Builder documentation for this API can be found via this URL:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">https:</code><code class=\"comments\">//&lt;SUB_DOMAIN_TOKEN&gt;.cloudapp-enterprise.appcelerator.com/apidoc/docs.html?apis/account.html</code></div>\n</div>\n    </div>\n    <p>The Swagger definition for <i class=\" \">account</i> can be found here:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">https:</code><code class=\"comments\">//&lt;SUB_DOMAIN_TOKEN&gt;.cloudapp-enterprise.appcelerator.com/apidoc/docs.json?apis/account</code></div>\n</div>\n    </div>\n    <p>Swagger files for the API Builder project and individual APIs can be found on the Github page  <a class=\"external-link external-link\" href=\"https://gist.github.com/lbrenman/0df7270473498e31dc9b817bb152d723\" target=\"_blank\">API Builder API Swagger Interface</a>.    </p>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=49153257\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"API Builder Console"});