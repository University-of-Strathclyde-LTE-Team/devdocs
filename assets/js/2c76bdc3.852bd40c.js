"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[67423],{92313:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return h}});var a=r(83117),o=r(80102),l=(r(67294),r(3905)),i=r(13904),n=["components"],s={title:"Moodle 3.2",tags:["Release notes","Moodle 3.2"],sidebar_position:-302,moodleVersion:"3.2"},p=void 0,m={unversionedId:"releases/3.2",id:"releases/3.2",title:"Moodle 3.2",description:"Release date: 5 December 2016",source:"@site/general/releases/3.2.md",sourceDirName:"releases",slug:"/releases/3.2",permalink:"/devdocs/general/releases/3.2",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.2.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.2",permalink:"/devdocs/general/tags/moodle-3-2"}],version:"current",lastUpdatedBy:"Martin Dougiamas",lastUpdatedAt:1655296149,formattedLastUpdatedAt:"15/06/2022",sidebarPosition:-302,frontMatter:{title:"Moodle 3.2",tags:["Release notes","Moodle 3.2"],sidebar_position:-302,moodleVersion:"3.2"},sidebar:"releaseNotes",previous:{title:"Moodle 3.3.9",permalink:"/devdocs/general/releases/3.3/3.3.9"},next:{title:"Moodle 3.2.1",permalink:"/devdocs/general/releases/3.2/3.2.1"}},d={},h=[{value:"Server requirements",id:"server-requirements",level:2},{value:"Database requirements",id:"database-requirements",level:3},{value:"Client requirements",id:"client-requirements",level:2},{value:"Browser support",id:"browser-support",level:3},{value:"Major features",id:"major-features",level:2},{value:"Highlights",id:"highlights",level:3},{value:"Mobile app",id:"mobile-app",level:3},{value:"External tool (LTI)",id:"external-tool-lti",level:3},{value:"Assignment",id:"assignment",level:3},{value:"Quiz",id:"quiz",level:3},{value:"Choice",id:"choice",level:3},{value:"Forum",id:"forum",level:3},{value:"Other activity modules",id:"other-activity-modules",level:3},{value:"Global search",id:"global-search",level:3},{value:"Other improvements",id:"other-improvements",level:3},{value:"For administrators",id:"for-administrators",level:3},{value:"Plugins removal",id:"plugins-removal",level:4},{value:"Web services",id:"web-services",level:3},{value:"For developers",id:"for-developers",level:3},{value:"Translations",id:"translations",level:2}],u={toc:h};function k(e){var t=e.components,r=(0,o.Z)(e,n);return(0,l.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(i.Z,(0,a.Z)({frontMatter:s},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,l.kt)("p",null,"Release date: 5 December 2016"),(0,l.kt)("p",null,"Here is ",(0,l.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.2%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.2"),"."),(0,l.kt)("p",null,"See our ",(0,l.kt)("a",{parentName:"p",href:"https://docs.moodle.org/32/en/New_features"},"New Features page")," for a more user-friendly introduction to Moodle 3.2 with screenshots."),(0,l.kt)("p",null,"If you are upgrading from previous version, make sure you read the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.moodle.org/32/en/Upgrading"},"Upgrading")," documentation."),(0,l.kt)("h2",{id:"server-requirements"},"Server requirements"),(0,l.kt)("p",null,"These are just the minimum supported versions. We recommend keeping all of your software up-to-date."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Moodle upgrade:  Moodle 2.7 or later (if upgrading from earlier versions, you must upgrade to 2.7.14 as a first step)"),(0,l.kt)("li",{parentName:"ul"},"PHP version: minimum PHP 5.6.5. ",(0,l.kt)("em",{parentName:"li"},"Note: minimum PHP version has increased since Moodle 3.1"),". PHP 7.0.x and 7.1.x are supported but have some ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Moodle_and_PHP7#Can_I_use_PHP7_yet.3F"},"engine limitations"),".")),(0,l.kt)("h3",{id:"database-requirements"},"Database requirements"),(0,l.kt)("p",null,"Moodle supports the following database servers. Again, version numbers are just the minimum supported version. We recommend running the latest stable version of any software."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Database"),(0,l.kt)("th",{parentName:"tr",align:null},"Minimum version"),(0,l.kt)("th",{parentName:"tr",align:null},"Recommended"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.postgresql.org/"},"PostgreSQL")),(0,l.kt)("td",{parentName:"tr",align:null},"9.1"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.mysql.com/"},"MySQL")),(0,l.kt)("td",{parentName:"tr",align:null},"5.5.31"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mariadb.org/"},"MariaDB")),(0,l.kt)("td",{parentName:"tr",align:null},"5.5.31"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.microsoft.com/en-us/server-cloud/products/sql-server/"},"Microsoft SQL Server")),(0,l.kt)("td",{parentName:"tr",align:null},"2008"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.oracle.com/us/products/database/overview/index.html"},"Oracle Database")),(0,l.kt)("td",{parentName:"tr",align:null},"10.2"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")))),(0,l.kt)("h2",{id:"client-requirements"},"Client requirements"),(0,l.kt)("h3",{id:"browser-support"},"Browser support"),(0,l.kt)("p",null,"Moodle is compatible with any standards compliant web browser. We regularly test Moodle with the following browsers:"),(0,l.kt)("p",null,"Desktop:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Chrome"),(0,l.kt)("li",{parentName:"ul"},"Firefox"),(0,l.kt)("li",{parentName:"ul"},"Safari"),(0,l.kt)("li",{parentName:"ul"},"Edge"),(0,l.kt)("li",{parentName:"ul"},"Internet Explorer")),(0,l.kt)("p",null,"Mobile:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"MobileSafari"),(0,l.kt)("li",{parentName:"ul"},"Google Chrome")),(0,l.kt)("p",null,"For the best experience and optimum security, we recommend that you keep your browser up to date. ",(0,l.kt)("a",{parentName:"p",href:"https://whatbrowser.org"},"https://whatbrowser.org")),(0,l.kt)("p",null,"Note: Legacy browsers with known compatibility issues with Moodle 3.2:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Internet Explorer 10 and below"),(0,l.kt)("li",{parentName:"ul"},"Safari 7 and below")),(0,l.kt)("h2",{id:"major-features"},"Major features"),(0,l.kt)("h3",{id:"highlights"},"Highlights"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55071"},"MDL-55071"),", ",(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55074"},"MDL-55074"),' - New "Boost" Bootstrap 4 theme, usability improvements of the navigation'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-54682"},"MDL-54682")," - ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/32/en/Messaging"},"Messaging")," UI improvements"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52777"},"MDL-52777")," - ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/32/en/User_tours"},"User tours")," - walkthoughs/instructional overlays for first time user on page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-38158"},"MDL-38158")," - Pluggable media players in Moodle; Video.JS player"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55324"},"MDL-55324")," - Easier embedding videos in audios in Atto editor with poster, subtitles and other attributes"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-54987"},"MDL-54987")," - New chart API and library")),(0,l.kt)("h3",{id:"mobile-app"},"Mobile app"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-53870"},"MDL-53870")," - Support for offline quizzes in the Mobile app"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-53777"},"MDL-53777")," - Include support for login via the browser in the new Moodle Mobile admin tool"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55059"},"MDL-55059")," - Support Smart App Banners for iOS"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-56607"},"MDL-56607")," - Move mobile settings to top-level admin")),(0,l.kt)("h3",{id:"external-tool-lti"},"External tool (LTI)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49609"},"MDL-49609")," - Add LTI Content Item support"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-47113"},"MDL-47113")," - Open LTI Tools in new Window, add link when popup is blocked"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-53832"},"MDL-53832")," - LTI v2.0 support")),(0,l.kt)("h3",{id:"assignment"},"Assignment"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-38105"},"MDL-38105")," - Allow negative score for rubric and change default grade calculation method"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29795"},"MDL-29795")," - ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/32/en/Using_Assignment#Overriding_assignment_deadlines"},"Assignment deadline overrides")," for an individual or group"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-54872"},"MDL-54872")," - Sort blind marked assignment by blind ID instead of userid")),(0,l.kt)("h3",{id:"quiz"},"Quiz"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48629"},"MDL-48629")," - Change the separator for matching correct answer feedback"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-3782"},"MDL-3782")," - Allow multiple answers in cloze MULTICHOICE question type"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55200"},"MDL-55200")," - Show coordinates in ddmarker questions to simplify dropzone creation"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27072"},"MDL-27072")," - Quiz reports now work on very large courses, rather than running out of memory")),(0,l.kt)("h3",{id:"choice"},"Choice"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-18592"},"MDL-18592")," - Allow teacher to make choices for students"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-11369"},"MDL-11369")," - Show choice deadline in the course calendar"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55140"},"MDL-55140")," - Allow to specify open and close dates separately"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-37946"},"MDL-37946")," - When choice display is set horizontal or vertical apply it to both options and results display")),(0,l.kt)("h3",{id:"forum"},"Forum"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-18599"},"MDL-18599"),' - Upon restore, association of "owner" of single simple discussion forum type defaults to user completing restore. Solution: hide author of the first post'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-37669"},"MDL-37669"),' - Forum: Make "Mark as read on notification" a user preference'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55982"},"MDL-55982")," - Add support for automatic locking of an individual forum discussion after a period of inactivity")),(0,l.kt)("h3",{id:"other-activity-modules"},"Other activity modules"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55327"},"MDL-55327")," - Lesson: option to duplicate pages"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55868"},"MDL-55868")," - Book: various usability improvements"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-56100"},"MDL-56100")," - Folder: Display in recent activity block"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-54945"},"MDL-54945")," - Workshop: integrate with portfolio API"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48944"},"MDL-48944")," - Survey: activity completion condition on survey completion"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-44712"},"MDL-44712")," - SCORM: improve Multi-SCO completion handing in activity completion"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55158"},"MDL-55158")," - Database activity: add start and end dates to the calendar"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-14448"},"MDL-14448"),", ",(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55464"},"MDL-55464"),", ",(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55254"},"MDL-55254"),", ",(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55251"},"MDL-55251"),", ",(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49029"},"MDL-49029"),' - Add standard capability "mod/xxxxx:view" to Lesson, Label, Database, Chat and Choice activities'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55866"},"MDL-55866")," - Remember editor disabled setting on a per-activity setting")),(0,l.kt)("h3",{id:"global-search"},"Global search"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-54794"},"MDL-54794")," - Add users to global search"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-54973"},"MDL-54973")," - Add messages to global search"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55127"},"MDL-55127")," - Add database entries to global search"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-53222"},"MDL-53222")," - Revise admin settings/report for global search for improved usability")),(0,l.kt)("h3",{id:"other-improvements"},"Other improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-30179"},"MDL-30179"),' - Allow teacher to toggle to/from "user view" in the User report in the gradebook (some items may be hidden for students but not teachers)'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-53048"},"MDL-53048"),' - New "password" fields that are not auto-filled by password managers'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55767"},"MDL-55767")," - ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/32/en/Competency_frameworks"},"Competency frameworks import")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29110"},"MDL-29110")," - Specify welcome email sender in enrol_self, or send emails from system noreply address"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-22078"},"MDL-22078"),' - Store "End date" for each course to be used in reports and analytics'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-53399"},"MDL-53399")," - 'Activity chooser off/on' option moved to user preferences"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-54751"},"MDL-54751")," - Introduce asynchronous module deletion so that recycle bin backup does not slow down editing process for the teacher"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55981"},"MDL-55981")," - By default non-editing teacher should not be able to access all groups (roles in upgraded sites are not changed)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-31356"},"MDL-31356")," - IMS Enterprise enrol plugin added features"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43230"},"MDL-43230")," - Support revoking awarded badges"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50286"},"MDL-50286")," - Allow to filter report_log by origin : Logs clogged up with events listed as origin cli"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51749"},"MDL-51749")," - Add Ability to Export Calendar for user or group events"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50888"},"MDL-50888")," - Antivirus: Implement ClamAV virus scanning using unix sockets."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-54617"},"MDL-54617")," - Always show count of online users in the online users block"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-54680"},"MDL-54680")," - Offer cartridges in LTI provider"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-42101"},"MDL-42101")," - Grades link moved from settings block to navigation block")),(0,l.kt)("h3",{id:"for-administrators"},"For administrators"),(0,l.kt)("p",null,"Please read carefully: ",(0,l.kt)("a",{parentName:"p",href:"https://docs.moodle.org/32/en/Upgrading#Possible_issues_that_may_affect_you_in_Moodle_3.2"},"Possible issues that may affect you in Moodle 3.2")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-44467"},"MDL-44467"),' - Return-Path should use no-reply address instead of support email; use only no-reply email or allowed domains in "From" header'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48468"},"MDL-48468")," - Add a Redis cache store to Moodle core"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-39117"},"MDL-39117")," - Add a APCu cache store to Moodle core"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-54947"},"MDL-54947")," - Update PostgreSQL binary (bytea) handling and improve connection performance"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48766"},"MDL-48766")," - Support IPv6 in IP lookup tool"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55124"},"MDL-55124")," - Support for connection pooler (pgbouncer) in PostgreSQL connection"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55916"},"MDL-55916")," - Maintenance mode should serve a http 503 instead of a 200"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-54606"},"MDL-54606")," - Sessions: Add support for Redis as a session_class_handler"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-53366"},"MDL-53366"),' - Antivirus clamav: Remove "Quarantine directory" settings parameter.'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55791"},"MDL-55791")," - Add capability to allow certain users through Maintenance mode")),(0,l.kt)("h4",{id:"plugins-removal"},"Plugins removal"),(0,l.kt)("p",null,"If you are using any of the following you need to download and install the plugins or otherwise they will be removed following 3.2 upgrade. The code is still available from the plugins database, which is where the plugin-name links go to."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55837"},"MDL-55837")," - Themes ",(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/plugins/theme_base"},"Base")," and ",(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/plugins/theme_canvas"},"Canvas")," - these themes can not be used by themselves but they may be used as parent themes"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49533"},"MDL-49533")," - Repository ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodlehq/moodle-repository_alfresco"},"Alfresco")," for Alfresco 4.2 and below, see ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/32/en/Alfresco_repository"},"Alfresco repository documentation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55927"},"MDL-55927")," - Authentication method ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodlehq/moodle-auth_radius"},"Radius"),". This plugin uses mcrypt library and is not compatible with PHP 7.1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-38158"},"MDL-38158")," - Media players ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodlehq/moodle-media_flowplayerflash"},"Flowplayer"),", ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodlehq/moodle-media_wmp"},"Windows media player"),", ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodlehq/moodle-media_realplayer"},"RealPlayer"),", ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodlehq/moodle-media_quicktime"},"Quicktime")," - these media players were present in Moodle 3.1 but removed in 3.2. They need to be installed in media/player directory")),(0,l.kt)("h3",{id:"web-services"},"Web services"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-31465"},"MDL-31465")," - Incorporate user suspension into web services"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-45639"},"MDL-45639")," - Web Service for SSO (auto-login from the app to the site)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55923"},"MDL-55923")," - Improve the behavior of deleted tokens on password reset"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55928"},"MDL-55928")," - New Web Service gradereport_user_get_grade_items"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55100"},"MDL-55100")," - New Web Service core_course_get_courses_by_field")),(0,l.kt)("h3",{id:"for-developers"},"For developers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"See 'Plugin removal' above. If your code depends on any of the removed plugins, you will need to do something about it."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55071"},"MDL-55071"),", ",(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55074"},"MDL-55074"),' - New "Boost" Bootstrap 4 theme, block and navigation changes (see ',(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Boost_Navigation"},"Boost Navigation")," and ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Themes"},"Themes"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55074"},"MDL-55074")," - It used to be that global blocks settings and navigation were created when Moodle was installed. Now, each theme can declare which blocks, if any, it requires. The is done by create_all_block_instances in blocklib.php, which is called from starting_output in pagelib.php."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-38158"},"MDL-38158")," - Introduction of Media players plugin type (see ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Media_players"},"Media players"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50937"},"MDL-50937")," - JQuery updated to version 3.1 (see ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/jQuery"},"jQuery"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-54987"},"MDL-54987")," - New chart API and library (see ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Charts_API"},"Charts API"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55727"},"MDL-55727")," - AMD modal module introduced (see ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/AMD_Modal"},"AMD Modal documentation"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52127"},"MDL-52127")," - Linting for JavaScript with ESLint (see ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Linting#Javascript_.28ESLint.29"},"Linting JavaScript"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55058"},"MDL-55058")," - Linting for CSS with stylelint (see ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Linting#CSS.2FSCSS.2FLESS_.28stylelint.29"},"Linting CSS"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48114"},"MDL-48114")," - Moodle can now be downloaded via composer (see ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Composer#Use_composer_to_download_moodle_code"},"Composer"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55091"},"MDL-55091")," - phpunit has been upgraded to 5.x"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55072"},"MDL-55072")," - Behat now supports different themes. (See ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Running_acceptance_test"},"Running acceptance test"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55048"},"MDL-55048")," - Grunt and npm build dependencies now require node version 4 or above"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-31243"},"MDL-31243")," - New get_with_capability_sql function for retrieving SQL for finding users with capability in the given context"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49599"},"MDL-49599")," - Boxnet v1 API is now deprecated"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-53306"},"MDL-53306")," - New authentication plugin method added which is called before user login (see ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Authentication_plugins#pre_user_login_hook.28.26.24user.29"},"Authentication plugins"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-47162"},"MDL-47162")," - Course ID is now required in message events"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55141"},"MDL-55141")," - Debugging option added for scheduled tasks from CLI (see ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Administration_via_command_line#Scheduled_tasks"},"Scheduled tasks documentation"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-54941"},"MDL-54941")," - Add filesize as a new field returned in all the Web Services returning file information"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-56082"},"MDL-56082")," - Expose external authentication methods (loginpage_idp_list) in login block (see ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Authentication_plugins#loginpage_idp_list.28.29"},"Authentication plugins"),")")),(0,l.kt)("h2",{id:"translations"},"Translations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.2"},"Notes de mise \xe0 jour de Moodle 3.2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.2"},"Notas de Moodle 3.2"))))}k.isMDXComponent=!0}}]);