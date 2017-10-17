Ext.data.JsonP['Creating_a_Custom_Preview_Server']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Creating a Custom Preview Server</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-30083125\" class=\"content\">\n                        <h1>Creating a Custom Preview Server</h1>\n    <p>You can customize the URLs used during previewing to accommodate the case where the web root of your site does not match your project structure, or you can&apos;t use the internal server.    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Creating_a_Custom_Preview_Server-section-src-30083125_CreatingaCustomPreviewServer-UsingaLocalWebServer\">Using a Local Web Server</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Creating_a_Custom_Preview_Server-section-src-30083125_CreatingaCustomPreviewServer-UsingaRemoteWebServer\">Using a Remote Web Server</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"src-30083125_CreatingaCustomPreviewServer-UsingaLocalWebServer\">\n        <h2 class=\"heading \"><span>Using a Local Web Server</span></h2>\n    <p>As an example, we consider a set of web sites like the following, where we wish to preview files in <strong class=\" \">.../project1/public</strong>    </p>\n    <p>    <img src=\"images/download/attachments/30083125/folder.png\" alt=\"images/download/attachments/30083125/folder.png\" class=\"confluence-embedded-image\">\n Documents<br>    <img src=\"images/download/attachments/30083125/folder.png\" alt=\"images/download/attachments/30083125/folder.png\" class=\"confluence-embedded-image\">\n workspace<br>    <img src=\"images/download/attachments/30083125/folder.png\" alt=\"images/download/attachments/30083125/folder.png\" class=\"confluence-embedded-image\">\n project1<br>    <img src=\"images/download/attachments/30083125/folder.png\" alt=\"images/download/attachments/30083125/folder.png\" class=\"confluence-embedded-image\">\n private<br>    <img src=\"images/download/attachments/30083125/folder.png\" alt=\"images/download/attachments/30083125/folder.png\" class=\"confluence-embedded-image\">\n public<br>    <img src=\"images/download/attachments/30083125/page.png\" alt=\"images/download/attachments/30083125/page.png\" class=\"confluence-embedded-image\">\n index.html<br>    <img src=\"images/download/attachments/30083125/folder.png\" alt=\"images/download/attachments/30083125/folder.png\" class=\"confluence-embedded-image\">\n project2<br>    <img src=\"images/download/attachments/30083125/folder.png\" alt=\"images/download/attachments/30083125/folder.png\" class=\"confluence-embedded-image\">\n ...    </img></br></img></br></img></br></img></br></img></br></img></br></img></br></img></p>\n    <div class=\"confbox panel panel\">\n    <ul class=\" \"><li class=\" \">    <p><strong class=\" \">Base URL:</strong> <tt class=\" \">http://localhost:2020/</tt>    </p>\n</li><li class=\" \">    <p><strong class=\" \">Document Root:</strong> /Documents/workspace/project1/public/    </p>\n</li><li class=\" \">    <p><strong class=\" \">Studio Project Root (optional):</strong> /Documents/workspace/project1/    </p>\n</li></ul>    </div>\n    <p>The goal is that <tt class=\" \">http://locahost:2020/index.html</tt> serves the file located at <strong class=\" \">/Documents/workspace/project1/public/index.html</strong>    </p>\n    <p>The files in question do not have to be part of a Studio project, but we illustrate the case above for additional clarity.    </p>\n<ol class=\" \"><li class=\" \">    <p>Right-click on a project in the &quot;Project Explorer&quot; view, and select <strong class=\" \">Properties</strong>    </p>\n</li><li class=\" \">    <p>Select &quot;Preview Settings&quot;. Click <strong class=\" \">Use Specific Server</strong> and <strong class=\" \">New</strong>    </p>\n</li><li class=\" \">    <p>Select <strong class=\" \">Simple Web server</strong>    </p>\n</li><li class=\" \">    <p>Fill out the form shown below:    </p>\n    <img src=\"images/download/attachments/30083125/Screen_shot_2011-04-22_at_2.29.43_PM.png\" alt=\"images/download/attachments/30083125/Screen_shot_2011-04-22_at_2.29.43_PM.png\" class=\"confluence-embedded-image\">\n        <p>    </p>\n    <div class=\"confbox panel panel\">\n    <ul class=\" \"><li class=\" \">    <p><strong class=\" \">Name:</strong> Choose a descriptive name that describes the server uniquely    </p>\n</li><li class=\" \">    <p><strong class=\" \">Base URL:</strong> The URL of the server up to the document root, i.e. <a class=\"external-link external-link\" href=\"http://localhost:2020/\" target=\"_blank\">http://localhost:2020/</a> from above    </p>\n</li><li class=\" \">    <p><strong class=\" \">Document Root:</strong> The path to the public root of the web site, i.e. <strong class=\" \">/Documents/workspace/project1/public/</strong> from above    </p>\n</li></ul>    </div>\n</img></li><li class=\" \">    <p>Click <strong class=\" \">OK</strong> and <strong class=\" \">OK</strong>    </p>\n</li></ol>    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <p>The above configuration does not copy files between the Studio project and the web root--it is a direct link with both items mapping to the same place. Thus, when you save index.html inside Studio, you are editing the same file served by the web server listed above. If you instead need to preview against a remote web server, you can use a similar setting as above, but you will want to set up a deployment option to &quot;upload on save&quot;. See below.    </p>\n    </div>\n        <p>Pressing the preview button will now preview a file against the selected server.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083125_CreatingaCustomPreviewServer-UsingaRemoteWebServer\">\n        <h2 class=\"heading \"><span>Using a Remote Web Server</span></h2>\n    <p>The process for previewing against a remote web server is much the same--the only difference is setting up the files to be transferred on save if you wish to make the process as transparent as possible. Again, we start with the following setup:    </p>\n    <div class=\"confbox panel panel\">\n    <ul class=\" \"><li class=\" \">    <p><strong class=\" \">Base URL:</strong> <a class=\"external-link external-link\" href=\"http://www.mywebsite.com/\" target=\"_blank\">http://www.mywebsite.com/</a>    </p>\n</li><li class=\" \">    <p><strong class=\" \">Document Root:</strong> /Documents/workspace/project1/public/    </p>\n</li></ul>    </div>\n    <p>The goal is that <a class=\"external-link external-link\" href=\"http://www.mywebsite.com/index.html\" target=\"_blank\">http://www.mywebsite.com/index.html</a> serves the file located at <strong class=\" \">/Documents/workspace/project1/public/index.html</strong>    </p>\n<ol class=\" \"><li class=\" \">    <p>Right-click on a project in the &quot;Project Explorer&quot; view, and select <strong class=\" \">Properties</strong>    </p>\n</li><li class=\" \">    <p>Select &quot;Preview Settings&quot;. Click <strong class=\" \">Use Specific Server</strong> and <strong class=\" \">New</strong>    </p>\n</li><li class=\" \">    <p>Select <strong class=\" \">Simple Web server</strong>    </p>\n</li><li class=\" \">    <p>Fill out the form shown below:    </p>\n    <img src=\"images/download/attachments/30083125/Screen_shot_2011-04-22_at_2.29.43_PM.png\" alt=\"images/download/attachments/30083125/Screen_shot_2011-04-22_at_2.29.43_PM.png\" class=\"confluence-embedded-image\">\n        <p>    </p>\n    <div class=\"confbox panel panel\">\n    <ul class=\" \"><li class=\" \">    <p><strong class=\" \">Name:</strong> Choose a descriptive name that describes the server uniquely    </p>\n</li><li class=\" \">    <p><strong class=\" \">Base URL:</strong> The URL of the server up to the document root, i.e. <a class=\"external-link external-link\" href=\"http://www.mywebsite.com/\" target=\"_blank\">http://www.mywebsite.com/</a> from above    </p>\n</li><li class=\" \">    <p><strong class=\" \">Document Root:</strong> The path to the public root of the web site, i.e. <strong class=\" \">/Documents/workspace/project1/public/</strong> from above. This is actually ignored in this case, but we must fill in a value, so we use the local path.    </p>\n</li></ul>    </div>\n</img></li><li class=\" \">    <p>Click <strong class=\" \">OK</strong> and <strong class=\" \">OK</strong>    </p>\n</li></ol>    <p>Now, set up the deployment options:    </p>\n<ol class=\" \"><li class=\" \">    <p>Follow the deployment instructions here: <a class=\"document-link \" href=\"#!/guide/FTP,_SFTP,_and_FTPS_Deployment\">FTP, SFTP, and FTPS Deployment</a>.    </p>\n</li><li class=\" \">    <p>When setting up the site, you may wish to choose &quot;Automatically sync my changes...&quot;    </p>\n</li><li class=\" \">    <p>Save and close the dialog.    </p>\n</li></ol>    <p>Pressing the preview button will now preview a file against the remote server. Now, when you save and upload a file (or upload automatically on save if you have chosen that option), you can refresh the preview and see your changes.    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083125\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Creating a Custom Preview Server"});