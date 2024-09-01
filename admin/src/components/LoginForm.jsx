import { TextInput, useMantineColorScheme } from "@mantine/core";
import { useInputState } from "@mantine/hooks";
import React, { useState } from "react";

import { useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import useStore from "../store";
import { PasswordStrength } from "./PasswordStrength";

const LoginForm = ({ toast, isSignin, setIsSignin, toggle, setFromClose }) => {
  const { colorScheme } = useMantineColorScheme();

  const theme = colorScheme === "dark";

  const { signin } = useStore();
  // const { data, isPanding, isSuccess, mutate } = useSignin(toast, toggle);
  const [strength, setStrength] = useState(0);
  const [passValue, setPassValue] = useInputState();
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      email: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const handleSubmit = async () => {};

  return (
    <form
      onSubmit={form.onSubmit(handleSubmit)}
      className="flex flex-col gap-4"
    >
      <TextInput
        withAsterisk
        label="Email"
        placeholder="your@email.com"
        key={form.key("email")}
        {...form.getInputProps("email")}
      />
      <PasswordStrength
        value={passValue}
        setValue={setPassValue}
        setStrength={setStrength}
        isSignin={true}
      />
    </form>
  );
};

export default LoginForm;
