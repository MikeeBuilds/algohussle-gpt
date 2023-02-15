'use client'

import { useSession } from "next-auth/react";
import NewChat from "./NewChat";


function SideBar() {
  const { data: session } = useSession();

  return (
    <div className="p-2 flex flex-col h-screen ">
      <div className="flex-1">
        <div>

            {/* NewChat */}
            <NewChat />
            
            <div>
                {/* ModelSelection */}
            </div>

            {/* Map through the chatrows */}

        </div>
      </div>

      {session && <img src={session.user?.image!} alt="" />
      )}
    </div>
  )
}

export default SideBar;
