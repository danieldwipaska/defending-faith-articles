import Image from 'next/image';
import React from 'react';
import wallhaven5 from '@/public/img/wallhaven-5.png';

const ContributorProfile = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div>
        <Image src={wallhaven5} alt="wallhaven 5" className="rounded-md" />
      </div>
      <div className="col-span-2">
        <div className="mt-6">
          <p className="text-4xl">Daniel Kamasi</p>
        </div>
        <div className="flex mt-2">
          <p className="text-lg bg-black/10 px-2 py-1 rounded-md">Researcher</p>
        </div>
        <div className="mt-8">
          <p className="text-lg text-black/80 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi neque natus excepturi a, rem eos cumque temporibus explicabo? Enim quia perspiciatis delectus minima doloremque, id iste nostrum. Vitae, beatae sapiente! Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis facilis omnis unde deserunt sapiente expedita veniam quaerat? Neque laudantium voluptate nesciunt a magnam eum repellat illum facilis, nemo vero ab.
          </p>
        </div>
        <div className="personal mt-8">
          <div>
            <p className="text-lg text-black/50">Personal</p>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            <div>
              <p className="text-lg text-black/90">Join Date</p>
              <br />
              <br />
            </div>
            <div>
              <p className="text-lg text-black/90">Birthday</p>
              <br />
              <br />
            </div>
            <div>
              <p className="text-lg text-black/90">Languages</p>
              <br />
              <br />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            <div>
              <p className="text-lg text-black/90">Location</p>
              <br />
              <br />
            </div>
            <div>
              <p className="text-lg text-black/90">Hometown</p>
              <br />
              <br />
            </div>
            <div>
              <p className="text-lg text-black/90">Occupation</p>
              <br />
              <br />
            </div>
          </div>
        </div>
        <div className="publications mt-8">
          <div>
            <p className="text-lg text-black/50">Publications</p>
          </div>
          <div>
            <ul className="list-disc list-inside">
              <li className="my-2">01</li>
              <li className="my-2">01</li>
              <li className="my-2">01</li>
              <li className="my-2">01</li>
              <li className="my-2">01</li>
              <li className="my-2">01</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributorProfile;
