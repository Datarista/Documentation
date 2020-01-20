---
sectionclass: h2
sectionid: dynamics_customization
parent-id: dynamics_documentation
number: 5500
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
> **Note that the instance may have been customized to use different forms, so verify this is the desired form.**

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

> Enter **\*get_match\*** (include asterisks) in the **Search** input to locate the "get_match.html" resource.

![Web Resource Search]({{ site.baseurl }}/img/5500/dynamics_web_resource_search.png){:height="50%" width="50%"}

> For **Name** and **Label** enter "get_match". Note that this label will not be shown to the user.    
> Check **Pass record object-type and unique identifier as parameters**.

![Web Resource Name]({{ site.baseurl }}/img/5500/dynamics_web_resource_general.png){:height="50%" width="50%"}

> Click the **Formatting** tab at the top.
> Set **Number of Rows** to **1**

![Web Resource Format]({{ site.baseurl }}/img/5500/dynamics_web_resource_format.png){:height="50%" width="50%"}

> Scroll down. Uncheck **Display border**

![Web Resource Format]({{ site.baseurl }}/img/5500/dynamics_web_resource_format2.png){:height="50%" width="50%"}

> Click **OK**

> Drag the web resource to a place below the custom entity section above.    

![Account Form Web Resource]({{ site.baseurl }}/img/5500/dynamics_account_form_web_resource.png)

> Navigate to the **Custom Account** entity. It will be named **NNN_Account**, where NNN is an abbreviation for the data provider.
> Click on **Forms** to expand the form list.    
> Double click on the form with a Form Type of **Main**.

![Custom Account Form List]({{ site.baseurl }}/img/5500/dynamics_custom_account_form_list.png)

> **Drag and drop fields from the right to the left.**    
> This step may not be necessary if there is a default form provided in the solution.    
> This form determines what fields are shown to a user viewing details of the associated custom entity.    

![Custom Account Form]({{ site.baseurl }}/img/5500/dynamics_custom_account_form.png)

> Click **Save and Close** when done.

> Navigate back to the **Custom Account** entity. It will be named **NNN_Account**, where NNN is an abbreviation for the data provider.
> Click on **Views** to expand the view list.    
> Double click on the view with a name of **Active NNN_Accounts**/ type of **Default Public View**.

![Custom Account View List]({{ site.baseurl }}/img/5500/dynamics_custom_account_view_list.png)


> You can add/remove columns, change the order, etc. Fields shown here are a high level view of the object, shown on the parent Account page.
> This step may not be if there is a default view provided in the solution.
![Custom Account View]({{ site.baseurl }}/img/5500/dynamics_custom_account_view.png)

> Click **Save and Close** when done.

> Repeat the above steps for **Contact**. You will need to start by navigating to the Contact entity.

![Contact Form]({{ site.baseurl }}/img/5500/dynamics_contact_form.png)

> Repeat the above steps for **Lead**. You will need to be start by navigating to the Lead entity.
> Note that Leads will require that two subgrids, one for account-level, and one for contact-level, be dragged into the Lead form.

![Lead Form]({{ site.baseurl }}/img/5500/dynamics_lead_form.png)
