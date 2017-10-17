Ext.data.JsonP['File_Uploads_and_Downloads']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>File Uploads and Downloads</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-29004908\" class=\"content\">\n                        <h1>File Uploads and Downloads</h1>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/File_Uploads_and_Downloads-section-src-29004908_FileUploadsandDownloads-Objective\">Objective</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/File_Uploads_and_Downloads-section-src-29004908_FileUploadsandDownloads-Contents\">Contents</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/File_Uploads_and_Downloads-section-src-29004908_FileUploadsandDownloads-Fileupload\">File upload</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/File_Uploads_and_Downloads-section-src-29004908_FileUploadsandDownloads-Monitoringuploadprogress\">Monitoring upload progress</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/File_Uploads_and_Downloads-section-src-29004908_FileUploadsandDownloads-Filedownload\">File download</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/File_Uploads_and_Downloads-section-src-29004908_FileUploadsandDownloads-Filestoragelocations\">File storage locations</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/File_Uploads_and_Downloads-section-src-29004908_FileUploadsandDownloads-Monitoringdownloadprogress\">Monitoring download progress</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/File_Uploads_and_Downloads-section-src-29004908_FileUploadsandDownloads-Hands-onpractice\">Hands-on practice</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/File_Uploads_and_Downloads-section-src-29004908_FileUploadsandDownloads-Goal\">Goal</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/File_Uploads_and_Downloads-section-src-29004908_FileUploadsandDownloads-Steps\">Steps</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/File_Uploads_and_Downloads-section-src-29004908_FileUploadsandDownloads-Referencesandfurtherreading\">References and further reading</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/File_Uploads_and_Downloads-section-src-29004908_FileUploadsandDownloads-Summary\">Summary</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"src-29004908_FileUploadsandDownloads-Objective\">\n        <h2 class=\"heading \"><span>Objective</span></h2>\n    <p>In this chapter, you will learn how to upload and download files using the HTTPClient object.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-29004908_FileUploadsandDownloads-Contents\">\n        <h2 class=\"heading \"><span>Contents</span></h2>\n    <p>A common need in a mobile application is to upload a file (like an image) to a remote server. You might also need download a file and store it locally on the device. For example, you might download starting SQL data for your app&apos;s database the first time the user runs your app. Luckily, both are easily accomplished with Titanium.    </p>\n    <div class=\"section section-3 \" id=\"src-29004908_FileUploadsandDownloads-Fileupload\">\n        <h3 class=\"heading \"><span>File upload</span></h3>\n    <p>Assuming you have a server-side service which accepts file uploads, you should find upload fairly straightforward. Titanium handles the setting of headers and marshaling POST parameters for you, so you simply need to pass a Titanium <a class=\"external-link external-link\" href=\"http://en.wikipedia.org/wiki/Blob_(computing)\" target=\"_blank\">blob</a> object to <tt class=\" \">send()</tt>. A blob is returned by many different Titanium APIs, including <tt class=\" \">Titanium.Filesystem.File.read</tt>. Below, you will find an example of how you might select a photo from the device photo gallery, and upload that blob to a web service:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">Titanium.Media.openPhotoGallery({</code></div>\n<div class=\"line\"><code class=\"plain\">\tsuccess:function(event) {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t</code><code class=\"comments\">/* success callback fired after media retrieved from gallery */</code></div>\n<div class=\"line\"><code class=\"plain\">\t\tvar xhr = Titanium.Network.createHTTPClient();</code></div>\n<div class=\"line\"><code class=\"plain\">\t\txhr.onload = function(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\tTi.UI.createAlertDialog({</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t      title:</code><code class=\"string\">&apos;Success&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t      message:</code><code class=\"string\">&apos;status code &apos;</code><code class=\"plain\"> + </code><code class=\"keyword\">this</code><code class=\"plain\">.status</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t    }).show();</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t};</code></div>\n<div class=\"line\"><code class=\"plain\">\t\txhr.open(</code><code class=\"string\">&apos;POST&apos;</code><code class=\"plain\">,</code><code class=\"string\">&apos;https://myserver.com/api/uploadAndPost.do&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">\t\txhr.send({</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t    theImage:event.media,  </code><code class=\"comments\">/* event.media holds blob from gallery */</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t    username: </code><code class=\"string\">&apos;foo&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t    password: </code><code class=\"string\">&apos;bar&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t  });</code></div>\n<div class=\"line\"><code class=\"plain\">\t}</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n    </div>\n    <p>Note: this file upload process is only valid if using Mobile Backend Services services file update. The event.media doesn&apos;t contain file contents but rather just the information about the file, location, size, dimensions, and so on.To upload the file, you will need to use <tt class=\" \">Ti.Filesystem</tt> to get a handle on the file and access to the file itself. For example:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"keyword\">var</code><code class=\"plain\"> file = Ti.Filesystem.getFile(event.media.nativePath);</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"keyword\">if</code><code class=\"plain\"> (file.exists()) {</code></div>\n<div class=\"line\"><code class=\"plain\">\t</code><code class=\"comments\">//file handling logic</code></div>\n<div class=\"line\"><code class=\"plain\">} </code><code class=\"keyword\">else</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\">\t...</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    <div class=\"section section-4 \" id=\"src-29004908_FileUploadsandDownloads-Monitoringuploadprogress\">\n        <h4 class=\"heading \"><span>Monitoring upload progress</span></h4>\n    <p>Using the <tt class=\" \">xhr.onsendstream</tt> event, you can monitor upload progress and update a progress bar. This event is called at regular intervals as the data is being transmitted. When the event is fired, the <tt class=\" \">progress</tt> property of the event object will contain a value from 0.0-1.0 with the progress. That&apos;s exactly the type of value you&apos;ll need for a <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.ProgressBar\"><tt class=\" \">Ti.UI.ProgressBar</tt></a>.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"comments\">/* Create a progress bar */</code></div>\n<div class=\"line\"><code class=\"plain\">var ind=Titanium.UI.createProgressBar({</code></div>\n<div class=\"line\"><code class=\"plain\">\twidth: </code><code class=\"value\">200</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\theight: </code><code class=\"value\">50</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\tmin: </code><code class=\"value\">0</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\tmax: </code><code class=\"value\">1</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\tvalue: </code><code class=\"value\">0</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\tstyle: Titanium.UI.iPhone.ProgressBarStyle.PLAIN,</code></div>\n<div class=\"line\"><code class=\"plain\">\ttop: </code><code class=\"value\">10</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\tmessage: </code><code class=\"string\">&apos;Uploading image&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\tfont: {fontSize: </code><code class=\"value\">12</code><code class=\"plain\">, fontWeight: </code><code class=\"string\">&apos;bold&apos;</code><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"plain\">\tcolor: </code><code class=\"string\">&apos;#888&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">win.add(ind);</code></div>\n<div class=\"line\"><code class=\"plain\">ind.show();</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">var xhr = Titanium.Network.createHTTPClient();</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"comments\">// onsendstream called repeatedly, use the progress property to</code></div>\n<div class=\"line\"><code class=\"comments\">// update the progress bar</code></div>\n<div class=\"line\"><code class=\"plain\">xhr.onsendstream = function(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">\tind.value = e.progress ;</code></div>\n<div class=\"line\"><code class=\"plain\">\tTi.API.info(</code><code class=\"string\">&apos;ONSENDSTREAM - PROGRESS: &apos;</code><code class=\"plain\"> + e.progress);</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n</div>\n    </div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004908_FileUploadsandDownloads-Filedownload\">\n        <h3 class=\"heading \"><span>File download</span></h3>\n    <p>Occasionally, you will also need to download and store a file from a remote server. In concert with the <tt class=\" \">Ti.Filesystem</tt> module, you can fetch and save a file. Below is a cross-platform example for fetching a remote image and saving it to the <tt class=\" \">applicationDataDirectory</tt>:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var win = Ti.UI.createWindow({</code></div>\n<div class=\"line\"><code class=\"plain\">\tbackgroundColor: </code><code class=\"string\">&apos;#fff&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">var loadingLabel = Ti.UI.createLabel({</code></div>\n<div class=\"line\"><code class=\"plain\">\ttext: </code><code class=\"string\">&apos;Loading ...&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\ttop: </code><code class=\"value\">20</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\tleft: </code><code class=\"value\">10</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">win.add(loadingLabel);</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">var image = Ti.UI.createImageView({</code></div>\n<div class=\"line\"><code class=\"plain\">\ttop: </code><code class=\"value\">20</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\tleft: </code><code class=\"value\">10</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">win.add(image);</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">var xhr = Titanium.Network.createHTTPClient({</code></div>\n<div class=\"line\"><code class=\"plain\">\tonload: function() {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t</code><code class=\"comments\">// first, grab a &quot;handle&quot; to the file where you&apos;ll store the downloaded data</code></div>\n<div class=\"line\"><code class=\"plain\">\t\tvar f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,</code><code class=\"string\">&apos;mygraphic.png&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">\t\tf.write(</code><code class=\"keyword\">this</code><code class=\"plain\">.responseData); </code><code class=\"comments\">// write to the file</code></div>\n<div class=\"line\"><code class=\"plain\">\t\tTi.App.fireEvent(</code><code class=\"string\">&apos;graphic_downloaded&apos;</code><code class=\"plain\">, {filepath: f.nativePath});</code></div>\n<div class=\"line\"><code class=\"plain\">\t},</code></div>\n<div class=\"line\"><code class=\"plain\">\ttimeout: </code><code class=\"value\">10000</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">xhr.open(</code><code class=\"string\">&apos;GET&apos;</code><code class=\"plain\">,</code><code class=\"string\">&apos;http://www.appcelerator.com/wp-content/uploads/2009/06/titanium_desk.png&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">xhr.send();</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">Ti.App.addEventListener(</code><code class=\"string\">&apos;graphic_downloaded&apos;</code><code class=\"plain\">, function(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">\t</code><code class=\"comments\">// you don&apos;t have to fire an event like this, but perhaps multiple components will</code></div>\n<div class=\"line\"><code class=\"plain\">\t</code><code class=\"comments\">// want to know when the image has been downloaded and saved</code></div>\n<div class=\"line\"><code class=\"plain\">\twin.remove(loadingLabel);</code></div>\n<div class=\"line\"><code class=\"plain\">\timage.image = e.filepath;</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">win.open();</code></div>\n</div>\n    </div>\n    <p>On iOS, a simple property of the HTTPClient object lets you save a file to the local file system. Below is an iOS-only example of how to fetch a file from a server and store it in the <tt class=\" \">applicationDataDirectory</tt>, the primary location for any read/write Filesystem IO in a Titanium application:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var xhr = Titanium.Network.createHTTPClient({</code></div>\n<div class=\"line\"><code class=\"plain\">\tonload: function() {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\tTi.API.info(</code><code class=\"string\">&apos;PDF downloaded to applicationDataDirectory/test.pdf&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">\t},</code></div>\n<div class=\"line\"><code class=\"plain\">\ttimeout: </code><code class=\"value\">10000</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">xhr.open(</code><code class=\"string\">&apos;GET&apos;</code><code class=\"plain\">,</code><code class=\"string\">&apos;http://www.appcelerator.com/assets/The_iPad_App_Wave.pdf&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"comments\">// on iOS, you can use the file property to save a downloaded file</code></div>\n<div class=\"line\"><code class=\"comments\">// though you must set it after calling open()</code></div>\n<div class=\"line\"><code class=\"plain\">xhr.file = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,</code><code class=\"string\">&apos;test.pdf&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">xhr.send();</code></div>\n</div>\n    </div>\n    <div class=\"section section-4 \" id=\"src-29004908_FileUploadsandDownloads-Filestoragelocations\">\n        <h4 class=\"heading \"><span>File storage locations</span></h4>\n    <p>When downloading files, keep in mind the locations on the device you can access files. The following locations are potentially accessible:    </p>\n<ul class=\" \"><li class=\" \">    <p><strong class=\" \">Ti.Filesystem.applicationDataDirectory</strong>: A read/write directory accessible by your app. Place your application-specific files in this directory. The contents of this directory persist until you remove the files or until the user uninstalls the application.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Ti.Filesystem.resourcesDirectory</strong>: A read-only directory where your application resources are located; this directory corresponds to the <i class=\" \">project</i>/Resources directory in Studio. The contents of this directory persist until the user uninstalls the application.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Ti.Filesystem.tempDirectory</strong>: A read-write directory where your application can place temporary files. The contents of this directory persist until your application fully closes, at which time the operating system could delete your files.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Ti.Filesystem.externalStorageDirectory</strong>: A read-write directory on the external storage device (SD card) accessible by your app, if such a location exists. Check first with <tt class=\" \">Ti.Filesystem.isExternalStoragePresent()</tt> (which returns a Boolean).    </p>\n</li></ul>    <p>    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <p>The <tt class=\" \">Ti.Filesystem.resourcesDirectory</tt> is read-only on a device, but is read/write in the simulator/emulator.    </p>\n    </div>\n        </div>\n    <div class=\"section section-4 \" id=\"src-29004908_FileUploadsandDownloads-Monitoringdownloadprogress\">\n        <h4 class=\"heading \"><span>Monitoring download progress</span></h4>\n    <p>As with uploads, you can use an HTTPClient callback to monitor download progress. In this case, it&apos;s the <tt class=\" \">xhr.ondatastream</tt> callback. You&apos;d use it like this (assuming you have a progress bar named <tt class=\" \">ind</tt> as with the upload progress example):    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"comments\">// ondatastream called repeatedly as file downloaded, use the progress property to</code></div>\n<div class=\"line\"><code class=\"comments\">// update the progress bar</code></div>\n<div class=\"line\"><code class=\"plain\">xhr.ondatastream = function(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">\tind.value = e.progress ;</code></div>\n<div class=\"line\"><code class=\"plain\">\tTi.API.info(</code><code class=\"string\">&apos;ONDATASTREAM - PROGRESS: &apos;</code><code class=\"plain\"> + e.progress);</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n</div>\n    </div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004908_FileUploadsandDownloads-Hands-onpractice\">\n        <h3 class=\"heading \"><span>Hands-on practice</span></h3>\n    <div class=\"section section-4 \" id=\"src-29004908_FileUploadsandDownloads-Goal\">\n        <h4 class=\"heading \"><span>Goal</span></h4>\n    <p>In this activity, you will download a large image file, uploading a progress bar as the file is downloaded. You&apos;ll save the file to the local file system, then display the image in an ImageView.    </p>\n    </div>\n    <div class=\"section section-4 \" id=\"src-29004908_FileUploadsandDownloads-Steps\">\n        <h4 class=\"heading \"><span>Steps</span></h4>\n<ol class=\" \"><li class=\" \">    <p>Create a new Titanium Mobile project. You can keep the two-tab code or replace it.    </p>\n</li><li class=\" \">    <p>To the window, add a progress indicator centered in the window, 10 pixels from the top, with a width of 200 and height of 50. Set the minimum value to 0, max to 1, and current value to 0. Show the indicator.    </p>\n</li><li class=\" \">    <p>Add an ImageView to the window that will display the downloaded photo.    </p>\n</li><li class=\" \">    <p>Add an HTTPClient that will:    </p>\n<ul class=\" \"><li class=\" \">    <p>Download <a class=\"external-link external-link\" href=\"http://farm4.static.flickr.com/3244/3115485060_076a345932_o.jpg\" target=\"_blank\">http://farm4.static.flickr.com/3244/3115485060_076a345932_o.jpg</a> (from <a class=\"external-link external-link\" href=\"http://www.flickr.com/photos/72213316@N00/3115485060/sizes/o/in/photostream/\" target=\"_blank\">Flickr</a>).    </p>\n</li><li class=\" \">    <p>Save the file to the <tt class=\" \">applicationDataDirectory</tt> in a file named cool_photo.jpg.    </p>\n</li><li class=\" \">    <p>Update the progress bar as the file is downloaded    </p>\n</li><li class=\" \">    <p>Fire an event once the photo is downloaded and saved. Pass the native path as a payload of that event.    </p>\n</li></ul></li><li class=\" \">    <p>Add an app-level event listener to receive the native path of the downloaded photo. Hide the progress bar and set the ImageView&apos;s image property equal to that native path to show the image.    </p>\n</li><li class=\" \">    <p>Build and test the image in the simulator/emulator.    </p>\n</li></ol>    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004908_FileUploadsandDownloads-Referencesandfurtherreading\">\n        <h3 class=\"heading \"><span>References and further reading</span></h3>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"http://assets.appcelerator.com.s3.amazonaws.com/app_u/ebook/6.5_filedownload.zip\" target=\"_blank\">Finished code</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Filesystem_Access_and_Storage\">Filesystem Access and Storage chapter</a>    </p>\n</li><li class=\" \">    <p>This <a class=\"external-link external-link\" href=\"http://developer.appcelerator.com/blog/2011/09/qr-codes-in-your-mobile-apps-cross-platform.html\" target=\"_blank\">blog post</a> contains another technique for caching downloaded images    </p>\n</li></ul>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-29004908_FileUploadsandDownloads-Summary\">\n        <h2 class=\"heading \"><span>Summary</span></h2>\n    <p>In this chapter, you learned how to upload and download files using the HTTPClient object.    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=29004908\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"File Uploads and Downloads"});