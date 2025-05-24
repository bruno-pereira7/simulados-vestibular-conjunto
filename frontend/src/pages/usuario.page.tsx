import { PencilIcon, TrashIcon } from "@phosphor-icons/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { InputComponent } from "../components/input.component";
import { SelectComponent } from "../components/select.component";
import { errorSwal } from "../services/api.service";
import { UsuarioService } from "../services/usuario.service";
import { Swal, Toast } from "../shared/swal.shared";
import { IUsuario, IUsuarioForm } from "../types/usuario.type";

export const UsuarioPage = () => {
  const [usuarios, setUsuarios] = useState<Array<IUsuario>>([]);
  const [showModal, setShowModal] = useState(false);
  const [reload, setReload] = useState(false);
  const [id, setId] = useState(0);
  const [form, setForm] = useState<IUsuarioForm>({
    email: "",
    id: 0,
    nome: "",
    perfil: "",
    senha: "",
    senhaConfirmacao: "",
  });

  const usuarioService = useMemo(() => new UsuarioService(), []);
  const DialogRef = useRef<HTMLDialogElement>(null);

  const openModal = (id: number) => {
    setId(id);

    usuarioService
      .findOne(id)
      .then(({ data: { dados } }) => {
        setShowModal(true);
        setForm({ ...dados, senhaConfirmacao: "", senha: "" });
      })
      .catch(errorSwal);
  };

  const deletar = (id: number) => {
    Swal.fire({
      title: "Deseja deletar este usuário?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sim",
      cancelButtonText: "Não",
    }).then(({ isConfirmed }) => {
      if (isConfirmed)
        usuarioService
          .delete(id)
          .then(({ data: { icone, mensagem, titulo } }) => {
            setReload((r) => !r);
            Toast.fire({
              title: titulo,
              text: mensagem,
              icon: icone,
            });
          })
          .catch(errorSwal);
    });
  };

  const closeModal = () => {
    setShowModal(false);
    setId(0);
    setForm({
      email: "",
      id: 0,
      nome: "",
      perfil: "",
      senha: "",
      senhaConfirmacao: "",
    });
  };

  const salvar = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (form.senha !== form.senhaConfirmacao) {
      Swal.fire({
        title: "Aviso!",
        text: "As senhas não coincidem.",
        icon: "warning",
      });
      return;
    }

    const data = {
      email: form.email,
      nome: form.nome,
      perfil: form.perfil || "Aluno",
      senha: form.senha,
    };

    if (id) {
      usuarioService
        .update(id, data)
        .then(({ data: { icone, mensagem, titulo } }) => {
          closeModal();
          setReload((r) => !r);
          Toast.fire({
            title: titulo,
            text: mensagem,
            icon: icone,
          });
        });
    } else {
      usuarioService
        .create(data)
        .then(({ data: { icone, mensagem, titulo } }) => {
          closeModal();
          setReload((r) => !r);
          Toast.fire({
            title: titulo,
            text: mensagem,
            icon: icone,
          });
        });
    }
  };

  useEffect(() => {
    if (showModal && !DialogRef?.current?.hasAttribute("open"))
      DialogRef?.current?.showModal();
    else DialogRef?.current?.close();
  }, [showModal]);

  useEffect(() => {
    usuarioService
      .findAll()
      .then(({ data: { dados } }) => {
        setUsuarios(dados);
      })
      .catch(errorSwal);
  }, [usuarioService, reload]);

  return (
    <div className="flex h-full w-full flex-col p-4">
      <header className="flex w-full items-center gap-4">
        <h1 className="w-full flex-1 p-4 text-3xl font-bold">Usuários</h1>
        <input
          type="search"
          className="rounded-sm border border-blue-500 p-2"
          placeholder="Pesquisar"
        />
        <button
          className="flex h-fit w-fit cursor-pointer items-center justify-center rounded-sm bg-blue-500 px-4 py-4 font-semibold text-white transition hover:bg-blue-600"
          onClick={() => setShowModal(true)}
        >
          Adicionar
        </button>
      </header>
      <div className="flex flex-col rounded p-4">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Perfil</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario, index) => (
              <tr key={index}>
                <td>{usuario.nome}</td>
                <td>{usuario.email}</td>
                <td>{usuario.perfil}</td>
                <td>
                  <button onClick={() => openModal(usuario?.id)}>
                    <PencilIcon size={20} />
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      deletar(usuario?.id);
                    }}
                  >
                    <TrashIcon size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <dialog
        ref={DialogRef}
        onCancel={closeModal}
        className={`fixed top-0 left-0 z-[13] h-screen w-screen flex-col items-center overflow-y-auto border-none bg-transparent p-4 backdrop:bg-black/50 ${
          showModal ? "flex" : ""
        }`}
      >
        <form
          onSubmit={salvar}
          className="w-fir z-[15] mx-0 my-auto flex h-fit flex-col items-center rounded-lg bg-[#f8f9ff] p-2 sm:p-12"
        >
          <h1 className="text-center text-[38px] leading-[140%] font-semibold">
            {id ? "Editar" : "Cadastrar"} Usuário
          </h1>
          <InputComponent
            placeholder="Nome"
            Label={"Nome"}
            name="nome"
            onChange={({ target: { name, value } }) => {
              setForm((prevData) => ({
                ...prevData,
                [name]: value,
              }));
            }}
            value={form.nome}
            required
          />
          <InputComponent
            placeholder="email@mail.com"
            Label={"E-mail"}
            name="email"
            onChange={({ target: { name, value } }) => {
              setForm((prevData) => ({
                ...prevData,
                [name]: value,
              }));
            }}
            value={form.email}
            required
            type="email"
            autoComplete="email"
          />
          <SelectComponent
            Label="Perfil"
            name="perfil"
            onChange={({ target: { name, value } }) => {
              setForm((prevData) => ({
                ...prevData,
                [name]: value,
              }));
            }}
            value={form.perfil}
            required
          >
            <option value="" disabled>
              Selecione o perfil
            </option>
            <option value="Aluno">Aluno</option>
            <option value="Administrador">Administrador</option>
          </SelectComponent>
          <InputComponent
            placeholder="********"
            Label={"Senha"}
            name="senha"
            onChange={({ target: { name, value } }) => {
              setForm((prevData) => ({
                ...prevData,
                [name]: value,
              }));
            }}
            value={form.senha}
            required
            type="password"
            autoComplete="new-password"
          />
          <InputComponent
            placeholder="********"
            Label={"Confirmar Senha"}
            name="confirmarSenha"
            onChange={({ target: { name, value } }) => {
              setForm((prevData) => ({
                ...prevData,
                [name]: value,
              }));
            }}
            value={form.senha}
            required
            type="password"
            autoComplete="new-password"
          />
          <div className="flex gap-4">
            <button
              className="w-fit rounded border bg-[#2B38D1] px-[34px] py-[15px] leading-[20px] font-semibold text-white hover:bg-white hover:text-[#0c2d57]"
              type="submit"
            >
              Salvar
            </button>
            <button
              type="button"
              className="w-fit rounded border bg-[#dd3842] px-[34px] py-[15px] leading-[20px] font-semibold text-white hover:bg-white hover:text-[#0c2d57]"
              onClick={closeModal}
            >
              Cancelar
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};
