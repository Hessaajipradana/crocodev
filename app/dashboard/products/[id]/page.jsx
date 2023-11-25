import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";
const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noproduct.jpg" alt="avatar" fill />
        </div>
        Iphone
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label className={styles.labelTop}>Title</label>
          <input type="text" name="title" id="title" placeholder="John Doe" />
          <label>Price</label>
          <input
            type="number"
            name="price"
            id="price"
            placeholder="JohnDoe@example.com"
          />
          <label>Stock</label>
          <input type="number" name="stock" id="stock" placeholder="123" />
          <label>Color</label>
          <input type="text" name="color" id="color" placeholder="Green" />
          <label>Size</label>
          <textarea
            type="text"
            name="size"
            id=" size"
            placeholder="Temanggung"
          />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label htmlFor="description">Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder="description"
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
