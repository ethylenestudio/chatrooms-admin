import { Session } from '@/constants/Types';
import { useGetOrganizationById } from '@/hooks/queries/useGetOrganizationById';
import { useRouter } from 'next/router';
import React from 'react';

const SessionItem = ({ session }: { session: Session }) => {
  const { data: organization } = useGetOrganizationById(
    String(session.organization_id),
  );
  const router = useRouter();

  return (
    <li
      key={session.id}
      className="flex flex-wrap flex-1 flex-col md:flex-row items-center justify-between gap-x-6 gap-y-4 px-2 py-5 sm:flex-nowrap"
    >
      <div className="md:flex md:items-center md:gap-x-4 text-center md:text-start">
        <p className="font-semibold leading-6 min-w-[240px] text-gray-900">
          {session.name}
        </p>
        <div className="justify-center mt-1 md:mt-0 flex items-center md:gap-x-2 text-sm leading-5 text-gray-500 md:border-l-2 md:pl-4 text-center">
          <svg viewBox="0 0 2 2" className="h-1 w-1 fill-current"></svg>
          <p className="">{organization?.data.name}</p>
        </div>
      </div>
      <div className="flex w-full flex-none justify-center gap-x-1 sm:w-auto">
        <button
          onClick={() => router.push('/sessions/key/' + session.id)}
          className="px-3 py-2 bg-slate-900 text-slate-200 rounded-md hover:scale-[1.02] transition-all min-w-[75px]"
        >
          Start
        </button>
      </div>
    </li>
  );
};

export default SessionItem;
