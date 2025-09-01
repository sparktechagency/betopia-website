import Products from "@/components/home/Products";
import Services from "@/components/home/Services";

export default function Home() {
  return (
      <div className="container"> 
        <h1>Welcome to the Home Page</h1>
        <Services/>
        <Products/>
      </div>
    );
}
