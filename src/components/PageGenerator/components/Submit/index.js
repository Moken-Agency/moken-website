import React from "react";
import Text from "../../../Text";

const Submit = ({ submit }) => {
  return (
    <>
      {submit ? (
        <Text
          type={"kSemiBold"}
          size={"1.5vw"}
          containerStyles={{
            marginBottom: 200,
            borderBottom: "1px solid black",
            width: "13.5vw",
            cursor: "pointer",
          }}
          textStyles={{ letterSpacing: 0.2, marginBottom: 10 }}
        >
          Submit your resume
        </Text>
      ) : null}
    </>
  );
};

export default Submit;
