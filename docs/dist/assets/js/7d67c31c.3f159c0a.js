"use strict";(self.webpackChunkrx_angular=self.webpackChunkrx_angular||[]).push([[859],{551:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),o=["components"],i={sidebar_position:1,sidebar_label:"Determine state type",title:"Difference between Global and Local state"},s="Difference between Global and Local state",p={unversionedId:"state/recipes/determine-state-type",id:"state/recipes/determine-state-type",title:"Difference between Global and Local state",description:"Global state",source:"@site/docs/state/recipes/determine-state-type.md",sourceDirName:"state/recipes",slug:"/state/recipes/determine-state-type",permalink:"/docs/state/recipes/determine-state-type",draft:!1,editUrl:"https://github.com/rx-angular/rx-angular/edit/main/docs/state/recipes/determine-state-type.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Determine state type",title:"Difference between Global and Local state"},sidebar:"docs",previous:{title:"Passing observables directly",permalink:"/docs/state/tutorials/passing-observables-directly"},next:{title:"Manage ViewModel",permalink:"/docs/state/recipes/manage-viewmodel"}},c={},d=[{value:"Global state",id:"global-state",level:2},{value:"Local state",id:"local-state",level:2},{value:"Detecting state type",id:"detecting-state-type",level:2},{value:"Example",id:"example",level:2},{value:"To do",id:"to-do",level:3},{value:"Setup",id:"setup",level:3},{value:"What is global and what is local?",id:"what-is-global-and-what-is-local",level:3}],u={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"difference-between-global-and-local-state"},"Difference between Global and Local state"),(0,l.kt)("h2",{id:"global-state"},"Global state"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Lifetime"),". Static and, beside lazy instantiation, equal to the app lifetime. It never gets destroyed."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Sharing"),". Shared globally in the app. In Angular global state is nearly always shared over global singleton services."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Processed Sources"),". In most cases process external sources (REST API's, Web Sockets, Browser URL).")),(0,l.kt)("h2",{id:"local-state"},"Local state"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Lifetime"),". Dynamic and bound to some components, pipes, directives, or services that will be created and destroyed over time. When the state owner is destroyed state is no longer needed."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Sharing"),". This state can only be shared with children."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Processed Sources"),". Nearly always focus on the process of the following sources: Data from @InputBindings, UI Events, Component level Side-Effects, Parsing global state to local.")),(0,l.kt)("h2",{id:"detecting-state-type"},"Detecting state type"),(0,l.kt)("p",null,"To understand the state type it might be enough to answer 2 simple questions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Do I need to keep this data during the whole lifetime of my application?"),(0,l.kt)("li",{parentName:"ul"},"Do other parts of my app cares about this state? (other views for example)")),(0,l.kt)("p",null,'If both answers are "no", most probably you\'re working with local state.'),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"Let's take a look at a simple todo app. This app has 2 views."),(0,l.kt)("h3",{id:"to-do"},"To do"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Renders a list of ",(0,l.kt)("inlineCode",{parentName:"li"},"tasks")," that must be completed and a ",(0,l.kt)("inlineCode",{parentName:"li"},"counter")," that shows how many tasks left to do."),(0,l.kt)("li",{parentName:"ul"},"The list can be expanded or collapsed and has property ",(0,l.kt)("inlineCode",{parentName:"li"},"isExpanded"),"."),(0,l.kt)("li",{parentName:"ul"},"Gets tasks array from endpoint ",(0,l.kt)("em",{parentName:"li"},"tasks/get")," and filters out tasks that already answered.")),(0,l.kt)("h3",{id:"setup"},"Setup"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Renders a list of all existing ",(0,l.kt)("inlineCode",{parentName:"li"},"tasks")," and a ",(0,l.kt)("inlineCode",{parentName:"li"},"counter")," that shows the total amount of tasks."),(0,l.kt)("li",{parentName:"ul"},"The list can be expanded or collapsed and has property ",(0,l.kt)("inlineCode",{parentName:"li"},"isExpanded"),"."),(0,l.kt)("li",{parentName:"ul"},"Gets tasks as array from endpoint ",(0,l.kt)("em",{parentName:"li"},"tasks/get"),".")),(0,l.kt)("h3",{id:"what-is-global-and-what-is-local"},"What is global and what is local?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"counter")," property is a part of ",(0,l.kt)("strong",{parentName:"li"},"local")," state of each view. The counter value is specific for each view."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"isExpanded")," property is also part of ",(0,l.kt)("strong",{parentName:"li"},"local")," state. Both lists can be expanded/collapsed but this status isn't shared between them and they don't care about this status of each other."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tasks")," array is a part of our app ",(0,l.kt)("strong",{parentName:"li"},"global")," state. This array needed for each view and received from the same endpoint. We don't need to load it twice. It is time to introduce a global layer to our application and move tasks array and retrieving logic there.")),(0,l.kt)("p",null,"Resources:\n",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("a",{parentName:"em",href:"https://dev.to/rxjs/research-on-reactive-ephemeral-state-in-component-oriented-frameworks-38lk"},"Research on Reactive-Ephemeral-State in component-oriented frameworks"),", Dev.to, Michael Hladky")))}m.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);