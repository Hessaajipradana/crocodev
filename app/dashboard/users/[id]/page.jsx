import { updateUser } from "@/app/lib/actions";
import { fetchUser } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";
const SingleUserPage = async ({ params }) => {
  const { id } = params;
  const user = await fetchUser(id);
  console.log(user);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={user.img || "/noavatar.png"} alt="avatar" fill />
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" id="id" value={user.id} />
          <label className={styles.labelTop}>Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder={user.username}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder={user.email}
          />
          <label>Password</label>
          <input type="password" name="password" id="password" />
          <label>Phone</label>
          <input type="text" name="phone" id="phone" placeholder={user.phone} />
          <label>Address</label>
          <textarea
            type="text"
            name="address"
            id=" address"
            placeholder={user.address}
          />
          <label>IsAdmin</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected={user.isAdmin}>
              Yes
            </option>
            <option value={false} selected={!user.isAdmin}>
              No
            </option>
          </select>
          <label htmlFor="isActive">IsActive</label>
          <select name="isActive" id="isActive">
            <option value={true} selected={user.isActive}>
              Yes
            </option>
            <option value={false} selected={!user.isActive}>
              No
            </option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
