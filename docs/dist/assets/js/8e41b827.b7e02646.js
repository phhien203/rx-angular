"use strict";(self.webpackChunkrx_angular=self.webpackChunkrx_angular||[]).push([[1397],{4029:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>y});var n=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],c={title:"dictionaryToArray"},p=void 0,s={unversionedId:"cdk/api/transformation-helpers/object/dictionary-to-array",id:"cdk/api/transformation-helpers/object/dictionary-to-array",title:"dictionaryToArray",description:"dictionaryToArray",source:"@site/docs/cdk/api/transformation-helpers/object/dictionary-to-array.md",sourceDirName:"cdk/api/transformation-helpers/object",slug:"/cdk/api/transformation-helpers/object/dictionary-to-array",permalink:"/docs/cdk/api/transformation-helpers/object/dictionary-to-array",draft:!1,editUrl:"https://github.com/rx-angular/rx-angular/edit/main/docs/cdk/api/transformation-helpers/object/dictionary-to-array.md",tags:[],version:"current",frontMatter:{title:"dictionaryToArray"},sidebar:"docs",previous:{title:"deleteProp",permalink:"/docs/cdk/api/transformation-helpers/object/delete-prop"},next:{title:"patch",permalink:"/docs/cdk/api/transformation-helpers/object/patch"}},l={},y=[{value:"dictionaryToArray",id:"dictionarytoarray",level:2},{value:"Edge cases",id:"edge-cases",level:3},{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:3},{value:"dictionary",id:"dictionary",level:4},{value:"typeof: { key: string: T }",id:"typeof--key-string-t-",level:6}],d={toc:y};function u(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"dictionarytoarray"},"dictionaryToArray"),(0,i.kt)("p",null,"Converts a dictionary of type {","[key: string]",": T} to array T[]."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const creaturesDictionary = {\n  '1': { id: 1, type: 'cat' },\n  '2': { id: 2, type: 'dog' },\n  '3': { id: 3, type: 'parrot' },\n};\n\nconst creaturesArray = dictionaryToArray(creaturesDictionary);\n\n// creaturesArray will be:\n// [{id: 1, type: 'cat'}, {id: 2, type: 'dog'}, {id: 3, type: 'parrot'}];\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// Usage with RxState\n\nexport class ListComponent {\n  readonly removeName$ = new Subject();\n\n  constructor(private state: RxState<ComponentState>, private api: ApiService) {\n    // Reactive implementation\n    state.connect(\n      'creatures',\n      this.api.creaturesDictionary$,\n      (_, creatures) => {\n        return dictionaryToArray(creatures);\n      }\n    );\n  }\n\n  // Imperative implementation\n  removeName(): void {\n    this.api.creaturesDictionary$\n      .pipe\n      // subscription handling logic\n      ()\n      .subscribe((dictionary) =>\n        this.set({ creatures: dictionaryToArray(dictionary) })\n      );\n  }\n}\n")),(0,i.kt)("h3",{id:"edge-cases"},"Edge cases"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"dictionaryToArray({}) > [];\ndictionaryToArray(null as any) > null;\ndictionaryToArray(undefined as any) > undefined;\ndictionaryToArray(nonObject) > [];\ndictionaryToArray([1, 2, 3] as any) > [];\n")),(0,i.kt)("h3",{id:"signature"},"Signature"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"function dictionaryToArray<T>(dictionary: { [key: string]: T }): T[];\n")),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("h4",{id:"dictionary"},"dictionary"),(0,i.kt)("h6",{id:"typeof--key-string-t-"},"typeof: { ","[key: string]",": T }"))}u.isMDXComponent=!0},3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>u});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(t),u=a,m=d["".concat(p,".").concat(u)]||d[u]||y[u]||i;return t?n.createElement(m,o(o({ref:r},l),{},{components:t})):n.createElement(m,o({ref:r},l))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);