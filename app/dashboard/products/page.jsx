import React from 'react'
import styles from '@/app/ui/dashboard/products/products.module.css'
import Search from '@/app/ui/dashboard/search/search'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '@/app/ui/dashboard/pagination/pagination'

const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for Product..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add new</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Create At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/noproduct.png"
                  alt="avatar"
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                Iphone
              </div>
            </td>
            <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, non!</td>
            <td>$999</td>
            <td>13.02.2023</td>
            <td>72</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
                  <button className={`${styles.button} ${styles.viewButton}`}>
                    View
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.deleteButton}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination/>
    </div>
  )
}

export default ProductsPage