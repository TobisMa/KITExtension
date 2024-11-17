let before_a = document.querySelector("html body div.il-layout-page header div.header-inner ul.il-maincontrols-metabar li div.il-metabar-slates div.il-maincontrols-slate div.il-maincontrols-slate-content ul li:nth-child(2)");
let email_li = document.createElement("LI");
let email_a = document.createElement("a");
email_a.classList.add("il-link", "link-bulky");
email_a.href = "https://ilias.studium.kit.edu/ilias.php?baseClass=ilMailGUI";
email_a.innerHTML = "<img src=\"./Customizing/global/skin/kit/images/icon_mail.svg\" alt=\"E-Mail-Logo\" class=\"icon custom small\" /><span class=\"bulky-label\">E-Mail</span>";
email_li.appendChild(email_a);
document.querySelector("html body div.il-layout-page header div.header-inner ul.il-maincontrols-metabar li div.il-metabar-slates div.il-maincontrols-slate div.il-maincontrols-slate-content ul").insertBefore(email_li, before_a);
