import type { NextPage } from 'next';
import FloatingButton from '../components/floating-button';
import Item from '../components/item';
import Layout from '../components/layout';
import useUser from '@libs/client/useUser';
import useSwr from 'swr';
import { Product } from '@prisma/client';

interface FavProduct extends Product {
  _count: { fav: number };
}

interface ProductResponse {
  ok: boolean;
  products: FavProduct[];
}
const Home: NextPage = () => {
  const { user, isLoading } = useUser();
  const { data } = useSwr<ProductResponse>('/api/products');
  return (
    <Layout title="홈" hasTabBar>
      <div className="flex flex-col space-y-5 divide-y">
        {data?.products?.map((product, i) => (
          <Item
            id={product.id}
            key={product.id}
            title={product.name}
            price={product.price}
            comments={1}
            hearts={product._count.fav}
          />
        ))}
        <FloatingButton href="/products/upload">
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Home;
