import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { goToHomePage } from "../../routes/coordinator";


export const login = (body, clear, toast, history ) => {
  axios
    .post(`${BASE_URL}/login`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token);
        toast({
          title: `Login feito com sucesso!`,
          variant: "left-accent",
          status: "success",
          description: `Seja Bem-Vindo(a) ${res.data.user.name}!`,
          duration: 2000,
          position: "bottom-right",
          isClosable: true,
        });
        clear()
        goToHomePage(history);
    })
    .catch((err) => {
      toast({
        title: `Erro ao fazer Login!`,
        description: `${err.response.data.message}!`,
        duration: 1000,
        status: "error",
        variant: "left-accent",
        position: "bottom-left",
        isClosable: true,
      });
    });
};
