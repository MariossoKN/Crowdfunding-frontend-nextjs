// hooks/useCreateProject.ts
import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { contractABI, contractAddress } from "../components/contract";
import { parseEther, decodeEventLog } from "viem";
import { projectData } from "@/utils/projectsImage";
import { useState } from "react";

export const useCreateProject = () => {
  const [projectAddress, setProjectAddress] = useState(null);
  const [projectOwner, setProjectOwner] = useState(null);
  const [projectIndex, setProjectIndex] = useState(null);

  const { writeContractAsync, isPending, error, data: hash } = useWriteContract();

  const { isLoading, isSuccess } = useWaitForTransactionReceipt({
    chainId: 11155111,
    hash,
    onSuccess: (receipt) => {
      console.log("Transaction receipt:", receipt);

      // Find and decode the ProjectCreated event
      const projectCreatedLog = receipt.logs.find(log => {
        try {
          const decoded = decodeEventLog({
            abi: contractABI,
            data: log.data,
            topics: log.topics,
          });
          return decoded.eventName === 'ProjectCreated';
        } catch {
          return false;
        }
      });

      if (projectCreatedLog) {
        try {
          const event = decodeEventLog({
            abi: contractABI,
            data: projectCreatedLog.data,
            topics: projectCreatedLog.topics,
          });

          // Get all values from the event
          const newProjectAddress = event.args._projectAddress;
          const projectOwner = event.args._owner;
          const projectIndex = event.args._projectIndex;

          console.log("Decoded event:", {
            newProjectAddress,
            projectOwner,
            projectIndex,
            imageId: projectImageId
          });

          // Update state with all values
          setProjectAddress(newProjectAddress);
          setProjectOwner(projectOwner);
          setProjectIndex(projectIndex);

          // Store the image ID for the new project
          if (newProjectAddress && projectImageId) {
            projectData[newProjectAddress] = projectImageId;
          }

          console.log("New project created:", {
            address: newProjectAddress,
            owner: projectOwner,
            index: projectIndex
          });
        } catch (error) {
          console.error("Error decoding event:", error);
        }
      } else {
        console.error("ProjectCreated event not found in transaction logs");
      }
    }
  });

  // Need to store this in a closure for the onSuccess callback
  let projectImageId = null;

  const createProject = async (
    projectName,
    fundingGoal,
    interestRate,
    minInvestment,
    maxInvestment,
    fundingDuration,
    investmentPeriod,
    imageId
  ) => {
    try {
      // Save imageId in the closure variable for use in onSuccess callback
      projectImageId = imageId;

      // Convert numeric values to appropriate formats
      // parseEther already multiplies by 10^18, so just convert to string
      // const fundingGoalWei = parseEther(fundingGoal.toString());
      // const minInvestmentWei = parseEther(minInvestment.toString());
      // const maxInvestmentWei = parseEther(maxInvestment.toString());

      const fundingGoalWei = parseEther((fundingGoal).toString());
      const minInvestmentWei = parseEther((minInvestment).toString());
      const maxInvestmentWei = parseEther((maxInvestment).toString());

      console.log("Creating project with parameters:", {
        projectName,
        fundingGoalWei: fundingGoalWei.toString(),
        interestRate,
        minInvestmentWei: minInvestmentWei.toString(),
        maxInvestmentWei: maxInvestmentWei.toString(),
        fundingDuration,
        investmentPeriod,
        imageId
      });

      // Create the project
      const hash = await writeContractAsync({
        address: contractAddress,
        abi: contractABI,
        functionName: "createProject",
        args: [
          projectName,
          fundingGoalWei,
          interestRate,
          minInvestmentWei,
          maxInvestmentWei,
          BigInt(fundingDuration),
          BigInt(investmentPeriod)
        ],
        value: parseEther('0.0005')
      });

      console.log("Transaction hash:", hash);
      return hash;
    } catch (err) {
      console.error("Error creating project:", err);
      throw err;
    }
  };

  return {
    createProject,
    isPending,
    isLoading,
    isSuccess,
    error,
    projectAddress,
    projectOwner,
    projectIndex
  };
};