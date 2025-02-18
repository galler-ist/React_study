import { useState, useRef } from "react";
const Register = () => {
  //   const [name, setName] = useState("");
  //   const [birth, setBirth] = useState("");
  //   const [country, setCountry] = useState("");
  //   const [bio, setBio] = useState("");

  const countRef = useRef(0);
  const inputRef = useRef();
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const onChange = (e) => {
    // console.log(e.target.name, e.target.value);
    countRef.current++;
    console.log(countRef.current);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 DOM 요소 포커스
      inputRef.current.focus();
    }
  };
  //   const onChangeName = (e) => {
  //     // setName(e.target.value);
  //     setInput({ ...input, name: e.target.value });
  //   };

  //   const onChangeBirth = (e) => {
  //     setInput({ ...input, birth: e.target.value });
  //   };

  //   const onChangeCountry = (e) => {
  //     setInput({ ...input, country: e.target.value });
  //   };

  //   const onChangeBio = (e) => {
  //     setInput({ ...input, bio: e.target.value });
  //   };

  return (
    <div>
      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
        {input.name}
      </div>
      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        />
        {input.birth}
      </div>

      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value="">===</option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
        {input.country}
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
        {input.bio}
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
