"use strict";(self.webpackChunkrx_angular=self.webpackChunkrx_angular||[]).push([[3889],{328:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>p,toc:()=>y});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={title:"toDictionary"},s=void 0,p={unversionedId:"cdk/api/transformation-helpers/array/to-dictionary",id:"cdk/api/transformation-helpers/array/to-dictionary",title:"toDictionary",description:"toDictionary",source:"@site/docs/cdk/api/transformation-helpers/array/to-dictionary.md",sourceDirName:"cdk/api/transformation-helpers/array",slug:"/cdk/api/transformation-helpers/array/to-dictionary",permalink:"/docs/cdk/api/transformation-helpers/array/to-dictionary",draft:!1,editUrl:"https://github.com/rx-angular/rx-angular/edit/main/docs/cdk/api/transformation-helpers/array/to-dictionary.md",tags:[],version:"current",frontMatter:{title:"toDictionary"},sidebar:"docs",previous:{title:"remove",permalink:"/docs/cdk/api/transformation-helpers/array/remove"},next:{title:"update",permalink:"/docs/cdk/api/transformation-helpers/array/update"}},l={},y=[{value:"toDictionary",id:"todictionary",level:2},{value:"Edge cases",id:"edge-cases",level:3},{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:3},{value:"source",id:"source",level:4},{value:"typeof: T[]",id:"typeof-t",level:6},{value:"key",id:"key",level:4},{value:"typeof: | OnlyKeysOfSpecificType&lt;T, number&gt;",id:"typeof--onlykeysofspecifictypet-number",level:6}],u={toc:y};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"todictionary"},"toDictionary"),(0,i.kt)("p",null,"Converts an array of objects to a dictionary {","[key: string]",": T}.\nAccepts array T[] and key of type string, number or symbol as inputs."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const creatures = [\n  { id: 1, type: 'cat' },\n  { id: 2, type: 'dog' },\n  { id: 3, type: 'parrot' },\n];\n\nconst creaturesDictionary = toDictionary(creatures, 'id');\n\n// creaturesDictionary will be:\n// {\n//  1: {id: 1, type: 'cat'},\n//  2: {id: 2, type: 'dog'},\n//  3: {id: 3, type: 'parrot'}\n// };\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// Usage with RxState\n\nexport class ListComponent {\n\n   readonly convertToDictionary$ = new Subject();\n\n   constructor(private state: RxState<ComponentState>) {\n     // Reactive implementation\n     state.connect(\n       'creaturesDictionary',\n       this.convertToDictionary$,\n       ({ creatures }) => {\n           return toDictionary(creatures, 'id');\n       }\n     );\n   }\n\n   // Imperative implementation\n   convertToDictionary(): void {\n       this.state.set({ creaturesDictionary: toDictionary(this.state.get().creatures, 'id'});\n   }\n}\n")),(0,i.kt)("h3",{id:"edge-cases"},"Edge cases"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"toDictionary([] as any, 'nonExistingKey') > {};\ntoDictionary(items, 'nonExistingKey') > {};\ntoDictionary(items, 'nonPrimitiveKey' as any) > {};\ntoDictionary(items, null as any) > {};\ntoDictionary(nonObject as any, '') > nonObject;\ntoDictionary(null as any, '') > null;\ntoDictionary(undefined as any, '') > undefined;\n")),(0,i.kt)("h3",{id:"signature"},"Signature"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"function toDictionary<T extends object>(\n  source: T[],\n  key:\n    | OnlyKeysOfSpecificType<T, number>\n    | OnlyKeysOfSpecificType<T, string>\n    | OnlyKeysOfSpecificType<T, symbol>\n): { [key: string]: T };\n")),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("h4",{id:"source"},"source"),(0,i.kt)("h6",{id:"typeof-t"},"typeof: T[]"),(0,i.kt)("h4",{id:"key"},"key"),(0,i.kt)("h6",{id:"typeof--onlykeysofspecifictypet-number"},"typeof: | OnlyKeysOfSpecificType","<","T, number",">"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," | OnlyKeysOfSpecificType&#60;T, string&#62;\n | OnlyKeysOfSpecificType&#60;T, symbol&#62;\n")))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(s,".").concat(d)]||u[d]||y[d]||i;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);