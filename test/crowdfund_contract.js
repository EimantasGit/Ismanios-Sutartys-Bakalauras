const Finansuojami_Projektai = artifacts.require("./contracts/finansuojami_projektai.sol");

contract("Crowdfund_Contract", (accounts) => {

    it("check if the goal of crowdfund is correct", async () => {
        const crowdfundGoal = 15;
        const instance = await Finansuojami_Projektai.deployed();
        await instance.createCrowdfund(crowdfundGoal, 10);

        const crowdfund = await instance.crowdfunds.call(1);
        assert.equal(crowdfundGoal, crowdfund.crowdfundGoal.words[0]);
    });

    it("check if crowdfunds are being created", async () => {
        const crowdfundGoal = 15;
        const instance = await Finansuojami_Projektai.deployed();     
        await instance.createCrowdfund(crowdfundGoal, 10);
        assert.equal(2, await instance.totalCrowdfunds.call());
    });

    it("check if crowdfund owner is correct", async () => {
        const instance = await Finansuojami_Projektai.deployed();     
        const crowdfundInstance = await instance.crowdfunds.call(1);
        assert.equal(crowdfundInstance[1], accounts[0]);
    });
    
});