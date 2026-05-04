const { ethers } = require("hardhat");
async function main() {
  const C = await ethers.getContractFactory("DaoTreasuryManager");
  const c = await C.deploy();
  await c.waitForDeployment();
  console.log("DaoTreasuryManager deployed to:", await c.getAddress());
}
main().catch(e => { console.error(e); process.exitCode = 1; });
