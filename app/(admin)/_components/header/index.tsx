import { Suspense } from "react";
import StickyHeader from "./sticky-header";
import SignOut from "./icon-logout";

export default async function Header() {
  return (
    <StickyHeader>
      <SignOut/>      
    </StickyHeader>
  )
}
