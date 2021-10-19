(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={Container:"Container_Container__1Jigt",App:"Container_App__5qChC"}},15:function(t,e,n){t.exports={List:"ContactsList_List__2Cg-a",Btn:"ContactsList_Btn__1oF36"}},19:function(t,e,n){t.exports={Form:"FormContacts_Form__12-qn",Btn:"FormContacts_Btn__JOEsF"}},21:function(t,e,n){t.exports={Section:"Section_Section__22LfO"}},23:function(t,e,n){t.exports={Filter:"Filter_Filter__3PiX6"}},55:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(9),o=n.n(r),i=n(4),s=n(12),u=n.n(s),l=n(2),b=function(t){var e=t.children;return Object(l.jsx)("div",{className:u.a.Container,children:e})},d=n(21),j=n.n(d),m=function(t){var e=t.title,n=t.children;return Object(l.jsxs)("section",{className:j.a.Section,children:[Object(l.jsx)("h2",{children:e}),n]})},O=n(10),h=n(20),f=(n(34),n(22)),p=n(7),x=Object(f.a)({reducerPath:"contactsApi",baseQuery:Object(p.d)({baseUrl:"https://616dbd44a83a850017caa6ef.mockapi.io/api/v1/"}),tagTypes:["Contact"],endpoints:function(t){return{fetchContacts:t.query({query:function(){return"contacts/"},providesTags:["Contact"]}),deleteContact:t.mutation({query:function(t){return{url:"contacts/".concat(t),method:"DELETE"}},invalidatesTags:["Contact"]}),createContact:t.mutation({query:function(t){return{url:"contacts/",method:"POST",body:{name:t.name,number:t.number}}},invalidatesTags:["Contact"]})}}}),C=x.useFetchContactsQuery,v=x.useDeleteContactMutation,_=x.useCreateContactMutation,g=n(19),y=n.n(g),F=function(t){var e=t.contacts,n=Object(a.useState)(""),c=Object(O.a)(n,2),r=c[0],o=c[1],i=Object(a.useState)(""),s=Object(O.a)(i,2),u=s[0],b=s[1],d=_(),j=Object(O.a)(d,1)[0],m=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":o(a);break;case"number":b(a);break;default:return}};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(h.a,{}),Object(l.jsxs)("form",{className:y.a.Form,onSubmit:function(t){if(t.preventDefault(),e.some((function(t){return t.name===r})))return h.b.error("".concat(r," is already in contacts")),o(""),void b("");j({name:r,number:u}),o(""),b("")},children:[Object(l.jsxs)("label",{children:["Name",Object(l.jsx)("input",{type:"text",name:"name",value:r,onChange:m,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(l.jsxs)("label",{children:["Number",Object(l.jsx)("input",{type:"tel",name:"number",value:u,onChange:m,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(l.jsx)("button",{type:"submit",className:y.a.Btn,children:"Add contact"})]})]})},N=n(1),k=Object(N.b)("phonebook/FilterUpdate"),w=function(t){return t.filtre.filter},A=n(23),L=n.n(A),S=function(){var t=Object(i.e)(w),e=Object(i.d)();return Object(l.jsxs)("label",{className:L.a.Filter,children:["Find contacts by name",Object(l.jsx)("input",{type:"text",name:"filter",value:t,onChange:function(t){return e(k(t.target.value))}})]})},q=n(24),B=n.n(q),T=n(15),P=n.n(T),E=function(t){var e=t.contacts,n=t.loading,a=v(),c=Object(O.a)(a,1)[0],r=function(t,e){var n=e.toLowerCase();if(t)return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}(e,Object(i.e)(w));return Object(l.jsxs)("ul",{className:P.a.List,children:[n&&Object(l.jsx)("div",{className:P.a.Loader,children:Object(l.jsx)(B.a,{type:"Puff",color:"#3f51b5",width:50})}),r&&r.map((function(t){var e=t.id,n=t.name,a=t.number;return Object(l.jsxs)("li",{children:[n,": ",a,Object(l.jsx)("button",{className:P.a.Btn,type:"button",onClick:function(){return c(e)},children:"Delete"})]},e)}))]})};var J=function(){var t=C(),e=t.data,n=t.isFetching;return Object(l.jsx)(b,{children:Object(l.jsxs)("div",{className:u.a.App,children:[Object(l.jsx)(m,{title:"Phonebook",children:Object(l.jsx)(F,{contacts:e})}),Object(l.jsxs)(m,{title:"Contacts",children:[Object(l.jsx)(S,{}),Object(l.jsx)(E,{contacts:e,loading:n})]})]})})},z=n(25),D=n(14),M=n(6),Z=Object(N.d)("",Object(D.a)({},k,(function(t,e){return e.payload}))),Q=Object(M.b)({filter:Z}),U=Object(N.a)({reducer:Object(D.a)({filtre:Q},x.reducerPath,x.reducer),middleware:function(t){return[].concat(Object(z.a)(t()),[x.middleware])},devTools:!1});n(54);o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(i.a,{store:U,children:Object(l.jsx)(J,{})})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.1dd75b22.chunk.js.map