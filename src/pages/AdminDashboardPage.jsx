import React, { useEffect } from "react";
import axios from "axios";
import MkdSDK from "../utils/MkdSDK";
import { AuthContext } from "../authContext";

const AdminDashboardPage = () => {
  const { dispatch } = React.useContext(AuthContext);

  let sdk = new MkdSDK();
  // const token = "cmVhY3R0YXNrOmQ5aGVkeWN5djZwN3p3OHhpMzR0OWJtdHNqc2lneTV0Nw==";
  // const config = {
  //   "x-project": token,
  //   headers: { Authorization: `Bearer ${token}` },
  // };
  const getVideos = async () => {
    try {
      const body = {
        payload: {},
        page: 1,
        limit: 10,
      };
      const res = await axios.post(
        `${sdk._baseurl}/v1/api/rest/video/PAGINATE`,
        body,
        sdk.getHeader()
      );
      console.log("video api response", res);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getVideos();
    console.log("oin useEfect");
  }, []);

  return (
    <>
      {/* className="w-full flex justify-center items-center text-7xl h-screen text-gray-700 bg-black " */}
      <div className="flex flex-col h-screen bg-black pr-20 pl-20 pt-10">
        <div className="flex flex-row  h-40 w-full justify-between">
          <div className=" font-black text-white text-5xl">APP</div>
          <div
            className=" flex justify-center items-center font-thin text-base text-black bg-parrot h-12 w-32 rounded-3xl"
            onClick={dispatch({ type: "Logout" })}
          >
            Logout
          </div>
        </div>
        <div className="flex flex-row  w-full justify-between">
          <div className="text-white text-4xl font-thin w-96 h-12">
            Today's leaderboard
          </div>
          <div className="bg-lightBlack flex flex-row items-center w-96 justify-between rounded-2xl p-4">
            <div className="text-white text-base font-thin">30 May 2022</div>
            <div className="text-black bg-parrot h-6 rounded-lg text-sm flex justify-center items-center font-thin p-1 w-40">
              SUBMISSION OPEN
            </div>
            <div className="text-white text-base font-thin">11:34</div>
          </div>
        </div>
        <table className="text-white text-left  ">
          <tr className="h-16">
            <th className="text-base font-thin">#</th>
            <th className="text-base font-thin ">Title</th>
            <th className="text-base font-thin "> Author</th>
            <th className="text-base font-thin">Most Liked</th>
          </tr>
          <tr className=" border-2 border-white rounded-lg h-24">
            <td className="text-sm font-thin">01</td>
            <td className="text-xl font-thin flex flex-row gap-x-4">
              <img
                src="https://picsum.photos/200/200"
                className="w-28 h-16 rounded-lg"
              />
              <span>
                Rune raises $100,000 for marketing through NFT butterflies sale
              </span>
            </td>
            <td className="text-base font-thin text-yellow">ninjanft</td>
            <td className="text-base font-thin">254</td>
          </tr>
          <tr className=" border-2 border-white rounded-lg h-24  ">
            <td className="text-sm font-thin">01</td>
            <td className="text-xl font-thin flex flex-row gap-x-4">
              <img
                src="https://picsum.photos/200/200"
                className="w-28 h-16 rounded-lg"
              />
              <span>
                Rune raises $100,000 for marketing through NFT butterflies sale
              </span>
            </td>
            <td className="text-base font-thin text-yellow">ninjanft</td>
            <td className="text-base font-thin">254</td>
          </tr>
          <tr className=" border-2 border-white rounded-lg h-24 ">
            <td className="text-sm font-thin">01</td>
            <td className="text-xl font-thin flex flex-row gap-x-4">
              <img
                src="https://picsum.photos/200/200"
                className="w-28 h-16 rounded-lg"
              />
              <span>
                Rune raises $100,000 for marketing through NFT butterflies sale
              </span>
            </td>
            <td className="text-base font-thin text-yellow">ninjanft</td>
            <td className="text-base font-thin">254</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default AdminDashboardPage;
