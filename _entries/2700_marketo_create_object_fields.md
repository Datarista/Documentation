---
sectionclass: h2
sectionid: marketo_create_object_fields
parent-id: marketo_documentation
number: 2700
title: Create Marketo Custom Fields
---


>Using the Customer Portal's **Instance Fields** validation tool as a reference, you will now create the fields on the custom objects in Marketo.  Marketo has a limit of 47 custom fields per object.
In the Customer Portal, click on a custom object name to expand the list of fields.  


>The **status** will show with errors until the fields are created and the object is approved.  
{:.warning}
>Do not approve the object until you are finished creating the fields.    
{:.warning}
![test image]({{ site.baseurl }}/img/2700/instance_fields_fields.jpg)


>Marketo will automatically create fields for **Created At**, **Marketo GUID**, and **Updated At**

![test image]({{ site.baseurl }}/img/2700/marketo_automatic_fields.jpg)

>In Marketo, Click on **Marketo Custom Objects** in the sidebar Admin menu, and then Click **Fields** at the top  
Click **New Field**   

![test image]({{ site.baseurl }}/img/2700/click_fields.jpg)


>Create the **leadId** field that will link the custom object to the **Person** object.  The Person object was formerly called the Lead object.  This step needs to be repeated for each custom object created.  

>API Name is **case sensitive**  
>Be sure to use **Data Type: link** and **Dedupe Field: Yes**  
{:.warning}

![test image]({{ site.baseurl }}/img/2700/leadId_field.png)

>Create the rest of the fields using the Customer Portal's Instance Fields tool as a guide for API names and Types.

>API Name is **case sensitive**  
>Do not mark any fields other than **leadId** as a dedupe field.    
{:.warning}

![test image]({{ site.baseurl }}/img/2700/new_field.jpg)

>After creating all the fields, you must approve the object.
On the **Marketo Custom Objects** tab, in the **Custom Object Actions** menu, click **Approve Object**  
Click the **Approve** button to confirm

![test image]({{ site.baseurl }}/img/2700/approve_object.jpg)

>Repeat steps for each custom object
{:.warning}
