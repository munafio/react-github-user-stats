(this["webpackJsonpreact-github-user-stats-example"]=this["webpackJsonpreact-github-user-stats-example"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(2),u=n.n(l),o=(n(10),n(1));function c(e,t,n,a){return new(n||(n=Promise))((function(r,l){function u(e){try{c(a.next(e))}catch(t){l(t)}}function o(e){try{c(a.throw(e))}catch(t){l(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,o)}c((a=a.apply(e,t||[])).next())}))}function i(e,t){var n,a,r,l,u={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return l={next:o(0),throw:o(1),return:o(2)},"function"===typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function o(l){return function(o){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,a&&(r=2&l[0]?a.return:l[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,l[1])).done)return r;switch(a=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return u.label++,{value:l[1],done:!1};case 5:u.label++,a=l[1],l=[0];continue;case 7:l=u.ops.pop(),u.trys.pop();continue;default:if(!(r=(r=u.trys).length>0&&r[r.length-1])&&(6===l[0]||2===l[0])){u=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){u.label=l[1];break}if(6===l[0]&&u.label<r[1]){u.label=r[1],r=l;break}if(r&&u.label<r[2]){u.label=r[2],u.ops.push(l);break}r[2]&&u.ops.pop(),u.trys.pop();continue}l=t.call(e,u)}catch(o){l=[6,o],a=0}finally{n=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,o])}}}var s="https://api.github.com/users",d=function(e,t){return void 0===t&&(t=100),new Promise((function(n,a){fetch(s+"/"+e+"/repos?per_page="+t).then((function(e){e.json().then((function(e){e||a("Data not found!");var t=e.reduce((function(e,t){return e+t.stargazers_count}),0);n(t)}))})).catch(a)}))},m=function(e,t){return void 0===t&&(t=100),new Promise((function(n,a){fetch(s+"/"+e+"/repos?per_page="+t).then((function(e){e.json().then((function(e){e||a("Data not found!");var t=e.reduce((function(e,t){return e+t.forks}),0);n(t)}))})).catch(a)}))},v=function(e){return new Promise((function(t,n){fetch(s+"/"+e).then((function(e){e.json().then((function(e){t(e)}))})).catch(n)}))};function f(e,t){var n=this;void 0===t&&(t=100);var r=Object(a.useState)(!1),l=r[0],u=r[1],o=Object(a.useState)(""),s=o[0],f=o[1],h=Object(a.useState)(null),p=h[0],E=h[1];return Object(a.useEffect)((function(){c(n,void 0,void 0,(function(){var n,a,r,l,o;return i(this,(function(c){switch(c.label){case 0:if(!e)return f("Missing parameter `username` on `useGithubStats` hook!"),[2];u(!0),c.label=1;case 1:return c.trys.push([1,5,,6]),[4,v(e)];case 2:return n=c.sent(),[4,d(e,t)];case 3:return a=c.sent(),[4,m(e,t)];case 4:return r=c.sent(),E({id:null===n||void 0===n?void 0:n.id,name:null===n||void 0===n?void 0:n.name,username:e,avatar_url:null===n||void 0===n?void 0:n.avatar_url,url:null===n||void 0===n?void 0:n.html_url,type:null===n||void 0===n?void 0:n.type,company:null===n||void 0===n?void 0:n.company,website:null===n||void 0===n?void 0:n.blog,location:null===n||void 0===n?void 0:n.location,email:null===n||void 0===n?void 0:n.email,bio:null===n||void 0===n?void 0:n.bio,twitter_username:null===n||void 0===n?void 0:n.twitter_username,public_repos:null===n||void 0===n?void 0:n.public_repos,public_gists:null===n||void 0===n?void 0:n.public_gists,followers:null===n||void 0===n?void 0:n.followers,following:null===n||void 0===n?void 0:n.following,total_stars:a,total_forks:r,created_at:null===n||void 0===n?void 0:n.created_at,updated_at:null===n||void 0===n?void 0:n.updated_at}),[3,6];case 5:return l=c.sent(),o=l,console.log(o),f((null===o||void 0===o?void 0:o.message)||"An error occurred while fetching user' data"),[3,6];case 6:return u(!1),[2]}}))}))}),[e,t]),{error:s,loading:l,userData:p}}function h(e){var t=e.user;return r.a.createElement("div",{className:"stats"},r.a.createElement("div",null,r.a.createElement("h1",null,t.followers),r.a.createElement("h3",null,"Followers")),r.a.createElement("div",null,r.a.createElement("h1",null,t.following),r.a.createElement("h3",null,"Following")),r.a.createElement("div",null,r.a.createElement("h1",null,t.public_gists),r.a.createElement("h3",null,"Gists")),r.a.createElement("div",null,r.a.createElement("h1",null,t.public_repos),r.a.createElement("h3",null,"Repos")),r.a.createElement("div",null,r.a.createElement("h1",null,t.total_stars),r.a.createElement("h3",null,"Stars")),r.a.createElement("div",null,r.a.createElement("h1",null,t.total_forks),r.a.createElement("h3",null,"Forks")))}function p(e){var t=e.user;return r.a.createElement("div",{className:"avatar",style:{background:"url(".concat(t.avatar_url,") center center no-repeat"),backgroundSize:"cover"}})}function E(e){return r.a.createElement("div",{className:"dataViewer"},r.a.createElement("h3",{style:{marginTop:0}},"Returned user's data object:"),r.a.createElement("pre",null,JSON.stringify(e,null,2)))}function b(e){var t=e.onChange,n=void 0===t?function(){return!1}:t,l=e.value,u=Object(a.useState)(l),c=Object(o.a)(u,2),i=c[0],s=c[1];return r.a.createElement("div",{className:"navbar"},r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Enter Github username",onChange:function(e){s(e.target.value.trim())},value:i}),r.a.createElement("button",{onClick:function(e){e.preventDefault(),n(i)}},"fetch")),r.a.createElement("div",null,r.a.createElement("a",{href:"https://github.com/munafio/react-github-user-stats"},"View on Github")))}var g=function(){var e=Object(a.useState)("munafio"),t=Object(o.a)(e,2),n=t[0],l=t[1],u=f(n),c=u.error,i=u.loading,s=u.userData;return i?r.a.createElement("h1",null,"Loading data.."):c?r.a.createElement("h1",null,"ERROR: ",c):s?r.a.createElement("div",{className:"container"},r.a.createElement(b,{onChange:function(e){return l(e)},value:n}),r.a.createElement("div",{className:"info-card"},r.a.createElement(p,{user:s}),r.a.createElement("h1",null,r.a.createElement("a",{className:"name",href:s.url,target:"_blank"},s.name)),r.a.createElement("h2",{className:"username"},"@",s.username),r.a.createElement(h,{user:s}),r.a.createElement("p",null,"Bio: ",s.bio||"--"),r.a.createElement("p",null,"\ud83c\udfe0 ",s.location||"--"),r.a.createElement("p",null,"\ud83d\ude80 ",s.website||"--"),r.a.createElement("p",null,"\ud83c\udf0d ",s.company||"--"),r.a.createElement("p",null,"\ud83d\udc24 Twitter @",s.twitter_username||"--"),r.a.createElement("p",{className:"createdAt"},"This Github account was created at ",r.a.createElement("span",null,s.created_at))),r.a.createElement(E,{data:s})):r.a.createElement("h1",null,"Not found!")};u.a.render(r.a.createElement(g,null),document.getElementById("root"))},3:function(e,t,n){e.exports=n(11)}},[[3,1,2]]]);
//# sourceMappingURL=main.1343a436.chunk.js.map