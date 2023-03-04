var suggestions=document.getElementById("suggestions"),search=document.getElementById("search");search!==null&&document.addEventListener("keydown",inputFocus);function inputFocus(e){e.ctrlKey&&e.key==="/"&&(e.preventDefault(),search.focus()),e.key==="Escape"&&(search.blur(),suggestions.classList.add("d-none"))}document.addEventListener("click",function(e){var t=suggestions.contains(e.target);t||suggestions.classList.add("d-none")}),document.addEventListener("keydown",suggestionFocus);function suggestionFocus(e){const s=suggestions.classList.contains("d-none");if(s)return;const t=[...suggestions.querySelectorAll("a")];if(t.length===0)return;const n=t.indexOf(document.activeElement);if(e.key==="ArrowUp"){e.preventDefault();const s=n>0?n-1:0;t[s].focus()}else if(e.key==="ArrowDown"){e.preventDefault();const s=n+1<t.length?n+1:n;t[s].focus()}}(function(){var e=new FlexSearch.Document({tokenize:"forward",cache:100,document:{id:"id",store:["href","title","description"],index:["title","description","content"]}});e.add({id:0,href:"/docs/prologue/introduction/",title:"Introduction",description:"Doks is a Hugo theme for building secure, fast, and SEO-ready documentation websites, which you can easily update and customize.",content:`Get started #There are two main ways to get started with Doks:
Tutorial #👉 The Tutorial is intended for novice to intermediate users. Step-by-step instructions on how to start a new Doks project. Tutorial →
Quick Start #👉 The Quick Start is intended for intermediate to advanced users. One page summary of how to start a new Doks project. Quick Start →
Go further #Recipes, Reference Guides, Extensions, and Showcase.
Recipes #Get instructions on how to accomplish common tasks with Doks. Recipes →
Reference Guides #Learn how to customize Doks to fully make it your own. Reference Guides →
Extensions #Get instructions on how to add even more to Doks. Extensions →
Showcase #See what others have build with Doks. Showcase →
Contributing #Find out how to contribute to Doks. Contributing →
Help #Get help on Doks. Help →
`}),e.add({id:1,href:"/docs/prologue/",title:"Prologue",description:"Prologue Doks.",content:""}),e.add({id:2,href:"/docs/prologue/quick-start/",title:"Quick Start",description:"One page summary of how to start a new Doks project.",content:`Requirements #Git — latest source release Node.js — latest LTS version or newer Why Node.js?Doks uses npm (included with Node.js) to centralize dependency management, making it easy to update resources, build tooling, plugins, and build scripts. Start a new Doks project #Create a new site, change directories, install dependencies, and start development server.
Create a new site #Doks is available as a child theme and a starter theme.
Child theme #Intended for novice to intermediate users Intended for minor customizations Easily update npm packages — including Doks git clone https://github.com/h-enk/doks-child-theme.git my-doks-site Starter theme #Intended for intermediate to advanced users Intended for major customizations Easily update npm packages git clone https://github.com/h-enk/doks.git my-doks-site Help me chooseNot sure which one is for you? Pick the child theme. Change directories #cd my-doks-site Install dependencies #npm install Start development server #npm run start Doks will start the Hugo development webserver accessible by default at http://localhost:1313. Saved changes will live reload in the browser.
Other commands #Doks comes with commands for common tasks. Commands →
`}),e.add({id:3,href:"/docs/prologue/commands/",title:"Commands",description:"Doks comes with commands for common tasks.",content:`💡 You can change the commands in the scripts section of \`./package.json\`. create #Create new content for your site:
npm run create [path] [flags] See also the Hugo docs: hugo new.
Docs based tree #Create a docs based tree — with a single command:
npm run create -- --kind docs [section] For example, create a docs based tree named guides:
npm run create -- --kind docs guides lint #Check scripts, styles, and markdown for errors:
npm run lint scripts #Check scripts for errors:
npm run lint:scripts [-- --fix] styles #Check styles for errors:
npm run lint:styles [-- --fix] markdown #Check markdown for errors:
npm run lint:markdown [-- --fix] clean #Delete temporary directories:
npm run clean start #Start local development server:
npm run start build #Build production website:
npm run build functions #Build Lambda functions:
npm run build:functions preview #Build production website including draft and future content:
npm run build:preview `}),e.add({id:4,href:"/docs/help/",title:"Help",description:"Help Doks.",content:""}),e.add({id:5,href:"/docs/help/how-to-update/",title:"How to Update",description:"Regularly update the installed npm packages to keep your Doks website stable, usable, and secure.",content:`💡 Learn more about semantic versioning and advanced range syntax. Check for outdated packages #The npm outdated command will check the registry to see if any (or, specific) installed packages are currently outdated:
npm outdated [[\u0026lt;@scope\u0026gt;/]\u0026lt;pkg\u0026gt; ...] Update packages #The npm update command will update all the packages listed to the latest version (specified by the tag config), respecting semver:
npm update [\u0026lt;pkg\u0026gt;...] `}),e.add({id:6,href:"/docs/help/troubleshooting/",title:"Troubleshooting",description:"Solutions to common problems.",content:`Problems updating npm packages #Delete the ./node_modules folder, and run again:
npm install Problems with cache #Delete the temporary directories:
npm run clean `}),e.add({id:7,href:"/docs/help/faq/",title:"FAQ",description:"Answers to frequently asked questions.",content:`Hyas? #Doks is a Hyas theme build by the creator of Hyas.
Footer notice? #Please keep it in place.
Keyboard shortcuts for search? #focus: Ctrl + / select: ↓ and ↑ open: Enter close: Esc Other documentation? #Netlify Hugo Can I get support? #Create a topic:
Netlify Community Hugo Forums Doks Discussions Contact the creator? #Send h-enk a message:
Netlify Community Hugo Forums Doks Discussions `}),e.add({id:8,href:"/docs/living-room/blu-ray/",title:"Blu Ray Player",description:`Get started #There are two main ways to use the litterbox`,content:`Get started #There are two main ways to use the litterbox
`}),e.add({id:9,href:"/docs/building/coming-and-going/",title:"coming and going",description:`Get started #There are two main ways to use the litterbox`,content:`Get started #There are two main ways to use the litterbox
`}),e.add({id:10,href:"/docs/kitchen/espresso/",title:"Espresso",description:`Get started #There are two main ways to use the litterbox`,content:`Get started #There are two main ways to use the litterbox
`}),e.add({id:11,href:"/docs/cats/food-and-water/",title:"food and water",description:`food #Food is in the bin in the front closet next to the litter box. You can fill their food anytime. Make sure to fill both bowls before you leave.
water #They like fresh water but they\u0026rsquo;ll be fine. Maybe just refill both water bowls before you leave. They like an ice-cube or two in the water as well.`,content:`food #Food is in the bin in the front closet next to the litter box. You can fill their food anytime. Make sure to fill both bowls before you leave.
water #They like fresh water but they\u0026rsquo;ll be fine. Maybe just refill both water bowls before you leave. They like an ice-cube or two in the water as well.
`}),e.add({id:12,href:"/docs/building/keys/",title:"keys",description:`acquiring keys #you\u0026rsquo;ll have to stop at the front desk to grab keys. they have your name and the dates you\u0026rsquo;ll be here. when you leave you can drop the keys back at the desk.
apartment key #hold the key to spot the door, which engages the dead bolt so you can lock or unlock the dead bolt.
garage key #the garage key needs to be kinda close to open the door.`,content:`acquiring keys #you\u0026rsquo;ll have to stop at the front desk to grab keys. they have your name and the dates you\u0026rsquo;ll be here. when you leave you can drop the keys back at the desk.
apartment key #hold the key to spot the door, which engages the dead bolt so you can lock or unlock the dead bolt.
garage key #the garage key needs to be kinda close to open the door. the garage door opens automatically when you leave.
`}),e.add({id:13,href:"/docs/kitchen/knives/",title:"Knives",description:`Get started #There are two main ways to use the litterbox`,content:`Get started #There are two main ways to use the litterbox
`}),e.add({id:14,href:"/docs/cats/litterbox/",title:"litterbox",description:`changing the bag #pull the bottom drawer out
take bag out
put a new bag in
top off with a little bit of litter
there is a max-fill line on the liner press the reset button
throw the bag away
resources #quick start guide manual `,content:`changing the bag #pull the bottom drawer out
take bag out
put a new bag in
top off with a little bit of litter
there is a max-fill line on the liner press the reset button
throw the bag away
resources #quick start guide manual `}),e.add({id:15,href:"/docs/building/mail-and-packages/",title:"mail and packages",description:`mail #there is a mailbox key on the keyring with the apartment key. mail room is down by the lobby. you can leave mail on the desk in the den.
packages #we\u0026rsquo;ll probably ask you to grab some packages. the package room door is by the reception desk. the code is 10645#. our packages are on the middle shelf on the wall far to the left as you walk in.`,content:`mail #there is a mailbox key on the keyring with the apartment key. mail room is down by the lobby. you can leave mail on the desk in the den.
packages #we\u0026rsquo;ll probably ask you to grab some packages. the package room door is by the reception desk. the code is 10645#. our packages are on the middle shelf on the wall far to the left as you walk in. you can put packages in the den closet.
`}),e.add({id:16,href:"/docs/den/racing/",title:"Racing",description:`Get started #There are two main ways to use the litterbox`,content:`Get started #There are two main ways to use the litterbox
`}),e.add({id:17,href:"/docs/building/trash/",title:"trash and recycling",description:"trash and recycling are down the hall",content:`trash and recycling are down the hall
`}),e.add({id:18,href:"/docs/living-room/tv/",title:"TV",description:`Get started #There are two main ways to use the litterbox`,content:`Get started #There are two main ways to use the litterbox
`}),e.add({id:19,href:"/docs/den/vacuum/",title:"Vacuum",description:`Get started #There are two main ways to use the litterbox`,content:`Get started #There are two main ways to use the litterbox
`}),e.add({id:20,href:"/docs/den/vr/",title:"VR",description:`Get started #There are two main ways to use the litterbox`,content:`Get started #There are two main ways to use the litterbox
`}),e.add({id:21,href:"/docs/den/",title:"Den",description:"",content:""}),e.add({id:22,href:"/docs/kitchen/",title:"Kitchen",description:"",content:""}),e.add({id:23,href:"/docs/living-room/",title:"Living Room",description:"",content:""}),e.add({id:24,href:"/docs/building/",title:"the building",description:"",content:""}),e.add({id:25,href:"/docs/cats/",title:"Cats",description:"Cat Docs.",content:""}),e.add({id:26,href:"/docs/",title:"Docs",description:"Docs Doks.",content:""}),search.addEventListener("input",t,!0);function t(){const s=5;var n=this.value,o=e.search(n,{limit:s,enrich:!0});const t=new Map;for(const e of o.flatMap(e=>e.result)){if(t.has(e.doc.href))continue;t.set(e.doc.href,e.doc)}if(suggestions.innerHTML="",suggestions.classList.remove("d-none"),t.size===0&&n){const e=document.createElement("div");e.innerHTML=`No results for "<strong>${n}</strong>"`,e.classList.add("suggestion__no-results"),suggestions.appendChild(e);return}for(const[r,a]of t){const n=document.createElement("div");suggestions.appendChild(n);const e=document.createElement("a");e.href=r,n.appendChild(e);const o=document.createElement("span");o.textContent=a.title,o.classList.add("suggestion__title"),e.appendChild(o);const i=document.createElement("span");if(i.textContent=a.description,i.classList.add("suggestion__description"),e.appendChild(i),suggestions.appendChild(n),suggestions.childElementCount==s)break}}})()