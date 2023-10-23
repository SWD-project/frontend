'use client'

import ProductCard7 from '@components/product/product-card-7'
import { GetCartDetail } from '@lib/model/cart/get-cart'
import { useDeleteCart } from 'hook/cart/use-delete-cart'
import { useRouter, useSearchParams } from 'next/navigation'
import { useSnackbar } from 'notistack'
import { useEffect, useState } from 'react'

export const ItemList = ({ itemList = [] }: { itemList?: GetCartDetail[] }) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [selectedItem, setSelectedItem] = useState<string[]>([])
  const { enqueueSnackbar } = useSnackbar()
  const handleDeleteCart = async (cartDetailId: string) => {
    try {
      const res = await useDeleteCart({ cartDetailId })
      enqueueSnackbar(res.message, { variant: res.status })
    } catch (error: any) {
      enqueueSnackbar(error.message, { variant: 'error' })
    } finally {
      router.push('/cart')
    }
  }
  const calculateTotal = () => {
    let total = 0
    itemList.forEach(value => {
      if (selectedItem.includes(value._id)) {
        total += value.courseId.price - (value.courseId.price * value.courseId.discountPercent) / 100
      }
    })
    return total
  }
  useEffect(() => {
    const url = new URLSearchParams(searchParams.toString())
    url.set('total', calculateTotal() + '')
    url.set('id', selectedItem.join("-"))
    router.push(`/cart?${url.toString()}`)
  }, [selectedItem])
  return (
    <>
      {itemList.map(item => (
        <ProductCard7
          key={item._id}
          item={item.courseId}
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
            handleDeleteCart(item._id)
          }}
        />
      ))}
    </>
  )
}
