"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[72930],{32498:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return v},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return c}});var n=a(83117),i=a(80102),o=(a(67294),a(3905)),s=a(13904),r=["components"],d={title:"Policies",tags:["Policies","Coding guidelines","Developer processes"]},l=void 0,m={unversionedId:"development/policies",id:"development/policies",title:"Policies",description:"This is the top-level page describing Moodle's coding standards and guidelines.  It's the place to start if you want to know how to write code for Moodle.",source:"@site/general/development/policies.md",sourceDirName:"development",slug:"/development/policies",permalink:"/devdocs/general/development/policies",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/policies.md",tags:[{label:"Policies",permalink:"/devdocs/general/tags/policies"},{label:"Coding guidelines",permalink:"/devdocs/general/tags/coding-guidelines"},{label:"Developer processes",permalink:"/devdocs/general/tags/developer-processes"}],version:"current",lastUpdatedBy:"Martin Dougiamas",lastUpdatedAt:1655296149,formattedLastUpdatedAt:"15/06/2022",frontMatter:{title:"Policies",tags:["Policies","Coding guidelines","Developer processes"]},sidebar:"coding",previous:{title:"Getting started",permalink:"/devdocs/general/development/gettingstarted"},next:{title:"Accessibility",permalink:"/devdocs/general/development/policies/accessibility"}},p={},c=[{value:"Moodle architecture",id:"moodle-architecture",level:2},{value:"Plugins",id:"plugins",level:2},{value:"Coding style",id:"coding-style",level:2},{value:"Security",id:"security",level:2},{value:"Standards",id:"standards",level:2},{value:"JavaScript",id:"javascript",level:2},{value:"Internationalisation",id:"internationalisation",level:2},{value:"Accessibility",id:"accessibility",level:2},{value:"Component library",id:"component-library",level:2},{value:"Performance",id:"performance",level:2},{value:"Database",id:"database",level:2},{value:"Events",id:"events",level:2},{value:"Web services",id:"web-services",level:2},{value:"Manual testing",id:"manual-testing",level:2},{value:"Unit testing",id:"unit-testing",level:2},{value:"Acceptance testing",id:"acceptance-testing",level:2},{value:"Third Party Libraries",id:"third-party-libraries",level:2},{value:"Other standards",id:"other-standards",level:2},{value:"Translations",id:"translations",level:2}],h={toc:c};function v(e){var t=e.components,a=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(s.Z,(0,n.Z)({frontMatter:d},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This is the top-level page describing Moodle's coding standards and guidelines.  It's the place to start if you want to know how to write code for Moodle."))),(0,o.kt)("h2",{id:"moodle-architecture"},"Moodle architecture"),(0,o.kt)("p",null,"Moodle tries to run on the widest possible range of platforms, for the widest possible number of people, while remaining easy to install, use, upgrade and integrate with other systems."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For more about this, see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Moodle_architecture"},"Moodle architecture"),"."))),(0,o.kt)("h2",{id:"plugins"},"Plugins"),(0,o.kt)("p",null,"Moodle has a general philosophy of modularity.  There are nearly 30 different standard types of plugins and even more sub-plugin types, however all of these plugin types work the same way. Blocks and activities are the only small exceptions."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For more about this, see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Plugins"},"Moodle plugins")," and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Subplugins"},"Moodle sub-plugins"),"."))),(0,o.kt)("h2",{id:"coding-style"},"Coding style"),(0,o.kt)("p",null,"Consistent ",(0,o.kt)("a",{parentName:"p",href:"/general/development/policies/codingstyle"},"coding style")," is important in any development project, and particularly so when many developers are involved. A standard style helps to ensure that the code is easier to read and understand, which helps overall quality."),(0,o.kt)("p",null,"Writing your code in this way is an important step to having your code accepted by the Moodle community."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For more about this, see the ",(0,o.kt)("a",{parentName:"p",href:"/general/development/policies/codingstyle"},"Moodle coding style"),"."))),(0,o.kt)("h2",{id:"security"},"Security"),(0,o.kt)("p",null,"Security is about protecting the interests and data of all our users.  Moodle may not be banking software, but it is still protecting a lot of sensitive and important data such as private discussions and grades from outside eyes (or student hackers!) as well as protecting our users from spammers and other internet predators."),(0,o.kt)("p",null,"It's also a script running on people's servers, so Moodle needs to be a responsible Internet citizen and not introduce vulnerabilities that could allow crackers to gain unlawful access to the server it runs on."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Any single script (in Moodle core or a third party module) can introduce a vulnerability to thousands of sites, so it's important that all developers strictly follow our ",(0,o.kt)("a",{parentName:"p",href:"/general/development/policies/security"},"Moodle security guidelines"),"."))),(0,o.kt)("h2",{id:"standards"},"Standards"),(0,o.kt)("p",null,"It's important that Moodle produces strict, well-formed ",(0,o.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/HTML5"},"HTML 5")," code (preferably backwards compatible with XHTML 1.1 if possible), compliant with all common accessibility guidelines (such as ",(0,o.kt)("a",{parentName:"p",href:"http://www.w3.org/TR/WCAG20/"},"W3C WCAG 2.0"),", ",(0,o.kt)("a",{parentName:"p",href:"http://www.w3.org/TR/wai-aria-practices/"},"ARIA"),")."),(0,o.kt)("p",null,"CSS should be used for layout. Moodle comes with several themes installed. Beginning with version 3.7, only the 'Boost, and 'Classic' themes are included with the base Moodle code."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Writing your own theme")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We recommend that if you are writing your own theme that it should extend the Moodle 'Boost' theme."))),(0,o.kt)("p",null,"This helps consistency across browsers in a nicely-degrading way (especially those using non-visual or mobile browsers), as well as improving life for theme designers."),(0,o.kt)("h2",{id:"javascript"},"JavaScript"),(0,o.kt)("p",null,"New JavaScript in Moodle should be written as Vanilla JavaScript in the ES6 style. The use of jQuery, YUI, and other frameworks is strongly discouraged and will not be accepted into core except when dealing with legacy interfaces which require the use of those objects."),(0,o.kt)("p",null,"In general code should be written to avoid displaying interfaces which are removed, or adding new interfaces as the page loads."),(0,o.kt)("p",null,"All JavaScript must be accessible."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For more about this, see the ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/javascript"},"JavaScript guide"),"."))),(0,o.kt)("h2",{id:"internationalisation"},"Internationalisation"),(0,o.kt)("p",null,"Moodle works in over 84 languages because we pay great attention to keeping the language strings and locale information separate from the code, in language packs."),(0,o.kt)("p",null,"The default language for all code, comments and documentation, however, is English (AU)."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For more about this, see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/String_API"},"String API")))),(0,o.kt)("h2",{id:"accessibility"},"Accessibility"),(0,o.kt)("p",null,"Moodle should work well for the widest possible range of people."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For more about this, see ",(0,o.kt)("a",{parentName:"p",href:"/general/development/policies/accessibility"},"Moodle Accessibility"),"."))),(0,o.kt)("h2",{id:"component-library"},"Component library"),(0,o.kt)("p",null,"The Component library is a developer tool provided to help identify frequently-used user interface components, and encourage their re-use."),(0,o.kt)("p",null,"It includes components from both Twitter Bootstrap, and from Moodle, and it displays these features using your current Moodle theme."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For more about this, see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Component_library"},"Component library"),"."))),(0,o.kt)("h2",{id:"performance"},"Performance"),(0,o.kt)("p",null,"The load any Moodle site can cope with will, of course, depend on the server and network hardware that it is running on. However there are some features (intended especially for developers) that are discouraged on production sites for performance reasons."),(0,o.kt)("p",null,"The most important property is scalability, so a small increase in the number of users, courses, activities in a course, and so on, only causes a correspondingly small increase in server load."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For more information and advice, see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Performance_and_scalability"},"Performance and scalability"),"."))),(0,o.kt)("h2",{id:"database"},"Database"),(0,o.kt)("p",null,"Moodle has a powerful database abstraction layer that we wrote ourselves, called ",(0,o.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/XMLDB_Documentation"},"XMLDB"),".  This lets the same Moodle code work on MySQL/MariaDB, PostgreSQL, MS SQL Server and Oracle. There are known issues when using Oracle, it is not fully supported and is not recommended for production sites.\n``"),(0,o.kt)("p",null,"Is this Oracle statement true?"),(0,o.kt)("p",null,"We have tools and APIs for ",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/core/dml/ddl"},"defining and modifying tables"),", and ",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/core/dml"},"retrieving and storing data")," in the database."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For more about this, see the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Database"},"Moodle Database")," guidelines."))),(0,o.kt)("h2",{id:"events"},"Events"),(0,o.kt)("p",null,"In Moodle it is possible to register observers for events. An observer is notified when an event happens and receives the data related to that event. An observer can only act on the information in the event. It cannot modify the data for the event or prevent the action from occurring. The component containing the observer is communicating with the component that declared the event class. The normal rules for ",(0,o.kt)("a",{parentName:"p",href:"/general/development/policies/component-communication#event-observers"},"inter-component communication")," apply."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For more about this, see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Events_API"},"Events API"),". In particular, note the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Events_API#Events_naming_convention"},"Events naming convention"),"."))),(0,o.kt)("h2",{id:"web-services"},"Web services"),(0,o.kt)("p",null,"Web services enable other systems to login to Moodle and perform operations. They should be implemented according to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Web_service_API_functions"},"Web service API functions")," and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/How_to_contribute_a_web_service_function_to_core"},"How to contribute a web service function to core"),", including the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Web_service_API_functions#Naming_convention"},"Naming convention"),"."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For more about this, see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Web_services"},"Web services"),"."))),(0,o.kt)("h2",{id:"manual-testing"},"Manual testing"),(0,o.kt)("p",null,"All issues integrated into the core codebase are tested both during Integration, and subsequently by our testing team. While much of this testing is automated, there are many parts which cannot be automated, and manual testing is required."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Moodle has guidelines on ",(0,o.kt)("a",{parentName:"p",href:"/general/development/process/testing/guide"},"how to write clear testing instructions")," which we recommend you read and follow."))),(0,o.kt)("h2",{id:"unit-testing"},"Unit testing"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Unit_testing"},"Unit testing")," is not simply a technique but a philosophy of software development."),(0,o.kt)("p",null,"The idea is to create automated tests for each bit of functionality that you are developing (at the same time you are developing it).  This not only helps everyone later test that the software works, but helps the development itself, because it forces you to work in a modular way with very clearly defined structures and goals."),(0,o.kt)("p",null,"Moodle uses a framework called ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sebastianbergmann/phpunit/"},"PHPUnit")," that makes writing unit tests fairly simple."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For more about this, see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/PHPUnit"},"PHPUnit"),"."))),(0,o.kt)("h2",{id:"acceptance-testing"},"Acceptance testing"),(0,o.kt)("p",null,"PHPUnit covers mostly the internal implementation of functions and classes, the user interaction testing can be automated using the ",(0,o.kt)("a",{parentName:"p",href:"http://behat.org"},"Behat framework"),"."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For more about this, see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Acceptance_testing"},"Acceptance testing"),"."))),(0,o.kt)("h2",{id:"third-party-libraries"},"Third Party Libraries"),(0,o.kt)("p",null,"Moodle has a standard way to include third party libraries in your code."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For more about this, see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Third_Party_Libraries"},"Third-party libraries"),"."))),(0,o.kt)("h2",{id:"other-standards"},"Other standards"),(0,o.kt)("p",null,"Please note that Moodle coding style and design is pretty unique, it is not compatible with ",(0,o.kt)("a",{parentName:"p",href:"http://pear.php.net/manual/en/standards.php"},"PEAR coding standards")," or any other common PHP standards."),(0,o.kt)("h2",{id:"translations"},"Translations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.moodle.org/ja/%E9%96%8B%E7%99%BA:%E3%82%B3%E3%83%BC%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0"},"\u958b\u767a"))))}v.isMDXComponent=!0}}]);