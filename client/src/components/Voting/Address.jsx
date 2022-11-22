
import useEth from "../../contexts/EthContext/useEth";


function Address() {
  const { state } = useEth();

  return (
    <details>
      <summary>Your address</summary>
      <p>{state.accounts}</p>
    </details>
  );
}
export default Address;
