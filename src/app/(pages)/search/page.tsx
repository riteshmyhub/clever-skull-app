"use client";
import { useAuth } from "@/redux/AppProvider";

export default function SearchPage() {
   const user = useAuth();
   return <>{JSON.stringify(user)}</>;
}
