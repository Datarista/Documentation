---
sectionclass: h2
sectionid: marketo_lead_source
parent-id: marketo_documentation
number: 2900
title: Set up Lead Source with a Triggered Campaign (Optional)
---
>This configuration is **optional**.  Please talk to your data provider to see if this feature is available for your integration.  
{:.warning}

>Assigning a custom lead source value to records created by the Marketo integration is a recommended best practice.  A few of the benefits are:  

●  Administrators are able to identify records added by the prospecting feature    
●  Smart lists filtered by lead source and other attributes    


>Before beginning, you will need to:  

●  Obtain administrator access to the Marketo instance. The Marketo instance should support Custom Object triggers. See [Marketo Documentation](https://docs.marketo.com/display/public/DOCS/Trigger+Off+Custom+Object+Changes)    
●  Decide on a custom source name.  It is recommended to use the integration name. This will be referred to as **Custom Source Value** in the Triggered Campaign instructions.    
●  Identify the name for the custom contact object associated with the lead. These will be referred to as **Custom Contact** in the Triggered Campaign instructions.    


>Description:  

The custom object will have a field for __Source__.  When the record is created using Prospecting, the value of Source will be __Y__.  For records that previously existed or were created by any other process, the Source value will be blank.  Using the criteria __Source = Y__, we can determine that the source of the record is the integration.
