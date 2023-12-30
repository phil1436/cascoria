import{L as _,_ as f,o as i,c as l,a as e,F as p,r as d,n as x,t as g,p as v,b as w,M as I,e as b,f as M,g as S,h as k}from"./index-B8tyH7rR.js";const H={name:"CasTable",props:{count:{type:Number,required:!0}},data(){return{wMatrix:[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],hMatrix:[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],bonusMatrix:[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],coneRow:[0,0,0,0,0,0],names:["","","","","",""]}},watch:{hMatrix:{handler:function(n){this.updateBonusMatrix()},deep:!0}},mounted(){setTimeout(()=>{const n=_.get(this.count+"wMatrix"),s=_.get(this.count+"hMatrix"),u=_.get(this.count+"coneRow"),c=_.get(this.count+"names");n&&(this.wMatrix=JSON.parse(n)),s&&(this.hMatrix=JSON.parse(s)),u&&(this.coneRow=JSON.parse(u)),c&&(this.names=JSON.parse(c))},10)},methods:{reset(){localStorage.removeItem(this.count+"wMatrix"),localStorage.removeItem(this.count+"hMatrix"),localStorage.removeItem(this.count+"coneRow"),localStorage.removeItem(this.count+"names"),this.wMatrix=[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],this.hMatrix=[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],this.coneRow=[0,0,0,0,0,0],this.names=["","","","","",""]},goToHome(){this.$router.push({name:"home"})},getArray(){const n=[];for(let s=0;s<this.count;s++)n.push(s+1);return n},setWMatrix(n,s,u){this.wMatrix[n-1][s-1]=parseInt(u.target.value)||0,_.set(this.count+"wMatrix",JSON.stringify(this.wMatrix))},setHMatrix(n,s,u){this.hMatrix[n-1][s-1]=parseInt(u.target.value)||0,_.set(this.count+"hMatrix",JSON.stringify(this.hMatrix))},setConeRow(n,s){this.coneRow[n-1]=parseInt(s.target.value)||0,_.set(this.count+"coneRow",JSON.stringify(this.coneRow))},setName(n,s){this.names[n-1]=s.target.value||"",_.set(this.count+"names",JSON.stringify(this.names))},updateBonusMatrix(){const n=[];if(this.count==1){for(let s of this.hMatrix)n.push(s[0]>=7?[2]:[0]);this.bonusMatrix=n;return}if(this.count==2){for(let s of this.hMatrix)s[0]>s[1]?n.push([2,0]):s[0]<s[1]?n.push([0,2]):s[0]!=0&&s[1]!=0?n.push([1,1]):n.push([0,0]);this.bonusMatrix=n;return}for(let s of this.hMatrix){let u=0,c=0;for(let h=0;h<s.length;h++)s[h]>u?(c=u,u=s[h]):s[h]>c&&(c=s[h]);if(u==0){n.push([0,0,0,0,0]);continue}let r=0,o=0;for(let h=0;h<s.length;h++)s[h]==u&&r++,s[h]==c&&o++;let t=0,a=0;r==1?(t=3,o==1&&c!=0&&(a=1)):r==2?t=2:r>2&&(t=1);let y=[];for(let h=0;h<s.length;h++)s[h]==u?y.push(t):s[h]==c?y.push(a):y.push(0);n.push(y)}this.bonusMatrix=n}},computed:{getWScore(){const n=[];for(let s=0;s<this.count;s++){let u=0;for(let c=0;c<5;c++)u+=this.wMatrix[c][s];n.push(u)}return n},getHScore(){const n=[];for(let s=0;s<this.count;s++){let u=0;for(let c=0;c<5;c++)u+=this.hMatrix[c][s]+this.bonusMatrix[c][s];n.push(u)}return n},getTotalScore(){const n=[];for(let s=0;s<this.count;s++)n.push(this.getWScore[s]+this.getHScore[s]+this.coneRow[s]);return n}}},A="/assets/bear-T6cN_upw.png",N="/assets/deer-iI-3_9NE.png",C="/assets/salmon-i4XScbsS.png",R="/assets/hawk-nfmjhbyD.png",T="/assets/fox-FfIYypCI.png",D="/assets/wildness-kDo9Serr.png",E="/assets/mountains-z1tN5QUz.png",F="/assets/forest-8QvoXQEv.png",W="/assets/desert-zMc0HDba.png",B="/assets/swamp-REfn_sKM.png",J="/assets/water-Aeg3rj-q.png",L="/assets/hectare-j6kyQtnn.png",O="/assets/cone-RGHoypaE.png",j="/assets/final_score-qo-FqKyy.png",m=n=>(v("data-v-a602f889"),n=n(),w(),n),q={class:"sticky"},P=m(()=>e("td",{class:"num-td"},null,-1)),V=["placeholder","onInput","value"],z=m(()=>e("td",{class:"icon-td"},[e("img",{src:A,alt:"Bear",class:"icon"})],-1)),Q=["id","onInput","value"],K=m(()=>e("td",{class:"icon-td"},[e("img",{src:N,alt:"Deer",class:"icon"})],-1)),X=["id","onInput","value"],Y=m(()=>e("td",{class:"icon-td"},[e("img",{src:C,alt:"Salmon",class:"icon"})],-1)),G=["id","onInput","value"],U=m(()=>e("td",{class:"icon-td"},[e("img",{src:R,alt:"Hawk",class:"icon"})],-1)),Z=["id","onInput","value"],$=m(()=>e("td",{class:"icon-td"},[e("img",{src:T,alt:"Fox",class:"icon"})],-1)),tt=["id","onInput","value"],et={class:"sub-divider sub-score"},st=m(()=>e("td",{class:"icon-td"},[e("img",{src:D,alt:"W",class:"icon"})],-1)),nt=["value"],rt=m(()=>e("td",{class:"icon-td"},[e("img",{src:E,alt:"Mountains",class:"icon"})],-1)),ot=["id","onInput","value"],it=m(()=>e("td",{class:"icon-td"},[e("img",{src:F,alt:"Forest",class:"icon"})],-1)),lt=["id","onInput","value"],at=m(()=>e("td",{class:"icon-td"},[e("img",{src:W,alt:"Desert",class:"icon"})],-1)),ut=["id","onInput","value"],ct=m(()=>e("td",{class:"icon-td"},[e("img",{src:B,alt:"Swamp",class:"icon"})],-1)),ht=["id","onInput","value"],pt=m(()=>e("td",{class:"icon-td"},[e("img",{src:J,alt:"Water",class:"icon"})],-1)),dt=["id","onInput","value"],mt={class:"sub-divider sub-score"},_t=m(()=>e("td",{class:"icon-td"},[e("img",{src:L,alt:"H",class:"icon"})],-1)),yt=["value"],gt={class:"sub-divider"},xt=m(()=>e("td",{class:"icon-td"},[e("img",{src:O,alt:"Cone",class:"icon"})],-1)),Mt=["id","onInput","value"],bt={class:"final-score"},ft=m(()=>e("td",{class:"icon-td"},[e("img",{src:j,alt:"Final Score",class:"icon"})],-1)),vt=["value"];function wt(n,s,u,c,r,o){return i(),l(p,null,[e("div",null,[e("table",null,[e("tr",q,[P,(i(!0),l(p,null,d(o.getArray(),t=>(i(),l("td",{key:"n"+t,class:"num-td"},[e("input",{type:"text",placeholder:"P"+t,class:"my-input name-input",onInput:a=>o.setName(t,a),value:r.names[t-1]},null,40,V)]))),128))]),e("tr",null,[z,(i(!0),l(p,null,d(o.getArray(),t=>(i(),l("td",{key:"w1"+t,class:"num-td"},[e("input",{type:"number",placeholder:"0",class:"my-input",id:"w1"+t,onInput:a=>o.setWMatrix(1,t,a),value:r.wMatrix[0][t-1]==0?"":r.wMatrix[0][t-1]},null,40,Q)]))),128))]),e("tr",null,[K,(i(!0),l(p,null,d(o.getArray(),t=>(i(),l("td",{key:"w2"+t,class:"num-td"},[e("input",{type:"number",placeholder:"0",class:"my-input",id:"w2"+t,onInput:a=>o.setWMatrix(2,t,a),value:r.wMatrix[1][t-1]==0?"":r.wMatrix[1][t-1]},null,40,X)]))),128))]),e("tr",null,[Y,(i(!0),l(p,null,d(o.getArray(),t=>(i(),l("td",{key:"w3"+t,class:"num-td"},[e("input",{type:"number",placeholder:"0",class:"my-input",id:"w3"+t,onInput:a=>o.setWMatrix(3,t,a),value:r.wMatrix[2][t-1]==0?"":r.wMatrix[2][t-1]},null,40,G)]))),128))]),e("tr",null,[U,(i(!0),l(p,null,d(o.getArray(),t=>(i(),l("td",{key:"w4"+t,class:"num-td"},[e("input",{type:"number",placeholder:"0",class:"my-input",id:"w4"+t,onInput:a=>o.setWMatrix(4,t,a),value:r.wMatrix[3][t-1]==0?"":r.wMatrix[3][t-1]},null,40,Z)]))),128))]),e("tr",null,[$,(i(!0),l(p,null,d(o.getArray(),t=>(i(),l("td",{key:"w5"+t,class:"num-td"},[e("input",{type:"number",placeholder:"0",class:"my-input",id:"w5"+t,onInput:a=>o.setWMatrix(5,t,a),value:r.wMatrix[4][t-1]==0?"":r.wMatrix[4][t-1]},null,40,tt)]))),128))]),e("tr",et,[st,(i(!0),l(p,null,d(o.getWScore,(t,a)=>(i(),l("td",{key:"W"+a,class:"num-td"},[e("input",{type:"number",class:"my-input",value:t,disabled:""},null,8,nt)]))),128))]),e("tr",null,[rt,(i(!0),l(p,null,d(o.getArray(),t=>(i(),l("td",{key:"h1"+t,class:"num-td"},[e("input",{type:"number",placeholder:"0",class:"my-input",id:"h1"+t,onInput:a=>o.setHMatrix(1,t,a),value:r.hMatrix[0][t-1]==0?"":r.hMatrix[0][t-1]},null,40,ot),e("p",{class:"bonus",style:x({opacity:r.bonusMatrix[0][t-1]==0?"0":"0.6"})},g("+"+r.bonusMatrix[0][t-1]),5)]))),128))]),e("tr",null,[it,(i(!0),l(p,null,d(o.getArray(),t=>(i(),l("td",{key:"h2"+t,class:"num-td"},[e("input",{type:"number",placeholder:"0",class:"my-input",id:"h2"+t,onInput:a=>o.setHMatrix(2,t,a),value:r.hMatrix[1][t-1]==0?"":r.hMatrix[1][t-1]},null,40,lt),e("p",{class:"bonus",style:x({opacity:r.bonusMatrix[1][t-1]==0?"0":"0.6"})},g("+"+r.bonusMatrix[1][t-1]),5)]))),128))]),e("tr",null,[at,(i(!0),l(p,null,d(o.getArray(),t=>(i(),l("td",{key:"h3"+t,class:"num-td"},[e("input",{type:"number",placeholder:"0",class:"my-input",id:"h3"+t,onInput:a=>o.setHMatrix(3,t,a),value:r.hMatrix[2][t-1]==0?"":r.hMatrix[2][t-1]},null,40,ut),e("p",{class:"bonus",style:x({opacity:r.bonusMatrix[2][t-1]==0?"0":"0.6"})},g("+"+r.bonusMatrix[2][t-1]),5)]))),128))]),e("tr",null,[ct,(i(!0),l(p,null,d(o.getArray(),t=>(i(),l("td",{key:"h4"+t,class:"num-td"},[e("input",{type:"number",placeholder:"0",class:"my-input",id:"h4"+t,onInput:a=>o.setHMatrix(4,t,a),value:r.hMatrix[3][t-1]==0?"":r.hMatrix[3][t-1]},null,40,ht),e("p",{class:"bonus",style:x({opacity:r.bonusMatrix[3][t-1]==0?"0":"0.6"})},g("+"+r.bonusMatrix[3][t-1]),5)]))),128))]),e("tr",null,[pt,(i(!0),l(p,null,d(o.getArray(),t=>(i(),l("td",{key:"h5"+t,class:"num-td"},[e("input",{type:"number",placeholder:"0",class:"my-input",id:"h5"+t,onInput:a=>o.setHMatrix(5,t,a),value:r.hMatrix[4][t-1]==0?"":r.hMatrix[4][t-1]},null,40,dt),e("p",{class:"bonus",style:x({opacity:r.bonusMatrix[4][t-1]==0?"0":"0.6"})},g("+"+r.bonusMatrix[4][t-1]),5)]))),128))]),e("tr",mt,[_t,(i(!0),l(p,null,d(o.getHScore,(t,a)=>(i(),l("td",{key:"H"+a,class:"num-td"},[e("input",{type:"number",class:"my-input",value:t,disabled:""},null,8,yt)]))),128))]),e("tr",gt,[xt,(i(!0),l(p,null,d(o.getArray(),t=>(i(),l("td",{key:"C"+t,class:"num-td"},[e("input",{type:"number",placeholder:"0",class:"my-input",id:"C"+t,onInput:a=>o.setConeRow(t,a),value:r.coneRow[t-1]==0?"":r.coneRow[t-1]},null,40,Mt)]))),128))]),e("tr",bt,[ft,(i(!0),l(p,null,d(o.getTotalScore,(t,a)=>(i(),l("td",{key:"F"+a,class:"num-td"},[e("input",{type:"number",class:"my-input",value:t,disabled:""},null,8,vt)]))),128))])])]),e("button",{class:"btn reset-btn print-off",onClick:s[0]||(s[0]=t=>o.reset())},"Reset")],64)}const It=f(H,[["render",wt],["__scopeId","data-v-a602f889"]]),St={name:"TableView",components:{CasTable:It,MyLogo:I},data(){return{count:1,printing:!1}},mounted(){let n=this.$route.params.count;Array.isArray(n)&&(n=n[0]),!n||isNaN(parseInt(n))||parseInt(n)<1||parseInt(n)>6?this.$router.push({name:"home"}):this.count=parseInt(n)},methods:{goToHome(){this.$router.push({name:"home"})},saveAsExcel(){const n=document.querySelector("table");if(!n)return;const c=`<style>table{border-collapse: collapse;}td,th{border: 1px solid #000;padding: 5px;}</style>${n.outerHTML}`,r=`data:application/vnd.ms-excel;base64,${btoa(c)}`,o=document.createElement("a");o.href=r,o.download="table.xls",o.click()},saveAsPDF(){this.printing=!0;const n=document.getElementsByClassName("print-off"),s=[];Array.prototype.forEach.call(n,function(u){s.push(u.style.display),u.style.display="none"}),setTimeout(()=>{window.print(),setTimeout(()=>{this.printing=!1,Array.prototype.forEach.call(n,function(u,c){u.style.display=s[c]})},1e3)},700)},getDate(){const n=new Date,s=n.getDate(),u=n.toLocaleString("default",{month:"long"}),c=n.getFullYear();return`${s}. ${u} ${c}`}}},kt={key:0},Ht={key:2},At={class:"container"},Nt={key:0},Ct={key:1,class:"btn-container"};function Rt(n,s,u,c,r,o){const t=b("MyLogo"),a=b("CasTable");return i(),l("div",null,[r.printing?M("",!0):(i(),l("h1",kt,g(r.count)+" Player",1)),r.printing?(i(),S(t,{key:1,color:"black",big:!0})):M("",!0),r.printing?(i(),l("h1",Ht,g(o.getDate()),1)):M("",!0),e("div",At,[k(a,{count:r.count},null,8,["count"]),r.printing?(i(),l("h2",Nt,"cascoria.philipp-bonin.com")):M("",!0),r.printing?M("",!0):(i(),l("div",Ct,[e("button",{class:"btn",onClick:s[0]||(s[0]=y=>o.saveAsPDF())},"Save as PDF"),e("button",{class:"btn",onClick:s[1]||(s[1]=y=>o.saveAsExcel())},"Save as Excel"),e("button",{class:"btn home-btn",onClick:s[2]||(s[2]=y=>o.goToHome())},"Home")]))])])}const Dt=f(St,[["render",Rt],["__scopeId","data-v-7c9d7e0d"]]);export{Dt as default};
