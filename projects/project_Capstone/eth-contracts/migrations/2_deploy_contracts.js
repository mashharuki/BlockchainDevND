// migrating the appropriate contracts
var Verifier = artifacts.require("./Verifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

module.exports = function(deployer) {
  //deployer.deploy(Verifier);
  //deployer.deploy(SolnSquareVerifier);
  const name = "You can name this contract as you please";
  const symbol = "YCNTCAYP";
  deployer.deploy(Verifier).then( () => {
    return deployer.deploy(SolnSquareVerifier, Verifier.address, name, symbol);
  });
};