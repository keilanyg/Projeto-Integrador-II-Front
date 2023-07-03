'use client';

import React, { useState } from "react";

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap" style={{ color: "#4C3228", margin: "20px 90px" }}>
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "bg-orange-100"
                    : "bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Criar Categoria
              </a>
            </li>

            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "bg-orange-100"
                    : "bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Criar Autor
              </a>
            </li>

            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "bg-orange-100"
                    : "bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Criar Editora
              </a>
            </li>

            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 4
                    ? "bg-orange-100"
                    : "bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                Criar Livro
              </a>
            </li>

            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 5
                    ? "bg-orange-100"
                    : "bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#link5"
                role="tablist"
              >
                Empréstimo
              </a>
            </li>

            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 6
                    ? "bg-orange-100"
                    : "bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(6);
                }}
                data-toggle="tab"
                href="#link6"
                role="tablist"
              >
                Devolução
              </a>
            </li>

          </ul>

          <div className="relative flex flex-col min-w-0 break-words bg--orange-900 w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p>
                    <label className="block text-sm text-gray-500 dark:text-gray-500">Nome da Categoria</label>
                    <input type="text" className="block mt-2 w-6/12 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                  </p>
                </div>


                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                    <label className="block text-sm text-gray-500 dark:text-gray-500">Nome do(a) Autor(a)</label>
                    <input type="text" className="block mt-2 w-6/12 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                  </p>
                </div>


                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>
                    <label className="block text-sm text-gray-500 dark:text-gray-500">Nome da Editora</label>
                    <input type="text" className="block mt-2 w-6/12 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                  </p>
                </div>


                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                  <p>
                    <label className="block text-sm text-gray-500 dark:text-gray-500">Nome do Livro</label>
                    <input type="text" className="block mt-2 w-6/12 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                  </p>
                  <p>
                    <label className="block text-sm text-gray-500 dark:text-gray-500">Imagem</label>
                    <input type="file" className="block mt-2 w-6/12 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                  </p>
                  <p>
                    <label className="block text-sm text-gray-500 dark:text-gray-500">Data de Cadastro</label>
                    <input type="date" className="block mt-2 w-6/12 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                  </p>
                  <p>
                    <label className="block text-sm text-gray-500 dark:text-gray-500">Data de Lançamento</label>
                    <input type="date" className="block mt-2 w-6/12 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                  </p>
                  <p>
                    <label className="block text-sm text-gray-500 dark:text-gray-500">Autor</label>
                    <select className="block mt-2 w-6/12 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                      <option value=""></option>
                    </select>
                  </p>
                  <p>
                    <label className="block text-sm text-gray-500 dark:text-gray-500">Categoria</label>
                    <select className="block mt-2 w-6/12 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                      <option value=""></option>
                    </select>
                  </p>
                </div>


                <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                  <p>
                    <label className="block text-sm text-gray-500 dark:text-gray-500">Nome do Usuário</label>
                    <select className="block mt-2 w-6/12 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                      <option value=""></option>
                    </select>
                  </p>

                  <p>
                    <label className="block text-sm text-gray-500 dark:text-gray-500">Data de Empréstimo</label>
                    <input type="date" className="block mt-2 w-6/12 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                  </p>

                  <p>
                    <label className="block text-sm text-gray-500 dark:text-gray-500">Data de Devolução</label>
                    <input type="date" className="block mt-2 w-6/12 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                  </p>

                  <p>
                    <label className="block text-sm text-gray-500 dark:text-gray-500">Livro</label>
                    <select className="block mt-2 w-6/12 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                      <option value=""></option>
                    </select>
                  </p>
                </div>


                <div className={openTab === 6 ? "block" : "hidden"} id="link6">
                  <p>
                    <label className="block text-sm text-gray-500 dark:text-gray-500">Nome do Usuário</label>
                    <select className="block mt-2 w-6/12 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                      <option value=""></option>
                    </select>
                  </p>
                  <p>
                    <label className="block text-sm text-gray-500 dark:text-gray-500">Livro</label>
                    <select className="block mt-2 w-6/12 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                      <option value=""></option>
                    </select>
                  </p>
                  <p>
                    <label className="block text-sm text-gray-500 dark:text-gray-500">Avaliação</label>
                    <select className="block mt-2 w-6/12 rounded-lg border border-gray-200 bg-white py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                      <option value=""></option>
                    </select>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;