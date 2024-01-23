import React from 'react';
import DashMenu from '@/components/DashMenu';
import CardSummary from '@/components/CardSummary';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <section>
      <div className="grid grid-cols-4 gap-2">
        <div>
          <DashMenu />
        </div>
        <div className="flex flex-col col-span-3">
          <div className="flex mt-32 px-5">
            <div className=" w-52 mr-2">
              <CardSummary highlight={true} title="Total Likes" data="121" />
            </div>
            <div className=" w-52 mx-2">
              <CardSummary highlight={false} title="Total Comments" data="32" />
            </div>
            <div className=" w-52 mx-2">
              <CardSummary highlight={false} title="Posts" data="3" />
            </div>
          </div>
          <div className="mt-6 px-5">
            <div className="border-4 rounded-t-lg px-4 py-2">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2">Title</div>
                <div>Status</div>
                <div>Like(s)</div>
                <div>Comment(s)</div>
                <div>Created At</div>
              </div>
            </div>
            <div className="border-b-4 border-x-4 px-4 py-2">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <div className="flex mt-1">
                    <div className="px-2 py-1 rounded-lg bg-yellow-200">Exegesis</div>
                    <div className="px-2 py-1 rounded-lg bg-purple-200 mx-2">Apologetics</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-green-600">Published</div>
                </div>
                <div className="flex items-center">
                  <div>28 Like(s)</div>
                </div>
                <div className="flex items-center">
                  <div>108 Comment(s)</div>
                </div>
                <div className="flex items-center">
                  <div>10/11/24 at 03.00</div>
                </div>
              </div>
            </div>
            <div className="border-b-4 border-x-4 px-4 py-2">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <div className="flex mt-1">
                    <div className="px-2 py-1 rounded-lg bg-yellow-200">Exegesis</div>
                    <div className="px-2 py-1 rounded-lg bg-purple-200 mx-2">Apologetics</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-green-600">Published</div>
                </div>
                <div className="flex items-center">
                  <div>28 Like(s)</div>
                </div>
                <div className="flex items-center">
                  <div>108 Comment(s)</div>
                </div>
                <div className="flex items-center">
                  <div>10/11/24 at 03.00</div>
                </div>
              </div>
            </div>
            <div className="border-b-4 border-x-4 px-4 py-2">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <div className="flex mt-1">
                    <div className="px-2 py-1 rounded-lg bg-yellow-200">Exegesis</div>
                    <div className="px-2 py-1 rounded-lg bg-purple-200 mx-2">Apologetics</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-green-600">Published</div>
                </div>
                <div className="flex items-center">
                  <div>28 Like(s)</div>
                </div>
                <div className="flex items-center">
                  <div>108 Comment(s)</div>
                </div>
                <div className="flex items-center">
                  <div>10/11/24 at 03.00</div>
                </div>
              </div>
            </div>
            <div className="border-b-4 border-x-4 px-4 py-2">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <div className="flex mt-1">
                    <div className="px-2 py-1 rounded-lg bg-yellow-200">Exegesis</div>
                    <div className="px-2 py-1 rounded-lg bg-purple-200 mx-2">Apologetics</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-green-600">Published</div>
                </div>
                <div className="flex items-center">
                  <div>28 Like(s)</div>
                </div>
                <div className="flex items-center">
                  <div>108 Comment(s)</div>
                </div>
                <div className="flex items-center">
                  <div>10/11/24 at 03.00</div>
                </div>
              </div>
            </div>
            <div className="border-b-4 border-x-4 px-4 py-2">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <div className="flex mt-1">
                    <div className="px-2 py-1 rounded-lg bg-yellow-200">Exegesis</div>
                    <div className="px-2 py-1 rounded-lg bg-purple-200 mx-2">Apologetics</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-green-600">Published</div>
                </div>
                <div className="flex items-center">
                  <div>28 Like(s)</div>
                </div>
                <div className="flex items-center">
                  <div>108 Comment(s)</div>
                </div>
                <div className="flex items-center">
                  <div>10/11/24 at 03.00</div>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-5">
              <div className="border-2 border-gray-400 rounded-md py-2 px-3">
                <div className="flex items-center">
                  <FaArrowLeft size={20} color="#000" />
                  <p className="ml-2">Previous</p>
                </div>
              </div>
              <div className="rounded-md py-2 px-3">
                <p>Page 1 of 3</p>
              </div>
              <div className="border-2 border-gray-400 rounded-md py-2 px-3">
                <div className="flex items-center">
                  <p className="mr-2">Next</p>
                  <FaArrowRight size={20} color="#000" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
