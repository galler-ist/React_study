import CurrencyInput from "./CurrencyInput";
const Usd = ({ value, onChange }) => {
  return (
    <div>
      <CurrencyInput currency={"usd"} value={value} onChange={onChange} />
    </div>
  );
};

export default Usd;
