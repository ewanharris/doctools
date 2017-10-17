Ext.data.JsonP['PyDev_Install']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>PyDev Install</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-30083046\" class=\"content\">\n                        <h1>PyDev Install</h1>\n    <div class=\"section section-2 \" id=\"src-30083046_safe-id-UHlEZXZJbnN0YWxsLU5vdGVmb3J1c2Vyc3dpdGhBcHRhbmFTdHVkaW8zKEJldGEp\">\n        <h2 class=\"heading \"><span>Note for users with Aptana Studio 3 (Beta)</span></h2>\n    <p>PyDev already comes preinstalled in <a class=\"external-link external-link\" href=\"http://aptana.com/products/studio3\" target=\"_blank\">Aptana Studio 3</a>, so, this step can be skipped (note that if <a class=\"external-link external-link\" href=\"http://aptana.com/products/studio3\" target=\"_blank\">Aptana Studio 3</a> is used,<br>PyDev cannot be installed or update separately, as it must always be updated as a whole).    </br></p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083046_PyDevInstall-Beforestartingtheinstall\">\n        <h2 class=\"heading \"><span>Before starting the install</span></h2>\n    <p>The first thing to choose before the install is a folder where you have permissions to write (otherwise,<br>remember to install Eclipse running as an Administrator and remember to run as an Administrator whenever<br>any plugin needs to be updated).    </br></br></p>\n    <p>Also, it seems Eclipse 3.6.0 has some issues installing in shared locations (in any OS). An example of such a location would<br>be the Program Files directory on Windows (see: <a class=\"external-link external-link\" href=\"https://bugs.eclipse.org/bugs/show_bug.cgi?id=322929\" target=\"_blank\">https://bugs.eclipse.org/bugs/show_bug.cgi?id=322929</a>), so,<br>please use at least 3.6.1 if planning to install Eclipse/PyDev on a shared location.    </br></br></p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083046_PyDevInstall-PyDevCertificate\">\n        <h2 class=\"heading \"><span>PyDev Certificate</span></h2>\n    <p>PyDev is built with a self-signed certificate, which means that when installed a dialog will be opened to ask if you trust<br>the certificate (which should be OK for most users).    </br></p>\n    <p>Now, if you don&apos;t want that dialog to appear, it&apos;s possible to import the certificate before starting the installation process<br>(this is actually a requirement for those that want to install PyDev from the command line because of a bug in the Eclipse p2 director).    </br></p>\n    <p>The first step for that is downloading the <a class=\"document-link unresolved\" href=\"#!/guide/PyDev_Install-section-src-30083046\">PyDev certificate</a>.    </p>\n    <p>The second step is discovering the java being used in Eclipse: go to <strong class=\" \">Help &gt; About &gt; Installation details and look for &apos;java.home&apos;</strong>    </p>\n    <p>Then to actually import it, in the command line, go to the Eclipse &apos;java.home&apos; directory and execute    </p>\n    <p><strong class=\" \">bin/keytool.exe -import -file pydev_certificate.cer -keystore lib/security/cacerts</strong>    </p>\n    <p>Note that if you never did anything here, your <strong class=\" \">password</strong> when requested should be <strong class=\" \">changeit</strong>    </p>\n    <p>Reference: <a class=\"external-link external-link\" href=\"http://download.oracle.com/javase/1.4.2/docs/tooldocs/solaris/keytool.html#cacerts\" target=\"_blank\">http://download.oracle.com/javase/1.4.2/docs/tooldocs/solaris/keytool.html#cacerts</a>    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083046_PyDevInstall-Installingwiththeupdatesite\">\n        <h2 class=\"heading \"><span>Installing with the update site</span></h2>\n    <p><strong class=\" \">Note: Instructions are targeted at Eclipse 3.5 and 3.6</strong>    </p>\n    <p>To install PyDev and PyDev Extensions using the Eclipse Update Manager, you need to use the <strong class=\" \">Help &gt; Install New Software...</strong><br>menu (note that in older versions, this would be the &apos;Find and Install&apos; menu).    </br></p>\n    <p>    <img src=\"images/pydev.org/images/install_menu.png\" alt=\"images/pydev.org/images/install_menu.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\">\n    <br>In the next screen, add the update site(s) you want to work with (<strong class=\" \">See below for a list with the</strong> available update sites).    </br></img></p>\n    <p>    <img src=\"images/pydev.org/images/update_sites.png\" alt=\"images/pydev.org/images/update_sites.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\">\n        </img></p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083046_PyDevInstall-Availableupdatesites\">\n        <h2 class=\"heading \"><span>Available update sites</span></h2>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \"/><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Main:    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n    <ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"http://pydev.org/updates\" target=\"_blank\">http://pydev.org/updates</a>    </p>\n</li></ul>            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Nightly builds:    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n    <ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"http://pydev.org/nightly\" target=\"_blank\">http://pydev.org/nightly</a>    </p>\n</li></ul>            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <p>After entering the update sites, select the update site you entered or<br>select &quot;All available sites&quot; and add a filter for PyDev, so that it<br>shows the contents of all the update sites that have PyDev, then select what you want to install and click &apos;Next&apos;.    </br></br></p>\n    <p>    <img src=\"images/pydev.org/images/update_sites2.png\" alt=\"images/pydev.org/images/update_sites2.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\">\n    <br>Then, <strong class=\" \">UNCHECK</strong> the <strong class=\" \">&apos;Contact all update sites during install to find required software&apos;</strong> and press<br>&apos;Next&apos; again to confirm your selection.    </br></br></img></p>\n    <p>    <img src=\"images/pydev.org/images/update_sites3.png\" alt=\"images/pydev.org/images/update_sites3.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\">\n    <br>And finally, read the license agreement and if you accept, select the accept radio button and click &apos;Finish&apos;.    </br></img></p>\n    <p>    <img src=\"images/pydev.org/images/update_sites4.png\" alt=\"images/pydev.org/images/update_sites4.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\">\n    <br>At that point, Eclipse should automatically download the plugin contents and present you to a dialog asking<br>if you want to restart (to which you should say <strong class=\" \">yes</strong>).    </br></br></img></p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083046_PyDevInstall-Possibleissueondownload\">\n        <h2 class=\"heading \"><span>Possible issue on download</span></h2>\n    <p>If you have any problem at this point with a message such as:    </p>\n    <blockquote>\n    <p>An error occurred while collecting items to be installed<br>No repository found containing:<br>org.python.pydev/osgi.bundle/1.4.7.2843<br>No repository found containing:<br>org.python.pydev.ast/osgi.bundle/1.4.7.2843    </br></br></br></br></p>\n        </blockquote>\n    <p>that might indicate that the mirror you selected is having some network problem at that time,<br>so, please follow the same steps with another mirror.    </br></p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083046_PyDevInstall-Installingwiththezipfile\">\n        <h2 class=\"heading \"><span>Installing with the zip file</span></h2>\n    <p>The available locations for the zip files are:    </p>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"http://sourceforge.net/projects/pydev/files/\" target=\"_blank\">SourceForge download</a>    </p>\n</li></ul>    <p>After downloading the zip file:    </p>\n    <p><strong class=\" \">Eclipse 3.4 and 3.5</strong>    </p>\n    <p>Extract the contents of the zip file in the <strong class=\" \">eclipse/dropins</strong> folder and restart Eclipse.    </p>\n    <p><strong class=\" \">Before Eclipse 3.4</strong>    </p>\n    <p>Extract the contents of the zip file on top of Eclipse, making sure the plugins folder is extracted on top of the<br><strong class=\" \">eclipse/plugins</strong> folder and the features is on top of the <strong class=\" \">eclipse/features</strong> folder.<br>After that, restart Eclipse with the &apos;-clean&apos; flag, so that Eclipse finds out about it.    </br></br></p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083046_PyDevInstall-Checkingtheinstallation\">\n        <h2 class=\"heading \"><span>Checking the installation</span></h2>\n    <p>You can verify if it is correctly installed going to the menu <strong class=\" \">&apos;window &gt; preferences&apos;</strong> and<br>checking if there is a <strong class=\" \">PyDev</strong> item under that.    </br></p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083046_PyDevInstall-Uninstalling\">\n        <h2 class=\"heading \"><span>Uninstalling</span></h2>\n    <p>Follow the instructons below if at any time you wish to stop using the PyDev plugin<br>(or any other Eclipse plugin):    </br></p>\n    <p><strong class=\" \">Eclipse 3.5</strong>    </p>\n    <p>If you installed with the update site, go to the menu <strong class=\" \">help &gt; about &gt; installation details</strong> then on the<br><strong class=\" \">Installed Software</strong> tab, select the plugins you want to uninstall and click <strong class=\" \">Uninstall</strong>.    </br></p>\n    <p>If you installed with the zip file, just remove the com.python.pydev and org.python.pydev features and plugins from<br>the dropins folder.    </br></p>\n    <p><strong class=\" \">Before Eclipse 3.4</strong>    </p>\n    <p>Go to the menu <strong class=\" \">help &gt; software updates &gt; manage configuration</strong>, select the plugin and click &apos;disable&apos;, then, you have to restart Eclipse,<br>go to the same place again and then click on &apos;remove&apos; (note that you have a button in the menu that enables you to see the &apos;disabled&apos; features).    </br></p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083046_PyDevInstall-CommonInstallProblems\">\n        <h2 class=\"heading \"><span>Common Install Problems</span></h2>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083046_safe-id-UHlEZXZJbnN0YWxsLVdpbmRvd3NWaXN0YS83VUFDKFVzZXJBY2Nlc3NDb250cm9sKQ\">\n        <h2 class=\"heading \"><span>Windows Vista/7 UAC (User Access Control)</span></h2>\n    <p>Eclipse 3.3 had issues with the Windows UAC, so, Eclipse must be run as Administrator to install a plugin on Eclipse 3.3.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083046_PyDevInstall-Corruptedinstall\">\n        <h2 class=\"heading \"><span>Corrupted install</span></h2>\n    <p>Eclipse sometimes is not able to correctly get the plugin, from the update site but will do no checking<br>on whether it is really correct (no md5 checking), and when this happens, you&apos;ll usually get a ClassNotFoundException<br>(similar to the example below).    </br></br></p>\n    <p>When that happens, <strong class=\" \">you should uninstall it and reinstall again</strong> with the update site...<br>if that still fails, you could try to get the zip files, as it will at least give you a warning when it is corrupt.    </br></p>\n    <p>Note that the chance of the files being corrupt in the server is pretty low, as that&apos;s something that&apos;s always checked<br>in a new release &#x2013; but if you&apos;re suspicious about it, please ask in the forum, so that it can be double-checked.    </br></p>\n    <p>Also, there have been reports with that error where the only solution that<br>has been consistent has been <strong class=\" \">removing all</strong> previous versions of pydev and then installing<br>the latest version.    </br></br></p>\n    <p><strong class=\" \">EXAMPLE</strong>    </p>\n    <p>Unable to create this part due to an internal error. Reason for the failure:<br>The editor class could not be instantiated. This usually indicates that the<br>editor&apos;s class name was mistyped in plugin.xml.    </br></br></p>\n    <blockquote>\n    <p>java.lang.ClassNotFoundException: org.python.pydev.editor.PyEdit<br>at org.eclipse.osgi.framework.internal.core.BundleLoader.findClass(BundleLoader.java:405)<br>at org.eclipse.osgi.framework.internal.core.BundleLoader.findClass(BundleLoader.java:350)<br>at org.eclipse.osgi.framework.adaptor.core.AbstractClassLoader.loadClass(AbstractClassLoader.java:78)<br>at java.lang.ClassLoader.loadClass(ClassLoader.java:235)<br>at org.eclipse.osgi.framework.internal.core.BundleLoader.loadClass(BundleLoader.java:275)<br>...    </br></br></br></br></br></br></p>\n        </blockquote>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083046\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"PyDev Install"});