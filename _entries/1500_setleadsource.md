---
sectionclass: h2
sectionid: setleadsource
parent-id: documentation
number: 1500
title: Set up Lead Source with Process Builder
---
>Assigning a custom lead/account source value to records created by the Salesforce package is a recommended best practice.  A few of the benefits are:  

●  Administrators are able to identify records added by the prospecting feature  
●  Filtered views can be created for Accounts, Contacts, Leads


>Before beginning, you will need to:  

●  Obtain System administrator access to the Salesforce org   
●  Decide on a custom source picklist value.  It is recommended to use the package name. This will be referred to as **picklist value** in the Process Builder instructions.  
●  Identify the Salesforce package's namespace. (Setup > Installed Packages > value in the table under "Namespace Prefix").  This will be referred to as **PackageNamespace** in the Process Builder instructions.  
●  Identify the Salesforce package's names for the custom account, contact, and lead objects (Setup > Objects > list of objects for the installed package). These will be referred to as **CustomAccountObject, CustomContactObject,** and **CustomAccountLeadObject** in the Process Builder instructions.  
