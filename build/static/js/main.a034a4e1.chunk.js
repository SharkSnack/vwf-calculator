(this["webpackJsonpvwf-calculator"]=this["webpackJsonpvwf-calculator"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('{"a":8,"b":9,"c":8,"d":9,"e":9,"f":9,"g":8,"h":8,"i":4,"j":6,"k":8,"l":3,"m":10,"n":8,"o":9,"p":9,"q":8,"r":7,"s":8,"t":8,"u":8,"v":9,"w":11,"x":10,"y":10,"z":10,"A":10,"B":9,"C":9,"D":9,"E":9,"F":8,"G":10,"H":9,"I":3,"J":7,"K":10,"L":9,"M":10,"N":10,"O":10,"P":9,"Q":10,"R":9,"S":10,"T":10,"U":9,"V":10,"W":11,"X":10,"Y":11,"Z":10," ":4,":":5,"!":4,"?":9,"\\"":7,"-":9,"~":11,"\'":4,",":6,".":4,"_tab1":2,"_tab2":19,"_window":314}')},11:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(4),s=n(5),i=n(7),c=n(6),l=n(1),o=n.n(l),h=n(8),u=n.n(h),j=(n(16),n(9)),b=n(10),d=n(0),p=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"renderPreview",value:function(){var e=[];if("shiren4"===this.props.game){var t,n=Object(r.a)(this.props.text);try{for(n.s();!(t=n.n()).done;){var a=t.value;if("\n"===a){e.push("<br/>");for(var s=0;s<4;s++)e.push('<img class="glyph" src="./font/shiren4/32.png" />')}else e.push('<img class="glyph" src="./font/shiren4/'.concat(a.charCodeAt(0),'.png" />'))}}catch(i){n.e(i)}finally{n.f()}}return e.join("\n")}},{key:"render",value:function(){return"shiren4"===this.props.game?Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Preview:"}),Object(d.jsx)("div",{className:"shiren4Preview",dangerouslySetInnerHTML:{__html:this.renderPreview()}})]}):null}}]),n}(o.a.Component),f=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={game:"",textArea:"",charCount:0,lookupObj:{},widths:[]},r}return Object(s.a)(n,[{key:"handlePresetClick",value:function(e){var t={};switch(e){case"shiren2":t=j;break;case"shiren4":t=b}this.setState({game:e,lookupObj:t})}},{key:"handleFileUpload",value:function(e){var t=this,n=new FileReader;n.readAsText(e.target.files[0],"UTF-8"),n.onload=function(e){try{t.setState({lookupObj:JSON.parse(e.target.result)})}catch(e){alert("Error parsing widths file.\n\nIs it in JSON format?")}},this.setState({game:""})}},{key:"handleTextAreaChange",value:function(e){function t(e,t){var n,a=0,s=Object(r.a)(t);try{for(s.s();!(n=s.n()).done;){a+=e[n.value]}}catch(i){s.e(i)}finally{s.f()}return a}var n,a=e.target.value.split("\n"),s=[],i=Object(r.a)(a);try{for(i.s();!(n=i.n()).done;){var c=n.value;s.push(t(this.state.lookupObj,c))}}catch(l){i.e(l)}finally{i.f()}this.setState({textArea:e.target.value,charCount:e.target.value.length,widths:s})}},{key:"render",value:function(){var e=this,t=this.state.game,n=this.state.textArea,r=this.state.charCount,a=this.state.widths.join("\n");return Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{children:"- Variable Width Font Calculator (v1.0) -"}),Object(d.jsx)("span",{children:"Preset: "}),Object(d.jsx)("button",{onClick:function(){return e.handlePresetClick("shiren2")},children:"Shiren 2"}),Object(d.jsx)("button",{onClick:function(){return e.handlePresetClick("shiren4")},children:"Shiren 4"}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{children:"Custom: "}),Object(d.jsx)("input",{type:"file",onChange:function(t){return e.handleFileUpload(t)}}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("textarea",{cols:"56",rows:"10",onChange:function(t){return e.handleTextAreaChange(t)}}),Object(d.jsx)("br",{}),Object(d.jsx)(p,{text:n,game:t}),Object(d.jsxs)("p",{children:["Result (",Object(d.jsx)("span",{children:r})," chars):"]}),Object(d.jsx)("pre",{children:a})]})}}]),n}(o.a.Component);u.a.render(Object(d.jsx)(f,{}),document.getElementById("root"))},16:function(e,t,n){},9:function(e){e.exports=JSON.parse('{"0":7,"1":7,"2":7,"3":7,"4":7,"5":7,"6":7,"7":7,"8":7,"9":7," ":3,"!":3,"\\"":12,"#":6,"$":6,"%":11,"&":7,"\'":2,"(":6,")":6,"*":7,"+":7,",":2,"-":7,".":2,"/":8,":":4,";":4,"<":6,">":6,"?":7,"@":6,"A":9,"B":7,"C":8,"D":8,"E":7,"F":7,"G":9,"H":7,"I":3,"J":5,"K":8,"L":7,"M":9,"N":7,"O":9,"P":7,"Q":9,"R":8,"S":7,"T":7,"U":7,"V":9,"W":11,"X":8,"Y":9,"Z":8,"[":4,"\\\\":6,"]":7,"^":6,"_":6,"`":6,"a":6,"b":6,"c":5,"d":6,"e":6,"f":4,"g":6,"h":6,"i":1,"j":3,"k":6,"l":1,"m":9,"n":6,"o":6,"p":6,"q":6,"r":4,"s":5,"t":4,"u":6,"v":7,"w":9,"x":6,"y":7,"z":6,"{":6,"|":1,"}":6,"~":11}')}},[[11,1,2]]]);
//# sourceMappingURL=main.a034a4e1.chunk.js.map