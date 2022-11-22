import useEth from "../../contexts/EthContext/useEth";

function WorkflowStatus({ setValue }) {
  const {
    state: { contract, accounts, listWorkflowEvent },
  } = useEth();

  const nextWorkflowStatus = async () => {
    console.log("NextWorkflowStatus");
    await contract.methods
      .nextWorkflowStatus()
      .send({ from: accounts[0] })
      .then((results) => alert("workflowStatus changed"))
      .catch((err) => alert(err.message));
  };

  const setWorkflowStatus = async (e) => {
    if (e.target.tagName === "INPUT") {
      return;
    }
    let valeur = document.getElementById("setWorkflowStatus").value;
    if (valeur === "") {
      alert("Please enter a public address to register.");
      return;
    }
    await contract.methods
      .setWorkflowStatus(valeur)
      .send({ from: accounts[0] });
  };

  return (
    <div>
      <details>
        <summary>WorkflowStatus</summary>
        <div>
          <p>Move to the next workflow status</p>
          <button onClick={nextWorkflowStatus}>
            Switch to nextWorkflowStatus
          </button>
        </div>
        <br />
        <br />
        <div>
          <input
            type="address"
            defaultValue=""
            id="setWorkflowStatus"
            size="45"
          />
          <button onClick={setWorkflowStatus}>
            Set the new workflow status
          </button>
          <br />
          <br />
          <table className="eventTable">
            <thead>
              <tr>
                <th>workflow events list</th>
              </tr>
            </thead>
            <tbody>
              {listWorkflowEvent.map((item) => (
                <tr key={item.id}>
                  <td>Address {item.address}</td>

                  <td>New status {item.returnValues.newStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </div>
  );
}

export default WorkflowStatus;
