Ext.data.JsonP['Supporting_Gestures']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Supporting Gestures</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-29004933\" class=\"content\">\n                        <h1>Supporting Gestures</h1>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Supporting_Gestures-section-src-29004933_SupportingGestures-Shake\">Shake</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Supporting_Gestures-section-src-29004933_SupportingGestures-Swipe\">Swipe</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Supporting_Gestures-section-src-29004933_SupportingGestures-Touch\">Touch</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Supporting_Gestures-section-src-29004933_SupportingGestures-Pinch\">Pinch</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Supporting_Gestures-section-src-29004933_SupportingGestures-Longpress\">Long press</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Supporting_Gestures-section-src-29004933_SupportingGestures-Accelerometer\">Accelerometer</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"src-29004933_SupportingGestures-Objective\">\n        <h2 class=\"heading \"><span>Objective</span></h2>\n    <p>In this section, you will learn how to support more than simple taps in your Titanium apps. You&apos;ll examine various gestures, including shakes and swipes, and also learn how to manage global events within the Android app lifecycle.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-29004933_SupportingGestures-Contents\">\n        <h2 class=\"heading \"><span>Contents</span></h2>\n    <p>Mobile devices offer opportunity for inputs that go beyond simple taps. &quot;Best of breed&quot; apps should use those inputs whenever appropriate. These include:    </p>\n<ul class=\" \"><li class=\" \">    <p>Shakes    </p>\n</li><li class=\" \">    <p>Swipes    </p>\n</li><li class=\" \">    <p>Touches    </p>\n</li><li class=\" \">    <p>Pinching    </p>\n</li><li class=\" \">    <p>Long presses    </p>\n</li><li class=\" \">    <p>and accelerometer inputs by which you gauge pitch, roll, and yaw.    </p>\n</li></ul>    <p>We&apos;ll breeze through each of these in this section.    </p>\n    <div class=\"section section-3 \" id=\"src-29004933_SupportingGestures-Shake\">\n        <h3 class=\"heading \"><span>Shake</span></h3>\n    <p>You can determine when a user shakes their device via the <tt class=\" \">Ti.Gesture</tt> module.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">Ti.Gesture.addEventListener(</code><code class=\"string\">&apos;shake&apos;</code><code class=\"plain\">,function(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">\talert(</code><code class=\"string\">&apos;shaken at &apos;</code><code class=\"plain\">+e.timestamp);</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n    </div>\n    <p>You could use the <tt class=\" \">timestamp</tt> property to determine if a user has shaken the device for a given amount of time.    </p>\n    <p>The iOS simulator supports simulated shake events. Choose <strong class=\" \">Hardware</strong> &gt; <strong class=\" \">Shake Device</strong> to &quot;shake&quot; the simulator. The Android emulator does not support simulated shake events.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004933_SupportingGestures-Swipe\">\n        <h3 class=\"heading \"><span>Swipe</span></h3>\n    <p>Swipes are left/right tap &amp; drag the finger gestures (where scrolls are up/down drags). Support for swipes are built into most of the Titanium UI components.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var view = Ti.UI.createView();</code></div>\n<div class=\"line\"><code class=\"plain\">view.addEventListener(</code><code class=\"string\">&apos;swipe&apos;</code><code class=\"plain\">, function(e){</code></div>\n<div class=\"line\"><code class=\"plain\">\talert(</code><code class=\"string\">&apos;You swiped to the &apos;</code><code class=\"plain\">+e.direction);</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004933_SupportingGestures-Touch\">\n        <h3 class=\"heading \"><span>Touch</span></h3>\n    <p>Touch events are associated with the Titanium UI components. There are four touch events:    </p>\n<ul class=\" \"><li class=\" \">    <p><tt class=\" \">touchstart</tt> &#x2013; fired when a user&apos;s finger first contacts the device&apos;s screen.    </p>\n</li><li class=\" \">    <p><tt class=\" \">touchend</tt> &#x2013; fired when the user lifts his or her finger.    </p>\n</li><li class=\" \">    <p><tt class=\" \">touchmove</tt> &#x2013; fires continuously as the user drags his or her finger on the screen.    </p>\n</li><li class=\" \">    <p><tt class=\" \">touchcancel</tt> &#x2013; fired if the operating system interrupts an ongoing touch event, such as when a phone call is received.    </p>\n</li></ul>    <p>The event object associated with these events has only two useful properties: the X and Y coordinates of the event. You can use that information to track the user&apos;s finger across your app&apos;s UI.    </p>\n    <p>On the Android platform, other gesture events, such as <tt class=\" \">longpress</tt> and <tt class=\" \">swipe</tt>, cancel touch events, so a <tt class=\" \">touchend</tt> event may not fire after a <tt class=\" \">touchstart</tt> event.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004933_SupportingGestures-Pinch\">\n        <h3 class=\"heading \"><span>Pinch</span></h3>\n    <p>Added in the 1.8 release of the APIs, the pinch event is currently supported on iOS only. (Android support is in the works.) This event is associated with UI components and its event object has the useful <tt class=\" \">scale</tt> property as shown here:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var view = Ti.UI.createView();</code></div>\n<div class=\"line\"><code class=\"plain\">view.addEventListener(</code><code class=\"string\">&apos;pinch&apos;</code><code class=\"plain\">, function(e){</code></div>\n<div class=\"line\"><code class=\"plain\">\talert(</code><code class=\"string\">&apos;You pinched to &apos;</code><code class=\"plain\"> + e.scale*</code><code class=\"value\">100</code><code class=\"plain\"> + </code><code class=\"string\">&apos;%&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004933_SupportingGestures-Longpress\">\n        <h3 class=\"heading \"><span>Long press</span></h3>\n    <p>Also added in version 1.8 is support for long press events. These are like taps or clicks that last for more than an arbitrary amount of time. Keep in mind the native conventions for use of the long press. For example, on Android, a long press typically displays a pop-up of options or actions (sort of like a context menu on a desktop operating system).    </p>\n    <p>Support for long presses are now built into most of the Titanium UI components.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var view = Ti.UI.createView();</code></div>\n<div class=\"line\"><code class=\"plain\">view.addEventListener(</code><code class=\"string\">&apos;longpress&apos;</code><code class=\"plain\">, function(e){</code></div>\n<div class=\"line\"><code class=\"plain\">\talert(</code><code class=\"string\">&apos;You pressed at coordinates &apos;</code><code class=\"plain\"> + e.x + </code><code class=\"string\">&apos; / &apos;</code><code class=\"plain\"> + e.y);</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004933_SupportingGestures-Accelerometer\">\n        <h3 class=\"heading \"><span>Accelerometer</span></h3>\n    <p>Some iOS and Android devices include an accelerometer, which you can use to track pitch, roll, and yaw. Perhaps you&apos;ve seen racing games where you steer by tipping your device from side to side. You can use the accelerometer for similar user input in your Titanium apps.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"comments\">// labelTime, labelX, labelY, and labelZ are Ti.UI.Labels</code></div>\n<div class=\"line\"><code class=\"plain\">Ti.Accelerometer.addEventListener(</code><code class=\"string\">&apos;update&apos;</code><code class=\"plain\">, function(e){</code></div>\n<div class=\"line\"><code class=\"plain\">\tlabelTime.text = e.timestamp;</code></div>\n<div class=\"line\"><code class=\"plain\">\tlabelX.text = </code><code class=\"string\">&apos;x: &apos;</code><code class=\"plain\"> + e.x;</code></div>\n<div class=\"line\"><code class=\"plain\">\tlabelY.text = </code><code class=\"string\">&apos;y:&apos;</code><code class=\"plain\"> + e.y;</code></div>\n<div class=\"line\"><code class=\"plain\">\tlabelZ.text = </code><code class=\"string\">&apos;z:&apos;</code><code class=\"plain\"> + e.z;\t</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n    </div>\n    <p>If you run this code or the accelerometer.js sample in the Kitchen Sink, you&apos;ll see that the <tt class=\" \">update</tt> event is fired rapidly and the three axis values are extremely sensitive (many decimal places). To use the accelerometer successfully in your app, you&apos;ll want to average values over time and round the values to an appropriate level of precision for your needs. A Google search for <a class=\"external-link external-link\" href=\"http://www.google.com/search?aq=0&amp;oq=smoothing+accelerometer&amp;sourceid=chrome&amp;ie=UTF-8&amp;q=smoothing+accelerometer+data\" target=\"_blank\">smoothing accelerometer data</a> will give you many code examples to draw from.    </p>\n    <p>(Keep in mind that the simulator/emulator doesn&apos;t support the accelerometer. So, you&apos;ll have to test on a device.)    </p>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-29004933_safe-id-U3VwcG9ydGluZ0dlc3R1cmVzLU1hbmFnaW5nZXZlbnRzd2l0aGludGhlYXBwJ3NsaWZlY3ljbGU\">\n        <h2 class=\"heading \"><span>Managing events within the app&apos;s lifecycle</span></h2>\n    <p>Because Android is a multitasking environment, it&apos;s important that you remove global event listeners when your app is put into the background. (Global events include Ti.App, Ti.Gesture, Ti.Accelerometer, Ti.Geolocation, etc.) If you don&apos;t, the hardware that supports those global events will remain powered on and events will continue to be fired. Removing event listeners thus helps limit the associated battery-drain by powering down the device components. To remove an event listener, you must pass the same function signature to <tt class=\" \">removeEventListener()</tt> as you passed to <tt class=\" \">addEventListener()</tt>. For that reason, you should generally follow this format:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"comments\">// labelTime, labelX, labelY, and labelZ are Ti.UI.Labels</code></div>\n<div class=\"line\"><code class=\"plain\">var accelerometerAdded = </code><code class=\"keyword\">false</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">var accelerometerCallback = function(e){</code></div>\n<div class=\"line\"><code class=\"plain\">\tlabelTime.text = e.timestamp;</code></div>\n<div class=\"line\"><code class=\"plain\">\tlabelX.text = </code><code class=\"string\">&apos;x: &apos;</code><code class=\"plain\"> + e.x;</code></div>\n<div class=\"line\"><code class=\"plain\">\tlabelY.text = </code><code class=\"string\">&apos;y:&apos;</code><code class=\"plain\"> + e.y;</code></div>\n<div class=\"line\"><code class=\"plain\">\tlabelZ.text = </code><code class=\"string\">&apos;z:&apos;</code><code class=\"plain\"> + e.z;\t</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n<div class=\"line\"><code class=\"plain\">Ti.Accelerometer.addEventListener(</code><code class=\"string\">&apos;update&apos;</code><code class=\"plain\">, accelerometerCallback);</code></div>\n<div class=\"line\"><code class=\"plain\">accelerometerAdded = </code><code class=\"keyword\">true</code><code class=\"plain\">;</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"keyword\">if</code><code class=\"plain\">(Titanium.Platform.name == </code><code class=\"string\">&apos;android&apos;</code><code class=\"plain\">) {</code></div>\n<div class=\"line\"><code class=\"plain\">\tTi.Android.currentActivity.addEventListener(</code><code class=\"string\">&apos;pause&apos;</code><code class=\"plain\">, function(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t</code><code class=\"comments\">// called when app is put into the background</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t</code><code class=\"keyword\">if</code><code class=\"plain\">(accelerometerAdded) {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\tTi.API.info(</code><code class=\"string\">&quot;removing accelerometer callback on pause&quot;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\tTi.Accelerometer.removeEventListener(</code><code class=\"string\">&apos;update&apos;</code><code class=\"plain\">, accelerometerCallback);</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t}</code></div>\n<div class=\"line\"><code class=\"plain\">\t});</code></div>\n<div class=\"line\"><code class=\"plain\">\tTi.Android.currentActivity.addEventListener(</code><code class=\"string\">&apos;resume&apos;</code><code class=\"plain\">, function(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t</code><code class=\"keyword\">if</code><code class=\"plain\">(accelerometerAdded) {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\tTi.API.info(</code><code class=\"string\">&quot;adding accelerometer callback on resume&quot;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\tTi.Accelerometer.addEventListener(</code><code class=\"string\">&apos;update&apos;</code><code class=\"plain\">, accelerometerCallback);</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t}</code></div>\n<div class=\"line\"><code class=\"plain\">\t});</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-29004933_SupportingGestures-Summary\">\n        <h2 class=\"heading \"><span>Summary</span></h2>\n    <p>In this section, you learned how to add support for shakes, swipes, touches, pinches, and long presses. You even explored how you can use the accelerometer as a means of user input. Finally, you handled global events within the app&apos;s lifecycle to manage battery drain.    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=29004933\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Supporting Gestures"});