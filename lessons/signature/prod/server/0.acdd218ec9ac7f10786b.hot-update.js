exports.id=0,exports.modules={"./build/contracts/Verifier.json":function(e){e.exports=JSON.parse('{"contractName":"Verifier","abi":[{"anonymous":false,"inputs":[{"indexed":false,"name":"","type":"address"}],"name":"evRecoveredAddress","type":"event"},{"constant":false,"inputs":[{"name":"msgHash","type":"bytes32"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"recoverAddr","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"}],"metadata":"{\\"compiler\\":{\\"version\\":\\"0.5.8+commit.23d335f2\\"},\\"language\\":\\"Solidity\\",\\"output\\":{\\"abi\\":[{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"msgHash\\",\\"type\\":\\"bytes32\\"},{\\"name\\":\\"v\\",\\"type\\":\\"uint8\\"},{\\"name\\":\\"r\\",\\"type\\":\\"bytes32\\"},{\\"name\\":\\"s\\",\\"type\\":\\"bytes32\\"}],\\"name\\":\\"recoverAddr\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":false,\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"name\\":\\"evRecoveredAddress\\",\\"type\\":\\"event\\"}],\\"devdoc\\":{\\"methods\\":{}},\\"userdoc\\":{\\"methods\\":{}}},\\"settings\\":{\\"compilationTarget\\":{\\"/home/hajime/git/BlockchainDevND/lessons/signature/contracts/Verifier.sol\\":\\"Verifier\\"},\\"evmVersion\\":\\"petersburg\\",\\"libraries\\":{},\\"optimizer\\":{\\"enabled\\":false,\\"runs\\":200},\\"remappings\\":[]},\\"sources\\":{\\"/home/hajime/git/BlockchainDevND/lessons/signature/contracts/Verifier.sol\\":{\\"keccak256\\":\\"0x1978459c9696bc8445df371bb4ff123dbfe53b9fc986f90e10412c60835c2c5e\\",\\"urls\\":[\\"bzzr://be79a54a010af2a04a00ff50e0a2a2b5d470bb51dec9c5216a25378a87833856\\"]}},\\"version\\":1}","bytecode":"0x608060405234801561001057600080fd5b5061021e806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063e5df669f14610030575b600080fd5b61007d6004803603608081101561004657600080fd5b8101908080359060200190929190803560ff16906020019092919080359060200190929190803590602001909291905050506100bf565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600060606040518060400160405280601c81526020017f19457468657265756d205369676e6564204d6573736167653a0a3332000000008152509050600081876040516020018083805190602001908083835b602083106101355780518252602082019150602081019050602083039250610112565b6001836020036101000a03801982511681845116808217855250505050505090500182815260200192505050604051602081830303815290604052805190602001209050600060018288888860405160008152602001604052604051808581526020018460ff1660ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa1580156101d8573d6000803e3d6000fd5b50505060206040510351905080935050505094935050505056fea165627a7a7230582025e3333295b81a84650513b7ea4a84feceba7ec54dbc310fbfe0d1acf500171f0029","deployedBytecode":"0x608060405234801561001057600080fd5b506004361061002b5760003560e01c8063e5df669f14610030575b600080fd5b61007d6004803603608081101561004657600080fd5b8101908080359060200190929190803560ff16906020019092919080359060200190929190803590602001909291905050506100bf565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600060606040518060400160405280601c81526020017f19457468657265756d205369676e6564204d6573736167653a0a3332000000008152509050600081876040516020018083805190602001908083835b602083106101355780518252602082019150602081019050602083039250610112565b6001836020036101000a03801982511681845116808217855250505050505090500182815260200192505050604051602081830303815290604052805190602001209050600060018288888860405160008152602001604052604051808581526020018460ff1660ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa1580156101d8573d6000803e3d6000fd5b50505060206040510351905080935050505094935050505056fea165627a7a7230582025e3333295b81a84650513b7ea4a84feceba7ec54dbc310fbfe0d1acf500171f0029","sourceMap":"33:537:1:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;33:537:1;;;;;;;","deployedSourceMap":"33:537:1:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;33:537:1;;;;;;;;;;;;;;;;;;;96:472;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;96:472:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;246:7;265:26;:63;;;;;;;;;;;;;;;;;;;338:12;410:13;441:7;376:73;;;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;376:73:1;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;376:73:1;;;353:97;;;;;;338:112;;460:12;475:24;485:4;491:1;494;497;475:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;475:24:1;;;;;;;;460:39;;557:4;550:11;;;;;96:472;;;;;;:::o","source":"\\npragma solidity >=0.5.0 <0.6.0;\\ncontract Verifier {\\n    event evRecoveredAddress(address);\\n    function recoverAddr(\\n            bytes32 msgHash,\\n            uint8 v,\\n            bytes32 r,\\n            bytes32 s)\\n        public\\n        returns (address) {\\n        bytes memory garbagePrefix = \\"\\\\x19Ethereum Signed Message:\\\\n32\\";\\n        bytes32 hash = keccak256(\\n            abi.encodePacked(\\n                garbagePrefix,\\n                msgHash));\\n        address addr = ecrecover(hash, v, r, s);\\n        //emit evRecoveredAddress(addr);\\n        return addr;\\n    }\\n}","sourcePath":"/home/hajime/git/BlockchainDevND/lessons/signature/contracts/Verifier.sol","ast":{"absolutePath":"/home/hajime/git/BlockchainDevND/lessons/signature/contracts/Verifier.sol","exportedSymbols":{"Verifier":[102]},"id":103,"nodeType":"SourceUnit","nodes":[{"id":58,"literals":["solidity",">=","0.5",".0","<","0.6",".0"],"nodeType":"PragmaDirective","src":"1:31:1"},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":102,"linearizedBaseContracts":[102],"name":"Verifier","nodeType":"ContractDefinition","nodes":[{"anonymous":false,"documentation":null,"id":62,"name":"evRecoveredAddress","nodeType":"EventDefinition","parameters":{"id":61,"nodeType":"ParameterList","parameters":[{"constant":false,"id":60,"indexed":false,"name":"","nodeType":"VariableDeclaration","scope":62,"src":"82:7:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":59,"name":"address","nodeType":"ElementaryTypeName","src":"82:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"81:9:1"},"src":"57:34:1"},{"body":{"id":100,"nodeType":"Block","src":"255:313:1","statements":[{"assignments":[76],"declarations":[{"constant":false,"id":76,"name":"garbagePrefix","nodeType":"VariableDeclaration","scope":100,"src":"265:26:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_bytes_memory_ptr","typeString":"bytes"},"typeName":{"id":75,"name":"bytes","nodeType":"ElementaryTypeName","src":"265:5:1","typeDescriptions":{"typeIdentifier":"t_bytes_storage_ptr","typeString":"bytes"}},"value":null,"visibility":"internal"}],"id":78,"initialValue":{"argumentTypes":null,"hexValue":"19457468657265756d205369676e6564204d6573736167653a0a3332","id":77,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"294:34:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_178a2411ab6fbc1ba11064408972259c558d0e82fd48b0aba3ad81d14f065e73","typeString":"literal_string \\"\\u0019Ethereum Signed Message:\\n32\\""},"value":"\\u0019Ethereum Signed Message:\\n32"},"nodeType":"VariableDeclarationStatement","src":"265:63:1"},{"assignments":[80],"declarations":[{"constant":false,"id":80,"name":"hash","nodeType":"VariableDeclaration","scope":100,"src":"338:12:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"},"typeName":{"id":79,"name":"bytes32","nodeType":"ElementaryTypeName","src":"338:7:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"value":null,"visibility":"internal"}],"id":88,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":84,"name":"garbagePrefix","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":76,"src":"410:13:1","typeDescriptions":{"typeIdentifier":"t_bytes_memory_ptr","typeString":"bytes memory"}},{"argumentTypes":null,"id":85,"name":"msgHash","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":64,"src":"441:7:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bytes_memory_ptr","typeString":"bytes memory"},{"typeIdentifier":"t_bytes32","typeString":"bytes32"}],"expression":{"argumentTypes":null,"id":82,"name":"abi","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":104,"src":"376:3:1","typeDescriptions":{"typeIdentifier":"t_magic_abi","typeString":"abi"}},"id":83,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"memberName":"encodePacked","nodeType":"MemberAccess","referencedDeclaration":null,"src":"376:16:1","typeDescriptions":{"typeIdentifier":"t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$","typeString":"function () pure returns (bytes memory)"}},"id":86,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"376:73:1","typeDescriptions":{"typeIdentifier":"t_bytes_memory_ptr","typeString":"bytes memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bytes_memory_ptr","typeString":"bytes memory"}],"id":81,"name":"keccak256","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":111,"src":"353:9:1","typeDescriptions":{"typeIdentifier":"t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$","typeString":"function (bytes memory) pure returns (bytes32)"}},"id":87,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"353:97:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"nodeType":"VariableDeclarationStatement","src":"338:112:1"},{"assignments":[90],"declarations":[{"constant":false,"id":90,"name":"addr","nodeType":"VariableDeclaration","scope":100,"src":"460:12:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":89,"name":"address","nodeType":"ElementaryTypeName","src":"460:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"id":97,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":92,"name":"hash","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":80,"src":"485:4:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},{"argumentTypes":null,"id":93,"name":"v","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":66,"src":"491:1:1","typeDescriptions":{"typeIdentifier":"t_uint8","typeString":"uint8"}},{"argumentTypes":null,"id":94,"name":"r","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":68,"src":"494:1:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},{"argumentTypes":null,"id":95,"name":"s","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":70,"src":"497:1:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bytes32","typeString":"bytes32"},{"typeIdentifier":"t_uint8","typeString":"uint8"},{"typeIdentifier":"t_bytes32","typeString":"bytes32"},{"typeIdentifier":"t_bytes32","typeString":"bytes32"}],"id":91,"name":"ecrecover","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":109,"src":"475:9:1","typeDescriptions":{"typeIdentifier":"t_function_ecrecover_pure$_t_bytes32_$_t_uint8_$_t_bytes32_$_t_bytes32_$returns$_t_address_$","typeString":"function (bytes32,uint8,bytes32,bytes32) pure returns (address)"}},"id":96,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"475:24:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"VariableDeclarationStatement","src":"460:39:1"},{"expression":{"argumentTypes":null,"id":98,"name":"addr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":90,"src":"557:4:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"functionReturnParameters":74,"id":99,"nodeType":"Return","src":"550:11:1"}]},"documentation":null,"id":101,"implemented":true,"kind":"function","modifiers":[],"name":"recoverAddr","nodeType":"FunctionDefinition","parameters":{"id":71,"nodeType":"ParameterList","parameters":[{"constant":false,"id":64,"name":"msgHash","nodeType":"VariableDeclaration","scope":101,"src":"130:15:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"},"typeName":{"id":63,"name":"bytes32","nodeType":"ElementaryTypeName","src":"130:7:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"value":null,"visibility":"internal"},{"constant":false,"id":66,"name":"v","nodeType":"VariableDeclaration","scope":101,"src":"159:7:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint8","typeString":"uint8"},"typeName":{"id":65,"name":"uint8","nodeType":"ElementaryTypeName","src":"159:5:1","typeDescriptions":{"typeIdentifier":"t_uint8","typeString":"uint8"}},"value":null,"visibility":"internal"},{"constant":false,"id":68,"name":"r","nodeType":"VariableDeclaration","scope":101,"src":"180:9:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"},"typeName":{"id":67,"name":"bytes32","nodeType":"ElementaryTypeName","src":"180:7:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"value":null,"visibility":"internal"},{"constant":false,"id":70,"name":"s","nodeType":"VariableDeclaration","scope":101,"src":"203:9:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"},"typeName":{"id":69,"name":"bytes32","nodeType":"ElementaryTypeName","src":"203:7:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"value":null,"visibility":"internal"}],"src":"116:97:1"},"returnParameters":{"id":74,"nodeType":"ParameterList","parameters":[{"constant":false,"id":73,"name":"","nodeType":"VariableDeclaration","scope":101,"src":"246:7:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":72,"name":"address","nodeType":"ElementaryTypeName","src":"246:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"245:9:1"},"scope":102,"src":"96:472:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"}],"scope":103,"src":"33:537:1"}],"src":"1:569:1"},"legacyAST":{"absolutePath":"/home/hajime/git/BlockchainDevND/lessons/signature/contracts/Verifier.sol","exportedSymbols":{"Verifier":[102]},"id":103,"nodeType":"SourceUnit","nodes":[{"id":58,"literals":["solidity",">=","0.5",".0","<","0.6",".0"],"nodeType":"PragmaDirective","src":"1:31:1"},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":102,"linearizedBaseContracts":[102],"name":"Verifier","nodeType":"ContractDefinition","nodes":[{"anonymous":false,"documentation":null,"id":62,"name":"evRecoveredAddress","nodeType":"EventDefinition","parameters":{"id":61,"nodeType":"ParameterList","parameters":[{"constant":false,"id":60,"indexed":false,"name":"","nodeType":"VariableDeclaration","scope":62,"src":"82:7:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":59,"name":"address","nodeType":"ElementaryTypeName","src":"82:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"81:9:1"},"src":"57:34:1"},{"body":{"id":100,"nodeType":"Block","src":"255:313:1","statements":[{"assignments":[76],"declarations":[{"constant":false,"id":76,"name":"garbagePrefix","nodeType":"VariableDeclaration","scope":100,"src":"265:26:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_bytes_memory_ptr","typeString":"bytes"},"typeName":{"id":75,"name":"bytes","nodeType":"ElementaryTypeName","src":"265:5:1","typeDescriptions":{"typeIdentifier":"t_bytes_storage_ptr","typeString":"bytes"}},"value":null,"visibility":"internal"}],"id":78,"initialValue":{"argumentTypes":null,"hexValue":"19457468657265756d205369676e6564204d6573736167653a0a3332","id":77,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"294:34:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_178a2411ab6fbc1ba11064408972259c558d0e82fd48b0aba3ad81d14f065e73","typeString":"literal_string \\"\\u0019Ethereum Signed Message:\\n32\\""},"value":"\\u0019Ethereum Signed Message:\\n32"},"nodeType":"VariableDeclarationStatement","src":"265:63:1"},{"assignments":[80],"declarations":[{"constant":false,"id":80,"name":"hash","nodeType":"VariableDeclaration","scope":100,"src":"338:12:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"},"typeName":{"id":79,"name":"bytes32","nodeType":"ElementaryTypeName","src":"338:7:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"value":null,"visibility":"internal"}],"id":88,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":84,"name":"garbagePrefix","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":76,"src":"410:13:1","typeDescriptions":{"typeIdentifier":"t_bytes_memory_ptr","typeString":"bytes memory"}},{"argumentTypes":null,"id":85,"name":"msgHash","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":64,"src":"441:7:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bytes_memory_ptr","typeString":"bytes memory"},{"typeIdentifier":"t_bytes32","typeString":"bytes32"}],"expression":{"argumentTypes":null,"id":82,"name":"abi","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":104,"src":"376:3:1","typeDescriptions":{"typeIdentifier":"t_magic_abi","typeString":"abi"}},"id":83,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"memberName":"encodePacked","nodeType":"MemberAccess","referencedDeclaration":null,"src":"376:16:1","typeDescriptions":{"typeIdentifier":"t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$","typeString":"function () pure returns (bytes memory)"}},"id":86,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"376:73:1","typeDescriptions":{"typeIdentifier":"t_bytes_memory_ptr","typeString":"bytes memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bytes_memory_ptr","typeString":"bytes memory"}],"id":81,"name":"keccak256","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":111,"src":"353:9:1","typeDescriptions":{"typeIdentifier":"t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$","typeString":"function (bytes memory) pure returns (bytes32)"}},"id":87,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"353:97:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"nodeType":"VariableDeclarationStatement","src":"338:112:1"},{"assignments":[90],"declarations":[{"constant":false,"id":90,"name":"addr","nodeType":"VariableDeclaration","scope":100,"src":"460:12:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":89,"name":"address","nodeType":"ElementaryTypeName","src":"460:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"id":97,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":92,"name":"hash","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":80,"src":"485:4:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},{"argumentTypes":null,"id":93,"name":"v","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":66,"src":"491:1:1","typeDescriptions":{"typeIdentifier":"t_uint8","typeString":"uint8"}},{"argumentTypes":null,"id":94,"name":"r","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":68,"src":"494:1:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},{"argumentTypes":null,"id":95,"name":"s","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":70,"src":"497:1:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bytes32","typeString":"bytes32"},{"typeIdentifier":"t_uint8","typeString":"uint8"},{"typeIdentifier":"t_bytes32","typeString":"bytes32"},{"typeIdentifier":"t_bytes32","typeString":"bytes32"}],"id":91,"name":"ecrecover","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":109,"src":"475:9:1","typeDescriptions":{"typeIdentifier":"t_function_ecrecover_pure$_t_bytes32_$_t_uint8_$_t_bytes32_$_t_bytes32_$returns$_t_address_$","typeString":"function (bytes32,uint8,bytes32,bytes32) pure returns (address)"}},"id":96,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"475:24:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"VariableDeclarationStatement","src":"460:39:1"},{"expression":{"argumentTypes":null,"id":98,"name":"addr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":90,"src":"557:4:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"functionReturnParameters":74,"id":99,"nodeType":"Return","src":"550:11:1"}]},"documentation":null,"id":101,"implemented":true,"kind":"function","modifiers":[],"name":"recoverAddr","nodeType":"FunctionDefinition","parameters":{"id":71,"nodeType":"ParameterList","parameters":[{"constant":false,"id":64,"name":"msgHash","nodeType":"VariableDeclaration","scope":101,"src":"130:15:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"},"typeName":{"id":63,"name":"bytes32","nodeType":"ElementaryTypeName","src":"130:7:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"value":null,"visibility":"internal"},{"constant":false,"id":66,"name":"v","nodeType":"VariableDeclaration","scope":101,"src":"159:7:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint8","typeString":"uint8"},"typeName":{"id":65,"name":"uint8","nodeType":"ElementaryTypeName","src":"159:5:1","typeDescriptions":{"typeIdentifier":"t_uint8","typeString":"uint8"}},"value":null,"visibility":"internal"},{"constant":false,"id":68,"name":"r","nodeType":"VariableDeclaration","scope":101,"src":"180:9:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"},"typeName":{"id":67,"name":"bytes32","nodeType":"ElementaryTypeName","src":"180:7:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"value":null,"visibility":"internal"},{"constant":false,"id":70,"name":"s","nodeType":"VariableDeclaration","scope":101,"src":"203:9:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"},"typeName":{"id":69,"name":"bytes32","nodeType":"ElementaryTypeName","src":"203:7:1","typeDescriptions":{"typeIdentifier":"t_bytes32","typeString":"bytes32"}},"value":null,"visibility":"internal"}],"src":"116:97:1"},"returnParameters":{"id":74,"nodeType":"ParameterList","parameters":[{"constant":false,"id":73,"name":"","nodeType":"VariableDeclaration","scope":101,"src":"246:7:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":72,"name":"address","nodeType":"ElementaryTypeName","src":"246:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"245:9:1"},"scope":102,"src":"96:472:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"}],"scope":103,"src":"33:537:1"}],"src":"1:569:1"},"compiler":{"name":"solc","version":"0.5.8+commit.23d335f2.Emscripten.clang"},"networks":{"5777":{"events":{"0xfe382cedd50e5b95cab8bad610de40cf8895f26a2c65545a629963c74eaef468":{"anonymous":false,"inputs":[{"indexed":false,"name":"","type":"address"}],"name":"evRecoveredAddress","type":"event","signature":"0xfe382cedd50e5b95cab8bad610de40cf8895f26a2c65545a629963c74eaef468"}},"links":{},"address":"0xD2CFd001Ba9e1c6c469Da2528b2E8bcEaD71EaFe","transactionHash":"0xa050106f4c6305a6b14e7e031ad772819fe6a959e12d957657ee17315c3394da"}},"schemaVersion":"3.0.16","updatedAt":"2019-11-15T04:30:03.193Z","devdoc":{"methods":{}},"userdoc":{"methods":{}}}')}};