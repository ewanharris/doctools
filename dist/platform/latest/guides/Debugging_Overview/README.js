Ext.data.JsonP['Debugging_Overview']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Debugging Overview</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-29004937\" class=\"content\">\n                        <h1>Debugging Overview</h1>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Debugging_Overview-section-src-29004937_DebuggingOverview-Essentialelementsofdebugging\">Essential elements of debugging</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Debugging_Overview-section-src-29004937_DebuggingOverview-Debuggingtechniques\">Debugging techniques</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Debugging_Overview-section-src-29004937_DebuggingOverview-Debuggingvs.softwaretesting\">Debugging vs. software testing</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Debugging_Overview-section-src-29004937_DebuggingOverview-References\">References</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"src-29004937_DebuggingOverview-Objective\">\n        <h2 class=\"heading \"><span>Objective</span></h2>\n    <p>In this section, we will define a common base of concepts that you&apos;ll need in the subsequent sections in this chapter.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-29004937_DebuggingOverview-Contents\">\n        <h2 class=\"heading \"><span>Contents</span></h2>\n    <p>Debugging is a broad topic, and full coverage is beyond the scope of these guides. We&apos;ll take a very brief look at the following in this section:    </p>\n<ul class=\" \"><li class=\" \">    <p>Essential elements of debugging    </p>\n</li><li class=\" \">    <p>Techniques    </p>\n</li><li class=\" \">    <p>Debugging vs. testing    </p>\n</li></ul>    <p>We&apos;ll cover the tools and specific procedures you&apos;ll follow in the subsequent sections.    </p>\n    <div class=\"section section-3 \" id=\"src-29004937_DebuggingOverview-Essentialelementsofdebugging\">\n        <h3 class=\"heading \"><span>Essential elements of debugging</span></h3>\n    <p>You investigate problems in very similar ways whether you&apos;re debugging a computer program, troubleshooting a network connectivity issue, or figuring out why your dishwasher is spilling dirty water all over the floor. The essential elements include:    </p>\n<ul class=\" \"><li class=\" \">    <p>Gather information &#x2013; You&apos;ll need a clear, succinct, and accurate description of the problem to work from. Users sometimes provide good info. But more often, you&apos;ll need to investigate and document the issues yourself.    </p>\n</li><li class=\" \">    <p>Reproduce the problem &#x2013; You&apos;ll also need similarly clear, succinct, and accurate steps to reproduce the problem.    </p>\n</li><li class=\" \">    <p>Deduce &#x2013; Don&apos;t just guess at a solution. Examine the steps to reproduce the problem, do they point to a particular subcomponent of your app? Can you eliminate some aspect, say database interactions, based on the symptoms? Logical deduction will help you zero in on possible fixes.    </p>\n</li><li class=\" \">    <p>Experiment iteratively &#x2013; Try a fix. If it doesn&apos;t solve the problem, undo your changes and try something else. Keep track of every change you attempt so you don&apos;t repeat yourself.    </p>\n</li><li class=\" \">    <p>Be tenacious &#x2013; Bugs can be tough to find and fix. Stick with it. But be methodical. Haste makes waste (and further bugs) when it comes to troubleshooting.    </p>\n</li><li class=\" \">    <p>Track your work &#x2013; Keep track of the bugs you&apos;ve found and fixed (as well as those you haven&apos;t fixed). Whether you publish this information to your users or not, a database of issues will help you find and fix future bugs. Document the solution as well as key non-fixes (so perhaps you won&apos;t get lost on similar dead-ends in future similar situations).    </p>\n</li></ul>    </div>\n    <div class=\"section section-3 \" id=\"src-29004937_DebuggingOverview-Debuggingtechniques\">\n        <h3 class=\"heading \"><span>Debugging techniques</span></h3>\n    <p>Debugging and testing books would fill a large shelf at a bookstore. We&apos;ll focus on just a few techniques, which include:    </p>\n<ul class=\" \"><li class=\" \">    <p>print tracing (log statements)    </p>\n</li><li class=\" \">    <p>crash log evaluation    </p>\n</li><li class=\" \">    <p>interactive debugging    </p>\n</li></ul>    <p>Print tracing involves adding <tt class=\" \">Ti.API.info()</tt> type statements to your app so that you can watch the app as it executes. You can catch many common bugs using this technique. Such logging doesn&apos;t add significant overhead to an app&apos;s execution. Still, you should remove such statements from your production app. Incidentally, log output on the device is available to knowledgable users. Take special care to remove logging statements if you use them to output sensitive information, such as user credentials, during testing.    </p>\n    <p>Crash log evaluation includes looking at the build and runtime logs associated with the Titanium build scripts, native compilation steps, and runtime crash logging performed by the simulator/emulator or device. Error messages in those logs can help you track down the source of bugs.    </p>\n    <p>Interactive debugging involves using a dedicated debugging tool or feature of your IDE to set breakpoints, then evaluate the state and values of variables during the execution of your program. Studio supports interactive debugging, with which you can set breakpoints at specific locations in your code, or set exception breakpoints to pause your program when a specific exception is raised.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004937_DebuggingOverview-Debuggingvs.softwaretesting\">\n        <h3 class=\"heading \"><span>Debugging vs. software testing</span></h3>\n    <p>Debugging is a fundamentally different activity than testing. Testing comes before software is released to users. It involves confirming that features and functions work the way you say they&apos;re supposed to. Debugging comes later, after users have run your program and discovered a flaw. In a perfect world, testing would find bugs before you release the software. In reality, schedules, budgets, and other limitations prevent you from testing every possible permutation and use-case and some bugs will slip through. This guide doesn&apos;t cover testing.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004937_DebuggingOverview-References\">\n        <h3 class=\"heading \"><span>References</span></h3>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"http://www.ibm.com/developerworks/web/library/wa-debug/index.html\" target=\"_blank\">Learn the essentials of debugging</a> (IBM)    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"http://en.wikibooks.org/wiki/Computer_Programming_Principles/Maintaining/Debugging\" target=\"_blank\">Debugging principles</a> (WikiBooks)    </p>\n</li></ul>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-29004937_DebuggingOverview-Summary\">\n        <h2 class=\"heading \"><span>Summary</span></h2>\n    <p>In this section, you learned basic debugging concepts that you&apos;ll need in the subsequent sections in this chapter.    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=29004937\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Debugging Overview"});