"use strict";(self.webpackChunktilli_docs=self.webpackChunktilli_docs||[]).push([[8803],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>h});var n=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(i),h=o,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||r;return i?n.createElement(m,a(a({ref:t},p),{},{components:i})):n.createElement(m,a({ref:t},p))}));function h(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=i.length,a=new Array(r);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<r;u++)a[u]=i[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},4465:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var n=i(7462),o=(i(7294),i(3905));const r={},a="Contribution Guidelines",s={unversionedId:"next/Contribution-Guidelines",id:"next/Contribution-Guidelines",title:"Contribution Guidelines",description:"Tilli development team would like to thank you for taking the time to contribute! We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:",source:"@site/docs/next/Contribution-Guidelines.md",sourceDirName:"next",slug:"/next/Contribution-Guidelines",permalink:"/tilli-docs/docs/next/Contribution-Guidelines",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Opensource Quality Assuarance Process",permalink:"/tilli-docs/docs/next/OpensourceQAProcess"},next:{title:"Code of Conduct",permalink:"/tilli-docs/docs/next/code-of-conduct"}},l={},u=[{value:"Contributing with an issue",id:"contributing-with-an-issue",level:2},{value:"Reporting Bugs",id:"reporting-bugs",level:2},{value:"<strong>How Do I Submit A (Good) Bug Report?</strong>",id:"how-do-i-submit-a-good-bug-report",level:4},{value:"Contribute beyond coding...",id:"contribute-beyond-coding",level:2},{value:"For Feedbacks and Insights",id:"for-feedbacks-and-insights",level:3},{value:"For Documentation",id:"for-documentation",level:3},{value:"For Designs",id:"for-designs",level:3}],p={toc:u};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contribution-guidelines"},"Contribution Guidelines"),(0,o.kt)("p",null," Tilli development team would like to thank you for taking the time to contribute! We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reporting a bug"),(0,o.kt)("li",{parentName:"ul"},"Discussing the current state of the code"),(0,o.kt)("li",{parentName:"ul"},"Submitting a fix"),(0,o.kt)("li",{parentName:"ul"},"Proposing new features"),(0,o.kt)("li",{parentName:"ul"},"Becoming a maintainer"),(0,o.kt)("li",{parentName:"ul"},"Getting involved with Tilli community")),(0,o.kt)("p",null,"We have created guidelines for contributing to Tilli project and packages. These are guidelines, not rules. We encourage you to use your best judgment, and feel free to recommend changes to this document in a pull request. We use github to host code, to track issues and feature requests, as well as accept pull requests."),(0,o.kt)("h1",{id:"how-to-contribute-to-the-tilli-project"},"How to contribute to the Tilli Project?"),(0,o.kt)("p",null,"This section guides you through submitting a bug report for Tilli. Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports\nYou can submit a bug report or any suggestions on this project through github issues.\nWhen you are creating a bug report, please include as many details as possible. Fill out the required template, the information it asks for helps us resolve issues faster.\nThe best way to contribute to this project is by making a pull request in following ways"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fork the Tilli project and work on your fork"),(0,o.kt)("li",{parentName:"ul"},"Create a new branch on which you want to make changes - \u201cgit checkout -b \u2018my-contribution\u2019 \u201d or push your changes on develop branch"),(0,o.kt)("li",{parentName:"ul"},"Please make one pull request per issue to avoid large merges."),(0,o.kt)("li",{parentName:"ul"},"Commit your change with a commit message describing the correction."),(0,o.kt)("li",{parentName:"ul"},"Submit a pull request against the Tilli repository.\nIn general, all pull requests must:"),(0,o.kt)("li",{parentName:"ul"},"Have a clear use case, fix a demonstrable bug or serve the greater good of the project"),(0,o.kt)("li",{parentName:"ul"},"Have unit tests, functional tests, and fuzz tests, where appropriate;"),(0,o.kt)("li",{parentName:"ul"},"Follow code style guidelines"),(0,o.kt)("li",{parentName:"ul"},"Not break the existing test suite;"),(0,o.kt)("li",{parentName:"ul"},"Where bugs are fixed, where possible, there should be unit tests demonstrating the bug and also proving the fix. This helps prevent regression."),(0,o.kt)("li",{parentName:"ul"},"Change relevant comments and documentation when the behavior of code changes.")),(0,o.kt)("h2",{id:"contributing-with-an-issue"},"Contributing with an issue"),(0,o.kt)("p",null,"If you find any bug and you're not sure how to fix it, or you don't know how to do a pull request, then you can create an Issue. Filing an Issue will help us see the problem and fix it.\nIssues in Tilli\u2019s",(0,o.kt)("a",{parentName:"p",href:"https://github.com/orgs/tillioss"}," "),(0,o.kt)("a",{parentName:"p",href:"https://github.com/orgs/tillioss"},"Github repositories")," are the primary means by which bug reports, feedback, and general discussions are made. A contributor is invited to create an issue, discuss it, and provide a fix if needed."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/tillioss/tilli-web-app"},"https://github.com/tillioss/tilli-web-app")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/tillioss/tilli-ide"},"https://github.com/tillioss/tilli-ide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/tillioss/tilli-backend-server"},"https://github.com/tillioss/tilli-backend-server"))),(0,o.kt)("h2",{id:"reporting-bugs"},"Reporting Bugs"),(0,o.kt)("p",null,"This section guides you through submitting a bug report for Tilli. Following these guidelines helps maintainers and the community understand your report \ud83d\udcdd, reproduce the behavior \ud83d\udcbb \ud83d\udcbb, and find related reports \ud83d\udd0e.\nBefore creating bug reports, please check ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/orgs/tillioss/projects/2"},"this list")," as you might find out that you don't need to create one. When you are creating a bug report, please ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/atom/atom/blob/master/CONTRIBUTING.md#how-do-i-submit-a-good-bug-report"},"include as many details as possible"),".\nNote: If you find a Closed issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one."),(0,o.kt)("h4",{id:"how-do-i-submit-a-good-bug-report"},(0,o.kt)("strong",{parentName:"h4"},"How Do I Submit A (Good) Bug Report?")),(0,o.kt)("p",null,"Bugs are tracked as GitHub issues. After you've determined ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/atom/atom/blob/master/CONTRIBUTING.md#atom-and-packages"},"which repository")," your bug is related to, create an issue on that repository and provide the following information."),(0,o.kt)("h2",{id:"contribute-beyond-coding"},"Contribute beyond coding..."),(0,o.kt)("p",null,"You can share your skills and insights to support the Tilli community grow."),(0,o.kt)("h3",{id:"for-feedbacks-and-insights"},"For Feedbacks and Insights"),(0,o.kt)("p",null,"If you have expertise and experience in cash transfer and want to share your insights and feedback with the community at ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@teqbahn.com"},"support@teqbahn.com"),"."),(0,o.kt)("h3",{id:"for-documentation"},"For Documentation"),(0,o.kt)("p",null,"We share our journey - and the lessons we learned on the way through reports, case studies, articles, blogs, and surveys. Contact us if you want to contribute and learn more \ud83d\udc49 ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@teqbahn.com"},"support@teqbahn.com"),"."),(0,o.kt)("h3",{id:"for-designs"},"For Designs"),(0,o.kt)("p",null,"If you are interested in creating and designing in UI/UX, animations, photos, infographics, IEC materials, tutorials, and explainers for the Tilli community -- feel free to contact us with any design-related questions \ud83d\udc49 ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@teqbahn.com"},"support@teqbahn.com ")),(0,o.kt)("h1",{id:"style-guide"},"Style Guide"),(0,o.kt)("p",null,"This repository uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eslint/eslint"},"eslint "),"to enforce ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbnb/javascript"},"air-bnb coding styles"),"."),(0,o.kt)("p",null,"Last updated : 27/06/2022"))}c.isMDXComponent=!0}}]);