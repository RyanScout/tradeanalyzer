"use strict";(self.webpackChunktradeanalyzer=self.webpackChunktradeanalyzer||[]).push([[9993],{5391:(t,e,n)=>{e.Z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.isImmutable,n=void 0===e?o.default:e,i=t.ignore,l=u.default.bind(null,n,i);return function(t){var e=t.getState,n=e(),o=l(n),u=void 0;return function(t){return function(i){n=e(),u=o.detectMutations(),o=l(n),(0,r.default)(!u.wasMutated,d,(u.path||[]).join("."));var s=t(i);return n=e(),u=o.detectMutations(),o=l(n),u.wasMutated&&(0,r.default)(!u.wasMutated,c,(u.path||[]).join("."),(0,a.default)(i)),s}}}};var r=i(n(1143)),a=i(n(4530)),o=i(n(8943)),u=i(n(1527));function i(t){return t&&t.__esModule?t:{default:t}}var d=["A state mutation was detected between dispatches, in the path `%s`.","This may cause incorrect behavior.","(http://redux.js.org/docs/Troubleshooting.html#never-mutate-reducer-arguments)"].join(" "),c=["A state mutation was detected inside a dispatch, in the path: `%s`.","Take a look at the reducer(s) handling the action %s.","(http://redux.js.org/docs/Troubleshooting.html#never-mutate-reducer-arguments)"].join(" ")},8943:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=function(t){return"object"!==(void 0===t?"undefined":n(t))||null==t}},1527:(t,e)=>{function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o={value:r};if(!t(r))for(var u in o.children={},r){var i=a.concat(u);e.length&&-1!==e.indexOf(i.join("."))||(o.children[u]=n(t,e,r[u],i))}return o}function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments[2],a=arguments[3],o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[],i=n?n.value:void 0,d=i===a;if(o&&!d&&!Number.isNaN(a))return{wasMutated:!0,path:u};if(t(i)||t(a))return{wasMutated:!1};var c={};Object.keys(n.children).forEach((function(t){c[t]=!0})),Object.keys(a).forEach((function(t){c[t]=!0}));for(var l=Object.keys(c),s=0;s<l.length;s++){var f=l[s],h=u.concat(f);if(!e.length||-1===e.indexOf(h.join("."))){var v=r(t,e,n.children[f],a[f],d,h);if(v.wasMutated)return v}}return{wasMutated:!1}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,a){var o=n(t,e,a);return{detectMutations:function(){return r(t,e,o,a)}}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLnJlZHV4LWltbXV0YWJsZS1zdGF0ZS1pbnZhcmlhbnQuZDcyYjkxMmI2ZjEyYmYxMDg5YTUuanMiLCJtYXBwaW5ncyI6IjhHQUtBQSxFQUFRLEVBd0JSLFdBQ0UsSUFBSUMsRUFBVUMsVUFBVUMsT0FBUyxRQUFzQkMsSUFBakJGLFVBQVUsR0FBbUJBLFVBQVUsR0FBSyxDQUFDLEVBQy9FRyxFQUF1QkosRUFBUUssWUFDL0JBLE9BQXVDRixJQUF6QkMsRUFBcUNFLEVBQWNDLFFBQVVILEVBQzNFSSxFQUFTUixFQUFRUSxPQUVqQkMsRUFBUUMsRUFBb0JILFFBQVFJLEtBQUssS0FBTU4sRUFBYUcsR0FFaEUsT0FBTyxTQUFVSSxHQUNmLElBQUlDLEVBQVdELEVBQUtDLFNBRWhCQyxFQUFRRCxJQUNSRSxFQUFVTixFQUFNSyxHQUVoQkUsT0FBUyxFQUNiLE9BQU8sU0FBVUMsR0FDZixPQUFPLFNBQVVDLEdBQ2ZKLEVBQVFELElBRVJHLEVBQVNELEVBQVFJLGtCQUVqQkosRUFBVU4sRUFBTUssSUFFaEIsRUFBSU0sRUFBWWIsVUFBVVMsRUFBT0ssV0FBWUMsR0FBNkJOLEVBQU9PLE1BQVEsSUFBSUMsS0FBSyxNQUVsRyxJQUFJQyxFQUFtQlIsRUFBS0MsR0FTNUIsT0FSQUosRUFBUUQsSUFFUkcsRUFBU0QsRUFBUUksa0JBRWpCSixFQUFVTixFQUFNSyxHQUVoQkUsRUFBT0ssYUFBYyxFQUFJRCxFQUFZYixVQUFVUyxFQUFPSyxXQUFZSyxHQUEwQlYsRUFBT08sTUFBUSxJQUFJQyxLQUFLLE1BQU0sRUFBSUcsRUFBb0JwQixTQUFTVyxJQUVwSk8sQ0FDVCxDQUNGLENBQ0YsQ0FDRixFQTVEQSxJQUVJTCxFQUFjUSxFQUZELEVBQVEsT0FNckJELEVBQXNCQyxFQUZELEVBQVEsT0FNN0J0QixFQUFnQnNCLEVBRkQsRUFBUSxPQU12QmxCLEVBQXNCa0IsRUFGRCxFQUFRLE9BSWpDLFNBQVNBLEVBQXVCQyxHQUFPLE9BQU9BLEdBQU9BLEVBQUlDLFdBQWFELEVBQU0s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QUVUbEMsRUFBQSxRQUNBLFNBQTJCTSxFQUFhRyxFQUFRcUIsR0FDOUMsSUFBSTRCLEVBQW9CbEIsRUFBZ0JsQyxFQUFhRyxFQUFRcUIsR0FDN0QsTUFBTyxDQUNMVixnQkFBaUIsV0FDZixPQUFPMkIsRUFBaUJ6QyxFQUFhRyxFQUFRaUQsRUFBbUI1QixFQUNsRSxFQUVKLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmFkZWFuYWx5emVyLy4vbm9kZV9tb2R1bGVzL3JlZHV4LWltbXV0YWJsZS1zdGF0ZS1pbnZhcmlhbnQvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly90cmFkZWFuYWx5emVyLy4vbm9kZV9tb2R1bGVzL3JlZHV4LWltbXV0YWJsZS1zdGF0ZS1pbnZhcmlhbnQvZGlzdC9pc0ltbXV0YWJsZS5qcyIsIndlYnBhY2s6Ly90cmFkZWFuYWx5emVyLy4vbm9kZV9tb2R1bGVzL3JlZHV4LWltbXV0YWJsZS1zdGF0ZS1pbnZhcmlhbnQvZGlzdC90cmFja0Zvck11dGF0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpbW11dGFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmU7XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfanNvblN0cmluZ2lmeVNhZmUgPSByZXF1aXJlKCdqc29uLXN0cmluZ2lmeS1zYWZlJyk7XG5cbnZhciBfanNvblN0cmluZ2lmeVNhZmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfanNvblN0cmluZ2lmeVNhZmUpO1xuXG52YXIgX2lzSW1tdXRhYmxlID0gcmVxdWlyZSgnLi9pc0ltbXV0YWJsZScpO1xuXG52YXIgX2lzSW1tdXRhYmxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzSW1tdXRhYmxlKTtcblxudmFyIF90cmFja0Zvck11dGF0aW9ucyA9IHJlcXVpcmUoJy4vdHJhY2tGb3JNdXRhdGlvbnMnKTtcblxudmFyIF90cmFja0Zvck11dGF0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFja0Zvck11dGF0aW9ucyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBCRVRXRUVOX0RJU1BBVENIRVNfTUVTU0FHRSA9IFsnQSBzdGF0ZSBtdXRhdGlvbiB3YXMgZGV0ZWN0ZWQgYmV0d2VlbiBkaXNwYXRjaGVzLCBpbiB0aGUgcGF0aCBgJXNgLicsICdUaGlzIG1heSBjYXVzZSBpbmNvcnJlY3QgYmVoYXZpb3IuJywgJyhodHRwOi8vcmVkdXguanMub3JnL2RvY3MvVHJvdWJsZXNob290aW5nLmh0bWwjbmV2ZXItbXV0YXRlLXJlZHVjZXItYXJndW1lbnRzKSddLmpvaW4oJyAnKTtcblxudmFyIElOU0lERV9ESVNQQVRDSF9NRVNTQUdFID0gWydBIHN0YXRlIG11dGF0aW9uIHdhcyBkZXRlY3RlZCBpbnNpZGUgYSBkaXNwYXRjaCwgaW4gdGhlIHBhdGg6IGAlc2AuJywgJ1Rha2UgYSBsb29rIGF0IHRoZSByZWR1Y2VyKHMpIGhhbmRsaW5nIHRoZSBhY3Rpb24gJXMuJywgJyhodHRwOi8vcmVkdXguanMub3JnL2RvY3MvVHJvdWJsZXNob290aW5nLmh0bWwjbmV2ZXItbXV0YXRlLXJlZHVjZXItYXJndW1lbnRzKSddLmpvaW4oJyAnKTtcblxuZnVuY3Rpb24gaW1tdXRhYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlKCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIHZhciBfb3B0aW9ucyRpc0ltbXV0YWJsZSA9IG9wdGlvbnMuaXNJbW11dGFibGUsXG4gICAgICBpc0ltbXV0YWJsZSA9IF9vcHRpb25zJGlzSW1tdXRhYmxlID09PSB1bmRlZmluZWQgPyBfaXNJbW11dGFibGUyLmRlZmF1bHQgOiBfb3B0aW9ucyRpc0ltbXV0YWJsZSxcbiAgICAgIGlnbm9yZSA9IG9wdGlvbnMuaWdub3JlO1xuXG4gIHZhciB0cmFjayA9IF90cmFja0Zvck11dGF0aW9uczIuZGVmYXVsdC5iaW5kKG51bGwsIGlzSW1tdXRhYmxlLCBpZ25vcmUpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBnZXRTdGF0ZSA9IF9yZWYuZ2V0U3RhdGU7XG5cbiAgICB2YXIgc3RhdGUgPSBnZXRTdGF0ZSgpO1xuICAgIHZhciB0cmFja2VyID0gdHJhY2soc3RhdGUpO1xuXG4gICAgdmFyIHJlc3VsdCA9IHZvaWQgMDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIHN0YXRlID0gZ2V0U3RhdGUoKTtcblxuICAgICAgICByZXN1bHQgPSB0cmFja2VyLmRldGVjdE11dGF0aW9ucygpO1xuICAgICAgICAvLyBUcmFjayBiZWZvcmUgcG90ZW50aWFsbHkgbm90IG1lZXRpbmcgdGhlIGludmFyaWFudFxuICAgICAgICB0cmFja2VyID0gdHJhY2soc3RhdGUpO1xuXG4gICAgICAgICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSghcmVzdWx0Lndhc011dGF0ZWQsIEJFVFdFRU5fRElTUEFUQ0hFU19NRVNTQUdFLCAocmVzdWx0LnBhdGggfHwgW10pLmpvaW4oJy4nKSk7XG5cbiAgICAgICAgdmFyIGRpc3BhdGNoZWRBY3Rpb24gPSBuZXh0KGFjdGlvbik7XG4gICAgICAgIHN0YXRlID0gZ2V0U3RhdGUoKTtcblxuICAgICAgICByZXN1bHQgPSB0cmFja2VyLmRldGVjdE11dGF0aW9ucygpO1xuICAgICAgICAvLyBUcmFjayBiZWZvcmUgcG90ZW50aWFsbHkgbm90IG1lZXRpbmcgdGhlIGludmFyaWFudFxuICAgICAgICB0cmFja2VyID0gdHJhY2soc3RhdGUpO1xuXG4gICAgICAgIHJlc3VsdC53YXNNdXRhdGVkICYmICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSghcmVzdWx0Lndhc011dGF0ZWQsIElOU0lERV9ESVNQQVRDSF9NRVNTQUdFLCAocmVzdWx0LnBhdGggfHwgW10pLmpvaW4oJy4nKSwgKDAsIF9qc29uU3RyaW5naWZ5U2FmZTIuZGVmYXVsdCkoYWN0aW9uKSk7XG5cbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoZWRBY3Rpb247XG4gICAgICB9O1xuICAgIH07XG4gIH07XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGlzSW1tdXRhYmxlRGVmYXVsdDtcbmZ1bmN0aW9uIGlzSW1tdXRhYmxlRGVmYXVsdCh2YWx1ZSkge1xuICByZXR1cm4gKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodmFsdWUpKSAhPT0gJ29iamVjdCcgfHwgdmFsdWUgPT09IG51bGwgfHwgdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJztcbn0iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB0cmFja0Zvck11dGF0aW9ucztcbmZ1bmN0aW9uIHRyYWNrRm9yTXV0YXRpb25zKGlzSW1tdXRhYmxlLCBpZ25vcmUsIG9iaikge1xuICB2YXIgdHJhY2tlZFByb3BlcnRpZXMgPSB0cmFja1Byb3BlcnRpZXMoaXNJbW11dGFibGUsIGlnbm9yZSwgb2JqKTtcbiAgcmV0dXJuIHtcbiAgICBkZXRlY3RNdXRhdGlvbnM6IGZ1bmN0aW9uIGRldGVjdE11dGF0aW9ucygpIHtcbiAgICAgIHJldHVybiBfZGV0ZWN0TXV0YXRpb25zKGlzSW1tdXRhYmxlLCBpZ25vcmUsIHRyYWNrZWRQcm9wZXJ0aWVzLCBvYmopO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdHJhY2tQcm9wZXJ0aWVzKGlzSW1tdXRhYmxlKSB7XG4gIHZhciBpZ25vcmUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IFtdO1xuICB2YXIgb2JqID0gYXJndW1lbnRzWzJdO1xuICB2YXIgcGF0aCA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogW107XG5cbiAgdmFyIHRyYWNrZWQgPSB7IHZhbHVlOiBvYmogfTtcblxuICBpZiAoIWlzSW1tdXRhYmxlKG9iaikpIHtcbiAgICB0cmFja2VkLmNoaWxkcmVuID0ge307XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICB2YXIgY2hpbGRQYXRoID0gcGF0aC5jb25jYXQoa2V5KTtcbiAgICAgIGlmIChpZ25vcmUubGVuZ3RoICYmIGlnbm9yZS5pbmRleE9mKGNoaWxkUGF0aC5qb2luKCcuJykpICE9PSAtMSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdHJhY2tlZC5jaGlsZHJlbltrZXldID0gdHJhY2tQcm9wZXJ0aWVzKGlzSW1tdXRhYmxlLCBpZ25vcmUsIG9ialtrZXldLCBjaGlsZFBhdGgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJhY2tlZDtcbn1cblxuZnVuY3Rpb24gX2RldGVjdE11dGF0aW9ucyhpc0ltbXV0YWJsZSkge1xuICB2YXIgaWdub3JlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBbXTtcbiAgdmFyIHRyYWNrZWRQcm9wZXJ0eSA9IGFyZ3VtZW50c1syXTtcbiAgdmFyIG9iaiA9IGFyZ3VtZW50c1szXTtcbiAgdmFyIHNhbWVQYXJlbnRSZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gNCAmJiBhcmd1bWVudHNbNF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s0XSA6IGZhbHNlO1xuICB2YXIgcGF0aCA9IGFyZ3VtZW50cy5sZW5ndGggPiA1ICYmIGFyZ3VtZW50c1s1XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzVdIDogW107XG5cbiAgdmFyIHByZXZPYmogPSB0cmFja2VkUHJvcGVydHkgPyB0cmFja2VkUHJvcGVydHkudmFsdWUgOiB1bmRlZmluZWQ7XG5cbiAgdmFyIHNhbWVSZWYgPSBwcmV2T2JqID09PSBvYmo7XG5cbiAgaWYgKHNhbWVQYXJlbnRSZWYgJiYgIXNhbWVSZWYgJiYgIU51bWJlci5pc05hTihvYmopKSB7XG4gICAgcmV0dXJuIHsgd2FzTXV0YXRlZDogdHJ1ZSwgcGF0aDogcGF0aCB9O1xuICB9XG5cbiAgaWYgKGlzSW1tdXRhYmxlKHByZXZPYmopIHx8IGlzSW1tdXRhYmxlKG9iaikpIHtcbiAgICByZXR1cm4geyB3YXNNdXRhdGVkOiBmYWxzZSB9O1xuICB9XG5cbiAgLy8gR2F0aGVyIGFsbCBrZXlzIGZyb20gcHJldiAodHJhY2tlZCkgYW5kIGFmdGVyIG9ianNcbiAgdmFyIGtleXNUb0RldGVjdCA9IHt9O1xuICBPYmplY3Qua2V5cyh0cmFja2VkUHJvcGVydHkuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGtleXNUb0RldGVjdFtrZXldID0gdHJ1ZTtcbiAgfSk7XG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAga2V5c1RvRGV0ZWN0W2tleV0gPSB0cnVlO1xuICB9KTtcblxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGtleXNUb0RldGVjdCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIHZhciBjaGlsZFBhdGggPSBwYXRoLmNvbmNhdChrZXkpO1xuICAgIGlmIChpZ25vcmUubGVuZ3RoICYmIGlnbm9yZS5pbmRleE9mKGNoaWxkUGF0aC5qb2luKCcuJykpICE9PSAtMSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdCA9IF9kZXRlY3RNdXRhdGlvbnMoaXNJbW11dGFibGUsIGlnbm9yZSwgdHJhY2tlZFByb3BlcnR5LmNoaWxkcmVuW2tleV0sIG9ialtrZXldLCBzYW1lUmVmLCBjaGlsZFBhdGgpO1xuXG4gICAgaWYgKHJlc3VsdC53YXNNdXRhdGVkKSB7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfVxuICByZXR1cm4geyB3YXNNdXRhdGVkOiBmYWxzZSB9O1xufSJdLCJuYW1lcyI6WyJleHBvcnRzIiwib3B0aW9ucyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl9vcHRpb25zJGlzSW1tdXRhYmxlIiwiaXNJbW11dGFibGUiLCJfaXNJbW11dGFibGUyIiwiZGVmYXVsdCIsImlnbm9yZSIsInRyYWNrIiwiX3RyYWNrRm9yTXV0YXRpb25zMiIsImJpbmQiLCJfcmVmIiwiZ2V0U3RhdGUiLCJzdGF0ZSIsInRyYWNrZXIiLCJyZXN1bHQiLCJuZXh0IiwiYWN0aW9uIiwiZGV0ZWN0TXV0YXRpb25zIiwiX2ludmFyaWFudDIiLCJ3YXNNdXRhdGVkIiwiQkVUV0VFTl9ESVNQQVRDSEVTX01FU1NBR0UiLCJwYXRoIiwiam9pbiIsImRpc3BhdGNoZWRBY3Rpb24iLCJJTlNJREVfRElTUEFUQ0hfTUVTU0FHRSIsIl9qc29uU3RyaW5naWZ5U2FmZTIiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0Iiwib2JqIiwiX19lc01vZHVsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfdHlwZW9mIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsInRyYWNrUHJvcGVydGllcyIsInRyYWNrZWQiLCJrZXkiLCJjaGlsZHJlbiIsImNoaWxkUGF0aCIsImNvbmNhdCIsImluZGV4T2YiLCJfZGV0ZWN0TXV0YXRpb25zIiwidHJhY2tlZFByb3BlcnR5Iiwic2FtZVBhcmVudFJlZiIsInByZXZPYmoiLCJzYW1lUmVmIiwiTnVtYmVyIiwiaXNOYU4iLCJrZXlzVG9EZXRlY3QiLCJrZXlzIiwiZm9yRWFjaCIsImkiLCJ0cmFja2VkUHJvcGVydGllcyJdLCJzb3VyY2VSb290IjoiIn0=