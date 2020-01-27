---
sectionclass: h2
sectionid: setleadsource
parent-id: documentation
number: 1500
title: Set up Lead Source with Process Builder (Optional)
---
>This configuration is **optional** and availability will depend on the version of your Salesforce package.  Please talk to your data provider to see if this feature is available.  
{:.tip}

>Assigning a custom lead/account source value to records created by the Salesforce package is a recommended best practice.  A few of the benefits are:  

●  Administrators are able to identify records added by the prospecting feature  
●  Filtered views can be created for Accounts, Contacts, Leads


>Before beginning, you will need to:  

●  Obtain system administrator access to the Salesforce org   
●  Decide on a custom source picklist value.  It is recommended to use the package name. This will be referred to as **picklist value** in the Process Builder instructions.  
●  Identify the Salesforce package's namespace. (Setup > Installed Packages > value in the table under "Namespace Prefix").  This will be referred to as **PackageNamespace** in the Process Builder instructions.  
●  Identify the Salesforce package's names for the custom account, contact, and lead objects (Setup > Objects > list of objects for the installed package). These will be referred to as **Custom_Account, Custom_Contact,** and **Custom_Contact_Lead** objects in the Process Builder instructions.  


>Description:  

The package's custom objects will each have a field for __Source__.  When the record is created using Prospecting, the value of Source will be __Y__.  For records that previously existed or were created by any other process, the Source value will be blank.  Using the criteria __Source = Y__, we can determine that the source of the record is the Salesforce package.  
