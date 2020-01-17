---
sectionclass: h2
sectionid: dynamics_customization
parent-id: dynamics_documentation
number: 5400
title: Configure Forms and Views 
---

> Go to **Dynamics > Settings**. Navigate to **Customizations**. Click **Customize the System**.   

![Customization]({{ site.baseurl }}/img/5500/dynamics_customization.png)

> Navigate to the **Account** entity.    
> Click on the **small arrow to the left of Entities** to expand the list.    
> Click on the **small arrow to the left of Account** to expand the list.    

![Account]({{ site.baseurl }}/img/5500/dynamics_account.png)

> Click on **Forms** to expand the form list.    
> Click on the form named **Account**.
> **Note that the instance may have been customized to use a different forms, so check that this is the desired form.**

![Account Form]({{ site.baseurl }}/img/5500/dynamics_account_form.png)

> The form window will open. Click the **Insert** tab, then the **Sub-Grid** button.

![Subgrid Form]({{ site.baseurl }}/img/5500/dynamics_subgrid.png)

> Fill in the form, associating the related entity (custom object) with the account.    
> For **Name**, enter **"NNN_Account"** where NNN can be some abbreviation representing the data provider.    
> For **Label**, enter **"Data Provider Account"** where "Data Provider" is the name of the provider.   
> For **Entity**, select the **associated account entity** (custom entity.)   

![Subgrid Properties]({{ site.baseurl }}/img/5500/dynamics_subgrid_properties.png){:height="50%" width="50%"}

> Click **OK**. Drag the section towards the top right of the form (or other desired location.)

![Account Form]({{ site.baseurl }}/img/5500/dynamics_account_form2.png)


> Click the **Insert** tab, then the **Web Resource** button.   

![Add Web Resource]({{ site.baseurl }}/img/5500/dynamics_web_resource.png)

> Click the **window / magnifying glass icon** next to the web resource URL.    
> Scroll to the bottom and click **Look Up More Records**.

![Web Resource Lookup]({{ site.baseurl }}/img/5500/dynamics_web_resource_lookup.png){:height="50%" width="50%"}

> Enter **\*get_match\*** (include asterisks) in the *Search* input to locate the "get_match.html" resource.

![Web Resource Search]({{ site.baseurl }}/img/5500/dynamics_web_resource_search.png){:height="50%" width="50%"}

> For **Name** and **Label** enter "get_match". Note that this label will not be shown to the user.
> Check **Pass record object-type and unique identifier as parameters**.

![Web Resource Name]({{ site.baseurl }}/img/5500/dynamics_web_resource_general.png){:height="50%" width="50%"}

> Click the **Formatting** tab at the top.
> Set **Number of Rows** to **1**

![Web Resource Format]({{ site.baseurl }}/img/5500/dynamics_web_resource_format.png){:height="50%" width="50%"}

> **Scroll down**. **Uncheck "Display border"**

![Web Resource Format]({{ site.baseurl }}/img/5500/dynamics_web_resource_format2.png){:height="50%" width="50%"}

> Click **OK**

> Drag the web resource to a place below the custom entity section above.    



> Repeat the above steps for "Contact".


> Repeat the above steps for "Lead".
> Note that Leads will require that two seconds, one for account-level, and one for contact-level, be dragged into the form.
