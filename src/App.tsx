import React, { useEffect, useState } from "react";
import Story from "@/components/Story";
import md5 from "md5";
import FadeIn from "./components/FadeIn";

const pwdMd5 = "1cba88c75ff377114e89c095ed63add2";

function App() {
  const [pass, setPass] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  useEffect(() => {
    setTimeout(() => {}, 2000);
  }, []);
  return (
    <>
      {pass ? (
        <>
          <FadeIn>
            <p className="p-c">缘起时相遇 缘尽时相离</p>
          </FadeIn>
          <Story />
        </>
      ) : (
        <>
          <FadeIn>
            <p className="p-c">缘起时相遇</p>
          </FadeIn>
          <FadeIn delay={1}>
            <p className="p-c">缘尽时相离</p>
          </FadeIn>
          <FadeIn delay={2}>
            <div style={{ textAlign: "center" }}>
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                style={{ width: 60, marginRight: 8 }}
                placeholder="密码"
              />
              <button
                onClick={(e) => {
                  if (md5(value) === pwdMd5) setPass(true);
                }}
              >
                查看
              </button>
            </div>
          </FadeIn>
        </>
      )}
    </>
  );
}

export default App;
