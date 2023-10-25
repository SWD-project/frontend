'use client'

import ProductCard7 from '@components/product/product-card-7'
import { GetEnrolledCourseResponse } from '@lib/model/enrolledCourse/get-enrolled-course'


export const ItemList = ({ itemList = [] }: { itemList?: GetEnrolledCourseResponse[] }) => {
  console.log("hello", itemList[0])
  return (
    <>
      {itemList.map(item => (
        <ProductCard7
          key={item._id}
          item={item.courseId}
          isChecked={true}
          onCheck={() => {
          }}
          onDelete={() => {
          }}
          isEdit={false}
        />
      ))}
    </>
  )
}
