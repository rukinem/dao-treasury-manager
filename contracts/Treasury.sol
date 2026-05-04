// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

contract DaoTreasuryManager is Ownable {
    // TODO: Implement DAO treasury management with multi-sig, streaming and budgeting
    constructor() Ownable(msg.sender) {}
}
