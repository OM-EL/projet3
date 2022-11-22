//import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
import Add from "./Address";
import Voters from "./Voters";
import Proposals from "./Proposals";
import WorkflowStatus from "./WorkflowStatus";
import Bal from "./Ballot";
import TallyVotes from "./TallyVotes";
import Result from "./Result";
//import Desc from "./Desc";
import NoArtifact from "./NoArtifact";
import WrongNetwork from "./WrongNetwork";
import NlyAdmin from "./nlyAdmin";

function Voting() {
  const {
    state: { artifact, contract, isCurrentUserOwner },
  } = useEth();
  // const [value, setValue] = useState("?");

  const Voting = (
    <>
      <Add />
      <Voters />
      <Proposals />
      <Bal />
      <Result />
    </>
  );

  return (
    <div className="Voting">
      {!artifact ? (
        <NoArtifact />
      ) : !contract ? (
        <WrongNetwork />
      ) : (
        Voting
      )}
      {!isCurrentUserOwner ? (
        <NlyAdmin />
      ) : (
        <>
          <TallyVotes />
          <WorkflowStatus />
        </>
      )}
    </div>
  );
}

export default Voting;
