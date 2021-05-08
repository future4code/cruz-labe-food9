import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import {  goToAdressPageLogin } from "../../routes/coordinator";


export const signUp = (body, clear, toast, history, confirm, setConfirm) => {
  axios
    .post(`${BASE_URL}/signup`, body)
    .then((res) => {
      console.log(body.password)
      if(confirm === body.password){
        localStorage.setItem("token", res.data.token);
        toast({
          title: `Cadastro feito com sucesso!`,
          variant: "left-accent",
          status: "success",
          description: `Seja Bem-Vindo(a) ${res.data.user.name}!`,
          duration: 2000,
          position: "bottom-right",
          isClosable: true,
        });
        clear()
        setConfirm('')
        goToAdressPageLogin(history);
      } else {
        toast({
          title: `Erro ao confirmar senha`,
          variant: "left-accent",
          status: "error",
          description: `Os campos de senha precisam ser idênticos!`,
          duration: 1000,
          position: "bottom-left",
          isClosable: true,
        });
        setConfirm('')
        clear()
      }
    })
    .catch((err) => {
      toast({
        title: `Erro ao fazer Cadastro!`,
        description: `${err.response.data.message}!`,
        duration: 1000,
        status: "error",
        variant: "left-accent",
        position: "bottom-left",
        isClosable: true,
      });
    });
};
