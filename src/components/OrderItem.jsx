import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '../context/AppContext';
import close from '@icons/icon_close.png';
import styles from '@styles/OrderItem.module.scss';

const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  return (
    <div className={styles.OrderItem}>
      <figure>
        <Image src={product?.images[0]} alt={product?.title} width={75} height={75} />
      </figure>
      <p>{product?.title}</p>
      <p>${product?.price}</p>
      <Image className={styles['pointer more-clickable-area']} src={close} alt="close" onClick={() => handleRemove(product)} width={16} height={16} />
    </div>
  );
};

export default OrderItem;
