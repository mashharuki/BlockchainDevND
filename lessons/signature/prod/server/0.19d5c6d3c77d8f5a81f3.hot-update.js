exports.id=0,exports.modules={"./src/server.js":function(o,e,l){"use strict";l.r(e);var s=l("./build/contracts/Verifier.json"),t=l("./src/config.json"),c=l("web3"),n=l.n(c),r=l("web3-utils");let i=t.localhost;console.log(i);let a=new n.a(new n.a.providers.HttpProvider(i.url)),d=new a.eth.Contract(s.abi,i.appAddress),g="0x5268f2232368ddba43541aa7a16a9c569d0f9d4f";a.eth.getAccounts(o=>console.log(o[0]));let u="Hello, signature";console.log(g),console.log(u);let p=a.eth.sign(Object(r.toHex)(g),"0x"+Object(r.toHex)(u));console.log(p);const x="0x"+(p=p.substr(2)).slice(0,64),b="0x"+p.slice(64,128),f="0x"+p.slice(128,130);console.log("Elliptic Curve "),console.log(x),console.log(b),console.log(f),console.log(d.recoverAddr(p,f,x,b)),e.default=app}};