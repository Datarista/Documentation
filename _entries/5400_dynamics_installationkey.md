---
sectionclass: h2
sectionid: dynamics_installationkey
parent-id: dynamics_documentation
number: 5400
title: Authenticate Installation Key
---
>The Dynamics user that enters the install key and authenticates is the one used for Dynamics API access.  
As a result, all records created or modified by the integration will be **created or modified by the user who authenticates the installation key**.   
{:.alert}

> Go to **Dynamics > Settings**. Navigate to **Solutions**.  Click the Solution associated with your integration.    
> Navigate to **Web Resources**    
> Select the **install.html** resource:     

![Web Resource List]({{ site.baseurl }}/img/5400/dynamics_web_resource_list.png)

> Copy and Paste the Web Resource URL:

![Web Resource Install]({{ site.baseurl }}/img/5400/dynamics_web_resource_install.png)

> Open a new browser window or tab, and paste in the URL:

![Install Form]({{ site.baseurl }}/img/5400/dynamics_install_form.png)

> **Copy and paste the Install Key** from installation email and click **Install**.

> You should receive an "Authentication Successful" message. If not, check your install key.

![Auth Success]({{ site.baseurl}}/img/5400/dynamics_auth_successful.png)

>Close the Authentication successful tab, return Dynamics.
