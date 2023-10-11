"use client";

import Redirect from "@/shared/components/Redirect";

export default function RedirectToProfilePage() {
   return <Redirect matchPath="/dashboard" to="/dashboard/profile" />;
}
