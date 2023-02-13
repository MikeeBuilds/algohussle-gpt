'use client'

import { Session } from "next-auth";
import { SessionProvider as Provider } from "next-auth/react";

export function SessionProvider() {
    return (
        <provider>
            {children}
        </provider>
    )
}
