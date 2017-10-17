Ext.data.JsonP['PyDev_Content_Assistants']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>PyDev Content Assistants</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-30083064\" class=\"content\">\n                        <h1>PyDev Content Assistants</h1>\n    <div class=\"section section-2 \" id=\"src-30083064_PyDevContentAssistants-ContentAssistants\">\n        <h2 class=\"heading \"><span>Content Assistants</span></h2>\n    <p>Some content assistants to make your life easier...    </p>\n    <p>They are ALL activated through <strong class=\" \">Ctrl+1</strong>, but which one(s) will show depend on the context it is activated.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083064_PyDevContentAssistants-Contentassistants\">\n        <h2 class=\"heading \"><span>Content assistants</span></h2>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083064_safe-id-UHlEZXZDb250ZW50QXNzaXN0YW50cy1NYWtlaW1wb3J0Zm9ydW5kZWZpbmVkdG9rZW4vSWdub3JlZXJyb3I\">\n        <h2 class=\"heading \"><span>Make import for undefined token / Ignore error</span></h2>\n    <p>Let&apos;s say that you have the code below, and that the code-analysis has just seen that the &apos;xmlreader&apos; token was undefined (this is important, as we cannot make this analysis before the token was generated). In this case, we have 2 options offered, one to fix that importing the token and another one saying that PyDev should ignore that error. The example below shows it in action:    </p>\n    <p>    <img src=\"images/pydev.org/images/contentassist/ctrl_1_fix_import1.png\" alt=\"images/pydev.org/images/contentassist/ctrl_1_fix_import1.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\">\n        </img></p>\n    <p>If we let the cursor at the undefined token line and press Ctrl+1, we get:    </p>\n    <p>    <img src=\"images/pydev.org/images/contentassist/ctrl_1_fix_import2.png\" alt=\"images/pydev.org/images/contentassist/ctrl_1_fix_import2.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\">\n        </img></p>\n    <p><strong class=\" \">After</strong> choosing the second import we have:    </p>\n    <p>    <img src=\"images/pydev.org/images/contentassist/ctrl_1_fix_import3.png\" alt=\"images/pydev.org/images/contentassist/ctrl_1_fix_import3.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\">\n        </img></p>\n    <p>Now, if we had chosen the third option (<strong class=\" \">@UndefinedVariable</strong>), a note would have been entered in the code, to warn PyDev to ignore that error, as pointed below...    </p>\n    <p>    <img src=\"images/pydev.org/images/contentassist/ctrl_1_ignoreerror.png\" alt=\"images/pydev.org/images/contentassist/ctrl_1_ignoreerror.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\">\n        </img></p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083064_safe-id-UHlEZXZDb250ZW50QXNzaXN0YW50cy1Eb24ndGFuYWx5emVtb2R1bGU\">\n        <h2 class=\"heading \"><span>Don&apos;t analyze module</span></h2>\n    <p>PyDev can accept a &apos;note&apos; to warn it not to make code-analysis at all in some module. In order to do that&apos; you can go to the first line of the module and press &apos;Ctrl+1&apos; and choose the <strong class=\" \">@PydevCodeAnalysisIgnore</strong> flag. Doing that will add a note in the code to warn that this module should not be analyzed by PyDev.    </p>\n    <p>If you use automatically generated files, it might be useful to put that warning on those files, as it would not be useful to analyze those files. The example below shows the result of this action.    </p>\n    <p>    <img src=\"images/pydev.org/images/contentassist/ctrl_1_ignoremodule.png\" alt=\"images/pydev.org/images/contentassist/ctrl_1_ignoremodule.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\">\n        </img></p>\n    <p><strong class=\" \">After</strong> choosing choosing it, we have:    </p>\n    <p>    <img src=\"images/pydev.org/images/contentassist/ctrl_1_ignoremodule2.png\" alt=\"images/pydev.org/images/contentassist/ctrl_1_ignoremodule2.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\">\n        </img></p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083064_PyDevContentAssistants-Moveimporttoglobalscope\">\n        <h2 class=\"heading \"><span>Move import to global scope</span></h2>\n    <p><strong class=\" \">Before</strong>    </p>\n    <p>    <img src=\"images/pydev.org/images/contentassist/ctrl_1_make_import.png\" alt=\"images/pydev.org/images/contentassist/ctrl_1_make_import.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\">\n        </img></p>\n    <p><strong class=\" \">After</strong>    </p>\n    <p>    <img src=\"images/pydev.org/images/contentassist/ctrl_1_compl_import.png\" alt=\"images/pydev.org/images/contentassist/ctrl_1_compl_import.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\">\n        </img></p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083064_PyDevContentAssistants-Createdocstring\">\n        <h2 class=\"heading \"><span>Create docstring</span></h2>\n    <p>*NOTE:*Must be called in the &apos;def&apos; line.    </p>\n    <p><strong class=\" \">Before</strong>    </p>\n    <p>    <img src=\"images/pydev.org/images/contentassist/ctrl_1_make_docstring.png\" alt=\"images/pydev.org/images/contentassist/ctrl_1_make_docstring.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\">\n        </img></p>\n    <p><strong class=\" \">After</strong>    </p>\n    <p>    <img src=\"images/pydev.org/images/contentassist/ctrl_1_compl_docstring.png\" alt=\"images/pydev.org/images/contentassist/ctrl_1_compl_docstring.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\">\n        </img></p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083064_safe-id-UHlEZXZDb250ZW50QXNzaXN0YW50cy1Bc3NpZ25yZXN1bHR0b25ld2xvY2FsdmFyaWFibGUob3JmaWVsZCk\">\n        <h2 class=\"heading \"><span>Assign result to new local variable (or field)</span></h2>\n    <p><strong class=\" \">Before</strong>    </p>\n    <p>    <img src=\"images/pydev.org/images/contentassist/ctrl_1_make_assign.png\" alt=\"images/pydev.org/images/contentassist/ctrl_1_make_assign.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\">\n        </img></p>\n    <p><strong class=\" \">After</strong>    </p>\n    <p>    <img src=\"images/pydev.org/images/contentassist/ctrl_1_compl_assign.png\" alt=\"images/pydev.org/images/contentassist/ctrl_1_compl_assign.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\">\n        </img></p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083064_PyDevContentAssistants-Assignparameterstoattributes\">\n        <h2 class=\"heading \"><span>Assign parameters to attributes</span></h2>\n    <p><strong class=\" \">Before</strong>    </p>\n    <p>    <img src=\"images/pydev.org/images/contentassist/ctrl_1_assign_to_attribs.png\" alt=\"images/pydev.org/images/contentassist/ctrl_1_assign_to_attribs.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\">\n        </img></p>\n    <p><strong class=\" \">After</strong>    </p>\n    <p>    <img src=\"images/pydev.org/images/contentassist/ctrl_1_assign_to_attribs2.png\" alt=\"images/pydev.org/images/contentassist/ctrl_1_assign_to_attribs2.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\">\n        </img></p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083064_PyDevContentAssistants-Surroundcodewithtry..exceptortry..finally\">\n        <h2 class=\"heading \"><span>Surround code with try..except or try..finally</span></h2>\n    <p>*NOTE:*Must have some code selected    </p>\n    <p><strong class=\" \">Before</strong>    </p>\n    <p>    <img src=\"images/pydev.org/images/contentassist/ctrl_1_make_try_except.png\" alt=\"images/pydev.org/images/contentassist/ctrl_1_make_try_except.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\">\n        </img></p>\n    <p><strong class=\" \">After</strong>    </p>\n    <p>    <img src=\"images/pydev.org/images/contentassist/ctrl_1_compl_try_except.png\" alt=\"images/pydev.org/images/contentassist/ctrl_1_compl_try_except.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\">\n        </img></p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083064\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"PyDev Content Assistants"});