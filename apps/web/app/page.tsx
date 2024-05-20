import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex gap-3 p-4">
      <Link href="/search" className="underline text-blue-400">
        Search Lead
      </Link>
      <Link href="/campaigns" className="underline text-blue-400">
        Campaigns
      </Link>
      {/* TODO: NEED TO ACTIVATE WATCHTOWER_CLEANUP IN THE SERVER */}
      <Link href="/admin/campaigns" className="underline text-blue-400">
        Admin
      </Link>
    </div>
  );
};

export default LoginPage;
