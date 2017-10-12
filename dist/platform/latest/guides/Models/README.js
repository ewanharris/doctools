Ext.data.JsonP['Models']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Models</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-49153275\" class=\"content\">\n                        <h1>Models</h1>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Models-section-src-49153275_Models-Introduction\">Introduction</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Models-section-src-49153275_Models-Createanewmodel\">Create a new model</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Models-section-src-49153275_Models-Editamodel\">Edit a model</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Models-section-src-49153275_Models-Composinganewmodel\">Composing a new model</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"src-49153275_Models-Introduction\">\n        <h2 class=\"heading \"><span>Introduction</span></h2>\n    <p>This guide covers the basics for creating Models. Models are a way of accessing data stored in either server memory or a backend service, such as <a class=\"document-link \" href=\"#!/guide/Mobile_Backend_Services\">Mobile Backend Services</a> or a MySQL database, using a Connector. Models are accessed like standard REST objects using predefined endpoints that API Builder automatically generates. You can either create a model by defining your own schema, use an existing model defined by a connector, modify an existing model, or create a composite model by joining two or more models together.    </p>\n    <p>To programmatically create Models, see the <a class=\"external-link external-link\" href=\"#!/api/Arrow.Model\">API Builder.Model API reference</a>.    </p>\n    <p>In the     <img src=\"images/download/thumbnails/49153275/button-models.png\" alt=\"images/download/thumbnails/49153275/button-models.png\" class=\"confluence-embedded-image confluence-thumbnail\" width=\"25\">\n Models tab, you will see a list of models (by name), connector names, descriptions, and any joins to other models. This page allows you to also create new models, edit an existing model, and compose the model into a new model.    </img></p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-49153275_Models-Createanewmodel\">\n        <h2 class=\"heading \"><span>Create a new model</span></h2>\n    <p>Models can be created by many different ways but with the GUI, you don&apos;t necessarily need to get your hands dirty with writing out code.    </p>\n    <p>To create a new model using the GUI:    </p>\n<ol class=\" \"><li class=\" \">    <p>Click the <strong class=\" \">+ Model</strong> button.    </p>\n</li><li class=\" \">    <p>In the model window.    </p>\n    <img src=\"images/download/attachments/49153275/new_model.png\" alt=\"images/download/attachments/49153275/new_model.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"500\" height=\"245\">\n        <p>    </p>\n<ol class=\" \"><li class=\" \">    <p>Enter the <strong class=\" \">Model name</strong> (required).    </p>\n</li><li class=\" \">    <p>Select a <strong class=\" \">Connector</strong> (required).    </p>\n</li><li class=\" \">    <p>Enter a <strong class=\" \">description</strong> for the new model. While this is an optional field, we encourage you to provide a clear and concise description of what the model does.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Next</strong> to start the process of creating a new model.    </p>\n</li></ol></img></li><li class=\" \">    <p>In the New Model page, you will see the name of the model you just created with an option to edit that name and the Connector you selected for it to use.    </p>\n</li><li class=\" \">    <p>To add a new field, click the <strong class=\" \">+ Field</strong> button. In the modal window,    </p>\n<ol class=\" \"><li class=\" \">    <p>Enter the <strong class=\" \">Field</strong> name (required).    </p>\n</li><li class=\" \">    <p>Select the <strong class=\" \">Type</strong> for this new field.    </p>\n</li><li class=\" \">    <p>Enter a <strong class=\" \">Default</strong><strong class=\" \">value</strong> (optional).    </p>\n</li><li class=\" \">    <p>Enter a <strong class=\" \">Description</strong>.    </p>\n</li><li class=\" \">    <p>Check off the <strong class=\" \">Read-only</strong> and/or the <strong class=\" \">Required</strong> boxes.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Add field to model</strong> to complete the addition of this new field.    </p>\n</li></ol></li><li class=\" \">    <p>Repeat step 4 as needed to add as many fields as necessary.    </p>\n</li><li class=\" \">    <p>At this point, you can edit any field you created by clicking the <strong class=\" \">pencil icon</strong> at the end of the field row.    </p>\n</li><li class=\" \">    <p>If the field isn&apos;t needed, you can remove it by clicking on the <strong class=\" \">trashcan</strong><strong class=\" \">icon</strong> at the end of the field row. <strong class=\" \">Note</strong>: There is no warning for deleting a field. Once you delete the field, you will not be prompted for a confirmation of the action.    </p>\n</li><li class=\" \">    <p>Click the <strong class=\" \">Next &gt;</strong> button.    </p>\n</li><li class=\" \">    <p>Optional: on the endpoint generation page, select the methods that will be automatically generated for the API endpoints. When you click <strong class=\" \">Next</strong>, you are brought to the API generation page where you can optionally generate an API definition for your new model, and choose the method(s) that you wish to generate. To generate API endpoints:    </p>\n<ol class=\" \"><li class=\" \">    <p>Select the methods that will be automatically generated for the API endpoints.    </p>\n</li><li class=\" \">    <p>You can change the singular and plural values for this new model. These values are used in the API documentation (e.g. &quot;Create a user&quot;, or &quot;Count users&quot;), but these values are also used in the body of the API responses.    </p>\n</li><li class=\" \">    <p>If you are satisfied with you new field(s), click the <strong class=\" \">Save</strong> button.    </p>\n</li></ol></li><li class=\" \">    <p>Also on this page, you can change the singular and plural values for this new model.    </p>\n</li><li class=\" \">    <p>If you are satisfied with you new field(s), click the <strong class=\" \">Save</strong> button.    </p>\n    <img src=\"images/download/attachments/49153275/model_page.png\" alt=\"images/download/attachments/49153275/model_page.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"500\" height=\"185\">\n    </img></li></ol>    </div>\n    <div class=\"section section-2 \" id=\"src-49153275_Models-Editamodel\">\n        <h2 class=\"heading \"><span>Edit a model</span></h2>\n    <p>To edit an existing model using the GUI:    </p>\n<ol class=\" \"><li class=\" \">    <p>Navigate to the <strong class=\" \">Models</strong> tab.    </p>\n</li><li class=\" \">    <p>Locate the model you wish to edit and click the     <img src=\"images/download/attachments/49153275/cog_icon.png\" alt=\"images/download/attachments/49153275/cog_icon.png\" class=\"confluence-embedded-image\">\n <strong class=\" \">cog icon</strong> at the end of the row.    </img></p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Edit</strong> to edit this model. A dialogue window will open up and allow you to make changes to your selected model.    </p>\n    <img src=\"images/download/attachments/49153275/edit-compose_model.png\" alt=\"images/download/attachments/49153275/edit-compose_model.png\" class=\"confluence-embedded-image\">\n    </img></li><li class=\" \">    <p>You can edit the model name by clicking the     <img src=\"images/download/attachments/49153275/pencil_icon.png\" alt=\"images/download/attachments/49153275/pencil_icon.png\" class=\"confluence-embedded-image\">\n <strong class=\" \">pencil icon</strong> next to the model name.    </img></p>\n</li><li class=\" \">    <p>Locate the field you wish to edit and click the <strong class=\" \">pencil icon</strong> at the end of it&apos;s row.    </p>\n</li><li class=\" \">    <p>Modify the <strong class=\" \">Field</strong> name, <strong class=\" \">Type</strong>, <strong class=\" \">Default</strong> value, and/or <strong class=\" \">Description</strong> fields as necessary. You can also toggle the Read-only and Required check boxes.    </p>\n</li><li class=\" \">    <p>Once you are done modifying this field, click the Update field button.    </p>\n</li><li class=\" \">    <p>Repeat steps 6-7 as necessary.    </p>\n</li><li class=\" \">    <p>Click the <strong class=\" \">Next</strong> button.    </p>\n</li><li class=\" \">    <p>Modify any of the <strong class=\" \">API endpoints</strong> and/or the <strong class=\" \">Singular</strong> and <strong class=\" \">Plural</strong> fields.    </p>\n</li><li class=\" \">    <p>Click the <strong class=\" \">Save</strong> button if you are satisfied with your changes.    </p>\n</li></ol>    </div>\n    <div class=\"section section-2 \" id=\"src-49153275_Models-Composinganewmodel\">\n        <h2 class=\"heading \"><span>Composing a new model</span></h2>\n    <p>To compose a new model using the GUI:    </p>\n<ol class=\" \"/><ol class=\" \"/>    <p>Click on the    </p>\n    <p><strong class=\" \"> Cog</strong>    <img src=\"images/download/attachments/49153275/cog_icon.png\" alt=\"images/download/attachments/49153275/cog_icon.png\" class=\"confluence-embedded-image\">\n    </img></p>\n<ol class=\" \"/>    <p>icon at the end of the row for the model you wish to compose and select Compose into new.    </p>\n<ul class=\" \"><li class=\" \">    <p>Enter in the (required) and a description.    </p>\n</li><li class=\" \">    <p>In the Composite Model page, you can edit the name of the composite and modify the fields (as needed). If you want to rename the composite, click the pencil icon and fill in the fields of the Composite Model modal window as necessary. Click Update when you have finished.    </p>\n    <img src=\"images/download/attachments/49153275/compose_model.png\" alt=\"images/download/attachments/49153275/compose_model.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"500\" height=\"293\">\n    </img></li><li class=\" \">    <p>If you wish to modify the fields of this new composite, click the <strong class=\" \">Pencil</strong>     <img src=\"images/download/attachments/49153275/pencil_icon.png\" alt=\"images/download/attachments/49153275/pencil_icon.png\" class=\"confluence-embedded-image\">\n icon at the end of the row for the field in question.    </img></p>\n</li><li class=\" \">    <p>Fill in the various fields and check the Read-only or Required check boxes as necessary. Click Update Field once you have finished.    </p>\n</li><li class=\" \">    <p>When you are done making any modifications, click the Next button.    </p>\n</li><li class=\" \">    <p>Enable or disable any auto-generated API endpoints as you see fit.    </p>\n</li><li class=\" \">    <p>Modify the Singular and Plural fields as necessary.    </p>\n</li><li class=\" \">    <p>Click Save to commit your new composite model.    </p>\n</li></ul>    <p>    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=49153275\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Models"});