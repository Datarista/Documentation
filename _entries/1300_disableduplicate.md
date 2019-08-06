---
sectionclass: h2
sectionid: disableduplicate
parent-id: documentation
number: 1300
title: Disable Duplicate Detection
---

>Salesforce provides standard duplicate rules for business and person accounts, contacts, and leads. A duplicate rule defines what happens when a user views a record with duplicates or starts creating a duplicate record. The default Salesforce duplicate rules may be too strict, and may interfere with prospecting similar records.    

>Installations have a configuration option where new records can be created (1) always using the credentials of the user who installed the package, regardless of which user is adding the new records or (2) using the credentials of the Salesforce user who is adding the new records.  Please ask your sales rep how your installation is configured.  

>If the order is configured to use the credentials of the user who is doing the installation, duplicate detection should be disabled for the installation user.  
>If the order is configured to use the credentials of the user who is adding the new records, duplicate detection should be disabled for all users who have access to add new records through the package.  
>Alternatively, duplicate detection could be disabled for all users in the Salesforce org.  

>**Click Setup**  
Type "Duplicate Rules" into quick find / search box.  
**Click Duplicate Rules** which is located under "Duplicate Management"  

>**Disable for select users**  
For each duplicate rule, click the rule name and select **Edit**  
![Duplicate Rules]({{ site.baseurl }}/img/1300/all_rules.png)  
Under conditions, add a condition with "Current User: Username", "not equal to".  
If your installation uses the credentials of the user who installed the package, enter the Salesforce username (login) of the user that installed the package.    
If your installation uses the credentials of the user who is adding new records, enter the Salesforce username (login) of a user who has access to the package.  Create a new condition for each user who has access to the package.  
Repeat for all applicable rules
![Conditions]({{ site.baseurl }}/img/1300/conditions.png)  


>**Disable for all users**  
For each duplicate rule, click the rule name and select **Edit**  
**Click Deactivate** this will disable the rule  
**Click Back to List: Duplicate Rules** and repeat for "Contact" and "Lead" rules.  
![Deactivate]({{ site.baseurl }}/img/1300/deactivate.png)  
