"use strict";(self.webpackChunkrx_angular=self.webpackChunkrx_angular||[]).push([[4805],{1967:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var r=a(7462),n=a(3366),p=(a(7294),a(3905)),o=["components"],i={title:"update"},l=void 0,u={unversionedId:"cdk/api/transformation-helpers/array/update",id:"cdk/api/transformation-helpers/array/update",title:"update",description:"update",source:"@site/docs/cdk/api/transformation-helpers/array/update.md",sourceDirName:"cdk/api/transformation-helpers/array",slug:"/cdk/api/transformation-helpers/array/update",permalink:"/docs/cdk/api/transformation-helpers/array/update",draft:!1,editUrl:"https://github.com/rx-angular/rx-angular/edit/main/docs/cdk/api/transformation-helpers/array/update.md",tags:[],version:"current",frontMatter:{title:"update"},sidebar:"docs",previous:{title:"toDictionary",permalink:"/docs/cdk/api/transformation-helpers/array/to-dictionary"},next:{title:"deleteProp",permalink:"/docs/cdk/api/transformation-helpers/object/delete-prop"}},s={},d=[{value:"update",id:"update",level:2},{value:"Edge cases",id:"edge-cases",level:3},{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:3},{value:"source",id:"source",level:4},{value:"typeof: T[]",id:"typeof-t",level:6},{value:"updates",id:"updates",level:4},{value:"typeof: Partial&lt;T&gt;[] | Partial&lt;T&gt;",id:"typeof-partialt--partialt",level:6},{value:"compare",id:"compare",level:4},{value:"typeof: ComparableData&lt;T&gt;",id:"typeof-comparabledatat",level:6}],c={toc:d};function m(e){var t=e.components,a=(0,n.Z)(e,o);return(0,p.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"update"},"update"),(0,p.kt)("p",null,"Updates one or multiple items in an array T[].\nFor comparison you can provide key, array of keys or a custom comparison function that should return true if items match.\nIf no comparison is provided, an equality check is used by default.\nReturns a shallow copy of the array T[] and updated items, does not mutate the original array."),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"Example")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"// Update with comparison function\n\nconst creatures = [\n  { id: 1, type: 'cat' },\n  { id: 2, type: 'dog' },\n];\n\nconst newCat = { id: 1, type: 'lion' };\n\nconst updatedCreatures = update(creatures, newCat, (a, b) => a.id === b.id);\n\n// updatedCreatures will be:\n// [{id: 1, type: 'lion'}, {id: 2, type: 'dog'}];\n")),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"Example")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"// Update with key\n\nconst creatures = [\n  { id: 1, type: 'cat' },\n  { id: 2, type: 'dog' },\n];\n\nconst newCat = { id: 1, type: 'lion' };\n\nconst updatedCreatures = update(creatures, newCat, 'id');\n\n// updatedCreatures will be:\n// [{id: 1, type: 'lion'}, {id: 2, type: 'dog'}];\n")),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"Example")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"// Update with array of keys\n\nconst creatures = [\n  { id: 1, type: 'cat', name: 'Bella' },\n  { id: 2, type: 'dog', name: 'Sparky' },\n];\n\nconst newCat = { id: 1, type: 'lion', name: 'Bella' };\n\nconst updatedCreatures = update(creatures, newCat, ['id', 'name']);\n\n// updatedCreatures will be:\n// [{id: 1, type: 'lion', name: 'Bella'}, {id: 2, type: 'dog', name: 'Sparky'}];\n")),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"Example")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"// Usage with RxState\n\nexport class ListComponent {\n  readonly updateCreature$ = new Subject<Creature>();\n\n  constructor(private state: RxState<ComponentState>) {\n    // Reactive implementation\n    state.connect(\n      'creatures',\n      this.updateCreature$,\n      ({ creatures }, creatureToUpdate) => {\n        return update(creatures, creatureToUpdate, (a, b) => a.id === b.id);\n      }\n    );\n  }\n\n  // Imperative implementation\n  updateCreature(creatureToUpdate: Creature): void {\n    this.state.set({\n      creatures: update(\n        this.state.get().creatures,\n        creatureToUpdate,\n        (a, b) => a.id === b.id\n      ),\n    });\n  }\n}\n")),(0,p.kt)("h3",{id:"edge-cases"},"Edge cases"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"update(null as any, items) > items;\nupdate(items, null as any) > items;\nupdate(null as any, null as any) > null;\nupdate(undefined as any, undefined as any) > undefined;\nupdate(nonArray as any, items) > items;\n")),(0,p.kt)("h3",{id:"signature"},"Signature"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"function update<T extends object>(\n  source: T[],\n  updates: Partial<T>[] | Partial<T>,\n  compare?: ComparableData<T>\n): T[];\n")),(0,p.kt)("h3",{id:"parameters"},"Parameters"),(0,p.kt)("h4",{id:"source"},"source"),(0,p.kt)("h6",{id:"typeof-t"},"typeof: T[]"),(0,p.kt)("h4",{id:"updates"},"updates"),(0,p.kt)("h6",{id:"typeof-partialt--partialt"},"typeof: Partial","<","T",">","[] | Partial","<","T",">"),(0,p.kt)("h4",{id:"compare"},"compare"),(0,p.kt)("h6",{id:"typeof-comparabledatat"},"typeof: ComparableData","<","T",">"))}m.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(a),m=n,y=c["".concat(l,".").concat(m)]||c[m]||d[m]||p;return a?r.createElement(y,o(o({ref:t},s),{},{components:a})):r.createElement(y,o({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,o=new Array(p);o[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<p;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"}}]);