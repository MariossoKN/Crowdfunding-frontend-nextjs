// export const contractAddress = "0x2F9A7Bd555C3556949FbD76D579830a55DEFB78a"
export const contractAddress = "0x3a22F5fE6b71C3775DAc5F88137B7807eBc33050"

export const contractABI = [
  {
    "type": "constructor",
    "inputs": [
      {
        "name": "_crowdfundFeeInPrecent",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_minDeadlineInDays",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "fallback",
    "stateMutability": "nonpayable"
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "calculateInitialFee",
    "inputs": [
      {
        "name": "_maxCrowdfundingAmount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "cancelProject",
    "inputs": [
      {
        "name": "_projectId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "createProject",
    "inputs": [
      {
        "name": "_projectName",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "_crowdfundedAmount",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_interestRateInPercent",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_minInvestment",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_maxInvestment",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_deadlineInDays",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_investmentPeriodDays",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract CrowdfundingProject"
      }
    ],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "finishProject",
    "inputs": [
      {
        "name": "_projectId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "fundProject",
    "inputs": [
      {
        "name": "_projectId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "getCrowdfundingAmount",
    "inputs": [
      {
        "name": "_projectId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getCrowdfundingFeeInPercent",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getDeadlineInDays",
    "inputs": [
      {
        "name": "_projectId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getFullAmountToBePaidOutToInvestorsWithoutGasFees",
    "inputs": [
      {
        "name": "_projectId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getInitialFees",
    "inputs": [
      {
        "name": "_maxCrowdfundingAmount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getInterestRate",
    "inputs": [
      {
        "name": "_projectId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getInvestmentPeriodDays",
    "inputs": [
      {
        "name": "_projectId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getMaxInvestmentAmount",
    "inputs": [
      {
        "name": "_projectId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getMinDeadlineInDays",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getMinInvestmentAmount",
    "inputs": [
      {
        "name": "_projectId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getProjectCurrentFundedAmount",
    "inputs": [
      {
        "name": "_projectId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getProjectIdBasedOnOwnerAddress",
    "inputs": [
      {
        "name": "_owner",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256[]",
        "internalType": "uint256[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getProjectName",
    "inputs": [
      {
        "name": "_projectId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getProjectOwner",
    "inputs": [
      {
        "name": "_projectId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getProjectStatus",
    "inputs": [
      {
        "name": "_projectId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint8",
        "internalType": "enum CrowdfundingProject.ProjectState"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getProjectsCount",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getRemainingFundAmount",
    "inputs": [
      {
        "name": "_projectId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "ownerFundProject",
    "inputs": [
      {
        "name": "_projectId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "withdrawFees",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "ProjectCanceled",
    "inputs": [
      {
        "name": "_owner",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "_projectIndex",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ProjectCreated",
    "inputs": [
      {
        "name": "_owner",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "_projectAddress",
        "type": "address",
        "indexed": true,
        "internalType": "contract CrowdfundingProject"
      },
      {
        "name": "_projectIndex",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ProjectFunded",
    "inputs": [
      {
        "name": "_funder",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "_projectIndex",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "name": "_fundAmount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "error",
    "name": "CrowdfundingProject__DeadlineIsTooShort",
    "inputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "Crowdfunding__CanBeCalledOnlyByOwner",
    "inputs": []
  },
  {
    "type": "error",
    "name": "Crowdfunding__CanBeCalledOnlyByProjectOwner",
    "inputs": []
  },
  {
    "type": "error",
    "name": "Crowdfunding__NameCantBeEmpty",
    "inputs": []
  },
  {
    "type": "error",
    "name": "Crowdfunding__NotEnoughEthInTheProjectContract",
    "inputs": []
  },
  {
    "type": "error",
    "name": "Crowdfunding__ValueSentCantBeZero",
    "inputs": []
  },
  {
    "type": "error",
    "name": "Crowdfunding__YouAreNotAllowedToCancelThisProject",
    "inputs": []
  },
  {
    "type": "error",
    "name": "Crowdfunding__YouHaveToSendTheExactAmountForInitialFees",
    "inputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  }
]

export const projectContractABI = [
  {
    "type": "constructor",
    "inputs": [
      {
        "name": "_projectName",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "_projectOwner",
        "type": "address",
        "internalType": "address payable"
      },
      {
        "name": "_maxCrowfundingAmount",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_interestRateInPercent",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_minInvestment",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_maxInvestment",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_deadlineInDays",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_investmentPeriod",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_crowdfundingContractAddress",
        "type": "address",
        "internalType": "address payable"
      }
    ],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "calculateAmountToBePaidToInvestor",
    "inputs": [
      {
        "name": "_amountInvested",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_interestRateInPercent",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "calculateFullAmountToBePaidOutToInvestorsWithoutGasFees",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "cancel",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "checkUpkeep",
    "inputs": [
      {
        "name": "",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [
      {
        "name": "upkeepNeeded",
        "type": "bool",
        "internalType": "bool"
      },
      {
        "name": "",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "finish",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "fund",
    "inputs": [
      {
        "name": "_investor",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "getCrowdfundingAmount",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getCrowdfundingContractAddress",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getCurrentFundedAmount",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getInvestorAddress",
    "inputs": [
      {
        "name": "_index",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getInvestorsAmountToBePaidOut",
    "inputs": [
      {
        "name": "_index",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getInvestorsCount",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getInvestorsInvestmentAmount",
    "inputs": [
      {
        "name": "_index",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getInvestorsPaidOutStatus",
    "inputs": [
      {
        "name": "_index",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getOwner",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getProjectDeadlineInDays",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getProjectInterestRateInPercent",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getProjectInvestmentPeriod",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getProjectMaxInvestment",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getProjectMinInvestment",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getProjectName",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getProjectStartTimestamp",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getProjectStatus",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint8",
        "internalType": "enum CrowdfundingProject.ProjectState"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getRemainingFundingAmount",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "ownerFund",
    "inputs": [],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "performUpkeep",
    "inputs": [
      {
        "name": "",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "error",
    "name": "CrowdfundingProject__AmountCrowfundedCantBeLessThanMaxInvestment",
    "inputs": []
  },
  {
    "type": "error",
    "name": "CrowdfundingProject__AmountEthSentIsGreaterThanTheRestCrowfundingNeeded",
    "inputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "CrowdfundingProject__CanOnlyBeCalledByTheCrowdfundingContract",
    "inputs": []
  },
  {
    "type": "error",
    "name": "CrowdfundingProject__CantWithdrawUntilMaxFundAmountIsReached",
    "inputs": []
  },
  {
    "type": "error",
    "name": "CrowdfundingProject__ContractHasLessEthThenNeededToPayOutAllInvestors",
    "inputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "CrowdfundingProject__FundingIsNotActive",
    "inputs": []
  },
  {
    "type": "error",
    "name": "CrowdfundingProject__InvestingIsNotActive",
    "inputs": []
  },
  {
    "type": "error",
    "name": "CrowdfundingProject__InvestorsCantBePaidBackIfTheProjectIsActive",
    "inputs": []
  },
  {
    "type": "error",
    "name": "CrowdfundingProject__MinInvestmentGreaterThanMaxInvestment",
    "inputs": []
  },
  {
    "type": "error",
    "name": "CrowdfundingProject__NotEnoughEthSent",
    "inputs": []
  },
  {
    "type": "error",
    "name": "CrowdfundingProject__ProjectHasTobeInInvestmentActiveState",
    "inputs": []
  },
  {
    "type": "error",
    "name": "CrowdfundingProject__TooMuchEthSent",
    "inputs": []
  },
  {
    "type": "error",
    "name": "CrowdfundingProject__UpkeepNotNeeded",
    "inputs": []
  },
  {
    "type": "error",
    "name": "OnlySimulatedBackend",
    "inputs": []
  }
]
