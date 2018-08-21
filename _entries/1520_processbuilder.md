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
  ・    Object: Choose **Custom_Account, Custom_Contact,** or **Custom_Contact_Lead** object depending on which process is being built (ex, *ABC_Account, ABC_Contact, ABC_Contact_Lead*)  
  ・    Start the process **only when a record is created**    
  ・    Click **Save**  

![Process_Builder_AddObject]({{ site.baseurl }}/img/1500/Process_Builder_AddObject.png)


>Click **Add Criteria**   
  ・    Criteria Name: **Custom Object Source = Y** (This name is not important)  
  ・    Criteria for Executing Actions: **Conditions are met**  
  ・    Set Conditions: Choose the Source field.  
      ・    Field = Source   
      ・    Operator = Equals  
      ・    Type = String  
      ・    Value = Y  
  ・    Conditions **All of the conditions are met (AND)**  
  ・    **Save**  

![Process_Builder_AddCriteria]({{ site.baseurl }}/img/1500/Process_Builder_AddCriteria.png)


>Click **Add Action**  
  ・    Action Type: **Update Records**  
  ・    Action Name: **Update Source**  
  ・    Record Type: **Select a record related to the (custom object)**  
  ・    Choose **Account | Contact | Lead** depending on process being built. Do not choose **Account > | Contact > | Lead >**  
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
