exports.id=0,exports.modules={"./src/server.js":function(e,o,s){"use strict";s.r(o);var t=s("./build/contracts/Verifier.json"),l=s("./src/config.json"),n=s("web3"),r=s.n(n),c=s("express"),i=s.n(c),a=s("web3-utils");let g=l.localhost;console.log(g);let u=new r.a(new r.a.providers.HttpProvider(g.url)),d=new u.eth.Contract(t.abi,g.appAddress),p="Hello, signature";function x(e){for(var o="",s=0;s<p.length;s++)o+=""+p.charCodeAt(s).toString(16);return o}console.log(p),console.log(Object(a.toHex)(p)),u.eth.getAccounts(async(e,o)=>{let s=await u.eth.sign("0x"+x(),o[0]);const t="0x"+(s=s.substr(2)).slice(0,64),l="0x"+s.slice(64,128),n="0x"+s.slice(128,130);console.log("Elliptic Curve "),console.log(s),console.log(t),console.log(l),console.log(n),console.log(d.methods.recoverAddr("0x"+x(),n,t,l).call())});const h=i()();h.get("/api",(e,o)=>{o.send({message:"An API for use with your Dapp!"})}),o.default=h}};