// up:

a=document.getElementsByClassName("freelancer-tile");
for(var i=0; i<a.length; i++){
    n=a[i].getElementsByClassName("profile-link");
    l=a[i].getElementsByClassName("location");
    j=a[i].querySelector('span[data-v-1a549d04]');
    js=""; if (j) js=j.textContent.replace("Job Success","").trim();
    console.log(n[0].href,"\t",n[0].innerHTML.trim(),"\t",n[1].innerHTML.trim(),"\t",l[0].innerHTML.trim(),"\t",a[i].querySelector('span[data-test="rate-per-hour"]').innerHTML.trim(),"\t",a[i].querySelector('[data-test="UpCPopover FreelancerTileEarnings"] strong').textContent.trim(),"\t",js);
}

a=document.getElementsByClassName("freelancer-info")
for(var i=0; i<a.length; i++){
    n=a[i].getElementsByClassName("profile-link")
    console.log(n[0].href,"&",n[0].innerHTML.trim(),"&",n[1].innerHTML.trim())
} 

// fre

a=document.getElementsByClassName("UserAvatar-img");for(var i=0; i<a.length; i++){console.log(a[i].title);}

a=document.getElementsByClassName("Username");for(var i=0; i<a.length; i++){console.log(a[i].innerText);}

// link

a=document.getElementsByClassName("entity-result__title-line");for(var i=0; i<a.length; i++){n=a[i].getElementsByClassName("ITnlIYRaRoJycfooUBNruLtOOXZuqVGU");if(n&&n.length)console.log(n[0].href.split('?')[0]);}

a=document.getElementsByClassName("pzgGKmxCDfyyRtMvjxamuModCAllwTVTA");for(var i=0; i<a.length; i++){n=a[i].getElementsByClassName("jBoWjCkDnQAudKFlfzuYKZdcceDKXE");if(n&&n.length)console.log(n[0].href.split('?')[0]);}

a=document.getElementsByClassName("vjvKoXFFJtfnpBNnkgFTzWnDmsSASvTcGEESnk");for(var i=0; i<a.length; i++){n=a[i].getElementsByClassName("uBRuLksiXRXJNxzCdmDLlNvbeHoNnTVInTsbWCI");if(n&&n.length)console.log(n[0].href.split('?')[0]);}
