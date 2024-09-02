import { useState } from "react";

const InnerChild = () => {
    const [name, setName] = useState('Umair');
  return (
    <div>InnerChild also created by {name}</div>
  )
}

export default InnerChild