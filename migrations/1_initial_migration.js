const Migrations = artifacts.require("Migrations");
const Finansuojami_Projektai = artifacts.require("finansuojami_projektai");
module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Finansuojami_Projektai);
};
