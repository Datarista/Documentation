---
sectionclass: h2
sectionid: configurelayout
parent-id: documentation
number: 1000
title: Configure Page Layouts
---
>You will need to configure a layout for each Object that is being added / modified to the Salesforce instance. This likely includes an Account and Contact object. Perform the following steps for each Salesforce Page that requires updating.
{:.warning}

>Classic:  
**Type** "page layouts" into the quick find / search box. **Click** on the **Accounts** -> **Page layouts** link.  
![Page Layouts Quick Find]({{ site.baseurl }}/img/1000/page_layouts_accounts.png)  
**Click** the **Edit** link next to **Account Layout** (other layouts may be in use, depending on Salesforce configuration)
![Click Edit Link]({{ site.baseurl }}/img/1000/click_edit_account_layout.png)

>Lightning:  
**Type** "object manager" into the quick find / search box.  
![Object Manager Quick Find]({{ site.baseurl }}/img/1000/1.10object_manager.jpg)  
**Click** on the **Account** -> link.  
![Page Layouts]({{ site.baseurl }}/img/1000/1.101account.jpg)  
**Click** Page Layouts in the menu.  **Click** Account Layout link.  
![Page Layouts]({{ site.baseurl }}/img/1000/1.101page_layout.jpg)  

>On the top left selection list **Click Visualforce Pages**
![Click Visualforce Pages]({{ site.baseurl }}/img/1000/click_visualforce_pages.png)

>Create a new section: Drag "Section" from the top to the layout below, place it below "Custom Links"
![Drag Section Below Custom Links]({{ site.baseurl }}/img/1000/click_drag_section.png)

>Enter a **Name** for the section  
**Select 1-Column**  
**Click** the **OK** button.
![Select 1-Column Click OK]({{ site.baseurl }}/img/1000/name_section.png)

>**Click** and **Drag AccountMatch** into the newly created section.
![Drag AccountMatch]({{ site.baseurl }}/img/1000/click_drag_accountmatch.png)

>Move the mouse to the top right of the "AccountMatch" page area. A wrench icon (properties) should appear. **Click** the wrench.  
![Click the Wrench]({{ site.baseurl }}/img/1000/account_match_properties.png)

>Change the **Height** to at least **400**  
**Check** Show Scrollbars (optional)  
**Click** the **OK** button.
![Change Height]({{ site.baseurl }}/img/1000/schools_section_properties.png)

>**Click** the **Save** button located at the top of the control widget.
![Click Save Button]({{ site.baseurl }}/img/1000/save_account_layout.png)

>Repeat the previous steps for other Salesforce Objects that are being modified, most likely Contact
{:.warning}
