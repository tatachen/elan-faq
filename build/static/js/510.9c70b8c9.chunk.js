"use strict";(self.webpackChunkreact_faq_app=self.webpackChunkreact_faq_app||[]).push([[510],{80510:function(t,e,i){i.r(e),i.d(e,{diagram:function(){return d}});var n=i(29439),s=i(8041),r=i(69913),c=(i(97892),i(10504),i(78703),function(){var t=function(t,e,i,n){for(i=i||{},n=t.length;n--;i[t[n]]=e);return i},e=[1,3],i=[1,4],n=[1,5],s=[1,6],r=[1,10,12,14,16,18,19,20,21,22],c=[2,4],a=[1,5,10,12,14,16,18,19,20,21,22],l=[20,21,22],o=[2,7],h=[1,12],u=[1,13],y=[1,14],p=[1,15],f=[1,16],d=[1,17],g={trace:function(){},yy:{},symbols_:{error:2,start:3,eol:4,PIE:5,document:6,showData:7,line:8,statement:9,txt:10,value:11,title:12,title_value:13,acc_title:14,acc_title_value:15,acc_descr:16,acc_descr_value:17,acc_descr_multiline_value:18,section:19,NEWLINE:20,";":21,EOF:22,$accept:0,$end:1},terminals_:{2:"error",5:"PIE",7:"showData",10:"txt",11:"value",12:"title",13:"title_value",14:"acc_title",15:"acc_title_value",16:"acc_descr",17:"acc_descr_value",18:"acc_descr_multiline_value",19:"section",20:"NEWLINE",21:";",22:"EOF"},productions_:[0,[3,2],[3,2],[3,3],[6,0],[6,2],[8,2],[9,0],[9,2],[9,2],[9,2],[9,2],[9,1],[9,1],[4,1],[4,1],[4,1]],performAction:function(t,e,i,n,s,r,c){var a=r.length-1;switch(s){case 3:n.setShowData(!0);break;case 6:this.$=r[a-1];break;case 8:n.addSection(r[a-1],n.cleanupValue(r[a]));break;case 9:this.$=r[a].trim(),n.setDiagramTitle(this.$);break;case 10:this.$=r[a].trim(),n.setAccTitle(this.$);break;case 11:case 12:this.$=r[a].trim(),n.setAccDescription(this.$);break;case 13:n.addSection(r[a].substr(8)),this.$=r[a].substr(8)}},table:[{3:1,4:2,5:e,20:i,21:n,22:s},{1:[3]},{3:7,4:2,5:e,20:i,21:n,22:s},t(r,c,{6:8,7:[1,9]}),t(a,[2,14]),t(a,[2,15]),t(a,[2,16]),{1:[2,1]},t(l,o,{8:10,9:11,1:[2,2],10:h,12:u,14:y,16:p,18:f,19:d}),t(r,c,{6:18}),t(r,[2,5]),{4:19,20:i,21:n,22:s},{11:[1,20]},{13:[1,21]},{15:[1,22]},{17:[1,23]},t(l,[2,12]),t(l,[2,13]),t(l,o,{8:10,9:11,1:[2,3],10:h,12:u,14:y,16:p,18:f,19:d}),t(r,[2,6]),t(l,[2,8]),t(l,[2,9]),t(l,[2,10]),t(l,[2,11])],defaultActions:{7:[2,1]},parseError:function(t,e){if(!e.recoverable){var i=new Error(t);throw i.hash=e,i}this.trace(t)},parse:function(t){var e=this,i=[0],n=[],s=[null],r=[],c=this.table,a="",l=0,o=0,h=r.slice.call(arguments,1),u=Object.create(this.lexer),y={yy:{}};for(var p in this.yy)Object.prototype.hasOwnProperty.call(this.yy,p)&&(y.yy[p]=this.yy[p]);u.setInput(t,y.yy),y.yy.lexer=u,y.yy.parser=this,"undefined"==typeof u.yylloc&&(u.yylloc={});var f=u.yylloc;r.push(f);var d=u.options&&u.options.ranges;function g(){var t;return"number"!==typeof(t=n.pop()||u.lex()||1)&&(t instanceof Array&&(t=(n=t).pop()),t=e.symbols_[t]||t),t}"function"===typeof y.yy.parseError?this.parseError=y.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var _,m,v,b,k,x,S,w,E={};;){if(m=i[i.length-1],this.defaultActions[m]?v=this.defaultActions[m]:(null!==_&&"undefined"!=typeof _||(_=g()),v=c[m]&&c[m][_]),"undefined"===typeof v||!v.length||!v[0]){var A="";for(k in w=[],c[m])this.terminals_[k]&&k>2&&w.push("'"+this.terminals_[k]+"'");A=u.showPosition?"Parse error on line "+(l+1)+":\n"+u.showPosition()+"\nExpecting "+w.join(", ")+", got '"+(this.terminals_[_]||_)+"'":"Parse error on line "+(l+1)+": Unexpected "+(1==_?"end of input":"'"+(this.terminals_[_]||_)+"'"),this.parseError(A,{text:u.match,token:this.terminals_[_]||_,line:u.yylineno,loc:f,expected:w})}if(v[0]instanceof Array&&v.length>1)throw new Error("Parse Error: multiple actions possible at state: "+m+", token: "+_);switch(v[0]){case 1:i.push(_),s.push(u.yytext),r.push(u.yylloc),i.push(v[1]),_=null,o=u.yyleng,a=u.yytext,l=u.yylineno,f=u.yylloc;break;case 2:if(x=this.productions_[v[1]][1],E.$=s[s.length-x],E._$={first_line:r[r.length-(x||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(x||1)].first_column,last_column:r[r.length-1].last_column},d&&(E._$.range=[r[r.length-(x||1)].range[0],r[r.length-1].range[1]]),"undefined"!==typeof(b=this.performAction.apply(E,[a,o,l,y.yy,v[1],s,r].concat(h))))return b;x&&(i=i.slice(0,-1*x*2),s=s.slice(0,-1*x),r=r.slice(0,-1*x)),i.push(this.productions_[v[1]][0]),s.push(E.$),r.push(E._$),S=c[i[i.length-2]][i[i.length-1]],i.push(S);break;case 3:return!0}}return!0}},_={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,i=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var n=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var s=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===n.length?this.yylloc.first_column:0)+n[n.length-i.length].length-i[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[s[0],s[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var i,n,s;if(this.options.backtrack_lexer&&(s={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(s.yylloc.range=this.yylloc.range.slice(0))),(n=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=n.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-n[n.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],i=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack){for(var r in s)this[r]=s[r];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,i,n;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var s=this._currentRules(),r=0;r<s.length;r++)if((i=this._input.match(this.rules[s[r]]))&&(!e||i[0].length>e[0].length)){if(e=i,n=r,this.options.backtrack_lexer){if(!1!==(t=this.test_match(i,s[r])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,s[n]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return t||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,i,n){switch(i){case 0:case 1:case 3:case 4:break;case 2:return 20;case 5:return this.begin("title"),12;case 6:return this.popState(),"title_value";case 7:return this.begin("acc_title"),14;case 8:return this.popState(),"acc_title_value";case 9:return this.begin("acc_descr"),16;case 10:return this.popState(),"acc_descr_value";case 11:this.begin("acc_descr_multiline");break;case 12:case 15:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:this.begin("string");break;case 16:return"txt";case 17:return 5;case 18:return 7;case 19:return"value";case 20:return 22}},rules:[/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n\r]+)/i,/^(?:%%[^\n]*)/i,/^(?:[\s]+)/i,/^(?:title\b)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:pie\b)/i,/^(?:showData\b)/i,/^(?::[\s]*[\d]+(?:\.[\d]+)?)/i,/^(?:$)/i],conditions:{acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},title:{rules:[6],inclusive:!1},string:{rules:[15,16],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,7,9,11,14,17,18,19,20],inclusive:!0}}};function m(){this.yy={}}return g.lexer=_,m.prototype=g,g.Parser=m,new m}());c.parser=c;var a=c,l=s.A.pie,o={},h=!1,u=o,y=h,p=structuredClone(l),f={getConfig:function(){return structuredClone(p)},clear:function(){u=structuredClone(o),y=h,(0,s.t)()},setDiagramTitle:s.q,getDiagramTitle:s.r,setAccTitle:s.s,getAccTitle:s.g,setAccDescription:s.b,getAccDescription:s.a,addSection:function(t,e){t=(0,s.d)(t,(0,s.c)()),void 0===u[t]&&(u[t]=e,s.l.debug("added new section: ".concat(t,", with value: ").concat(e)))},getSections:function(){return u},cleanupValue:function(t){return":"===t.substring(0,1)&&(t=t.substring(1).trim()),Number(t.trim())},setShowData:function(t){y=t},getShowData:function(){return y}},d={parser:a,db:f,renderer:{draw:function(t,e,i,c){var a,l,o,h;s.l.debug("rendering pie chart\n"+t);var u=c.db,y=(0,s.c)(),p=(0,s.B)(u.getConfig(),y.pie),f=450,d=null!==(a=null==(h=null==(o=document.getElementById(e))?void 0:o.parentElement)?void 0:h.offsetWidth)&&void 0!==a?a:p.useWidth,g=(0,s.z)(e);g.attr("viewBox","0 0 ".concat(d," ").concat(f)),(0,s.i)(g,f,d,p.useMaxWidth);var _=18,m=g.append("g");m.attr("transform","translate("+d/2+",225)");var v=y.themeVariables,b=(0,s.C)(v.pieOuterStrokeWidth),k=(0,n.Z)(b,1)[0];null!==(l=k)&&void 0!==l||(k=2);var x=p.textPosition,S=Math.min(d,f)/2-40,w=(0,r.Nb1)().innerRadius(0).outerRadius(S),E=(0,r.Nb1)().innerRadius(S*x).outerRadius(S*x);m.append("circle").attr("cx",0).attr("cy",0).attr("r",S+k/2).attr("class","pieOuterCircle");var A=u.getSections(),T=function(t){var e=Object.entries(t).map((function(t){return{label:t[0],value:t[1]}})).sort((function(t,e){return e.value-t.value}));return(0,r.ve8)().value((function(t){return t.value}))(e)}(A),I=[v.pie1,v.pie2,v.pie3,v.pie4,v.pie5,v.pie6,v.pie7,v.pie8,v.pie9,v.pie10,v.pie11,v.pie12],O=(0,r.PKp)(I);m.selectAll("mySlices").data(T).enter().append("path").attr("d",w).attr("fill",(function(t){return O(t.data.label)})).attr("class","pieCircle");var C=0;Object.keys(A).forEach((function(t){C+=A[t]})),m.selectAll("mySlices").data(T).enter().append("text").text((function(t){return(t.data.value/C*100).toFixed(0)+"%"})).attr("transform",(function(t){return"translate("+E.centroid(t)+")"})).style("text-anchor","middle").attr("class","slice"),m.append("text").text(u.getDiagramTitle()).attr("x",0).attr("y",-200).attr("class","pieTitleText");var D=m.selectAll(".legend").data(O.domain()).enter().append("g").attr("class","legend").attr("transform",(function(t,e){return"translate(216,"+(22*e-22*O.domain().length/2)+")"}));D.append("rect").attr("width",_).attr("height",_).style("fill",O).style("stroke",O),D.data(T).append("text").attr("x",22).attr("y",14).text((function(t){var e=t.data,i=e.label,n=e.value;return u.getShowData()?"".concat(i," [").concat(n,"]"):i}))}},styles:function(t){return"\n  .pieCircle{\n    stroke: ".concat(t.pieStrokeColor,";\n    stroke-width : ").concat(t.pieStrokeWidth,";\n    opacity : ").concat(t.pieOpacity,";\n  }\n  .pieOuterCircle{\n    stroke: ").concat(t.pieOuterStrokeColor,";\n    stroke-width: ").concat(t.pieOuterStrokeWidth,";\n    fill: none;\n  }\n  .pieTitleText {\n    text-anchor: middle;\n    font-size: ").concat(t.pieTitleTextSize,";\n    fill: ").concat(t.pieTitleTextColor,";\n    font-family: ").concat(t.fontFamily,";\n  }\n  .slice {\n    font-family: ").concat(t.fontFamily,";\n    fill: ").concat(t.pieSectionTextColor,";\n    font-size:").concat(t.pieSectionTextSize,";\n    // fill: white;\n  }\n  .legend text {\n    fill: ").concat(t.pieLegendTextColor,";\n    font-family: ").concat(t.fontFamily,";\n    font-size: ").concat(t.pieLegendTextSize,";\n  }\n")}}}}]);
//# sourceMappingURL=510.9c70b8c9.chunk.js.map