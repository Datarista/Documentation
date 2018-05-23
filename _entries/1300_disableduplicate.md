---
sectionclass: h2
sectionid: disableduplicate
parent-id: documentation
number: 1300
title: Disable Duplicate Detection
---

>Salesforce provides standard duplicate rules for business and person accounts, contacts, and leads. A duplicate rule defines what happens when a user views a record with duplicates or starts creating a duplicate record. The default Salesforce duplicate rules may be too strict, and may interfere with prospecting similar records.    
  
>The user has two options: (1) disable duplicate detection for all users or (2)) disable duplicate detection for the only the user who installed the package (this is the user new fields will be added as)  
**Click Setup**  
Type "Duplicate Rules" into quick find / search box.
**Click Duplicate Rules** which is located under "Duplicate Management"  

>1) **Disable for all users**  
For each duplicate rule, click the rule name and select "Edit"  
**Click Deactivate** this will disable the rule  
**Click Back to List: Duplicate Rules** and repeat for "Contact" and "Lead" rules.  

>2) **Disable for single installation user**  
For each duplicate rule, click the rule name and select "Edit"  
Under conditions, add a condition with "Current User: Username", "not equal to", and the Salesforce username (login) of the user that installed the package.  
Repeat for all applicable rules
