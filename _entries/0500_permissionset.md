---
sectionclass: h2
sectionid: permissionset
parent-id: documentation
number: 500
title: Create a Permission Set
---
>**Type** "permission sets" into the quick find / search box. **Click** on the **Manage Users** -> **Permission Sets** link.  
>**Classic:**  
![Permission Set Quick Find]({{ site.baseurl }}/img/500/permission_sets.png)  
**Lightning:**  
![Permission Set Quick Find]({{ site.baseurl }}/img/500/1.41permissionset.jpg)  

>**Click** the **New** button.

![New Permission]({{ site.baseurl }}/img/500/new_permission_set.png)

>**Type** a name for the permission set in the **Label** field.  Salesforce will automatically populate the **API Name** field.  
**Click** the **Save** button.

![Save Button]({{ site.baseurl }}/img/500/create_new_perm.png)

>**Click** the **Object Settings** link.

![Object Settings]({{ site.baseurl }}/img/500/object_settings.png)

>The following steps will have to be repeated for __all__ custom objects.  Please talk to your sales rep to obtain the list of custom objects.  
{:.warning}  

>Scroll through the list of **Objects** to find the custom objects.  
>Select the custom object associated with the package.  

![Object Search]({{ site.baseurl }}/img/500/custom_object.png)  

>**Click** the **Edit** button.

![Permission Edit Button]({{ site.baseurl }}/img/500/edit_custom_object_perm.png)

>Check **all** checkboxes. Then **Click** the **Save** button.

![Click Checkboxes Save]({{ site.baseurl }}/img/500/check_all.png)

>For custom objects with many fields, this step is tedious. For more advanced users, copy and paste the following Javascript into your browsers developer's console.  This javascript code will only work in Salesforce Classic.  If you are using lightning, please switch to Classic mode to execute.
{:.warning}
```javascript
var allInputs = document.getElementsByTagName("input");  
for(var i =0, max = allInputs.length; i < max; i++) {  
  if(allInputs[i].type ==='checkbox') allInputs[i].checked = true;  
}
```  

>Repeat the above steps for all other custom objects associated with the package that is being installed.  
>Other custom objects may include custom contact or lead objects.
