(this.webpackJsonpfrontend_base_dapp=this.webpackJsonpfrontend_base_dapp||[]).push([[0],{209:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"newAffiliate","type":"address"},{"internalType":"bool","name":"allow","type":"bool"}],"name":"allowAffiliate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"recipients","type":"address[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"gift","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"affiliate","type":"address"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PaymentReceived","type":"event"},{"inputs":[{"internalType":"uint256","name":"newMax","type":"uint256"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"reduceMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeBatchTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_baseTokenURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCommission","type":"uint256"}],"name":"setCommission","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmintPrice","type":"uint256"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"setMintPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_affiliate","type":"bool"}],"name":"setOnlyAffiliate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_status","type":"bool"}],"name":"setSaleStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newuri","type":"string"}],"name":"setURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"TransferBatch","type":"event"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"TransferSingle","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"value","type":"string"},{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"}],"name":"URI","type":"event"},{"inputs":[{"internalType":"address payable","name":"to","type":"address"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"address","name":"to","type":"address"}],"name":"withdrawERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"affiliateList","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"}],"name":"balanceOfBatch","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"commission","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"exists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"mintPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"onlyAffiliate","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"status","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"uri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]')},236:function(e,t){},238:function(e,t){},243:function(e,t){},244:function(e,t){},271:function(e,t){},273:function(e,t){},286:function(e,t){},288:function(e,t){},303:function(e,t){},321:function(e,t){},323:function(e,t){},341:function(e,t){},342:function(e,t){},420:function(e,t){},422:function(e,t){},428:function(e,t){},440:function(e,t){},443:function(e,t){},448:function(e,t){},527:function(e,t,n){},528:function(e,t,n){},529:function(e,t,n){"use strict";n.r(t);var a,i,r,s,o,c,l,u,d,p,j,b,y,f,x,h=n(2),m=n.n(h),O=n(80),g=n.n(O),w=n(81),A=n(15),v=n(56),T=n(66),C=n(19),S=n.n(C),k=n(64),E=n.n(k),F=n(36),M=n.n(F),N=n(209),B=n(67),D=n(210),_=n(13),z={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(_.a)(Object(_.a)({},z),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(_.a)(Object(_.a)({},e),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(_.a)(Object(_.a)({},z),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(_.a)(Object(_.a)({},e),{},{account:t.payload.account});default:return e}},I={loading:!1,name:"",totalSupply:0,cost:0,error:!1,errorMsg:""},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(_.a)(Object(_.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(_.a)(Object(_.a)({},e),{},{loading:!1,name:t.payload.name,totalSupply:t.payload.totalSupply,cost:t.payload.cost,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(_.a)(Object(_.a)({},I),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},H=Object(B.b)({blockchain:U,data:R}),Y=[D.a],W=Object(B.c)(B.a.apply(void 0,Y)),P=Object(B.d)(H,W),L=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},$=function(e){return function(){var e=Object(T.a)(S.a.mark((function e(t){var n,a,i;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,P.getState().blockchain.smartContract.methods.name().call();case 4:return n=e.sent,e.next=7,P.getState().blockchain.smartContract.methods.totalSupply().call();case 7:return a=e.sent,e.next=10,P.getState().blockchain.smartContract.methods.cost().call();case 10:i=e.sent,t({type:"CHECK_DATA_SUCCESS",payload:{name:n,totalSupply:a,cost:i}}),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0),t(L("Could not load data from contract."));case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}()},q=function(e){return{type:"CONNECTION_FAILED",payload:e}},G=function(){return function(){var e=Object(T.a)(S.a.mark((function e(t){var n,a,i,r,s;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t({type:"CONNECTION_REQUEST"}),n=window,a=n.ethereum,!(a&&a.isMetaMask)){e.next=21;break}return E.a.setProvider(a),i=new M.a(a),e.prev=6,e.next=9,a.request({method:"eth_requestAccounts"});case 9:return r=e.sent,e.next=12,a.request({method:"net_version"});case 12:1==e.sent?(s=new E.a(N,"0x3AB77805A86C5c17BDFc67DEac75BFB961Eb23dF"),t({type:"CONNECTION_SUCCESS",payload:{account:r[0],smartContract:s,web3:i}}),a.on("accountsChanged",(function(e){t(K(e[0]))})),a.on("chainChanged",(function(){window.location.reload()}))):t(q("Change network to Rinkeby.")),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(6),t(q("Something went wrong."));case 19:e.next=22;break;case 21:t(q("Install Metamask."));case 22:case"end":return e.stop()}}),e,null,[[6,16]])})));return function(t){return e.apply(this,arguments)}}()},K=function(e){return function(){var t=Object(T.a)(S.a.mark((function t(n){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:e}}),n($());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Q=n(16),J=Q.a.div(a||(a=Object(A.a)(["\n  background-color: var(--white);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),X=(Q.a.div(i||(i=Object(A.a)(["\n  height: 8px;\n  width: 8px;\n"]))),Q.a.div(r||(r=Object(A.a)(["\n  height: 16px;\n  width: 16px;\n"])))),V=Q.a.div(s||(s=Object(A.a)(["\n  height: 24px;\n  width: 24px;\n"]))),Z=Q.a.div(o||(o=Object(A.a)(["\n  height: 32px;\n  width: 32px;\n"]))),ee=Q.a.div(c||(c=Object(A.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(e){var t=e.flex;return t||0}),(function(e){var t=e.fd;return t||"column"}),(function(e){var t=e.jc;return t||"flex-start"}),(function(e){var t=e.ai;return t||"flex-start"}),(function(e){return e.test?"pink":"none"}),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),te=Q.a.p(l||(l=Object(A.a)(["\n  color: var(--black);\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),ne=(Q.a.p(u||(u=Object(A.a)(["\n  color: var(--black);\n  font-size: 14px;\n  line-height: 1.6;\n"]))),Q.a.p(d||(d=Object(A.a)(["\n  color: var(--black);\n  font-size: 12px;\n  line-height: 1.6;\n"])))),ae=(Q.a.div(p||(p=Object(A.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),n.p+"static/media/10.b0b19b1d.jpg"),ie=n.p+"static/media/25.c5ac4e4f.jpg",re=n.p+"static/media/100.0010b802.jpg",se=n.p+"static/media/500.0f3873b2.jpg",oe=n.p+"static/media/1000.1c8fa39e.jpg",ce=n(0),le=function(e){var t,n,a=window.location.search.substring(1).split("&");for(n=0;n<a.length;n++)if((t=a[n].split("="))[0]===e)return void 0===t[1]||decodeURIComponent(t[1]);return!1},ue=Q.a.button(j||(j=Object(A.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: #000000;\n  padding: 10px;\n  font-weight: bold;\n  color: #ffffff;\n  width: 90px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),de=Q.a.button(b||(b=Object(A.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),pe=Q.a.div(y||(y=Object(A.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 660px) {\n    flex-direction: row;\n  }\n"]))),je=(Q.a.img(f||(f=Object(A.a)(["\n  width: 336px;\n  height: 462px;\n  @media (min-width: 660px) {\n    width: 480px;\n    height: 660px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),Q.a.img(x||(x=Object(A.a)(["\n  width: 300px;\n  height: 213px;\n  @media (min-width: 213px) {\n    width: 300px;\n    height: 213px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))));var be=function(){var e=Object(v.b)(),t=Object(v.c)((function(e){return e.blockchain})),n=Object(v.c)((function(e){return e.data})),a=Object(h.useState)("Ready to mint."),i=Object(w.a)(a,2),r=i[0],s=i[1],o=Object(h.useState)(!1),c=Object(w.a)(o,2),l=c[0],u=c[1],d=Object(h.useState)(1),p=Object(w.a)(d,2),j=p[0],b=p[1],y=m.a.useRef(),f=function(){var e=j-1;e<1&&(e=1),b(e)},x=function(){var e=j+1;e>20&&(e=20),b(e)},O=function(){""!==t.account&&null!==t.smartContract&&e($(t.account))};return y.current=O,Object(h.useEffect)((function(){return y.current()}),[t.account]),Object(ce.jsx)(J,{style:{backgroundColor:"var(--white)"},children:Object(ce.jsxs)(ee,{flex:1,ai:"center",style:{padding:24},children:[Object(ce.jsxs)(pe,{flex:1,style:{padding:24},children:[Object(ce.jsxs)(ee,{flex:1,jc:"left",ai:"left",style:{backgroundColor:"--black",padding:24},children:[Object(ce.jsx)(te,{style:{textAlign:"left",fontSize:45},children:"Mint Afro American NFTs"}),Object(ce.jsx)(Z,{}),Object(ce.jsx)(te,{style:{textAlign:"left",fontSize:32},children:Object(ce.jsx)("a",{target:"_self",href:"https://svvynopcque.typeform.com/to/Dzwf41ht",rel:"noreferrer",children:"Sign up to be an affiliate and earn instant 15% commission."})}),Object(ce.jsx)(X,{}),Object(ce.jsx)(te,{style:{textAlign:"left",fontSize:18},children:"This NFT is an expression of the independence of the Afro-American community."}),Object(ce.jsx)(X,{}),Object(ce.jsx)(te,{style:{textAlign:"left",fontSize:18},children:"No more depending on the system of discrimination and lack of financial possibilities due to color and race and the possibility to deal with each other via the NFT system independent of the current systems."}),Object(ce.jsx)(X,{}),Object(ce.jsx)(te,{style:{textAlign:"left",fontSize:18},children:"$10"}),Object(ce.jsx)(X,{}),Object(ce.jsx)(te,{style:{textAlign:"left",fontSize:18},children:"$25"}),Object(ce.jsx)(X,{}),Object(ce.jsx)(te,{style:{textAlign:"left",fontSize:18},children:"$100"}),Object(ce.jsx)(X,{}),Object(ce.jsx)(te,{style:{textAlign:"left",fontSize:18},children:"$500"}),Object(ce.jsx)(X,{}),Object(ce.jsx)(te,{style:{textAlign:"left",fontSize:18},children:"$1000"}),Object(ce.jsx)(X,{}),Object(ce.jsx)(te,{style:{textAlign:"left",fontSize:18},children:"You can buy any of them or a combination. Next time you want to pay or trade you can offer the NFTs for now, depending on the Price of ETH which at this time is almost half what it as a short time ago. So you have a built in mechanism of keeping your value or it may appreciate based on the ETH current situation."}),Object(ce.jsx)(X,{}),Object(ce.jsx)(te,{style:{textAlign:"left",fontSize:18},children:"You can also trade with your Afro-American brothers against other items based on the NFT so if you need to get something from a \u201cBrother\u201d store you may offer him NFT in full or partial payment."}),Object(ce.jsx)(X,{}),Object(ce.jsx)(te,{style:{textAlign:"left",fontSize:18},children:"Support black Enterprise!"}),Object(ce.jsx)(X,{}),Object(ce.jsx)(te,{style:{textAlign:"left",fontSize:18},children:"Get on the Afro American independence of current systems!"}),Object(ce.jsx)(X,{}),Object(ce.jsx)(te,{style:{textAlign:"left",fontSize:18},children:"There may be a possibility to trade with NFTs like other items in an exchange (Sushi Swap)."}),Object(ce.jsx)(X,{}),Object(ce.jsx)(te,{style:{textAlign:"left",fontSize:18},children:"This offer of NFT is not an offer for investment or promise of any kind, it's just a flag introduced in Black History month of 2022, to show that We all can have our privacy and independence."}),Object(ce.jsx)(X,{}),Object(ce.jsx)(te,{style:{textAlign:"left",fontSize:18},children:"No promises are made."}),Object(ce.jsx)(X,{}),Object(ce.jsx)(te,{style:{textAlign:"left",fontSize:18},children:"There may be possibilities down the line of getting a collateralized or non collateralized loan against these NFTs (it's called defi). No one will qualify you based on the credit history or color of your skin because it's all private to you! Sooner or later due to the NFT revolution no one will be able to count you out because you are Black!"}),Object(ce.jsx)(X,{}),Object(ce.jsx)(te,{style:{textAlign:"left",fontSize:18},children:"Blockchain has no color or race!"}),Object(ce.jsx)(X,{}),Object(ce.jsx)(te,{style:{textAlign:"left",fontSize:18},children:"What you do with your NFT is your private business! No one will know what you are doing unless you tell them."}),Object(ce.jsx)(X,{}),Object(ce.jsx)(te,{style:{textAlign:"left",fontSize:18},children:"You can also register with us to be on our mailing list for any future development."}),Object(ce.jsx)(Z,{}),Object(ce.jsxs)(te,{style:{textAlign:"center",fontSize:1,fontWeight:"bold"},children:[Object(ce.jsx)("a",{target:"_self",href:"https://www.afroamericannft.com/",rel:"noreferrer",children:Object(ce.jsx)(je,{alt:"example",src:ae})}),Object(ce.jsx)(Z,{})]}),1e5===Number(n.totalSupply)?Object(ce.jsxs)(ce.Fragment,{children:[Object(ce.jsx)(te,{style:{textAlign:"center"},children:"The sale has ended."}),Object(ce.jsx)(X,{}),Object(ce.jsxs)(ne,{style:{textAlign:"center"},children:["You can still find Afro American for sale on "," ",Object(ce.jsx)("a",{target:"_blank",href:"https://opensea.io/collection/afroamerican",rel:"noreferrer",children:"Opensea.io"})]})]}):Object(ce.jsxs)(ce.Fragment,{children:[Object(ce.jsx)(ne,{style:{textAlign:"center",fontSize:30},children:"0.0034 ETH PER $10 NFT"}),Object(ce.jsx)(X,{}),Object(ce.jsx)(ne,{style:{textAlign:"center"},children:r}),Object(ce.jsx)(V,{}),""===t.account||null===t.smartContract?Object(ce.jsxs)(ee,{ai:"center",jc:"center",children:[Object(ce.jsx)(ne,{style:{textAlign:"center"},children:"Connect to the Ethereum network"}),Object(ce.jsx)(X,{}),Object(ce.jsx)(ue,{onClick:function(t){t.preventDefault(),e(G()),O()},children:"CONNECT"}),""!==t.errorMsg?Object(ce.jsxs)(ce.Fragment,{children:[Object(ce.jsx)(X,{}),Object(ce.jsx)(ne,{style:{textAlign:"center"},children:t.errorMsg})]}):null]}):Object(ce.jsxs)(ee,{ai:"center",jc:"center",fd:"row",children:[Object(ce.jsx)(ue,{disabled:l?1:0,onClick:function(n){n.preventDefault(),function(){var n=String(34e14*j),a=String(428e3*j),i=le("a");!1===M.a.utils.isAddress(i)&&(i="0x1380c8aa439AAFf8CEf5186350ce6b08a6062E90"),s("Minting your Afro American..."),u(!0),t.smartContract.methods.mint(j,0,i).send({gasLimit:String(a),to:"0x3AB77805A86C5c17BDFc67DEac75BFB961Eb23dF",from:t.account,value:n}).once("error",(function(e){console.log(e),s("Sorry, something went wrong please try again later."),u(!1)})).then((function(n){s("WOW, you now own a Black Coin. Go visit Opensea.io to view it."),u(!1),e($(t.account))}))}(),O()},children:l?"BUSY":"BUY "}),Object(ce.jsx)(X,{}),Object(ce.jsx)(de,{style:{lineHeight:.4},disabled:l?1:0,onClick:function(e){e.preventDefault(),f()},children:"-"}),Object(ce.jsx)(V,{}),Object(ce.jsx)(ne,{style:{textAlign:"center",color:"var(--accent-text)"},children:j}),Object(ce.jsx)(V,{}),Object(ce.jsx)(de,{disabled:l?1:0,onClick:function(e){e.preventDefault(),x()},children:"+"})]})]}),Object(ce.jsx)(Z,{}),Object(ce.jsx)(Z,{}),Object(ce.jsxs)(te,{style:{textAlign:"center",fontSize:1,fontWeight:"bold"},children:[Object(ce.jsx)("a",{target:"_self",href:"https://www.afroamericannft.com/",rel:"noreferrer",children:Object(ce.jsx)(je,{alt:"example",src:ie})}),Object(ce.jsx)(Z,{})]}),5e4===Number(n.totalSupply)?Object(ce.jsxs)(ce.Fragment,{children:[Object(ce.jsx)(te,{style:{textAlign:"center"},children:"The sale has ended."}),Object(ce.jsx)(X,{}),Object(ce.jsxs)(ne,{style:{textAlign:"center"},children:["You can still find Afro American for sale on "," ",Object(ce.jsx)("a",{target:"_blank",href:"https://opensea.io/collection/afroamerican",rel:"noreferrer",children:"Opensea.io"})]})]}):Object(ce.jsxs)(ce.Fragment,{children:[Object(ce.jsx)(ne,{style:{textAlign:"center",fontSize:30},children:"0.0085 ETH PER $25 NFT"}),Object(ce.jsx)(X,{}),Object(ce.jsx)(ne,{style:{textAlign:"center"},children:r}),Object(ce.jsx)(V,{}),""===t.account||null===t.smartContract?Object(ce.jsxs)(ee,{ai:"center",jc:"center",children:[Object(ce.jsx)(ne,{style:{textAlign:"center"},children:"Connect to the Ethereum network"}),Object(ce.jsx)(X,{}),Object(ce.jsx)(ue,{onClick:function(t){t.preventDefault(),e(G()),O()},children:"CONNECT"}),""!==t.errorMsg?Object(ce.jsxs)(ce.Fragment,{children:[Object(ce.jsx)(X,{}),Object(ce.jsx)(ne,{style:{textAlign:"center"},children:t.errorMsg})]}):null]}):Object(ce.jsxs)(ee,{ai:"center",jc:"center",fd:"row",children:[Object(ce.jsx)(ue,{disabled:l?1:0,onClick:function(n){n.preventDefault(),function(){var n=String(85e14*j),a=String(428e3*j),i=le("a");!1===M.a.utils.isAddress(i)&&(i="0x1380c8aa439AAFf8CEf5186350ce6b08a6062E90"),s("Minting your Afro American..."),u(!0),t.smartContract.methods.mint(j,1,i).send({gasLimit:String(a),to:"0x3AB77805A86C5c17BDFc67DEac75BFB961Eb23dF",from:t.account,value:n}).once("error",(function(e){console.log(e),s("Sorry, something went wrong please try again later."),u(!1)})).then((function(n){s("WOW, you now own a Black Coin. Go visit Opensea.io to view it."),u(!1),e($(t.account))}))}(),O()},children:l?"BUSY":"BUY "}),Object(ce.jsx)(X,{}),Object(ce.jsx)(de,{style:{lineHeight:.4},disabled:l?1:0,onClick:function(e){e.preventDefault(),f()},children:"-"}),Object(ce.jsx)(V,{}),Object(ce.jsx)(ne,{style:{textAlign:"center",color:"var(--accent-text)"},children:j}),Object(ce.jsx)(V,{}),Object(ce.jsx)(de,{disabled:l?1:0,onClick:function(e){e.preventDefault(),x()},children:"+"})]})]}),Object(ce.jsx)(Z,{}),Object(ce.jsx)(Z,{}),Object(ce.jsxs)(te,{style:{textAlign:"center",fontSize:1,fontWeight:"bold"},children:[Object(ce.jsx)("a",{target:"_self",href:"https://www.afroamericannft.com/",rel:"noreferrer",children:Object(ce.jsx)(je,{alt:"example",src:re})}),Object(ce.jsx)(Z,{})]}),25e3===Number(n.totalSupply)?Object(ce.jsxs)(ce.Fragment,{children:[Object(ce.jsx)(te,{style:{textAlign:"center"},children:"The sale has ended."}),Object(ce.jsx)(X,{}),Object(ce.jsxs)(ne,{style:{textAlign:"center"},children:["You can still find Afro American for sale on "," ",Object(ce.jsx)("a",{target:"_blank",href:"https://opensea.io/collection/afroamerican",rel:"noreferrer",children:"Opensea.io"})]})]}):Object(ce.jsxs)(ce.Fragment,{children:[Object(ce.jsx)(ne,{style:{textAlign:"center",fontSize:30},children:"0.034 ETH PER $100 NFT"}),Object(ce.jsx)(X,{}),Object(ce.jsx)(ne,{style:{textAlign:"center"},children:r}),Object(ce.jsx)(V,{}),""===t.account||null===t.smartContract?Object(ce.jsxs)(ee,{ai:"center",jc:"center",children:[Object(ce.jsx)(ne,{style:{textAlign:"center"},children:"Connect to the Ethereum network"}),Object(ce.jsx)(X,{}),Object(ce.jsx)(ue,{onClick:function(t){t.preventDefault(),e(G()),O()},children:"CONNECT"}),""!==t.errorMsg?Object(ce.jsxs)(ce.Fragment,{children:[Object(ce.jsx)(X,{}),Object(ce.jsx)(ne,{style:{textAlign:"center"},children:t.errorMsg})]}):null]}):Object(ce.jsxs)(ee,{ai:"center",jc:"center",fd:"row",children:[Object(ce.jsx)(ue,{disabled:l?1:0,onClick:function(n){n.preventDefault(),function(){var n=String(34e15*j),a=String(428e3*j),i=le("a");!1===M.a.utils.isAddress(i)&&(i="0x1380c8aa439AAFf8CEf5186350ce6b08a6062E90"),s("Minting your Afro American..."),u(!0),t.smartContract.methods.mint(j,2,i).send({gasLimit:String(a),to:"0x3AB77805A86C5c17BDFc67DEac75BFB961Eb23dF",from:t.account,value:n}).once("error",(function(e){console.log(e),s("Sorry, something went wrong please try again later."),u(!1)})).then((function(n){s("WOW, you now own a Black Coin. Go visit Opensea.io to view it."),u(!1),e($(t.account))}))}(),O()},children:l?"BUSY":"BUY "}),Object(ce.jsx)(X,{}),Object(ce.jsx)(de,{style:{lineHeight:.4},disabled:l?1:0,onClick:function(e){e.preventDefault(),f()},children:"-"}),Object(ce.jsx)(V,{}),Object(ce.jsx)(ne,{style:{textAlign:"center",color:"var(--accent-text)"},children:j}),Object(ce.jsx)(V,{}),Object(ce.jsx)(de,{disabled:l?1:0,onClick:function(e){e.preventDefault(),x()},children:"+"})]})]}),Object(ce.jsx)(Z,{}),Object(ce.jsx)(Z,{}),Object(ce.jsxs)(te,{style:{textAlign:"center",fontSize:1,fontWeight:"bold"},children:[Object(ce.jsx)("a",{target:"_self",href:"https://www.afroamericannft.com/",rel:"noreferrer",children:Object(ce.jsx)(je,{alt:"example",src:se})}),Object(ce.jsx)(Z,{})]}),1e4===Number(n.totalSupply)?Object(ce.jsxs)(ce.Fragment,{children:[Object(ce.jsx)(te,{style:{textAlign:"center"},children:"The sale has ended."}),Object(ce.jsx)(X,{}),Object(ce.jsxs)(ne,{style:{textAlign:"center"},children:["You can still find Afro American for sale on "," ",Object(ce.jsx)("a",{target:"_blank",href:"https://opensea.io/collection/afroamerican",rel:"noreferrer",children:"Opensea.io"})]})]}):Object(ce.jsxs)(ce.Fragment,{children:[Object(ce.jsx)(ne,{style:{textAlign:"center",fontSize:30},children:"0.17 ETH PER $500 NFT"}),Object(ce.jsx)(X,{}),Object(ce.jsx)(ne,{style:{textAlign:"center"},children:r}),Object(ce.jsx)(V,{}),""===t.account||null===t.smartContract?Object(ce.jsxs)(ee,{ai:"center",jc:"center",children:[Object(ce.jsx)(ne,{style:{textAlign:"center"},children:"Connect to the Ethereum network"}),Object(ce.jsx)(X,{}),Object(ce.jsx)(ue,{onClick:function(t){t.preventDefault(),e(G()),O()},children:"CONNECT"}),""!==t.errorMsg?Object(ce.jsxs)(ce.Fragment,{children:[Object(ce.jsx)(X,{}),Object(ce.jsx)(ne,{style:{textAlign:"center"},children:t.errorMsg})]}):null]}):Object(ce.jsxs)(ee,{ai:"center",jc:"center",fd:"row",children:[Object(ce.jsx)(ue,{disabled:l?1:0,onClick:function(n){n.preventDefault(),function(){var n=String(17e16*j),a=String(428e3*j),i=le("a");!1===M.a.utils.isAddress(i)&&(i="0x1380c8aa439AAFf8CEf5186350ce6b08a6062E90"),s("Minting your Afro American..."),u(!0),t.smartContract.methods.mint(j,3,i).send({gasLimit:String(a),to:"0x3AB77805A86C5c17BDFc67DEac75BFB961Eb23dF",from:t.account,value:n}).once("error",(function(e){console.log(e),s("Sorry, something went wrong please try again later."),u(!1)})).then((function(n){s("WOW, you now own a Black Coin. Go visit Opensea.io to view it."),u(!1),e($(t.account))}))}(),O()},children:l?"BUSY":"BUY "}),Object(ce.jsx)(X,{}),Object(ce.jsx)(de,{style:{lineHeight:.4},disabled:l?1:0,onClick:function(e){e.preventDefault(),f()},children:"-"}),Object(ce.jsx)(V,{}),Object(ce.jsx)(ne,{style:{textAlign:"center",color:"var(--accent-text)"},children:j}),Object(ce.jsx)(V,{}),Object(ce.jsx)(de,{disabled:l?1:0,onClick:function(e){e.preventDefault(),x()},children:"+"})]})]}),Object(ce.jsx)(Z,{}),Object(ce.jsx)(Z,{}),Object(ce.jsxs)(te,{style:{textAlign:"center",fontSize:1,fontWeight:"bold"},children:[Object(ce.jsx)("a",{target:"_self",href:"https://www.afroamericannft.com/",rel:"noreferrer",children:Object(ce.jsx)(je,{alt:"example",src:oe})}),Object(ce.jsx)(Z,{})]}),5e3===Number(n.totalSupply)?Object(ce.jsxs)(ce.Fragment,{children:[Object(ce.jsx)(te,{style:{textAlign:"center"},children:"The sale has ended."}),Object(ce.jsx)(X,{}),Object(ce.jsxs)(ne,{style:{textAlign:"center"},children:["You can still find Afro American for sale on "," ",Object(ce.jsx)("a",{target:"_blank",href:"https://opensea.io/collection/afroamerican",rel:"noreferrer",children:"Opensea.io"})]})]}):Object(ce.jsxs)(ce.Fragment,{children:[Object(ce.jsx)(ne,{style:{textAlign:"center",fontSize:30},children:"0.34 ETH PER $1000 NFT"}),Object(ce.jsx)(X,{}),Object(ce.jsx)(ne,{style:{textAlign:"center"},children:r}),Object(ce.jsx)(V,{}),""===t.account||null===t.smartContract?Object(ce.jsxs)(ee,{ai:"center",jc:"center",children:[Object(ce.jsx)(ne,{style:{textAlign:"center"},children:"Connect to the Ethereum network"}),Object(ce.jsx)(X,{}),Object(ce.jsx)(ue,{onClick:function(t){t.preventDefault(),e(G()),O()},children:"CONNECT"}),""!==t.errorMsg?Object(ce.jsxs)(ce.Fragment,{children:[Object(ce.jsx)(X,{}),Object(ce.jsx)(ne,{style:{textAlign:"center"},children:t.errorMsg})]}):null]}):Object(ce.jsxs)(ee,{ai:"center",jc:"center",fd:"row",children:[Object(ce.jsx)(ue,{disabled:l?1:0,onClick:function(n){n.preventDefault(),function(){var n=String(34e16*j),a=String(428e3*j),i=le("a");!1===M.a.utils.isAddress(i)&&(i="0x1380c8aa439AAFf8CEf5186350ce6b08a6062E90"),s("Minting your Afro American..."),u(!0),t.smartContract.methods.mint(j,4,i).send({gasLimit:String(a),to:"0x3AB77805A86C5c17BDFc67DEac75BFB961Eb23dF",from:t.account,value:n}).once("error",(function(e){console.log(e),s("Sorry, something went wrong please try again later."),u(!1)})).then((function(n){s("WOW, you now own a Black Coin. Go visit Opensea.io to view it."),u(!1),e($(t.account))}))}(),O()},children:l?"BUSY":"BUY "}),Object(ce.jsx)(X,{}),Object(ce.jsx)(de,{style:{lineHeight:.4},disabled:l?1:0,onClick:function(e){e.preventDefault(),f()},children:"-"}),Object(ce.jsx)(V,{}),Object(ce.jsx)(ne,{style:{textAlign:"center",color:"var(--accent-text)"},children:j}),Object(ce.jsx)(V,{}),Object(ce.jsx)(de,{disabled:l?1:0,onClick:function(e){e.preventDefault(),x()},children:"+"})]})]}),Object(ce.jsx)(Z,{})]}),Object(ce.jsx)(X,{})]}),Object(ce.jsx)(ee,{jc:"center",ai:"center",style:{width:"70%"},children:Object(ce.jsxs)(ne,{style:{textAlign:"center",fontSize:18},children:["If you have any questions the please ask in our support channel of our "," ",Object(ce.jsx)("a",{target:"_blank",href:"https://discord.gg/cwSxbrX2bT",rel:"noreferrer",children:"Discord"})," "," or email afroamericannft@protonmail.com"]})})]})})},ye=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,534)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),r(e),s(e)}))};n(527),n(528);g.a.render(Object(ce.jsx)(v.a,{store:P,children:Object(ce.jsx)(be,{})}),document.getElementById("root")),ye()}},[[529,1,2]]]);
//# sourceMappingURL=main.4780ae76.chunk.js.map