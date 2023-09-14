import { ReadonlyURLSearchParams } from 'next/navigation';

export const createUrl = (pathname: string, params: URLSearchParams | ReadonlyURLSearchParams) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`;

  return `${pathname}${queryString}`;
};
function renderProductCount(
  page: number,
  perPageProduct: number,
  totalProduct: number
) {
  const startNumber = (page - 1) * perPageProduct
  let endNumber = page * perPageProduct

  if (endNumber > totalProduct) {
    endNumber = totalProduct
  }
  return `Showing ${startNumber - 1}-${endNumber} of ${totalProduct} products`
}

function calculateDiscount(price: number, discount: number) {
  const afterDiscount = Number((price - price * (discount / 100)).toFixed(2))
  return currency(afterDiscount)
}


function currency(price: number, fraction: number = 2) {
  // const { publicRuntimeConfig } = getConfig();
  const formatCurrency = new Intl.NumberFormat(undefined, {
    style: 'currency',
    // currency: publicRuntimeConfig.currency,
    currency: 'USD',
    maximumFractionDigits: fraction,
    minimumFractionDigits: fraction,
  })

  return formatCurrency.format(price)
}

export { calculateDiscount, currency, renderProductCount }
