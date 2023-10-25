'use client'

import ProductCard7 from '@components/product/product-card-7'
import { GetCartDetail } from '@lib/model/cart/get-cart'
import { useDeleteCart } from 'hook/cart/use-delete-cart'
import { useParams, useRouter } from 'next/navigation'
import { useSnackbar } from 'notistack'

const getPage = (params: URLSearchParams) => {
  return {
    id: params.get('id') !== null ? (params.get('id') as string) : null
  }
}

export const ItemList = ({ itemList = [] }: { itemList?: GetCartDetail[] }) => {
  const router = useRouter()
  const params = decodeURIComponent(useParams().id as string)
  const { id } = getPage(new URLSearchParams(params))
  
  let selectedItem = id !== null ? id.split("-") : []
  const { enqueueSnackbar } = useSnackbar()
  const handleDeleteCart = async (cartDetailId: string) => {
    try {
      const res = await useDeleteCart({ cartDetailId })
      enqueueSnackbar(res.message, { variant: res.status })
    } catch (error: any) {
      enqueueSnackbar(error.message, { variant: 'error' })
    } finally {
      router.push('/cart/total=0')
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
  const handleChange = () => {
    const url = new URLSearchParams()
    url.set('total', calculateTotal() + '')
    url.set('id', selectedItem.join('-'))
    router.push(`/cart/${url.toString()}`)
  }
  return (
    <>
      {itemList.map(item => (
        <ProductCard7
          key={item._id}
          item={item.courseId}
          isChecked={selectedItem.findIndex(value => value === item._id) !== -1}
          onCheck={() => {
            if (selectedItem.findIndex(value => value === item._id) === -1) {
              selectedItem = ([item._id, ...selectedItem])
              handleChange()
            } else {
              const newSelectedItem = selectedItem.filter(value => value !== item._id)
              selectedItem = (newSelectedItem)
              handleChange()
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
