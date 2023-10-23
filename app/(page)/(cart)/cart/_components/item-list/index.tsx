'use client'

import ProductCard7 from '@components/product/product-card-7'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export const ItemList = ({ itemList }: { itemList: any[] }) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [selectedItem, setSelectedItem] = useState<string[]>([])
  const calculateTotal = () => {
    let total = 0
    itemList.forEach(value => {
      if (selectedItem.includes(value._id)) {
        total += value.price - (value.price * value.discountPercent) / 100
      }
    })
    return total
  }
  useEffect(() => {
    const url = new URLSearchParams(searchParams.toString())
    url.set('total', calculateTotal() + '')
    router.push(`/cart?${url.toString()}`)
  }, [selectedItem])
  return (
    <>
      {itemList.map((item: any) => (
        <ProductCard7
          key={item._id}
          item={item}
          isChecked={selectedItem.findIndex(value => value === item._id) !== -1}
          onCheck={() => {
            if (selectedItem.findIndex(value => value === item._id) === -1) {
              setSelectedItem([item._id, ...selectedItem])
            } else {
              const newSelectedItem = selectedItem.filter(value => value !== item._id)
              setSelectedItem(newSelectedItem)
            }
          }}
          onDelete={() => {
            router.push('/cart')
          }}
        />
      ))}
    </>
  )
}
