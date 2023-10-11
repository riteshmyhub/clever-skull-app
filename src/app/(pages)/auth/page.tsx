"use client";
import Redirect from "@/shared/components/Redirect";

export default function RedirectToLoginPage() {
   return <Redirect matchPath="/auth" to="/auth/login" />;
}
