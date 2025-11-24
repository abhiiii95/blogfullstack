import React from 'react';
import styles from "./homeDestinations.module.scss"
import Image from 'next/image';
import goa from "../../../../public/images/goa-1.jpg";
import jaipur from "../../../../public/images/jaipur-1.jpg";
import kerla from "../../../../public/images/kerla-1.jpg";
import leh from "../../../../public/images/leh-1.jpg";

const HomeDestinations = () => {
    const destData = [
        {
            id:1,
            image:goa,
            alt:"goa",
            title:"Goa",
            dest:"Goa"
        },
        {
            id:2,
            image:jaipur,
            alt:"jaipur",
            title:"Jaipur",
            dest:"Jaipur"
        },
        {
            id:1,
            image:kerla,
            alt:"kerla",
            title:"Kerla",
            dest:"Kerla"
        },
        {
            id:1,
            image:leh,
            alt:"leh",
            title:"Leh ladakh",
            dest:"Leh ladakh"
        },
    ]
  return (
    <section className={styles?.homeDestination}>
      <div className='container'>
        <h4 className={styles?.heading}>Most Popular <span>Destinations</span></h4>
        <div className={styles?.destWrapper}>
            {
                destData?.map((val,i)=>{
                    return(
                        <div className={styles?.destItem} key={i}>
                        <Image src={val?.image} alt={val?.alt} title={val?.title} quality={100} />
                        <p>{val?.dest}</p>
                    </div>
                    )
                })
            }
          
        </div>
      </div>
    </section>
  )
}

export default HomeDestinations
