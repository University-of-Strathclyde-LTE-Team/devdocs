"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[45504],{47843:function(e,t,o){o.r(t),o.d(t,{assets:function(){return h},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return u}});var n=o(83117),a=o(80102),i=(o(67294),o(3905)),s=o(13904),l=["components"],r={title:"Moodle App Development process",tags:["Moodle App","Processes","Quality Assurance","Moodle App development"]},d=void 0,p={unversionedId:"development/process-moodleapp",id:"development/process-moodleapp",title:"Moodle App Development process",description:"The development of new features and improvements in the Moodle App is organised in the following six phases:",source:"@site/general/development/process-moodleapp.md",sourceDirName:"development",slug:"/development/process-moodleapp",permalink:"/devdocs/general/development/process-moodleapp",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/process-moodleapp.md",tags:[{label:"Moodle App",permalink:"/devdocs/general/tags/moodle-app"},{label:"Processes",permalink:"/devdocs/general/tags/processes"},{label:"Quality Assurance",permalink:"/devdocs/general/tags/quality-assurance"},{label:"Moodle App development",permalink:"/devdocs/general/tags/moodle-app-development"}],version:"current",lastUpdatedBy:"Martin Dougiamas",lastUpdatedAt:1655296149,formattedLastUpdatedAt:"15/06/2022",frontMatter:{title:"Moodle App Development process",tags:["Moodle App","Processes","Quality Assurance","Moodle App development"]},sidebar:"process",previous:{title:"Penetration testing",permalink:"/devdocs/general/development/process/security/penetration-testing"},next:{title:"Tracker introduction",permalink:"/devdocs/general/development/tracker"}},h={},u=[{value:"Discovery",id:"discovery",level:2},{value:"Prioritisation",id:"prioritisation",level:3},{value:"Schedule",id:"schedule",level:3},{value:"Shaping",id:"shaping",level:2},{value:"Implementation",id:"implementation",level:2},{value:"QA testing",id:"qa-testing",level:2},{value:"Release",id:"release",level:2},{value:"Evaluation",id:"evaluation",level:2}],c={toc:u};function m(e){var t=e.components,o=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(s.Z,(0,n.Z)({frontMatter:r},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,i.kt)("p",null,"The development of new features and improvements in the Moodle App is organised in the following six phases:"),(0,i.kt)("p",null,"Discovery - Shaping - Implementation - QA Testing - Release - Evaluation"),(0,i.kt)("p",null,"As a summary of the process we can say that during the discovery phase we do an initial selection of features and improvements to be included in the next release of the app by reviewing the feedback from different stakeholders and the improvements detected by Moodle HQ's UX team user research."),(0,i.kt)("p",null,"In the shaping phase we do an initial high-level design and specifications so we can commence with the implementation phase in which the developers, with the help of designers, will implement the selected features."),(0,i.kt)("p",null,"During the Testing & QA phase, we do intensive testing to check that there are no regressions and, sometimes, we publish Beta versions to check the upcoming new features in advance and provide feedback before the release so that we can make the necessary adjustments."),(0,i.kt)("p",null,"Once we are confident we have a stable new version that is aligned with our stakeholders' expectations we move to the Release phase in which the new version of the app is fully rolled-out to users."),(0,i.kt)("p",null,"During the evaluation phase we analyse stakeholders' feedback to validate if we met their expectations."),(0,i.kt)("h2",{id:"discovery"},"Discovery"),(0,i.kt)("p",null,"During this first phase we analyse different stakeholders' needs and then we prioritise them so we can build a short-term roadmap for upcoming app releases."),(0,i.kt)("p",null,"We have different stakeholders (order does not indicate importance):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"End users"),(0,i.kt)("li",{parentName:"ul"},"External compliance entities/organisations"),(0,i.kt)("li",{parentName:"ul"},"Moodle Partners and Resellers"),(0,i.kt)("li",{parentName:"ul"},"BMA clients"),(0,i.kt)("li",{parentName:"ul"},"Pro/Premium plans clients"),(0,i.kt)("li",{parentName:"ul"},"Moodle Community"),(0,i.kt)("li",{parentName:"ul"},"Other Moodle Product teams")),(0,i.kt)("h3",{id:"prioritisation"},"Prioritisation"),(0,i.kt)("p",null,"We use the MoSCoW method. The term MoSCoW itself is an acronym derived from the first letter of each of four prioritisation categories: M - Must have S - Should have C - Could have W - Won't have."),(0,i.kt)("p",null,"There is some existing criteria for what's mandatory (MUST) to include in a new release:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"New Moodle LMS functionality (affecting students)"),(0,i.kt)("li",{parentName:"ul"},"New Moodle Workplace functionality (affecting students)"),(0,i.kt)("li",{parentName:"ul"},"User-facing serious UX problems (app speed/performance, notifications, navigation and resume activity/courses)"),(0,i.kt)("li",{parentName:"ul"},"Compliance (GDPR, accessibility)"),(0,i.kt)("li",{parentName:"ul"},"Technology (mandatory libraries updates etc\u2026)"),(0,i.kt)("li",{parentName:"ul"},"Critical bugs"),(0,i.kt)("li",{parentName:"ul"},"Security issues")),(0,i.kt)("p",null,'For what\'s not mandatory, we use additional methods such as "Value versus Complexity" but there is always a subjective evaluation and the Moodle Apps Product Manager is the one making the final decisions.'),(0,i.kt)("p",null,'New features and improvements under the "Could have" category can be removed at any time during the implementation phase if we feel we won\'t be able to implement them.'),(0,i.kt)("p",null,"Only critical issues (bugs or MUST not properly detected such as LMS changes) can be added once the implementation phase has commenced but minor nice-to-have improvements will often be added throughout the release cycle."),(0,i.kt)("h3",{id:"schedule"},"Schedule"),(0,i.kt)("p",null,"We usually release between four to six versions of the Moodle App per year."),(0,i.kt)("p",null,"Usually a few weeks after a Moodle LMS major release and also between two major LMS releases."),(0,i.kt)("h2",{id:"shaping"},"Shaping"),(0,i.kt)("p",null,"During this phase there are two major things happening:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A high-level design solution is drafted."),(0,i.kt)("li",{parentName:"ol"},"Technical specifications are created.")),(0,i.kt)("p",null,"So basically, we are defining what the feature should be doing, how it will work and how it interacts with other systems and the rest of the app. The evaluation criteria (used to check if we solved the problem once is used by end users) is also defined in this phase."),(0,i.kt)("p",null,"During this phase a developer and a designer will work together so the designer is aware of the technical limitations and the developer has a clear understanding of the high-level proposed solution to be refined during the implementation phase."),(0,i.kt)("h2",{id:"implementation"},"Implementation"),(0,i.kt)("p",null,"During this phase the developer and the designer will work on building the solution outlined in the Shaping phase, making decisions and choosing trade-offs about the finer details. Both the designer and the developer have full responsibility and they work autonomously unless they need specific help from other developers with more experience in certain areas."),(0,i.kt)("p",null,"Before the code gets integrated and it is ready for testing, a colleague has to perform the so-called peer-review, that is basically another developer (not involved in the original implementation) taking a fresh look at the code."),(0,i.kt)("p",null,"Once the code implementing the features is integrated, a tester will ensure that it works as expected. Automatic tests should be added by the developer in new features, so this step is mostly to look for regressions and to check that all the possible use cases for the solution were considered at implementation time."),(0,i.kt)("h2",{id:"qa-testing"},"QA testing"),(0,i.kt)("p",null,"Once all the selected new features, improvements and bugs fixes have been implemented and tested, we perform a complete review of the Moodle app functionality in order to detect possible regressions."),(0,i.kt)("p",null,"This is manually done, we go through a list of features of the Moodle app and we check that everything is working as expected in both Android and iOS devices."),(0,i.kt)("p",null,"At the beginning of this process, we also invite our community members to do some beta testing of the upcoming new features of improvements, to do this, we use Apple TestFlight and Android Beta Testing. Our community members are able to provide feedback prior to the release that will help to detect potential issues."),(0,i.kt)("h2",{id:"release"},"Release"),(0,i.kt)("p",null,"Once the QA testing phase has finished, we move on into the Release phase which consists basically in doing a full-rollout of the new version of the app in Google Play and the Apple App Store."),(0,i.kt)("h2",{id:"evaluation"},"Evaluation"),(0,i.kt)("p",null,"In this phase we basically collect feedback to see if the new features and improvements are well received by our final users. As well as using the evaluation criteria we defined in the Shaping phase.\nIf something is not working as expected because it has bugs or the selected design solution is not working for most of our users we will action in the next development cycle to address the problem."))}m.isMDXComponent=!0}}]);