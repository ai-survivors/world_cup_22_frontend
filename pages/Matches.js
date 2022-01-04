import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Table from "../components/Table";
import Nav from "../components/Nav";

import useMatch from "../hooks/useMatch";

export default function Matches() {
  const { matchesResource, loading, createMatch, deleteMatch, updateMatch } =
    useMatch();

  const [Matches, setMatches] = useState([]);

  useEffect(() => {
    if (matchesResource) {
      setMatches(matchesResource);
    }
  }, [matchesResource, Matches]);

  return (
    <>
      <Nav />

      <div>
        <div>
          <section class=" w-full h-screen bg-cover  bg-white  justify-center bg-[url('https://oddsmatrix.com/wp-content/uploads/2021/07/Player-3-1.png')]">
            <section>
              <div className="container text-center break-normal md:pt-32">
                <p className="float-left pt-80 pl-10 font-bold text-black md:text-6xl">
                  World Cup Qatar 2022™
                </p>
                <p className="pt-3 text-xl text-white md:text-2xl"></p>
              </div>
            </section>
          </section>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4">
        {Matches.map((match) => {
          return (
            <div className=" px-20 ">
              <div class=" mx-auto bg-white shadow-lg rounded-sm border border-green-200 m-5">
                <header class="px-5 py-4 border-b border-green-100">
                  <h2 class="font-semibold text-gray-800">
                    {match.match_date}
                  </h2>
                </header>
                <div class="p-3">
                  <div class="overflow-x-auto">
                    <Table
                      match={match}
                      Matches={Matches}
                      updateMatch={updateMatch}
                    ></Table>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Footer></Footer>
    </>
  );
}
