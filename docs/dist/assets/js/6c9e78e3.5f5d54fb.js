"use strict";(self.webpackChunkrx_angular=self.webpackChunkrx_angular||[]).push([[6691],{8966:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),p=["components"],l={title:"setProp"},s=void 0,c={unversionedId:"cdk/api/transformation-helpers/object/set-prop",id:"cdk/api/transformation-helpers/object/set-prop",title:"setProp",description:"setProp",source:"@site/docs/cdk/api/transformation-helpers/object/set-prop.md",sourceDirName:"cdk/api/transformation-helpers/object",slug:"/cdk/api/transformation-helpers/object/set-prop",permalink:"/docs/cdk/api/transformation-helpers/object/set-prop",draft:!1,editUrl:"https://github.com/rx-angular/rx-angular/edit/main/docs/cdk/api/transformation-helpers/object/set-prop.md",tags:[],version:"current",frontMatter:{title:"setProp"},sidebar:"docs",previous:{title:"patch",permalink:"/docs/cdk/api/transformation-helpers/object/patch"},next:{title:"slice",permalink:"/docs/cdk/api/transformation-helpers/object/slice"}},i={},u=[{value:"setProp",id:"setprop",level:2},{value:"Edge cases",id:"edge-cases",level:3},{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:3},{value:"object",id:"object",level:4},{value:"typeof: T",id:"typeof-t",level:6},{value:"key",id:"key",level:4},{value:"typeof: K",id:"typeof-k",level:6},{value:"value",id:"value",level:4},{value:"typeof: TK",id:"typeof-tk",level:6}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"setprop"},"setProp"),(0,o.kt)("p",null,"Accepts an object of type T, key of type K extends keyof T, and value of type T","[K]",".\nSets the property and returns a newly updated shallow copy of an object while not mutating the original one."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const cat = { id: 1, type: 'cat', name: 'Fluffy' };\n\nconst renamedCat = setProp(cat, 'name', 'Bella');\n\n// renamedCat will be:\n// {id: 1, type: 'cat', name: 'Bella'};\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// Usage with RxState\n\nexport class ProfileComponent {\n  readonly changeName$ = new Subject<string>();\n\n  constructor(private state: RxState<ComponentState>) {\n    // Reactive implementation\n    state.connect(this.changeName$, (state, name) => {\n      return setProp(state, 'name', name);\n    });\n  }\n\n  // Imperative implementation\n  changeName(name: string): void {\n    this.state.set(setProp(this.get(), 'name', name));\n  }\n}\n")),(0,o.kt)("h3",{id:"edge-cases"},"Edge cases"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"setProp(nonObject, 'prop' as any, 42) > { prop: 42 };\nsetProp(null as any, 'prop', 42) > { prop: 42 };\nsetProp(null as any, null as any, 42) > null;\nsetProp([state], 'concat', () => []) > { concat: () => [] };\nsetProp(state, 'nonExisting' as any, 42) > { ...state, nonExisting: 42 };\nsetProp(state, null as any, 42) > state;\n")),(0,o.kt)("h3",{id:"signature"},"Signature"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function setProp<T extends object, K extends keyof T>(\n  object: T,\n  key: K,\n  value: T[K]\n): T;\n")),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("h4",{id:"object"},"object"),(0,o.kt)("h6",{id:"typeof-t"},"typeof: T"),(0,o.kt)("h4",{id:"key"},"key"),(0,o.kt)("h6",{id:"typeof-k"},"typeof: K"),(0,o.kt)("h4",{id:"value"},"value"),(0,o.kt)("h6",{id:"typeof-tk"},"typeof: T","[K]"))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},i=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,p(p({ref:t},i),{},{components:n})):r.createElement(f,p({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var c=2;c<o;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);