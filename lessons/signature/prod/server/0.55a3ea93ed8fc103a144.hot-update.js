exports.id=0,exports.modules={"./src/server.js":function(e,o,s){"use strict";s.r(o);var l=s("./build/contracts/Verifier.json"),t=s("./src/config.json"),c=s("web3"),n=s.n(c),r=s("express"),i=s.n(r),g=s("web3-utils");let a=t.localhost;console.log(a);let d=new n.a(new n.a.providers.HttpProvider(a.url)),u=new d.eth.Contract(l.abi,a.appAddress),p="Hello, signature";console.log(addr),console.log(p),console.log(Object(g.toHex)(p)),d.eth.getAccounts((e,o)=>{let s=d.eth.sign(o[0],"0x"+Object(g.toHex)(p));console.log(s);const l="0x"+(s=s.substr(2)).slice(0,64),t="0x"+s.slice(64,128),c="0x"+s.slice(128,130);console.log("Elliptic Curve "),console.log(l),console.log(t),console.log(c),console.log(u.recoverAddr(s,c,l,t))});const x=i()();x.get("/api",(e,o)=>{o.send({message:"An API for use with your Dapp!"})}),o.default=x}};