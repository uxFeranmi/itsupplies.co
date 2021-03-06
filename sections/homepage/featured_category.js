import Link from 'next/link';
import {useState} from 'react';

import ProductCard from '../../components/product_card';
import './styles/featured_category.scss';         

const FeaturedCategory = (props)=> {
  const {ftCategory} = props;
  let [navListExpanded, setNavListExpanded] = useState(false);

  const toggleNavList = ()=> {
    setNavListExpanded(!navListExpanded);
  }

  return (
    <section className="featured-category">
      <div className="featured-category__header">
        <h2 className="featured-category__title">
          {ftCategory.obj.name}

        </h2>

        <div className="featured-category__nav">
          <button className="featured-category__nav__toggle-list"
            onClick={toggleNavList}
          >
            Types <i className={`fa ${navListExpanded ? 'fa-window-close' : 'fa-chevron-down'}`}></i>
          </button>
          <ul className={`${navListExpanded ? 'is-expanded' : ''}`}>
            {ftCategory.tree[2].map((subCat)=> {
              return (
                <li key={subCat[1]}><Link href="/categories/[slug_id]" as={subCat[1]}>
                  <a className="">
                    {subCat[0]}
                  </a>
                </Link></li>
              );
            })}
          </ul>
          <Link href="servers">
            <a className="featured-category__nav__see-all">
              See all &#10132;
            </a>
          </Link>
        </div>
      </div>

      <img src={ftCategory.obj.image.src}
        alt={ftCategory.obj.image.alt || `Image showing ${ftCategory.tree[0]}`}
        className="featured-category__image"
      />

      <ul className="featured-category__products">
        {ftCategory.products.map((product, index)=> {              
          return (
            <li className="featured-category__list-item" key={product.id}>
              <ProductCard product={product} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default FeaturedCategory;
