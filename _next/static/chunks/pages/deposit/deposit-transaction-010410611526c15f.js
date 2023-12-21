(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[45],{52489:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/deposit/deposit-transaction",function(){return a(35651)}])},35651:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return j}});var s=a(85893),n=a(67294),i=a(2593),o=a(64146),c=a(8478),r=a(41518),l=a(95395),u=a(29229),d=a(9765),p=a(98376);let y=t=>{let{pubKey:e,onDeposit:a}=t,i=(0,r.o)(t=>t.getDepositItem(e)),o=(0,r.o)(t=>t.depositData),u=Object.keys(o).some(t=>o[t].transactionStatus===l.LN.STARTED),y=(0,n.useCallback)(()=>i.depositStatus===l.Er.READY_FOR_DEPOSIT||i.transactionStatus===l.LN.READY||i.transactionStatus===l.LN.PENDING||i.transactionStatus===l.LN.REJECTED||i.transactionStatus===l.LN.FAILED?(0,s.jsx)(c.zx,{fullWidth:!0,onClick:()=>a(e),color:"secondary",css:{backgroundColor:"$bg04","&:hover":{backgroundColor:"$create",color:"$textCreateHover"}},disabled:i.transactionStatus===l.LN.PENDING||u,children:i.transactionStatus===l.LN.REJECTED||i.transactionStatus===l.LN.FAILED?"Try Again":"Deposit"}):i.depositStatus===l.Er.ALREADY_DEPOSITED?(0,s.jsx)(p.j,{link:"".concat(d.q2,"/validator/0x").concat(e),title:"Beaconchain"}):i.transactionStatus===l.LN.STARTED?(0,s.jsx)(p.j,{link:"".concat(d.t0,"/").concat(i.txHash),title:"Etherscan"}):i.transactionStatus===l.LN.SUCCEEDED?(0,s.jsxs)(c.kC,{direction:"column",css:{alignContent:"center"},children:[(0,s.jsx)(p.j,{link:"".concat(d.q2,"/validator/0x").concat(e),title:"Beaconchain"}),(0,s.jsx)(p.j,{link:"".concat(d.uM,"/0x").concat(e),title:"Beaconscan"})]}):void 0,[i.depositStatus,i.transactionStatus,i.txHash,a,e]);return(0,s.jsx)(c.xu,{css:{display:"flex",gap:"$xxs",alignItems:"center"},children:y()})};var x=a(21237),b=a(71299),h={abi:[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"bytes",name:"pubkey",type:"bytes"},{indexed:!1,internalType:"bytes",name:"withdrawal_credentials",type:"bytes"},{indexed:!1,internalType:"bytes",name:"amount",type:"bytes"},{indexed:!1,internalType:"bytes",name:"signature",type:"bytes"},{indexed:!1,internalType:"bytes",name:"index",type:"bytes"}],name:"DepositEvent",type:"event"},{inputs:[{internalType:"bytes",name:"pubkey",type:"bytes"},{internalType:"bytes",name:"withdrawal_credentials",type:"bytes"},{internalType:"bytes",name:"signature",type:"bytes"},{internalType:"bytes32",name:"deposit_data_root",type:"bytes32"}],name:"deposit",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"get_deposit_count",outputs:[{internalType:"bytes",name:"",type:"bytes"}],stateMutability:"view",type:"function"},{inputs:[],name:"get_deposit_root",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"pure",type:"function"}]},m=a(79116);let E=[{accessorKey:"validatorPublicKey",header:"Validator Public Key",css:{maxWidth:"70px","@sm":{width:"auto",maxWidth:"auto"},"@md":{maxWidth:"100px"}}},{accessorKey:"status",header:"Status"},{accessorKey:"action",header:"Action"}],g=()=>{let{provider:t}=(0,b.kR)(),e=(0,r.o)(t=>t.depositData),a=(0,r.o)(t=>t.updateTxStatus),p=(0,r.o)(t=>t.updateDepositStatus),g=(0,r.o)(t=>t.getDepositItem),[j,k]=(0,n.useState)(!1),D=Object.keys(null!=e?e:{}).length,N=async e=>{let s=g(e),n=(await (0,x._7)(d.mN,t)).includes("1dd26f37a621703009abf16e77e69c93dc50c79db7f6cc37543e3e0e3decdc97".toLocaleLowerCase());if(!n){a(s.pubkey,l.LN.FAILED);return}try{let e=t.getSigner(),n=new o.Contract(d.mN,h.abi,e),c=i.O$.from(32),r=c.mul(d.sg);a(s.pubkey,l.LN.PENDING);let u=await n.deposit((0,x.Ox)(s.pubkey),(0,x.Ox)(s.withdrawal_credentials),(0,x.Ox)(s.signature),(0,x.Ox)(s.deposit_data_root),{value:r});a(s.pubkey,l.LN.STARTED,u.hash),p(s.pubkey,l.Er.VERIFYING);let y=await u.wait();a(s.pubkey,l.LN.SUCCEEDED,u.transactionHash),console.log(y)}catch(t){(0,x.WW)(t)?a(s.pubkey,l.LN.REJECTED):a(s.pubkey,l.LN.FAILED)}};if(!e&&!j)return(0,s.jsxs)(c.xv,{variant:"h5",children:["Go to upload deposit step to upload the corresponding data step.. ",(0,s.jsx)(c.rU,{href:"/deposit/upload-deposits",children:"Upload Deposit Data"})]});let v=()=>{k(!0)},C=(0,s.jsxs)(c.kC,{direction:"column",css:{gap:"$2xl"},children:[(0,s.jsx)(m.qN,{heading:"Your stake has reached the deposit contract",subHeading:(0,s.jsxs)(c.xu,{css:{px:"$xl"},children:["You’ve successfully set up a ",(0,s.jsx)(c.xv,{css:{display:"inline"},color:"obolGreen",children:"Distributed Validator"}),"!\n            Please ensure your cluster is healthy and ready for validator activation."]})}),(0,s.jsxs)(c.W2,{className:"success-section",alignItems:"start",css:{gap:"$xl"},children:[(0,s.jsx)(c.xv,{variant:"h4",children:"Overview"}),(0,s.jsxs)(c.kC,{css:{gap:"$2xl"},children:[(0,s.jsx)(m.Mz,{heading:"Your Stake",subHeading:(0,s.jsxs)(c.kC,{css:{gap:"$xxs"},children:[(0,s.jsx)(c.Ee,{src:"/assets/eth-icon.png",alt:"eth",width:24,height:24}),"".concat(D*d.lc," Eth")]})}),(0,s.jsx)(m.Mz,{heading:"Your Validators",subHeading:"".concat(D)})]})]})]});return j?C:(0,s.jsxs)(c.kC,{direction:"column",css:{gap:"$2xl"},children:[(0,s.jsx)(c.xv,{variant:"h3",children:"Transactions"}),(0,s.jsx)(c.kC,{direction:"column",css:{gap:"$2xl"},children:(0,s.jsxs)(c.W2,{dir:"col",className:"transactions-section",alignItems:"start",children:[(0,s.jsxs)(c.kC,{direction:"column",css:{gap:"$xxxs"},children:[(0,s.jsx)(c.xv,{variant:"h4",children:"Confirm Deposit"}),(0,s.jsx)(c.xv,{size:"4",color:"muted",children:"Submit a transaction to finish your deposit"})]}),(0,s.jsxs)(c.kC,{direction:"column",css:{gap:"$xl"},children:[(0,s.jsxs)(c.xu,{className:"deposit-table-container",css:{display:"flex",flexDirection:"column",p:"$sm",backgroundColor:"$bg03",borderRadius:"$1",gap:"$lg","& table":{backgroundColor:"transparent"},"& table tbody td":{whiteSpace:"normal"}},children:[(0,s.jsx)(c.xv,{variant:"h5",children:"Key List"}),(0,s.jsx)(c.iA,{rows:Object.keys(e).map(t=>({validatorPublicKey:(0,x.zN)(t,[0,10],10),status:(0,s.jsx)(u.D,{pubKey:t}),action:(0,s.jsx)(y,{pubKey:t,onDeposit:N})})),columns:E})]}),(0,s.jsx)(m.wA,{onBackHref:"/deposit/summary",onContinue:v,disableContinue:Object.keys(e).some(t=>null==e[t].txHash&&e[t].transactionStatus!==l.LN.SUCCEEDED)})]})]})})]})};var j=g;g.layout="DepositProgressTrackerLayout"}},function(t){t.O(0,[774,888,179],function(){return t(t.s=52489)}),_N_E=t.O()}]);