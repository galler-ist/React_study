import CurrencyInput from "./CurrencyInput";
const Krw = ({ value, onChange }) => {
  return (
    <div>
      <CurrencyInput currency={"krw"} value={value} onChange={onChange} />
    </div>
  );
};

export default Krw;
