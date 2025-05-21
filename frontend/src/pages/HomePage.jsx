import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import {useProductStore} from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";
import Header from "../components/Header";
const categories = [
	{ href: "/jeans", name: "Jeans", imageUrl: "/jeans.webp" },
	{ href: "/t-shirts", name: "T-shirts", imageUrl: "/tshirt.jpg" },
	{ href: "/shoes", name: "Shoes", imageUrl: "/shoes.jfif" },
	{ href: "/glasses", name: "Glasses", imageUrl: "/glasses.webp" },
	{ href: "/jackets", name: "Jackets", imageUrl: "/jackets.webp" },
	{ href: "/suits", name: "Suits", imageUrl: "/suit.jfif" },
	{ href: "/bags", name: "Bags", imageUrl: "/bag.webp" },
  { href: "/watches", name: "Watches", imageUrl: "/watches.webp" },
];
const HomePage = () => {
	const { fetchFeaturedProducts, products, isLoading } = useProductStore();

	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);



  return (
    <div className="relative min-h-screen text-white overflow-hidden ">
      <Header />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">   
        <h1 className="text-center text-4xl sm:text-4xl font-bold text-[#2E8B57] mb-3 ">Explore Our Categories</h1>
         <p className="text-center text-xl text-[#556B2F] mb-12">
          Discover the latest trends in Diesel , Hugo & Boss fashion!</p> 

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map(category => (
              <CategoryItem
              category = {category}
              key={category.name}
              />
            ))}
          </div>
         {!isLoading && products.length > 0 && <FeaturedProducts featuredProducts={products} />}
          
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
