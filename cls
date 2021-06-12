[1mdiff --git a/Home.html b/Home.html[m
[1mindex 4f26518..d1fab10 100644[m
[1m--- a/Home.html[m
[1m+++ b/Home.html[m
[36m@@ -18,7 +18,10 @@[m
 </head>[m
 [m
 <body>[m
[32m+[m[41m  [m
   <!-- navbar starts -->[m
[32m+[m[41m  [m
[32m+[m[41m  [m
   <header>[m
     <div class="navbar">[m
       <a href="#" class="icon">[m
[36m@@ -31,6 +34,14 @@[m
       <h1>NATIONAL VOTERS' SERVICES &nbsp;<br>[m
         DEMO PORTAL[m
       </h1>[m
[32m+[m[32m      <div>[m
[32m+[m[32m        <input type="checkbox" class="checkbox" id="chk" />[m
[32m+[m[32m        <label class="label" for="chk">[m
[32m+[m[32m          <i class="fas fa-moon"></i>[m
[32m+[m[32m          <i class="fas fa-sun"></i>[m
[32m+[m[32m          <div class="ball"></div>[m
[32m+[m[32m        </label>[m
[32m+[m[32m      </div>[m
 [m
       <a href="#" class="endlogo">[m
         <img src="./Images/vote.png">[m
[36m@@ -47,6 +58,7 @@[m
   <div class="fontsetting">[m
     <button type="button" class="btn btn-primary">A+</button>[m
     <button type="button" class="btn btn-primary">A-</button>[m
[32m+[m[41m    [m
     <span class="lang">Select Language :<select class="btn btn-secondary btn-sm dropdown-toggle" id="lang-switch">[m
 		<option value="en">English</option>[m
 		<option value="hindi">Hindi</option>[m
[36m@@ -611,6 +623,17 @@[m
 [m
   <!-- footer ends -->[m
 	 <script>[m
[32m+[m[32m    const chk = document.getElementById('chk');[m
[32m+[m
[32m+[m[32mchk.addEventListener('change', () => {[m
[32m+[m	[32mdocument.body.classList.toggle('dark');[m
[32m+[m[32m});[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
 	$('#lang-switch').change(function () { // put onchange event when user select option from select[m
 		var lang = $(this).val(); // decide which language to display using if else.[m
 		if(lang=='en'){[m
[1mdiff --git a/Style.css b/Style.css[m
[1mindex b1a811c..2e5f5f6 100644[m
[1m--- a/Style.css[m
[1m+++ b/Style.css[m
[36m@@ -1,3 +1,77 @@[m
[32m+[m[32m@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');[m
[32m+[m
[32m+[m[32m* {[m
[32m+[m	[32mbox-sizing: border-box;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mbody {[m
[32m+[m	[32mbackground-color: #fafafa;[m
[32m+[m	[32mmargin: 0;[m
[32m+[m	[32mtransition: background 0.2s linear;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mbody.dark {[m
[32m+[m	[32mbackground: #292C35;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.checkbox {[m
[32m+[m	[32mopacity: 0;[m
[32m+[m	[32mposition: absolute;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.label {[m
[32m+[m	[32mbackground-color: #111;[m
[32m+[m	[32mborder-radius: 50px;[m
[32m+[m	[32mcursor: pointer;[m
[32m+[m	[32mdisplay: flex;[m
[32m+[m	[32malign-items: center;[m
[32m+[m	[32mjustify-content: space-between;[m
[32m+[m	[32mpadding: 5px;[m
[32m+[m	[32mposition: relative;[m
[32m+[m[32m  top:50%;[m
[32m+[m[32m  left:50%;[m
[32m+[m	[32mheight: 26px;[m
[32m+[m	[32mwidth: 50px;[m
[32m+[m	[32mtransform: scale(1.5);[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.label .ball {[m
[32m+[m	[32mbackground-color: #fff;[m
[32m+[m	[32mborder-radius: 50%;[m
[32m+[m	[32mposition: absolute;[m
[32m+[m	[32mtop: 2px;[m
[32m+[m	[32mleft: 2px;[m
[32m+[m	[32mheight: 22px;[m
[32m+[m	[32mwidth: 22px;[m
[32m+[m[41m  [m
[32m+[m	[32mtransform: translateX(0px);[m
[32m+[m	[32mtransition: transform 0.2s linear;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.checkbox:checked + .label .ball {[m
[32m+[m	[32mtransform: translateX(24px);[m
[32m+[m[32m}[m
[32m+[m
[32m+[m
[32m+[m[32m.fa-moon {[m
[32m+[m	[32mcolor: white;[m
[32m+[m[41m  [m
[32m+[m[41m  [m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.fa-sun {[m
[32m+[m	[32mcolor: #f39c12;[m
[32m+[m[41m  [m
[32m+[m
[32m+[m[32m}[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
 [m
 .loader_bg{[m
   position: fixed;[m
[1mdiff --git a/home_hindi.html b/home_hindi.html[m
[1mindex 256d05e..10a9ec0 100644[m
[1m--- a/home_hindi.html[m
[1m+++ b/home_hindi.html[m
[36m@@ -31,7 +31,14 @@[m
       <h1>NATIONAL VOTERS' SERVICES &nbsp;<br>[m
         DEMO PORTAL[m
       </h1>[m
[31m-[m
[32m+[m[32m      <div>[m
[32m+[m[32m        <input type="checkbox" class="checkbox" id="chk" />[m
[32m+[m[32m        <label class="label" for="chk">[m
[32m+[m[32m          <i class="fas fa-moon"></i>[m
[32m+[m[32m          <i class="fas fa-sun"></i>[m
[32m+[m[32m          <div class="ball"></div>[m
[32m+[m[32m        </label>[m
[32m+[m[32m      </div>[m
       <a href="#" class="endlogo">[m
         <img src="./Images/vote.png">[m
         </img>[m
[36m@@ -582,6 +589,12 @@[m
 [m
   <!-- footer ends -->[m
 	 <script>[m
[32m+[m[32m    const chk = document.getElementById('chk');[m
[32m+[m
[32m+[m[32m    chk.addEventListener('change', () => {[m
[32m+[m[32m      document.body.classList.toggle('dark');[m
[32m+[m[32m    });[m
[32m+[m[41m    [m
 	$('#lang-switch').change(function () { // put onchange event when user select option from select[m
 		var lang = $(this).val(); // decide which language to display using if else.[m
 		if(lang=='en'){[m
