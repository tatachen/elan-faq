"use strict";(self.webpackChunkreact_faq_app=self.webpackChunkreact_faq_app||[]).push([[293],{9293:function(t,e,c){c.r(e),c.d(e,{diagram:function(){return z}});var a=c(37762),r=c(1413),n=c(8041),i=c(69913),o=(c(97892),c(10504),c(78703),function(){var t=function(t,e,c,a){for(c=c||{},a=t.length;a--;c[t[a]]=e);return c},e=[1,3],c=[1,6],a=[1,4],r=[1,5],n=[2,5],i=[1,12],o=[5,7,13,19,21,23,24,26,28,31,36,39,46],s=[7,13,19,21,23,24,26,28,31,36,39],l=[7,12,13,19,21,23,24,26,28,31,36,39],h=[7,13,46],m=[1,42],u=[1,41],y=[7,13,29,32,34,37,46],p=[1,55],g=[1,56],b=[1,57],d=[7,13,32,34,41,46],f={trace:function(){},yy:{},symbols_:{error:2,start:3,eol:4,GG:5,document:6,EOF:7,":":8,DIR:9,options:10,body:11,OPT:12,NL:13,line:14,statement:15,commitStatement:16,mergeStatement:17,cherryPickStatement:18,acc_title:19,acc_title_value:20,acc_descr:21,acc_descr_value:22,acc_descr_multiline_value:23,section:24,branchStatement:25,CHECKOUT:26,ref:27,BRANCH:28,ORDER:29,NUM:30,CHERRY_PICK:31,COMMIT_ID:32,STR:33,COMMIT_TAG:34,EMPTYSTR:35,MERGE:36,COMMIT_TYPE:37,commitType:38,COMMIT:39,commit_arg:40,COMMIT_MSG:41,NORMAL:42,REVERSE:43,HIGHLIGHT:44,ID:45,";":46,$accept:0,$end:1},terminals_:{2:"error",5:"GG",7:"EOF",8:":",9:"DIR",12:"OPT",13:"NL",19:"acc_title",20:"acc_title_value",21:"acc_descr",22:"acc_descr_value",23:"acc_descr_multiline_value",24:"section",26:"CHECKOUT",28:"BRANCH",29:"ORDER",30:"NUM",31:"CHERRY_PICK",32:"COMMIT_ID",33:"STR",34:"COMMIT_TAG",35:"EMPTYSTR",36:"MERGE",37:"COMMIT_TYPE",39:"COMMIT",41:"COMMIT_MSG",42:"NORMAL",43:"REVERSE",44:"HIGHLIGHT",45:"ID",46:";"},productions_:[0,[3,2],[3,3],[3,4],[3,5],[6,0],[6,2],[10,2],[10,1],[11,0],[11,2],[14,2],[14,1],[15,1],[15,1],[15,1],[15,2],[15,2],[15,1],[15,1],[15,1],[15,2],[25,2],[25,4],[18,3],[18,5],[18,5],[18,5],[18,5],[17,2],[17,4],[17,4],[17,4],[17,6],[17,6],[17,6],[17,6],[17,6],[17,6],[17,8],[17,8],[17,8],[17,8],[17,8],[17,8],[16,2],[16,3],[16,3],[16,5],[16,5],[16,3],[16,5],[16,5],[16,5],[16,5],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,3],[16,5],[16,5],[16,5],[16,5],[16,5],[16,5],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[40,0],[40,1],[38,1],[38,1],[38,1],[27,1],[27,1],[4,1],[4,1],[4,1]],performAction:function(t,e,c,a,r,n,i){var o=n.length-1;switch(r){case 2:return n[o];case 3:return n[o-1];case 4:return a.setDirection(n[o-3]),n[o-1];case 6:a.setOptions(n[o-1]),this.$=n[o];break;case 7:n[o-1]+=n[o],this.$=n[o-1];break;case 9:this.$=[];break;case 10:n[o-1].push(n[o]),this.$=n[o-1];break;case 11:this.$=n[o-1];break;case 16:this.$=n[o].trim(),a.setAccTitle(this.$);break;case 17:case 18:this.$=n[o].trim(),a.setAccDescription(this.$);break;case 19:a.addSection(n[o].substr(8)),this.$=n[o].substr(8);break;case 21:a.checkout(n[o]);break;case 22:a.branch(n[o]);break;case 23:a.branch(n[o-2],n[o]);break;case 24:a.cherryPick(n[o],"",void 0);break;case 25:a.cherryPick(n[o-2],"",n[o]);break;case 26:case 28:a.cherryPick(n[o-2],"","");break;case 27:a.cherryPick(n[o],"",n[o-2]);break;case 29:a.merge(n[o],"","","");break;case 30:a.merge(n[o-2],n[o],"","");break;case 31:a.merge(n[o-2],"",n[o],"");break;case 32:a.merge(n[o-2],"","",n[o]);break;case 33:a.merge(n[o-4],n[o],"",n[o-2]);break;case 34:a.merge(n[o-4],"",n[o],n[o-2]);break;case 35:a.merge(n[o-4],"",n[o-2],n[o]);break;case 36:a.merge(n[o-4],n[o-2],n[o],"");break;case 37:a.merge(n[o-4],n[o-2],"",n[o]);break;case 38:a.merge(n[o-4],n[o],n[o-2],"");break;case 39:a.merge(n[o-6],n[o-4],n[o-2],n[o]);break;case 40:a.merge(n[o-6],n[o],n[o-4],n[o-2]);break;case 41:a.merge(n[o-6],n[o-4],n[o],n[o-2]);break;case 42:a.merge(n[o-6],n[o-2],n[o-4],n[o]);break;case 43:a.merge(n[o-6],n[o],n[o-2],n[o-4]);break;case 44:a.merge(n[o-6],n[o-2],n[o],n[o-4]);break;case 45:a.commit(n[o]);break;case 46:a.commit("","",a.commitType.NORMAL,n[o]);break;case 47:a.commit("","",n[o],"");break;case 48:a.commit("","",n[o],n[o-2]);break;case 49:a.commit("","",n[o-2],n[o]);break;case 50:a.commit("",n[o],a.commitType.NORMAL,"");break;case 51:a.commit("",n[o-2],a.commitType.NORMAL,n[o]);break;case 52:a.commit("",n[o],a.commitType.NORMAL,n[o-2]);break;case 53:a.commit("",n[o-2],n[o],"");break;case 54:a.commit("",n[o],n[o-2],"");break;case 55:a.commit("",n[o-4],n[o-2],n[o]);break;case 56:a.commit("",n[o-4],n[o],n[o-2]);break;case 57:a.commit("",n[o-2],n[o-4],n[o]);break;case 58:a.commit("",n[o],n[o-4],n[o-2]);break;case 59:a.commit("",n[o],n[o-2],n[o-4]);break;case 60:a.commit("",n[o-2],n[o],n[o-4]);break;case 61:a.commit(n[o],"",a.commitType.NORMAL,"");break;case 62:a.commit(n[o],"",a.commitType.NORMAL,n[o-2]);break;case 63:a.commit(n[o-2],"",a.commitType.NORMAL,n[o]);break;case 64:a.commit(n[o-2],"",n[o],"");break;case 65:a.commit(n[o],"",n[o-2],"");break;case 66:a.commit(n[o],n[o-2],a.commitType.NORMAL,"");break;case 67:a.commit(n[o-2],n[o],a.commitType.NORMAL,"");break;case 68:a.commit(n[o-4],"",n[o-2],n[o]);break;case 69:a.commit(n[o-4],"",n[o],n[o-2]);break;case 70:a.commit(n[o-2],"",n[o-4],n[o]);break;case 71:a.commit(n[o],"",n[o-4],n[o-2]);break;case 72:a.commit(n[o],"",n[o-2],n[o-4]);break;case 73:a.commit(n[o-2],"",n[o],n[o-4]);break;case 74:a.commit(n[o-4],n[o],n[o-2],"");break;case 75:a.commit(n[o-4],n[o-2],n[o],"");break;case 76:a.commit(n[o-2],n[o],n[o-4],"");break;case 77:a.commit(n[o],n[o-2],n[o-4],"");break;case 78:a.commit(n[o],n[o-4],n[o-2],"");break;case 79:a.commit(n[o-2],n[o-4],n[o],"");break;case 80:a.commit(n[o-4],n[o],a.commitType.NORMAL,n[o-2]);break;case 81:a.commit(n[o-4],n[o-2],a.commitType.NORMAL,n[o]);break;case 82:a.commit(n[o-2],n[o],a.commitType.NORMAL,n[o-4]);break;case 83:a.commit(n[o],n[o-2],a.commitType.NORMAL,n[o-4]);break;case 84:a.commit(n[o],n[o-4],a.commitType.NORMAL,n[o-2]);break;case 85:a.commit(n[o-2],n[o-4],a.commitType.NORMAL,n[o]);break;case 86:a.commit(n[o-6],n[o-4],n[o-2],n[o]);break;case 87:a.commit(n[o-6],n[o-4],n[o],n[o-2]);break;case 88:a.commit(n[o-6],n[o-2],n[o-4],n[o]);break;case 89:a.commit(n[o-6],n[o],n[o-4],n[o-2]);break;case 90:a.commit(n[o-6],n[o-2],n[o],n[o-4]);break;case 91:a.commit(n[o-6],n[o],n[o-2],n[o-4]);break;case 92:a.commit(n[o-4],n[o-6],n[o-2],n[o]);break;case 93:a.commit(n[o-4],n[o-6],n[o],n[o-2]);break;case 94:a.commit(n[o-2],n[o-6],n[o-4],n[o]);break;case 95:a.commit(n[o],n[o-6],n[o-4],n[o-2]);break;case 96:a.commit(n[o-2],n[o-6],n[o],n[o-4]);break;case 97:a.commit(n[o],n[o-6],n[o-2],n[o-4]);break;case 98:a.commit(n[o],n[o-4],n[o-2],n[o-6]);break;case 99:a.commit(n[o-2],n[o-4],n[o],n[o-6]);break;case 100:a.commit(n[o],n[o-2],n[o-4],n[o-6]);break;case 101:a.commit(n[o-2],n[o],n[o-4],n[o-6]);break;case 102:a.commit(n[o-4],n[o-2],n[o],n[o-6]);break;case 103:a.commit(n[o-4],n[o],n[o-2],n[o-6]);break;case 104:a.commit(n[o-2],n[o-4],n[o-6],n[o]);break;case 105:a.commit(n[o],n[o-4],n[o-6],n[o-2]);break;case 106:a.commit(n[o-2],n[o],n[o-6],n[o-4]);break;case 107:a.commit(n[o],n[o-2],n[o-6],n[o-4]);break;case 108:a.commit(n[o-4],n[o-2],n[o-6],n[o]);break;case 109:a.commit(n[o-4],n[o],n[o-6],n[o-2]);break;case 110:this.$="";break;case 111:this.$=n[o];break;case 112:this.$=a.commitType.NORMAL;break;case 113:this.$=a.commitType.REVERSE;break;case 114:this.$=a.commitType.HIGHLIGHT}},table:[{3:1,4:2,5:e,7:c,13:a,46:r},{1:[3]},{3:7,4:2,5:e,7:c,13:a,46:r},{6:8,7:n,8:[1,9],9:[1,10],10:11,13:i},t(o,[2,117]),t(o,[2,118]),t(o,[2,119]),{1:[2,1]},{7:[1,13]},{6:14,7:n,10:11,13:i},{8:[1,15]},t(s,[2,9],{11:16,12:[1,17]}),t(l,[2,8]),{1:[2,2]},{7:[1,18]},{6:19,7:n,10:11,13:i},{7:[2,6],13:[1,22],14:20,15:21,16:23,17:24,18:25,19:[1,26],21:[1,27],23:[1,28],24:[1,29],25:30,26:[1,31],28:[1,35],31:[1,34],36:[1,33],39:[1,32]},t(l,[2,7]),{1:[2,3]},{7:[1,36]},t(s,[2,10]),{4:37,7:c,13:a,46:r},t(s,[2,12]),t(h,[2,13]),t(h,[2,14]),t(h,[2,15]),{20:[1,38]},{22:[1,39]},t(h,[2,18]),t(h,[2,19]),t(h,[2,20]),{27:40,33:m,45:u},t(h,[2,110],{40:43,32:[1,46],33:[1,48],34:[1,44],37:[1,45],41:[1,47]}),{27:49,33:m,45:u},{32:[1,50],34:[1,51]},{27:52,33:m,45:u},{1:[2,4]},t(s,[2,11]),t(h,[2,16]),t(h,[2,17]),t(h,[2,21]),t(y,[2,115]),t(y,[2,116]),t(h,[2,45]),{33:[1,53]},{38:54,42:p,43:g,44:b},{33:[1,58]},{33:[1,59]},t(h,[2,111]),t(h,[2,29],{32:[1,60],34:[1,62],37:[1,61]}),{33:[1,63]},{33:[1,64],35:[1,65]},t(h,[2,22],{29:[1,66]}),t(h,[2,46],{32:[1,68],37:[1,67],41:[1,69]}),t(h,[2,47],{32:[1,71],34:[1,70],41:[1,72]}),t(d,[2,112]),t(d,[2,113]),t(d,[2,114]),t(h,[2,50],{34:[1,73],37:[1,74],41:[1,75]}),t(h,[2,61],{32:[1,78],34:[1,76],37:[1,77]}),{33:[1,79]},{38:80,42:p,43:g,44:b},{33:[1,81]},t(h,[2,24],{34:[1,82]}),{32:[1,83]},{32:[1,84]},{30:[1,85]},{38:86,42:p,43:g,44:b},{33:[1,87]},{33:[1,88]},{33:[1,89]},{33:[1,90]},{33:[1,91]},{33:[1,92]},{38:93,42:p,43:g,44:b},{33:[1,94]},{33:[1,95]},{38:96,42:p,43:g,44:b},{33:[1,97]},t(h,[2,30],{34:[1,99],37:[1,98]}),t(h,[2,31],{32:[1,101],34:[1,100]}),t(h,[2,32],{32:[1,102],37:[1,103]}),{33:[1,104],35:[1,105]},{33:[1,106]},{33:[1,107]},t(h,[2,23]),t(h,[2,48],{32:[1,108],41:[1,109]}),t(h,[2,52],{37:[1,110],41:[1,111]}),t(h,[2,62],{32:[1,113],37:[1,112]}),t(h,[2,49],{32:[1,114],41:[1,115]}),t(h,[2,54],{34:[1,116],41:[1,117]}),t(h,[2,65],{32:[1,119],34:[1,118]}),t(h,[2,51],{37:[1,120],41:[1,121]}),t(h,[2,53],{34:[1,122],41:[1,123]}),t(h,[2,66],{34:[1,125],37:[1,124]}),t(h,[2,63],{32:[1,127],37:[1,126]}),t(h,[2,64],{32:[1,129],34:[1,128]}),t(h,[2,67],{34:[1,131],37:[1,130]}),{38:132,42:p,43:g,44:b},{33:[1,133]},{33:[1,134]},{33:[1,135]},{33:[1,136]},{38:137,42:p,43:g,44:b},t(h,[2,25]),t(h,[2,26]),t(h,[2,27]),t(h,[2,28]),{33:[1,138]},{33:[1,139]},{38:140,42:p,43:g,44:b},{33:[1,141]},{38:142,42:p,43:g,44:b},{33:[1,143]},{33:[1,144]},{33:[1,145]},{33:[1,146]},{33:[1,147]},{33:[1,148]},{33:[1,149]},{38:150,42:p,43:g,44:b},{33:[1,151]},{33:[1,152]},{33:[1,153]},{38:154,42:p,43:g,44:b},{33:[1,155]},{38:156,42:p,43:g,44:b},{33:[1,157]},{33:[1,158]},{33:[1,159]},{38:160,42:p,43:g,44:b},{33:[1,161]},t(h,[2,36],{34:[1,162]}),t(h,[2,37],{37:[1,163]}),t(h,[2,35],{32:[1,164]}),t(h,[2,38],{34:[1,165]}),t(h,[2,33],{37:[1,166]}),t(h,[2,34],{32:[1,167]}),t(h,[2,59],{41:[1,168]}),t(h,[2,72],{32:[1,169]}),t(h,[2,60],{41:[1,170]}),t(h,[2,83],{37:[1,171]}),t(h,[2,73],{32:[1,172]}),t(h,[2,82],{37:[1,173]}),t(h,[2,58],{41:[1,174]}),t(h,[2,71],{32:[1,175]}),t(h,[2,57],{41:[1,176]}),t(h,[2,77],{34:[1,177]}),t(h,[2,70],{32:[1,178]}),t(h,[2,76],{34:[1,179]}),t(h,[2,56],{41:[1,180]}),t(h,[2,84],{37:[1,181]}),t(h,[2,55],{41:[1,182]}),t(h,[2,78],{34:[1,183]}),t(h,[2,79],{34:[1,184]}),t(h,[2,85],{37:[1,185]}),t(h,[2,69],{32:[1,186]}),t(h,[2,80],{37:[1,187]}),t(h,[2,68],{32:[1,188]}),t(h,[2,74],{34:[1,189]}),t(h,[2,75],{34:[1,190]}),t(h,[2,81],{37:[1,191]}),{33:[1,192]},{38:193,42:p,43:g,44:b},{33:[1,194]},{33:[1,195]},{38:196,42:p,43:g,44:b},{33:[1,197]},{33:[1,198]},{33:[1,199]},{33:[1,200]},{38:201,42:p,43:g,44:b},{33:[1,202]},{38:203,42:p,43:g,44:b},{33:[1,204]},{33:[1,205]},{33:[1,206]},{33:[1,207]},{33:[1,208]},{33:[1,209]},{33:[1,210]},{38:211,42:p,43:g,44:b},{33:[1,212]},{33:[1,213]},{33:[1,214]},{38:215,42:p,43:g,44:b},{33:[1,216]},{38:217,42:p,43:g,44:b},{33:[1,218]},{33:[1,219]},{33:[1,220]},{38:221,42:p,43:g,44:b},t(h,[2,39]),t(h,[2,41]),t(h,[2,40]),t(h,[2,42]),t(h,[2,44]),t(h,[2,43]),t(h,[2,100]),t(h,[2,101]),t(h,[2,98]),t(h,[2,99]),t(h,[2,103]),t(h,[2,102]),t(h,[2,107]),t(h,[2,106]),t(h,[2,105]),t(h,[2,104]),t(h,[2,109]),t(h,[2,108]),t(h,[2,97]),t(h,[2,96]),t(h,[2,95]),t(h,[2,94]),t(h,[2,92]),t(h,[2,93]),t(h,[2,91]),t(h,[2,90]),t(h,[2,89]),t(h,[2,88]),t(h,[2,86]),t(h,[2,87])],defaultActions:{7:[2,1],13:[2,2],18:[2,3],36:[2,4]},parseError:function(t,e){if(!e.recoverable){var c=new Error(t);throw c.hash=e,c}this.trace(t)},parse:function(t){var e=this,c=[0],a=[],r=[null],n=[],i=this.table,o="",s=0,l=0,h=n.slice.call(arguments,1),m=Object.create(this.lexer),u={yy:{}};for(var y in this.yy)Object.prototype.hasOwnProperty.call(this.yy,y)&&(u.yy[y]=this.yy[y]);m.setInput(t,u.yy),u.yy.lexer=m,u.yy.parser=this,"undefined"==typeof m.yylloc&&(m.yylloc={});var p=m.yylloc;n.push(p);var g=m.options&&m.options.ranges;function b(){var t;return"number"!==typeof(t=a.pop()||m.lex()||1)&&(t instanceof Array&&(t=(a=t).pop()),t=e.symbols_[t]||t),t}"function"===typeof u.yy.parseError?this.parseError=u.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var d,f,k,x,_,v,w,T,E={};;){if(f=c[c.length-1],this.defaultActions[f]?k=this.defaultActions[f]:(null!==d&&"undefined"!=typeof d||(d=b()),k=i[f]&&i[f][d]),"undefined"===typeof k||!k.length||!k[0]){var L="";for(_ in T=[],i[f])this.terminals_[_]&&_>2&&T.push("'"+this.terminals_[_]+"'");L=m.showPosition?"Parse error on line "+(s+1)+":\n"+m.showPosition()+"\nExpecting "+T.join(", ")+", got '"+(this.terminals_[d]||d)+"'":"Parse error on line "+(s+1)+": Unexpected "+(1==d?"end of input":"'"+(this.terminals_[d]||d)+"'"),this.parseError(L,{text:m.match,token:this.terminals_[d]||d,line:m.yylineno,loc:p,expected:T})}if(k[0]instanceof Array&&k.length>1)throw new Error("Parse Error: multiple actions possible at state: "+f+", token: "+d);switch(k[0]){case 1:c.push(d),r.push(m.yytext),n.push(m.yylloc),c.push(k[1]),d=null,l=m.yyleng,o=m.yytext,s=m.yylineno,p=m.yylloc;break;case 2:if(v=this.productions_[k[1]][1],E.$=r[r.length-v],E._$={first_line:n[n.length-(v||1)].first_line,last_line:n[n.length-1].last_line,first_column:n[n.length-(v||1)].first_column,last_column:n[n.length-1].last_column},g&&(E._$.range=[n[n.length-(v||1)].range[0],n[n.length-1].range[1]]),"undefined"!==typeof(x=this.performAction.apply(E,[o,l,s,u.yy,k[1],r,n].concat(h))))return x;v&&(c=c.slice(0,-1*v*2),r=r.slice(0,-1*v),n=n.slice(0,-1*v)),c.push(this.productions_[k[1]][0]),r.push(E.$),n.push(E._$),w=i[c[c.length-2]][c[c.length-1]],c.push(w);break;case 3:return!0}}return!0}},k={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,c=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var a=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),c.length-1&&(this.yylineno-=c.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:c?(c.length===a.length?this.yylloc.first_column:0)+a[a.length-c.length].length-c[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var c,a,r;if(this.options.backtrack_lexer&&(r={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(r.yylloc.range=this.yylloc.range.slice(0))),(a=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=a.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:a?a[a.length-1].length-a[a.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],c=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),c)return c;if(this._backtrack){for(var n in r)this[n]=r[n];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,c,a;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var r=this._currentRules(),n=0;n<r.length;n++)if((c=this._input.match(this.rules[r[n]]))&&(!e||c[0].length>e[0].length)){if(e=c,a=n,this.options.backtrack_lexer){if(!1!==(t=this.test_match(c,r[n])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,r[a]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return t||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,c,a){switch(c){case 0:return this.begin("acc_title"),19;case 1:return this.popState(),"acc_title_value";case 2:return this.begin("acc_descr"),21;case 3:return this.popState(),"acc_descr_value";case 4:this.begin("acc_descr_multiline");break;case 5:case 29:case 33:this.popState();break;case 6:return"acc_descr_multiline_value";case 7:return 13;case 8:case 9:break;case 10:return 5;case 11:return 39;case 12:return 32;case 13:return 37;case 14:return 41;case 15:return 42;case 16:return 43;case 17:return 44;case 18:return 34;case 19:return 28;case 20:return 29;case 21:return 36;case 22:return 31;case 23:return 26;case 24:case 25:return 9;case 26:return 8;case 27:return"CARET";case 28:this.begin("options");break;case 30:return 12;case 31:return 35;case 32:this.begin("string");break;case 34:return 33;case 35:return 30;case 36:return 45;case 37:return 7}},rules:[/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:(\r?\n)+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:gitGraph\b)/i,/^(?:commit(?=\s|$))/i,/^(?:id:)/i,/^(?:type:)/i,/^(?:msg:)/i,/^(?:NORMAL\b)/i,/^(?:REVERSE\b)/i,/^(?:HIGHLIGHT\b)/i,/^(?:tag:)/i,/^(?:branch(?=\s|$))/i,/^(?:order:)/i,/^(?:merge(?=\s|$))/i,/^(?:cherry-pick(?=\s|$))/i,/^(?:checkout(?=\s|$))/i,/^(?:LR\b)/i,/^(?:TB\b)/i,/^(?::)/i,/^(?:\^)/i,/^(?:options\r?\n)/i,/^(?:[ \r\n\t]+end\b)/i,/^(?:[\s\S]+(?=[ \r\n\t]+end))/i,/^(?:["]["])/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[0-9]+(?=\s|$))/i,/^(?:\w([-\./\w]*[-\w])?)/i,/^(?:$)/i,/^(?:\s+)/i],conditions:{acc_descr_multiline:{rules:[5,6],inclusive:!1},acc_descr:{rules:[3],inclusive:!1},acc_title:{rules:[1],inclusive:!1},options:{rules:[29,30],inclusive:!1},string:{rules:[33,34],inclusive:!1},INITIAL:{rules:[0,2,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,31,32,35,36,37,38],inclusive:!0}}};function x(){this.yy={}}return f.lexer=k,x.prototype=f,f.Parser=x,new x}());o.parser=o;var s=o,l=(0,n.c)().gitGraph.mainBranchName,h=(0,n.c)().gitGraph.mainBranchOrder,m={},u=null,y={};y[l]={name:l,order:h};var p={};p[l]=u;var g=l,b="LR",d=0;function f(){return(0,n.x)({length:7})}var k={},x=function(t){if(t=n.e.sanitizeText(t,(0,n.c)()),void 0===p[t]){var e=new Error('Trying to checkout branch which is not yet created. (Help try using "branch '+t+'")');throw e.hash={text:"checkout "+t,token:"checkout "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"branch '+t+'"']},e}var c=p[g=t];u=m[c]};function _(t,e,c){var a=t.indexOf(e);-1===a?t.push(c):t.splice(a,1,c)}function v(t){var e=t.reduce((function(t,e){return t.seq>e.seq?t:e}),t[0]),c="";t.forEach((function(t){c+=t===e?"\t*":"\t|"}));var a=[c,e.id,e.seq];for(var r in p)p[r]===e.id&&a.push(r);if(n.l.debug(a.join(" ")),e.parents&&2==e.parents.length){var i=m[e.parents[0]];_(t,e,i),t.push(m[e.parents[1]])}else{if(0==e.parents.length)return;var o=m[e.parents];_(t,e,o)}v(t=function(t,e){var c=Object.create(null);return t.reduce((function(t,a){var r=e(a);return c[r]||(c[r]=!0,t.push(a)),t}),[])}(t,(function(t){return t.id})))}var w=function(){var t=Object.keys(m).map((function(t){return m[t]}));return t.forEach((function(t){n.l.debug(t.id)})),t.sort((function(t,e){return t.seq-e.seq})),t},T={NORMAL:0,REVERSE:1,HIGHLIGHT:2,MERGE:3,CHERRY_PICK:4},E={getConfig:function(){return(0,n.c)().gitGraph},setDirection:function(t){b=t},setOptions:function(t){n.l.debug("options str",t),t=(t=t&&t.trim())||"{}";try{k=JSON.parse(t)}catch(e){n.l.error("error while parsing gitGraph options",e.message)}},getOptions:function(){return k},commit:function(t,e,c,a){n.l.debug("Entering commit:",t,e,c,a),e=n.e.sanitizeText(e,(0,n.c)()),t=n.e.sanitizeText(t,(0,n.c)()),a=n.e.sanitizeText(a,(0,n.c)());var r={id:e||d+"-"+f(),message:t,seq:d++,type:c||T.NORMAL,tag:a||"",parents:null==u?[]:[u.id],branch:g};u=r,m[r.id]=r,p[g]=r.id,n.l.debug("in pushCommit "+r.id)},branch:function(t,e){if(t=n.e.sanitizeText(t,(0,n.c)()),void 0!==p[t]){var c=new Error('Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout '+t+'")');throw c.hash={text:"branch "+t,token:"branch "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"checkout '+t+'"']},c}p[t]=null!=u?u.id:null,y[t]={name:t,order:e?parseInt(e,10):null},x(t),n.l.debug("in createBranch")},merge:function(t,e,c,a){t=n.e.sanitizeText(t,(0,n.c)()),e=n.e.sanitizeText(e,(0,n.c)());var r=m[p[g]],i=m[p[t]];if(g===t){var o=new Error('Incorrect usage of "merge". Cannot merge a branch to itself');throw o.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch abc"]},o}if(void 0===r||!r){var s=new Error('Incorrect usage of "merge". Current branch ('+g+")has no commits");throw s.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["commit"]},s}if(void 0===p[t]){var l=new Error('Incorrect usage of "merge". Branch to be merged ('+t+") does not exist");throw l.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch "+t]},l}if(void 0===i||!i){var h=new Error('Incorrect usage of "merge". Branch to be merged ('+t+") has no commits");throw h.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"commit"']},h}if(r===i){var y=new Error('Incorrect usage of "merge". Both branches have same head');throw y.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch abc"]},y}if(e&&void 0!==m[e]){var b=new Error('Incorrect usage of "merge". Commit with id:'+e+" already exists, use different custom Id");throw b.hash={text:"merge "+t+e+c+a,token:"merge "+t+e+c+a,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["merge "+t+" "+e+"_UNIQUE "+c+" "+a]},b}var k={id:e||d+"-"+f(),message:"merged branch "+t+" into "+g,seq:d++,parents:[null==u?null:u.id,p[t]],branch:g,type:T.MERGE,customType:c,customId:!!e,tag:a||""};u=k,m[k.id]=k,p[g]=k.id,n.l.debug(p),n.l.debug("in mergeBranch")},cherryPick:function(t,e,c){if(n.l.debug("Entering cherryPick:",t,e,c),t=n.e.sanitizeText(t,(0,n.c)()),e=n.e.sanitizeText(e,(0,n.c)()),c=n.e.sanitizeText(c,(0,n.c)()),!t||void 0===m[t]){var a=new Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');throw a.hash={text:"cherryPick "+t+" "+e,token:"cherryPick "+t+" "+e,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},a}var r=m[t],i=r.branch;if(r.type===T.MERGE){var o=new Error('Incorrect usage of "cherryPick". Source commit should not be a merge commit');throw o.hash={text:"cherryPick "+t+" "+e,token:"cherryPick "+t+" "+e,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},o}if(!e||void 0===m[e]){var s;if(i===g){var l=new Error('Incorrect usage of "cherryPick". Source commit is already on current branch');throw l.hash={text:"cherryPick "+t+" "+e,token:"cherryPick "+t+" "+e,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},l}var h=m[p[g]];if(void 0===h||!h){var y=new Error('Incorrect usage of "cherry-pick". Current branch ('+g+")has no commits");throw y.hash={text:"cherryPick "+t+" "+e,token:"cherryPick "+t+" "+e,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},y}var b={id:d+"-"+f(),message:"cherry-picked "+r+" into "+g,seq:d++,parents:[null==u?null:u.id,r.id],branch:g,type:T.CHERRY_PICK,tag:null!==(s=c)&&void 0!==s?s:"cherry-pick:"+r.id};u=b,m[b.id]=b,p[g]=b.id,n.l.debug(p),n.l.debug("in cherryPick")}},checkout:x,prettyPrint:function(){n.l.debug(m),v([w()[0]])},clear:function(){m={},u=null;var t=(0,n.c)().gitGraph.mainBranchName,e=(0,n.c)().gitGraph.mainBranchOrder;(p={})[t]=null,(y={})[t]={name:t,order:e},g=t,d=0,(0,n.t)()},getBranchesAsObjArray:function(){return Object.values(y).map((function(t,e){return null!==t.order?t:(0,r.Z)((0,r.Z)({},t),{},{order:parseFloat("0.".concat(e),10)})})).sort((function(t,e){return t.order-e.order})).map((function(t){return{name:t.name}}))},getBranches:function(){return p},getCommits:function(){return m},getCommitsArray:w,getCurrentBranch:function(){return g},getDirection:function(){return b},getHead:function(){return u},setAccTitle:n.s,getAccTitle:n.g,getAccDescription:n.a,setAccDescription:n.b,setDiagramTitle:n.q,getDiagramTitle:n.r,commitType:T},L={},M=0,A=1,I=2,R=3,O=4,C={},S={},B=[],P=0,N="LR",G=function(t){var e=document.createElementNS("http://www.w3.org/2000/svg","text"),c=[];c="string"===typeof t?t.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(t)?t:[];var r,n=(0,a.Z)(c);try{for(n.s();!(r=n.n()).done;){var i=r.value,o=document.createElementNS("http://www.w3.org/2000/svg","tspan");o.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),o.setAttribute("dy","1em"),o.setAttribute("x","0"),o.setAttribute("class","row"),o.textContent=i.trim(),e.appendChild(o)}}catch(s){n.e(s)}finally{n.f()}return e},$=function(t,e,c){var a=(0,n.c)().gitGraph,r=t.append("g").attr("class","commit-bullets"),i=t.append("g").attr("class","commit-labels"),o=0;"TB"===N&&(o=30),Object.keys(e).sort((function(t,c){return e[t].seq-e[c].seq})).forEach((function(t){var n=e[t],s="TB"===N?o+10:C[n.branch].pos,l="TB"===N?C[n.branch].pos:o+10;if(c){var h,m=void 0!==n.customType&&""!==n.customType?n.customType:n.type;switch(m){case M:h="commit-normal";break;case A:h="commit-reverse";break;case I:h="commit-highlight";break;case R:h="commit-merge";break;case O:h="commit-cherry-pick";break;default:h="commit-normal"}if(m===I){var u=r.append("rect");u.attr("x",l-10),u.attr("y",s-10),u.attr("height",20),u.attr("width",20),u.attr("class","commit ".concat(n.id," commit-highlight").concat(C[n.branch].index%8," ").concat(h,"-outer")),r.append("rect").attr("x",l-6).attr("y",s-6).attr("height",12).attr("width",12).attr("class","commit ".concat(n.id," commit").concat(C[n.branch].index%8," ").concat(h,"-inner"))}else if(m===O)r.append("circle").attr("cx",l).attr("cy",s).attr("r",10).attr("class","commit ".concat(n.id," ").concat(h)),r.append("circle").attr("cx",l-3).attr("cy",s+2).attr("r",2.75).attr("fill","#fff").attr("class","commit ".concat(n.id," ").concat(h)),r.append("circle").attr("cx",l+3).attr("cy",s+2).attr("r",2.75).attr("fill","#fff").attr("class","commit ".concat(n.id," ").concat(h)),r.append("line").attr("x1",l+3).attr("y1",s+1).attr("x2",l).attr("y2",s-5).attr("stroke","#fff").attr("class","commit ".concat(n.id," ").concat(h)),r.append("line").attr("x1",l-3).attr("y1",s+1).attr("x2",l).attr("y2",s-5).attr("stroke","#fff").attr("class","commit ".concat(n.id," ").concat(h));else{var y=r.append("circle");if(y.attr("cx",l),y.attr("cy",s),y.attr("r",n.type===R?9:10),y.attr("class","commit ".concat(n.id," commit").concat(C[n.branch].index%8)),m===R){var p=r.append("circle");p.attr("cx",l),p.attr("cy",s),p.attr("r",6),p.attr("class","commit ".concat(h," ").concat(n.id," commit").concat(C[n.branch].index%8))}if(m===A)r.append("path").attr("d","M ".concat(l-5,",").concat(s-5,"L").concat(l+5,",").concat(s+5,"M").concat(l-5,",").concat(s+5,"L").concat(l+5,",").concat(s-5)).attr("class","commit ".concat(h," ").concat(n.id," commit").concat(C[n.branch].index%8))}}if(S[n.id]="TB"===N?{x:l,y:o+10}:{x:o+10,y:s},c){if(n.type!==O&&(n.customId&&n.type===R||n.type!==R)&&a.showCommitLabel){var g=i.append("g"),b=g.insert("rect").attr("class","commit-label-bkg"),d=g.append("text").attr("x",o).attr("y",s+25).attr("class","commit-label").text(n.id),f=d.node().getBBox();if(b.attr("x",o+10-f.width/2-2).attr("y",s+13.5).attr("width",f.width+4).attr("height",f.height+4),"TB"===N&&(b.attr("x",l-(f.width+16+5)).attr("y",s-12),d.attr("x",l-(f.width+16)).attr("y",s+f.height-12)),"TB"!==N&&d.attr("x",o+10-f.width/2),a.rotateCommitLabel)if("TB"===N)d.attr("transform","rotate(-45, "+l+", "+s+")"),b.attr("transform","rotate(-45, "+l+", "+s+")");else{var k=-7.5-(f.width+10)/25*9.5,x=10+f.width/25*8.5;g.attr("transform","translate("+k+", "+x+") rotate(-45, "+o+", "+s+")")}}if(n.tag){var _=i.insert("polygon"),v=i.append("circle"),w=i.append("text").attr("y",s-16).attr("class","tag-label").text(n.tag),T=w.node().getBBox();w.attr("x",o+10-T.width/2);var E=T.height/2,L=s-19.2;_.attr("class","tag-label-bkg").attr("points","\n          ".concat(o-T.width/2-2,",").concat(L+2,"\n          ").concat(o-T.width/2-2,",").concat(L-2,"\n          ").concat(o+10-T.width/2-4,",").concat(L-E-2,"\n          ").concat(o+10+T.width/2+4,",").concat(L-E-2,"\n          ").concat(o+10+T.width/2+4,",").concat(L+E+2,"\n          ").concat(o+10-T.width/2-4,",").concat(L+E+2)),v.attr("cx",o-T.width/2+2).attr("cy",L).attr("r",1.5).attr("class","tag-hole"),"TB"===N&&(_.attr("class","tag-label-bkg").attr("points","\n            ".concat(l,",").concat(o+2,"\n            ").concat(l,",").concat(o-2,"\n            ").concat(l+10,",").concat(o-E-2,"\n            ").concat(l+10+T.width+4,",").concat(o-E-2,"\n            ").concat(l+10+T.width+4,",").concat(o+E+2,"\n            ").concat(l+10,",").concat(o+E+2)).attr("transform","translate(12,12) rotate(45, "+l+","+o+")"),v.attr("cx",l+2).attr("cy",o).attr("transform","translate(12,12) rotate(45, "+l+","+o+")"),w.attr("x",l+5).attr("y",o+3).attr("transform","translate(14,14) rotate(45, "+l+","+o+")"))}}(o+=50)>P&&(P=o)}))},H=function t(e,c){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=e+Math.abs(e-c)/2;return a>5?r:B.every((function(t){return Math.abs(t-r)>=10}))?(B.push(r),r):t(e,c-Math.abs(e-c)/5,a+1)},D=function(t,e,c,a){var r,n=S[e.id],i=S[c.id],o=function(t,e,c){return Object.keys(c).filter((function(a){return c[a].branch===e.branch&&c[a].seq>t.seq&&c[a].seq<e.seq})).length>0}(e,c,a),s="",l="",h=0,m=0,u=C[c.branch].index;if(o){s="A 10 10, 0, 0, 0,",l="A 10 10, 0, 0, 1,",h=10,m=10,u=C[c.branch].index;var y=n.y<i.y?H(n.y,i.y):H(i.y,n.y),p=n.x<i.x?H(n.x,i.x):H(i.x,n.x);r="TB"===N?n.x<i.x?"M ".concat(n.x," ").concat(n.y," L ").concat(p-h," ").concat(n.y," ").concat(l," ").concat(p," ").concat(n.y+m," L ").concat(p," ").concat(i.y-h," ").concat(s," ").concat(p+m," ").concat(i.y," L ").concat(i.x," ").concat(i.y):"M ".concat(n.x," ").concat(n.y," L ").concat(p+h," ").concat(n.y," ").concat(s," ").concat(p," ").concat(n.y+m," L ").concat(p," ").concat(i.y-h," ").concat(l," ").concat(p-m," ").concat(i.y," L ").concat(i.x," ").concat(i.y):n.y<i.y?"M ".concat(n.x," ").concat(n.y," L ").concat(n.x," ").concat(y-h," ").concat(s," ").concat(n.x+m," ").concat(y," L ").concat(i.x-h," ").concat(y," ").concat(l," ").concat(i.x," ").concat(y+m," L ").concat(i.x," ").concat(i.y):"M ".concat(n.x," ").concat(n.y," L ").concat(n.x," ").concat(y+h," ").concat(l," ").concat(n.x+m," ").concat(y," L ").concat(i.x-h," ").concat(y," ").concat(s," ").concat(i.x," ").concat(y-m," L ").concat(i.x," ").concat(i.y)}else"TB"===N?(n.x<i.x&&(s="A 20 20, 0, 0, 0,",l="A 20 20, 0, 0, 1,",h=20,m=20,u=C[c.branch].index,r="M ".concat(n.x," ").concat(n.y," L ").concat(i.x-h," ").concat(n.y," ").concat(l," ").concat(i.x," ").concat(n.y+m," L ").concat(i.x," ").concat(i.y)),n.x>i.x&&(s="A 20 20, 0, 0, 0,",l="A 20 20, 0, 0, 1,",h=20,m=20,u=C[e.branch].index,r="M ".concat(n.x," ").concat(n.y," L ").concat(n.x," ").concat(i.y-h," ").concat(l," ").concat(n.x-m," ").concat(i.y," L ").concat(i.x," ").concat(i.y)),n.x===i.x&&(u=C[e.branch].index,r="M ".concat(n.x," ").concat(n.y," L ").concat(n.x+h," ").concat(n.y," ").concat(s," ").concat(n.x+m," ").concat(i.y+h," L ").concat(i.x," ").concat(i.y))):(n.y<i.y&&(s="A 20 20, 0, 0, 0,",h=20,m=20,u=C[c.branch].index,r="M ".concat(n.x," ").concat(n.y," L ").concat(n.x," ").concat(i.y-h," ").concat(s," ").concat(n.x+m," ").concat(i.y," L ").concat(i.x," ").concat(i.y)),n.y>i.y&&(s="A 20 20, 0, 0, 0,",h=20,m=20,u=C[e.branch].index,r="M ".concat(n.x," ").concat(n.y," L ").concat(i.x-h," ").concat(n.y," ").concat(s," ").concat(i.x," ").concat(n.y-m," L ").concat(i.x," ").concat(i.y)),n.y===i.y&&(u=C[e.branch].index,r="M ".concat(n.x," ").concat(n.y," L ").concat(n.x," ").concat(i.y-h," ").concat(s," ").concat(n.x+m," ").concat(i.y," L ").concat(i.x," ").concat(i.y)));t.append("path").attr("d",r).attr("class","arrow arrow"+u%8)},z={parser:s,db:E,renderer:{draw:function(t,e,c,a){var r;C={},S={},L={},P=0,B=[],N="LR";var o=(0,n.c)(),s=o.gitGraph;n.l.debug("in gitgraph renderer",t+"\n","id:",e,c),L=a.db.getCommits();var l=a.db.getBranchesAsObjArray();N=a.db.getDirection();var h=(0,i.Ys)('[id="'.concat(e,'"]')),m=0;l.forEach((function(t,e){var c=G(t.name),a=h.append("g"),r=a.insert("g").attr("class","branchLabel"),n=r.insert("g").attr("class","label branch-label");n.node().appendChild(c);var i=c.getBBox();C[t.name]={pos:m,index:e},m+=50+(s.rotateCommitLabel?40:0)+("TB"===N?i.width/2:0),n.remove(),r.remove(),a.remove()})),$(h,L,!1),s.showBranches&&function(t,e){var c=(0,n.c)().gitGraph,a=t.append("g");e.forEach((function(t,e){var r=e%8,n=C[t.name].pos,i=a.append("line");i.attr("x1",0),i.attr("y1",n),i.attr("x2",P),i.attr("y2",n),i.attr("class","branch branch"+r),"TB"===N&&(i.attr("y1",30),i.attr("x1",n),i.attr("y2",P),i.attr("x2",n)),B.push(n);var o=t.name,s=G(o),l=a.insert("rect"),h=a.insert("g").attr("class","branchLabel").insert("g").attr("class","label branch-label"+r);h.node().appendChild(s);var m=s.getBBox();l.attr("class","branchLabelBkg label"+r).attr("rx",4).attr("ry",4).attr("x",-m.width-4-(!0===c.rotateCommitLabel?30:0)).attr("y",-m.height/2+8).attr("width",m.width+18).attr("height",m.height+4),h.attr("transform","translate("+(-m.width-14-(!0===c.rotateCommitLabel?30:0))+", "+(n-m.height/2-1)+")"),"TB"===N&&(l.attr("x",n-m.width/2-10).attr("y",0),h.attr("transform","translate("+(n-m.width/2-5)+", 0)")),"TB"!==N&&l.attr("transform","translate(-19, "+(n-m.height/2)+")")}))}(h,l),function(t,e){var c=t.append("g").attr("class","commit-arrows");Object.keys(e).forEach((function(t){var a=e[t];a.parents&&a.parents.length>0&&a.parents.forEach((function(t){D(c,e[t],a,e)}))}))}(h,L),$(h,L,!0),n.u.insertTitle(h,"gitTitleText",s.titleTopMargin,a.db.getDiagramTitle()),(0,n.y)(void 0,h,s.diagramPadding,null!==(r=s.useMaxWidth)&&void 0!==r?r:o.useMaxWidth)}},styles:function(t){return"\n  .commit-id,\n  .commit-msg,\n  .branch-label {\n    fill: lightgrey;\n    color: lightgrey;\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n  }\n  ".concat([0,1,2,3,4,5,6,7].map((function(e){return"\n        .branch-label".concat(e," { fill: ").concat(t["gitBranchLabel"+e],"; }\n        .commit").concat(e," { stroke: ").concat(t["git"+e],"; fill: ").concat(t["git"+e],"; }\n        .commit-highlight").concat(e," { stroke: ").concat(t["gitInv"+e],"; fill: ").concat(t["gitInv"+e],"; }\n        .label").concat(e,"  { fill: ").concat(t["git"+e],"; }\n        .arrow").concat(e," { stroke: ").concat(t["git"+e],"; }\n        ")})).join("\n"),"\n\n  .branch {\n    stroke-width: 1;\n    stroke: ").concat(t.lineColor,";\n    stroke-dasharray: 2;\n  }\n  .commit-label { font-size: ").concat(t.commitLabelFontSize,"; fill: ").concat(t.commitLabelColor,";}\n  .commit-label-bkg { font-size: ").concat(t.commitLabelFontSize,"; fill: ").concat(t.commitLabelBackground,"; opacity: 0.5; }\n  .tag-label { font-size: ").concat(t.tagLabelFontSize,"; fill: ").concat(t.tagLabelColor,";}\n  .tag-label-bkg { fill: ").concat(t.tagLabelBackground,"; stroke: ").concat(t.tagLabelBorder,"; }\n  .tag-hole { fill: ").concat(t.textColor,"; }\n\n  .commit-merge {\n    stroke: ").concat(t.primaryColor,";\n    fill: ").concat(t.primaryColor,";\n  }\n  .commit-reverse {\n    stroke: ").concat(t.primaryColor,";\n    fill: ").concat(t.primaryColor,";\n    stroke-width: 3;\n  }\n  .commit-highlight-outer {\n  }\n  .commit-highlight-inner {\n    stroke: ").concat(t.primaryColor,";\n    fill: ").concat(t.primaryColor,";\n  }\n\n  .arrow { stroke-width: 8; stroke-linecap: round; fill: none}\n  .gitTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ").concat(t.textColor,";\n  }\n")}}}}]);
//# sourceMappingURL=293.95858d73.chunk.js.map