---
sectionclass: h3
sectionid: processbuilder
parent-id: setleadsource
number: 1510
title: Process Builder
---
>This step will be completed 3 times.  Once each for Accounts, Contacts, and Leads  
{:.warning}

>Setup > type "process builder" in Quick Find > click **Process Builder** (under Workflow & Approvals)  
Click **New** button  
Name the process (i.e. Set Source on *{Account|Contact|Lead}* to *{picklist value}*).   
  ・    The process starts when **A record changes**  

![Process_Builder_NewProcess]({{ site.baseurl }}/img/1500/Process_Builder_NewProcess.png)  

>Click **Add Object**  
  ・    Object: Choose Account|Contact|Lead custom object depending on which process is being built (ex, *ABC_Account, ABC_Contact, ABC_Account_Lead*)  
  ・    Start the process **only when a record is created**    
  ・    Click **Save**  

![Process_Builder_AddObject]({{ site.baseurl }}/img/1500/Process_Builder_AddObject.png)


>Click **Add Criteria**   
  ・    Criteria Name: **calculate CreatedDate difference** (This name is not important)  
  ・    Criteria for Executing Actions: **Formula evaluates to true**  
  ・    Build Formula: Choose one of the 3 formulas below depending on which process is being built.  Replace **PackageNamespace** and the **Custom Object** names.  

  *The formula calculates if the custom object was created within 1 minute of the standard object.  It is assuming that the standard object was created by the package if they are created within a minute of each other.  The time period can be customized by changing the value after **<** in the formulas below.*  

**Accounts:**  

```ROUND(MOD(([PackageNamespace__CustomAccountObject__c].CreatedDate-[PackageNamespace__CustomAccountObject__c].PackageNamespace__dr_int_account__c.CreatedDate)* 24 * 60, 60 ), 0 ) < 1```

**Contacts:**  

```ROUND(MOD(([PackageNamespace__CustomContactObject__c].CreatedDate-[PackageNamespace__CustomContactObject__c].PackageNamespace__dr_int_contact__c.CreatedDate) * 24 * 60, 60 ), 0 ) < 1```

**Leads:**   

```ROUND(MOD(([PackageNamespace__CustomAccountLeadObject__c].CreatedDate-[PackageNamespace__CustomAccountLeadObject__c].PackageNamespace__dr_int_lead__c.CreatedDate) * 24 * 60, 60 ), 0 ) < 1```

![Process_Builder_AddCriteria]({{ site.baseurl }}/img/1500/Process_Builder_AddCriteria.png)


>Click **Add Action**  
  ・    Action Type: **Update Records**  
  ・    Action Name: **Update Source**  
  ・    Record Type: **Select a record related to the (custom object)**  
  ・    Choose Account, Contact, or Lead depending on process being built.  (Choose **Account**.  Do not choose **Account >**)    
  ・    Click **Choose**  

![Process_Builder_SelectRecord]({{ site.baseurl }}/img/1500/Process_Builder_SelectRecord.png)  

>  ・    Criteria for updating records: **No criteria - just update the records!**  
  ・    Field: For Accounts, choose **Account Source**.  For Contacts or Leads, choose **Lead Source**  
  ・    Type: **Picklist**  
  ・    Value: choose the picklist value created  

![Process_Builder_Actions]({{ site.baseurl }}/img/1500/Process_Builder_Actions.png)

>Click **Save**  
Review your entries, and click **Activate**  
Repeat the Process Builder instructions to create processes for Accounts, Contacts, and Leads  
