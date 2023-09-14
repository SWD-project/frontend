import StickyHeader from "./sticky-header";
import CustomerIcon from "./customer-icon";
import { Suspense } from "react";
import CartIcon from "./cart-icon";

export default async function Header() {
  return (
    <StickyHeader>
      <Suspense fallback={null}>
        <CustomerIcon />
        <CartIcon/>
      </Suspense>
    </StickyHeader>
  )
}
